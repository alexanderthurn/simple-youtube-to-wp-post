=== Simple Youtube To WP Post ===
Stable tag: 1.1.1
Requires at least: 5.5
Tested up to: 6.2
Requires PHP: 7.4.3
Contributors: chefmangoo
Tags: youtube, post, video, generation, automation, create
License: MIT
License URI: https://opensource.org/licenses/MIT

A plugin to create wordpress posts from youtube videos

== Description ==

Do you own a youtube channel <b>AND</b> a wordpress site?
Do you create videos and create posts based on them? maybe with a very similar description and a link to the video? 
**With this plugin you can create posts based on your youtube videos and modify them afterwards like usual**

== Installation ==

1. Navigate to the 'Add New' in the plugins dashboard
2. Search for 'Simple Youtube To WP Post'
3. Click 'Install Now'
4. Activate the plugin on the Plugin dashboard

== Frequently Asked Questions ==

= Is this plugin free =

100% free and [open source](https://github.com/alexanderthurn/wp-youtube-to-post).

= Do i need a google api key =

Yes, you need an api key from Google Youtube API. It is free and can be created in some steps [here](https://console.cloud.google.com/apis/library/youtube.googleapis.com)

= What is the Channel-Id =

The channel id is the id of your youtube channel. You can find it [here](https://www.youtube.com/account_advanced)

= Can i extend the plugin =

Yes. 

a) Fork the github repository 
b) Use an action hook named "yttp_after_post_creation". It is called after the post and attachment was created and has one parameter $result. This $result contains the 'post', the 'post_id' and the 'attachment_id'. More information can be found on the github page of this plugin.

== Screenshots ==

1. List of youtube videos. One click on "Create post" creates a post with the description of the video as the content of the blog post and the thumbnail of the video as the featured image
2. This screenshot shows the mandatory settings (youtube channel-id and api key)
3. You can define which parts of the video description should be taken and how they should be outputted

== Changelog ==

= 1.1.1 =
* HTML-Anchor and <br> creation based on youtube text newlines and http(s) urls

= 1.1.0 =
* Added support for page_template parameter for special posts
* Added yttp_after_post_creation action hook

= 1.0.3 =
* First version