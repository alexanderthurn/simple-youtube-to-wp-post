<?php

function yttp_options() {
    $result = array('ok' => 'yes');

    if ( ! wp_verify_nonce( $_POST['nonce'], 'yttp-nonce' ) ) {
        die ( 'Busted!');
    }

    if (isset($_GET['yttpYoutubeApiKey']) && isset($_GET['yttpYoutubeChannelId'])) {
		update_option('yttpYoutubeApiKey', sanitize_text_field($_GET['yttpYoutubeApiKey']));
		update_option('yttpYoutubeChannelId', sanitize_text_field($_GET['yttpYoutubeChannelId']));
        update_option('yttpPostTemplate', $_GET['yttpPostTemplate']);
		update_option('yttpPostRegex', $_GET['yttpPostRegex']);
		update_option('yttpPageTemplate', $_GET['yttpPageTemplate']);
	}
    
	echo json_encode($result, JSON_PRETTY_PRINT);
	wp_die();
}

?>