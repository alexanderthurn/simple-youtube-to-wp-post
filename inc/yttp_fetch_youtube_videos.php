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
	$YOUR_API_KEY = wp_specialchars_decode(wp_strip_all_tags(get_option('yttpYoutubeApiKey')));
	$CHANNEL_ID = wp_specialchars_decode(wp_strip_all_tags(get_option('yttpYoutubeChannelId')));
	$VIDEO_ID = null;

	if ( ! wp_verify_nonce( $_POST['nonce'], 'yttp-nonce' ) ) {
        die ( 'Busted!');
    }

	if (isset($_GET['VIDEO_ID'])) {
		$VIDEO_ID = wp_specialchars_decode(wp_strip_all_tags($_GET['VIDEO_ID']));
	}

	$url = sanitize_url("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId={$CHANNEL_ID}&maxResults=5&order=date&key={$YOUR_API_KEY}");

	if ($VIDEO_ID) {
		$url = sanitize_url("https://www.googleapis.com/youtube/v3/videos?part=snippet&id={$VIDEO_ID}&key={$YOUR_API_KEY}");
	}
	 
	$response = wp_remote_get( $url);
    $responseBody = wp_remote_retrieve_body( $response );
    $data = json_decode( $responseBody, true );
	$result = array( "videos" => array(), "url" => $url, "VIDEO_ID" => esc_html($VIDEO_ID));

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

		$entry = array("id" => esc_html($id), "title" => esc_html($title), "description" => esc_html($description), "thumbnail" => esc_url($thumbnail), "raw" => $item);

		array_push($result["videos"], $entry);
	}

	$result = yttp_enrichResultWithExistingPosts($result);
	echo wp_json_encode($result, JSON_PRETTY_PRINT);
	wp_die();
}


?>