# WP Simple Youtube To Post Wordpress Plugin (wp-simple-youtube-to-post)

> A plugin to create wordpress posts from youtube videos

You own a youtube channel <b>AND</b> a wordpress site?
You want to create a video and afterwards a blog-post with the same description and a link to the video? 
With this plugin you can create posts based on your youtube videos and modify them afterwards like usual

## Features

Version 1.0.1

* Simple one click creation of posts based on your youtube videos 
* Regular expressions to use only some parts of the video description
* Simple blog template in which you can define where the description of the video will be placed, gutenberg blocks are supported

## Getting started

* Install this plugin, e.g. copy it in the plugins directory. 
* Activate the plugin.
* Enter your Channel ID and your Api Key "YouTube Data API v3" in the settings.

More about

* Channel-ID: https://www.youtube.com/account_advanced
* Api-Key: https://console.cloud.google.com/apis/library/youtube.googleapis.com


## Development

The frontend is based on JSX. Therefore you need to have npm and node to change it

```
cd youtube-to-post
npm install
npm run start
```
### Post-Settings example

With post-settings you can define what part of the description will be taken and how it is placed within the post content.

Regex

```
/(.*)Über die Werteherren/misu
```

The content in the round brackets are saved as regex-groups. The first () will be made available as __GROUP[0]__, the second () will be __GROUP[1]__. Additionally there is the __VIDEO_ID__ field, which contains the id of the video, e.g. to create a link to the original video. 

Those fields can be used in a configurable inline-template, which takes those values and can contain html and gutenberg markup code.

Inline-Template

```
    __GROUP[0]__
    <br />
    <iframe width="640" height="430" src="https://www.youtube.com/embed/__VIDEO_ID__"></iframe>
```
This would result in a blog post beginning with the description saved in __GROUP[0]__. It adds a newline and then an iframe showing the youtube video using the __VIDEO_ID__.


You can also use blocks in the template, e.g. to add a gutenberg table or video element

```
    <!-- wp:paragraph -->
    __GROUP[0]__
    <!-- /wp:paragraph -->

    <!-- wp:embed {"url":"https://www.youtube.com/embed/__VIDEO_ID__","type":"rich","providerNameSlug":"embed-handler","responsive":true,"className":"wp-embed-aspect-16-9 wp-has-aspect-ratio"} -->
    <figure class="wp-block-embed is-type-rich is-provider-embed-handler wp-block-embed-embed-handler wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
    https://www.youtube.com/embed/__VIDEO_ID__
    </div></figure>
    <!-- /wp:embed -->

    <!-- wp:table -->
    <figure class="wp-block-table"><table><tbody><tr><td>1a</td><td>1b</td></tr><tr><td>2a</td><td>2b</td></tr></tbody></table><figcaption class="wp-element-caption">caption</figcaption></figure>
    <!-- /wp:table -->

```

## Author

Alexander Thurn

## TODO

* Add support for page_templates, e.g. 'page_template' => 'template_file.php'
* Add a hook after post-creation
* Add Elementor-Support: https://stackoverflow.com/questions/63898766/wordpress-programmatically-insert-elementor-widgets-in-a-page

## License

MIT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

