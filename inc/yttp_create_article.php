<?php

function yttp_creatArticle() {
    
    if ( ! wp_verify_nonce( $_POST['nonce'], 'yttp-nonce' ) ) {
        die ( 'Busted!');
    }
    
    wp_get_current_user();

    
    

    $id = $_POST['id'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $thumbnail = 'abc';

    $pageTemplate = get_option('yttpPageTemplate');
    $postRegex = stripslashes(get_option('yttpPostRegex'));
    $postTemplate = stripslashes(get_option('yttpPostTemplate'));

    if (!$postRegex) $postRegex = '/(.*)/misu';
    if (!$postTemplate) $postTemplate = '__GROUP[0]__';
    
    $content = $postTemplate;
    @preg_match_all($postRegex, $description, $matches, PREG_SET_ORDER, 0);
    if ($matches && sizeof($matches) > 0) {
        if (sizeof($matches[0]) > 1) $content = str_replace("__GROUP[0]__", $matches[0][1], $content);
        if (sizeof($matches[0]) > 2) $content = str_replace("__GROUP[1]__", $matches[0][2], $content);
        if (sizeof($matches[0]) > 3) $content = str_replace("__GROUP[2]__", $matches[0][3], $content);
    } else {
        $content = str_replace("__GROUP[0]__", $description, $content);
    }
    $content = str_replace("__VIDEO_ID__", $id, $content);

    $new_post = array(
        'post_title'   => $title,
        'post_content' => $content,
        'post_status'  => 'draft',
        'post_author'  => get_current_user_id(),
        'post_type'    => 'post'
    );

    $post_id = wp_insert_post($new_post);
    add_post_meta($post_id, 'yytp_id', $id, false);
    
    if ($pageTemplate) {
        $new_post['page_template'] = $pageTemplate;
        update_post_meta($post_id, '_wp_page_template', $pageTemplate);
    }

    $attachment_id = null;
    if ($thumbnail) {
        $attachment_id = rudr_upload_file_by_url($thumbnail, $post_id, $id);
        if ($attachment_id) {
            set_post_thumbnail($post_id, $attachment_id); 
        }
    }

    $result = array(
        'success' => true,
        'post' => $new_post,
        'post_id' => $post_id,
        'attachment_id' => $attachment_id
    );

    error_log('before_hook');
    error_log(print_r($result, true));
    
    do_action('yttp_after_post_creation', $result);

    echo json_encode($result);
    wp_die();
}


?>