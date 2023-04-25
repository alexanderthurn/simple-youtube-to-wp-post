<?php

function yttp_text_to_html($text) {
    $htmlContent = nl2br(yttp_italic(yttp_strikethrough(yttp_bold(yttp_hyperlinksAnchored($text)))));
    return wp_kses($htmlContent, array(
        'a'      => array(
            'href'  => array(),
            'title' => array(),
        ),
        'br'     => array(),
        'i'     => array(),
        's' => array(),
    ));
}

/* 
https://stackoverflow.com/questions/1959062/how-to-add-anchor-tag-to-a-url-from-text-input
*/

function yttp_hyperlinksAnchored($text) {
    return preg_replace('@(http)?(s)?(://)?(([a-zA-Z])([-\w]+\.)+([^\s\.]+[^\s]*)+[^,.\s])@', '<a target="ref" href="http$2://$4">$1$2$3$4</a>', $text);
}

function yttp_bold($text) {
    return preg_replace('@\*(\w*)\*(\s)@', '<b>$1</b>$2', $text);
}

function yttp_strikethrough($text) {
    return preg_replace('@\-(\w*)\-(\s)@', '<s>$1</s>$2', $text);
}

function yttp_italic($text) {
    return preg_replace('@\_(\w*)\_(\s)@', '<i>$1</i>$2', $text);
}

function yttp_creatArticle() {
    
    $result = array(
        'success' => false,
    );

    if ( ! wp_verify_nonce( $_POST['nonce'], 'yttp-nonce' ) ) {
        $result['error'] = 'internal error';
        echo wp_json_encode($result);      
        die;
    }
    
    $id = sanitize_text_field($_POST['id']);
    $title = sanitize_text_field($_POST['title']);
    $description = sanitize_textarea_field($_POST['description']);
    $thumbnail = sanitize_url($_POST['thumbnail']);

    $pageTemplate = sanitize_file_name(get_option('yttpPageTemplate'));
    $postRegex = html_entity_decode(stripslashes(get_option('yttpPostRegex')), ENT_COMPAT, "UTF-8");
    $postTemplate = html_entity_decode(stripslashes(get_option('yttpPostTemplate')), ENT_COMPAT, "UTF-8");

    if (!$postRegex) $postRegex = '/(.*)/misu';
    if (!$postTemplate) $postTemplate = '__GROUP[0]__';
    
    $content = $postTemplate;
    @preg_match_all($postRegex, $description, $matches, PREG_SET_ORDER, 0);
    if ($matches && sizeof($matches) > 0) {
        if (sizeof($matches[0]) > 1) $content = str_replace("__GROUP[0]__", yttp_text_to_html($matches[0][1]), $content);
        if (sizeof($matches[0]) > 2) $content = str_replace("__GROUP[1]__", yttp_text_to_html($matches[0][2]), $content);
        if (sizeof($matches[0]) > 3) $content = str_replace("__GROUP[2]__", yttp_text_to_html($matches[0][3]), $content);
    } else {
        $content = str_replace("__GROUP[0]__", $description, $content);
    }
    $content = str_replace("__VIDEO_ID__", $id, $content);


    $new_post = array(
        'post_title'   => sanitize_text_field($title),
        'post_content' => wp_kses_post($content),
        'post_status'  => 'draft',
        'post_author'  => get_current_user_id(),
        'post_type'    => 'post'
    );

    $post_id = wp_insert_post($new_post);
    $result['post_id'] = $post_id;

    if( is_wp_error( $post_id ) ) {
        $result['error'] = 'unable to create post';
        echo wp_json_encode($result);      
        die;
    }

    add_post_meta($post_id, 'yytp_id', $id, false);
    
    if ($pageTemplate) {
        $new_post['page_template'] = $pageTemplate;
        update_post_meta($post_id, '_wp_page_template', $pageTemplate);
    }

    $attachment_id = null;
    if ($thumbnail) {
        $attachment_id = yttp_rudr_upload_file_by_url($thumbnail, $post_id, $id);
        if ($attachment_id) {
            set_post_thumbnail($post_id, $attachment_id);   
        }
    }
    $result['attachment_id'] = $attachment_id;
    $result['success'] = true;
    $result['post'] = $new_post;

    do_action('yttp_after_post_creation', $result);

    echo wp_json_encode($result);
    wp_die();
}


?>