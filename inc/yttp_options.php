<?php

function yttp_options() {
    $result = array('ok' => 'yes');

    if ( ! wp_verify_nonce( $_POST['nonce'], 'yttp-nonce' ) ) {
        die ( 'Busted!');
    }

    if (isset($_GET['yttpYoutubeApiKey']) && isset($_GET['yttpYoutubeChannelId'])) {
		update_option('yttpYoutubeApiKey', sanitize_text_field($_GET['yttpYoutubeApiKey']));
		update_option('yttpYoutubeChannelId', sanitize_text_field($_GET['yttpYoutubeChannelId']));
        update_option('yttpPostTemplate',wp_kses_post(htmlentities($_GET['yttpPostTemplate'], ENT_COMPAT, "UTF-I")));
		update_option('yttpPostRegex', wp_kses_post(htmlentities($_GET['yttpPostRegex'], ENT_COMPAT, "UTF-I")));
		update_option('yttpPageTemplate', sanitize_file_name($_GET['yttpPageTemplate']));
	}
    
	echo json_encode($result, JSON_PRETTY_PRINT);
	wp_die();
}

?>