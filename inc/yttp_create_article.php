<?php

function yttp_creatArticle() {
    
    if ( ! wp_verify_nonce( $_POST['nonce'], 'yttp-nonce' ) ) {
        die ( 'Busted!');
    }
    
    wp_get_current_user();
    
    $id = $_POST['id'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $thumbnail = $_POST['thumbnail'];

    $new_post = array(
        'post_title'   => $title,
        'post_content' => explode("Über die Werteherren:", $description)[0] . '<br /><iframe width="640" height="430" src="https://www.youtube.com/embed/' .$id.'"></iframe>',
        'post_status'  => 'draft',
        'post_author'  => get_current_user_id(),
        'post_type'    => 'post'
    );

    $post_id = wp_insert_post($new_post);
    add_post_meta($post_id, 'yytp_id', $id, false);
    
    $attachment_id = rudr_upload_file_by_url($thumbnail, $post_id, $id);
    set_post_thumbnail($post_id, $attachment_id);

    echo '{ "ok": "wg", "title" : "'. $title . '", "post_id" :"'.$post_id.'", "attachment_id" :"'.$attachment_id.'"}';
    wp_die();
}


?>