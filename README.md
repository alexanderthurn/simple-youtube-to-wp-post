# Youtube To Post Wordpress Plugin
> A plugin to create wordpress posts from youtube videos

You own a youtube channel <b>AND</b> a wordpress site?
You want to create videos and blog-posts at the same time with no effort? 
With this plugin you can create posts based on your youtube videos and modify them afterwards like usual

## Features

* Simple one click creation of posts based on your youtube videos 

## Getting started

* Install this plugin, e.g. copy it in the plugins directory. 
* Activate the plugin.
* Enter your Channel ID and "YouTube Data API v3" Key in the settings.

* Channel-ID: https://www.youtube.com/account_advanced
* Api-Key: https://console.cloud.google.com/apis/library/youtube.googleapis.com


## Development

The frontend is based on JSX. Therefore you need to have npm and node. 

```
cd youtube-to-post
npm install
npm run start
```
### Post-Settings example

Regex
```
(.*)Über die Werteherren
```

Template
```
__MATCH[0]__
<br />
<iframe width="640" height="430" src="https://www.youtube.com/embed/__VIDEO_ID__"></iframe>
```


## Author

Alexander Thurn


## License

MIT

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

