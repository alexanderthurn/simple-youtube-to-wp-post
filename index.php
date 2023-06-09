<?php
/*
	Plugin Name: Simple Youtube To WP Post
	Description: Create a post from a youtube video
	Author: chefmangoo
	Author URI: https://profiles.wordpress.org/chefmangoo/
	Version: 1.1.2
	Requires at least: 5.5
	Requires PHP: 7.4.0
	License: MIT
	License URI: https://opensource.org/licenses/MIT
*/

if (! defined('ABSPATH')) exit;

require_once plugin_dir_path(__FILE__) . 'inc/rudr_upload_file_by_url.php';
require_once plugin_dir_path(__FILE__) . 'inc/yttp_create_article.php';
require_once plugin_dir_path(__FILE__) . 'inc/yttp_fetch_youtube_videos.php';
require_once plugin_dir_path(__FILE__) . 'inc/yttp_options.php';


class YTTP_YoutubeToPostPlugin {
	function __construct() {
		add_action('admin_menu', array($this, 'adminMenu'));
		add_action('wp_ajax_yttp_creatArticle', 'yttp_creatArticle' );
		add_action('wp_ajax_yttp_fetchYoutubeVideos', 'yttp_fetchYoutubeVideos' );
		add_action('wp_ajax_yttp_options', 'yttp_options' );
		add_option('yttpYoutubeApiKey', '');
		add_option('yttpPostTemplate', '');
		add_option('yttpPostRegex', '');
		add_option('yttpYoutubeChannelId', '');
		add_option('yttpPageTemplate', '');
	}

	function adminMenu(){
		$pageList = add_menu_page( 'Youtube To Post', ' Youtube To Post', 'manage_options', 'yttp-videos', array($this, 'getHTMLMain'), 'dashicons-media-video' );
		add_action('load-' . $pageList, array($this,'loadAdminJS'));

		$pageListSub = add_submenu_page( 'yttp-videos', 'Youtube To Post', 'Videos', 'manage_options', 'yttp-videos', array($this, 'getHTMLMain'), 10);
		add_action('load-' . $pageListSub, array($this,'loadAdminJS'));

		$pageSettings = add_submenu_page( 'yttp-videos', 'Settings', ' Settings', 'manage_options', 'yttp-settings', array($this, 'getHTMLMain'), 10);
		add_action('load-' . $pageSettings, array($this,'loadAdminJS'));
	}

	function loadAdminJS() {
		add_action('admin_enqueue_scripts', array($this, 'enqueueJS'));
	}

	function enqueueJS() {
		wp_enqueue_script('yttp_scripts', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-components'), 1.0);
		wp_enqueue_style('yttp_style', plugin_dir_url(__FILE__) . 'build/index.css', array(), '1.0');

		wp_localize_script('yttp_scripts', 'yttpData', array(
			'ajaxUrl' => admin_url('admin-ajax.php'),
			'optionsUrl' => admin_url('options.php'),
			'nonce' => wp_create_nonce('yttp-nonce'),
			'route' => sanitize_key($_REQUEST['page']),
			'options' => array('yttpYoutubeApiKey' => get_option('yttpYoutubeApiKey'), 'yttpYoutubeChannelId' => get_option('yttpYoutubeChannelId'), 'yttpPostRegex' => html_entity_decode(stripslashes(get_option('yttpPostRegex')), ENT_COMPAT, "UTF-8"), 'yttpPostTemplate' => html_entity_decode(stripslashes(get_option('yttpPostTemplate')), ENT_COMPAT, "UTF-8"), 'yttpPageTemplate' => get_option('yttpPageTemplate'))
		));
	}

	function getHTMLMain(){
		echo wp_kses('<div id="yttpMain"></div>', array(
			'div'      => array(
				'id'  => array(),
			),
		));
	}
}

$yttp_youtubeToPostPlugin = new YTTP_YoutubeToPostPlugin();


?>