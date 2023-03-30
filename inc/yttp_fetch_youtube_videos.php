<?php

function enrichResultWithExistingPosts($result) {
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
	error_log('Hallo from yttp_fetchYoutubeVideos');
	
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

	
	if (FALSE) {
		
		if ($VIDEO_ID) {
			//echo '{ "ok": "wg", "title" : "BlueWallet entfernt Lightning Funktion zum 30.04.2023 - Guthaben in Gefahr? Ich buche ab", "post_id" :"22", "attachment_id" :"23"}';
			echo '{"videos":[{"id":"byTv4jHbaeA","title":"2BlueWallet entfernt Lightning Funktion zum 30.04.2023 - Guthaben in Gefahr? Ich buche ab","description":"Vor einiger Zeit habe ich \u00fcber die Bluewallet, einer Open-Source Wallet f\u00fcr Bitcoin und auch Bitcoin-Lightning berichtet. \r\nLeider wird zum 30.04.2023 die Lightning Funktion ohne Custom Lightning Node nicht mehr unterst\u00fctzt. Die normale Wallet funktioniert weiterhin.\r\n\r\nAuf dem Blog des Anbieters wird darauf hingewiesen, dass man als Lightning-User umgehend handeln muss. Leider geht das umbuchen auf die normale BTC-Wallet nicht mit einem Klick. \r\nIch habe daher einen Anbieter namens Boltz zum Umwandeln ausprobiert und konnte erfolgreich umbuchen. In diesem Video zeige ich dir wie ich es gemacht habe.\r\n\n0:00 Intro\r\n1:55 Blog-Artikel\r\n3:41 Boltz\r\n4:28 Step-By-Step \r\n6:25 Kosten\r\n\r\n\r\n\u25ba\u25ba\u25ba Links von Drittanbietern: \r\n\r\nKeine Haftung, du bist f\u00fcr dein Geld selbst verantwortlich !!!\r\n\r\nBlue Wallet Blog Eintrag: https:\/\/bluewallet.io\/sunsetting-lndhub\/\r\nBoltz: https:\/\/boltz.exchange\/\r\nReddit Links: https:\/\/www.reddit.com\/r\/bluewallet\/comments\/11awljs\/transferring_sats_from_lightning\/\r\n\r\n\r\n\u00dcber die Werteherren:\r\n\r\nWir testen Systeme wie Cannergrow und diskutieren die Vor- und Nachteile. Unser Ziel ist die finanzielle Unabh\u00e4ngigkeit unserer Firma und daher reden wir ganz offen \u00fcber Gefahren, begangene Fehler und auch Erfolge.\r\n\r\n\u25ba\u25ba\u25ba Unsere Webseite: https:\/\/werteherren.de\r\n\r\nWeitere spannende Infos findest du auf unserer Webseite.\r\n\r\n\u25ba\u25ba\u25ba Telegram-Kanal: Link: https:\/\/t.me\/joinchat\/9NrEGHAkWRY0ZTgy\r\n\r\nKomm zu uns in den Telegram-Kanal und besprich mit uns interessante Themen rund um Bitcoin, Cannergrow, Aktien und co.\r\n\r\n\u25ba\u25ba\u25ba \u00dcber unsere GmbH : https:\/\/frontendsolutions.de\r\n\r\nAls Gesch\u00e4ftsf\u00fchrer einer GmbH haben wir erkannt, dass wir mit Bargeld auf dem Firmenkonto nicht weit kommen werden. Wir investieren daher das Geld in diverse Anlageformen, sichern uns damit gegen die Inflation ab und verdienen zus\u00e4tzlich noch ein finanzielles \"Zubrot\", durch das wir in Zukunft s\u00e4mtliche laufenden Kosten wie Buchhaltung usw. passiv bezahlen k\u00f6nnen.\r\n\r\n\u25ba\u25ba\u25ba Weitere interessante Links (Diese sind von unseren Mitgliedern, wir von den Werteherren \u00fcbernehmen daher keine Haftung f\u00fcr die Inhalte)\r\ns\r\nInstagram von Ballerfritz: https:\/\/www.instagram.com\/cbd_swiss_grow\/","thumbnail":"https:\/\/i.ytimg.com\/vi\/byTv4jHbaeA\/maxresdefault.jpg","filenameLocal":"byTv4jHbaeA_maxresdefault.jpg"}],"url":"https:\/\/www.googleapis.com\/youtube\/v3\/videos?part=snippet&id=byTv4jHbaeA&key=guard","VIDEO_ID":"byTv4jHbaeA"}';
			wp_die();
		} else {
			$result = json_decode('{"videos":[{"id":"byTv4jHbaeA","title":"BlueWallet entfernt Lightning Funktion zum 30.04.2023 - Guthaben in Gefahr? Ich buche ab","description":"Vor einiger Zeit habe ich \u00fcber die Bluewallet, einer Open-Source Wallet f\u00fcr Bitcoin und auch Bitcoin-Lightning berichtet.","thumbnail":null},{"id":"dDtCKx1ZtcI","title":"Besser als Lotto und komplett KOSTENLOS - 12.000\u20ac gewinnen mit mein-grundeinkommen.de","description":"Einfach 12.000 Euro geschenkt bekommen \u2013 ohne jeglichen Einsatz und Zeitaufwand. Klingt zu sch\u00f6n, um wahr zu sein? Nein ...","thumbnail":null},{"id":"_cxKSFOTx7M","title":"News von Cannergrow im Januar und Anfang Februar 2023 - Reaction Video","description":"GMP, THC, Ende des Stellplatz-Verkaufs sowie B2C-Firma in Solothurn. Es gibt interessante Neuigkeiten. Telegram Cannergrow: ...","thumbnail":null},{"id":"R3SWDjsSdw0","title":"Cannergrow - Wieviel kostet eine Pflanze am Marktplatz - 13.01.2023","description":"F\u00fcr wieviel Euro kann man eine Pflanze am Marktplatz kaufen oder verkaufen? Wir haben es uns angeschaut. \u25bb\u25bb\u25bb Blog Artikel ...","thumbnail":null},{"id":"JccZjeRBdaM","title":"Jahresr\u00fcckblick 2022 und Investment-Tipp f\u00fcr 2023","description":"2022 lief nicht alles gut. F\u00fcr 2023 habe ich daher einen unfehlbaren Investment-Tipp :-) Guten Rutsch ins neue Jahr! \u00dcber die ...","thumbnail":null}],"url":"https:\/\/www.googleapis.com\/youtube\/v3\/search?part=snippet&channelId=UCzN_yRlMz4pyW-LJZJrxTRw&maxResults=5&order=date&type=video&key=guard","VIDEO_ID":null}', true);
			$result = enrichResultWithExistingPosts($result);
			echo json_encode($result, JSON_PRETTY_PRINT);
			wp_die(); 
		}
		return;
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
		$thumbnail = $item["snippet"]["thumbnails"]["maxres"]["url"];
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

	$result = enrichResultWithExistingPosts($result);
	echo json_encode($result, JSON_PRETTY_PRINT);
	wp_die();
}


?>