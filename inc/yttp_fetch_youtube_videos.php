<?php

function yttp_enrichResultWithExistingPosts($result) {
	$youtubeIdList = array();
	$videos = $result['videos'];
	$postsWithYttpMeta = new WP_Query(array(
        'posts_per_page' => -1,
        'post_type' => 'post',
        'meta_query' => array(
            array(
                'key' => 'yytp_id',
                'compare' => 'IN',
                'value' => $youtubeIdList
            )
        )
    ));

	
	while($postsWithYttpMeta->have_posts()) {
		$postsWithYttpMeta->the_post(); 
		
		
		$postId = get_the_ID();
		$videoId = get_post_meta( $postId, 'yytp_id', true );

		foreach($videos as $key => $video) {
			$youtubeIdList[] = $video["id"];
			if ($video["id"] == $videoId) {
				$video["post_id"] = $postId;
			}
			$videos[$key] = $video;
		}

	}
	
	wp_reset_postdata();


	$result['videos'] = $videos;

	return $result;
}

function yttp_fetchYoutubeVideos() {
	$YOUR_API_KEY = get_option('yttpYoutubeApiKey');
	$CHANNEL_ID = get_option('yttpYoutubeChannelId');
	$VIDEO_ID = null;

	if ( ! wp_verify_nonce( $_POST['nonce'], 'yttp-nonce' ) ) {
        die ( 'Busted!');
    }


	if (isset($_GET['VIDEO_ID'])) {
		$VIDEO_ID = $_GET['VIDEO_ID'];
	}

	$url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId={$CHANNEL_ID}&maxResults=5&order=date&key={$YOUR_API_KEY}";

	if ($VIDEO_ID) {
		$url = "https://www.googleapis.com/youtube/v3/videos?part=snippet&id={$VIDEO_ID}&key={$YOUR_API_KEY}";
	}

    $content = file_get_contents($url);
	$result = array( "videos" => array(), "url" => $url, "VIDEO_ID" => $VIDEO_ID);
	$data = json_decode($content, true);
	
	foreach ($data["items"] as $item) {
		$id = "";
		if ($VIDEO_ID) {
			$id = $item["id"];
		} else {
			$id = $item["id"]["videoId"];
		}
		

		$title = $item["snippet"]["title"];
		$description = $item["snippet"]["description"];
		$thumbnail = $item["snippet"]["thumbnails"]["default"]["url"];
		if (isset($item["snippet"]["thumbnails"]["maxres"])) {
			$thumbnail = $item["snippet"]["thumbnails"]["maxres"]["url"];
		}
		$entry = array("id" => $id, "title" => $title, "description" => $description, "thumbnail" => $thumbnail, "raw" => $item);

		if ($VIDEO_ID) {
			if ($id !== $VIDEO_ID) {
				continue;
			} else {
				$imageFilenameLocal = $id . '_' . basename($thumbnail);
				$image = file_get_contents($thumbnail);
				file_put_contents($imageFilenameLocal, $image);
				$entry["filenameLocal"] = $imageFilenameLocal;
				unlink($imageFilenameLocal);
			}

		} 

		
		
		array_push($result["videos"], $entry);
	}

	$result = yttp_enrichResultWithExistingPosts($result);
	echo json_encode($result, JSON_PRETTY_PRINT);
	wp_die();
}


?>