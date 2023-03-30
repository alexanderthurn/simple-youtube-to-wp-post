/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cmp/main.js":
/*!*************************!*\
  !*** ./src/cmp/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos */ "./src/cmp/videos.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/cmp/settings.js");



function YoutubeToPostAdminPageMain(_ref) {
  let {
    settings
  } = _ref;
  console.log('rendering main', settings);
  switch (settings.route) {
    case 'yttp-settings':
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_settings__WEBPACK_IMPORTED_MODULE_2__["default"], {
        settings: settings
      });
    default:
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_videos__WEBPACK_IMPORTED_MODULE_1__["default"], {
        settings: settings
      });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeToPostAdminPageMain);

/***/ }),

/***/ "./src/cmp/settings.js":
/*!*****************************!*\
  !*** ./src/cmp/settings.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const YoutubeToPostAdminPageSettings = (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.withNotices)(_ref => {
  let {
    noticeOperations,
    noticeUI,
    settings
  } = _ref;
  console.log('rendering settings', settings);
  const [youtubeApiKey, setYoutubeApiKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpYoutubeApiKey);
  const [youtubeChannelId, setYoutubeChannelId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpYoutubeChannelId);
  const [postRegex, setPostRegex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpPostRegex);
  const [postTemplate, setPostTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpPostTemplate);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {}, []);
  console.log('rendering settings');
  function saveSettings() {
    const data = new FormData();
    data.append('action', 'yttp_options');
    data.append('nonce', settings.nonce);
    data.append('yttpYoutubeApiKey', youtubeApiKey);
    data.append('yttpYoutubeChannelId', youtubeChannelId);
    data.append('yttpPostRegex', postRegex);
    data.append('yttpPostTemplate', postTemplate);
    const paramsAsQueryString = new URLSearchParams(data);
    noticeOperations.removeAllNotices();
    noticeOperations.createNotice({
      status: 'success',
      content: 'Saving'
    });
    fetch(settings.ajaxUrl + '?' + paramsAsQueryString, {
      method: 'POST',
      body: data
    }).then(response => response.json()).then(result => {
      console.log('updateSettings', result);
      //alert('Saved')
      noticeOperations.removeAllNotices();
      noticeOperations.createNotice({
        status: 'success',
        content: 'Settings saved'
      });
    });
  }
  console.log('postSettings', postRegex, postTemplate);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Youtube To Post Settings"), noticeUI, (!settings.options.yttpYoutubeApiKey || !settings.options.yttpYoutubeChannelId) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, "In order to use this plugin, you just need to configure your ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "youtube-channel-id"), " and your ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("b", null, "youtube-api-key"), ". I will help you to set it up:", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "You can find your channel-id ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.youtube.com/account_advanced"
  }, "here")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "You need an api key from youtube/google. It is free and can be created in the google search console. Three steps are needed", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Create a project or use an existing one within the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://console.cloud.google.com/welcome"
  }, "google cloud console")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Enable the ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://console.cloud.google.com/apis/library/youtube.googleapis.com"
  }, "YouTube Data API v3")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, "Create a Youtube API key ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://console.cloud.google.com/apis/credentials"
  }, "here")))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "button button-primary",
    onClick: () => saveSettings()
  }, "Save Changes")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, "Youtube Channel ID"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "text",
    value: youtubeChannelId,
    onChange: v => {
      setYoutubeChannelId(v);
    },
    placeholder: "UCzN_yRlMz4pyW-LJZJrxTRw"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://www.youtube.com/account_advanced"
  }, "Channel-Id on Youtube")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, "Youtube Data v3 API Key"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "password",
    value: youtubeApiKey,
    onChange: v => {
      setYoutubeApiKey(v);
    },
    placeholder: "AIza...........nqCQ"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://console.cloud.google.com/apis/library/youtube.googleapis.com"
  }, "Google Search Console")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, "Post-Settings"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: "Filter your video-description by a regex expression. You can use all matches later",
    type: "text",
    value: postRegex,
    onChange: v => {
      setPostRegex(v);
    },
    placeholder: "/(.*)about this channel/ would take all text of the video description from top to \"about this channel\""
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: "HTML template based on the regex matches from above. The first match can be accessed by __MATCH[0]__",
    type: "text",
    value: postTemplate,
    onChange: v => {
      setPostTemplate(v);
    },
    placeholder: "<h1>Good for you</h1>__MATCH[0]__  would result in a h1 headline, following by the content of the first match from the regex given above"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://regex101.com/"
  }, "If you do not know how regex expressions work, give this a try: Regex101")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "button button-primary",
    onClick: () => saveSettings()
  }, "Save Changes"), noticeUI), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Hint: This plugin is 100% free and open source. You can check and modify the sourcecode on ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "https://github.com/alexanderthurn/youtube-to-post-wordpress-plugin"
  }, "Github"), ". Author: ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "mailto:athurn@gmx.de"
  }, "Alexander Thurn"))));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeToPostAdminPageSettings);

/***/ }),

/***/ "./src/cmp/videos.js":
/*!***************************!*\
  !*** ./src/cmp/videos.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function YoutubeToPostAdminPageList(_ref) {
  let {
    settings
  } = _ref;
  console.log('rendering videos', settings);
  const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
  async function createArticle(id) {
    console.log('creating article ' + id);
    var oldVideos = videos.map(v => {
      if (v.id === id) v.loading = 'true';
      return v;
    });
    setVideos(oldVideos);
    let video = await fetchYoutubeVideoDetails(id);
    console.log(video);
    const data = new FormData();
    data.append('action', 'yttp_creatArticle');
    data.append('nonce', settings.nonce);
    data.append('id', video.id);
    data.append('title', video.title);
    data.append('description', video.description);
    data.append('thumbnail', video.thumbnail);
    const wpResult = await fetch(settings.ajaxUrl, {
      method: 'POST',
      body: data
    }).then(response => response.json());
    var newVideos = videos.map(v => {
      if (v.id === id) {
        v.post_id = wpResult.post_id;
        v.loading = false;
      }
      return v;
    });
    setVideos(newVideos);
  }
  function fetchYoutubeVideoDetails(id) {
    const data = new FormData();
    data.append('action', 'yttp_fetchYoutubeVideos');
    data.append('nonce', settings.nonce);
    data.append('VIDEO_ID', id);
    const paramsAsQueryString = new URLSearchParams(data);
    return fetch(settings.ajaxUrl + '?' + paramsAsQueryString, {
      method: 'POST',
      body: data
    }).then(response => response.json()).then(result => {
      console.log('fetchYoutubeVideoDetails', result);
      return result;
    }).then(result => {
      console.log('fetchYoutubeVideoDetails2', result);
      return result.videos[0];
    });
  }
  function fetchYoutubeVideos() {
    const data = new FormData();
    data.append('action', 'yttp_fetchYoutubeVideos');
    data.append('nonce', settings.nonce);
    const paramsAsQueryString = new URLSearchParams(data);
    return fetch(settings.ajaxUrl + '?' + paramsAsQueryString, {
      method: 'POST',
      body: data
    }).then(response => response.json()).then(result => {
      console.log('fetchYoutubeVideos', result);
      return result.videos;
    });
  }
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchYoutubeVideos().then(videos => {
      console.log('setVideos', videos);
      setVideos(videos);
    });
  }, []);
  console.log('rendering', videos, settings);
  if (!settings.options.yttpYoutubeApiKey || !settings.options.yttpYoutubeChannelId) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Welcome to Youtube-To-Post"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Click ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: ""
    }, "here"), " to get to the settings page to get started"));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Youtube To Post"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "wp-list-table widefat fixed striped table-view-list yttp_videos"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "manage-column column-title"
  }, "Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "manage-column column-id"
  }, "Id"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "manage-column column-action column-primary"
  }, "Action")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, videos == undefined && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colspan: "10"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null))), videos !== undefined && videos.length == 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colspan: "3"
  }, "0 results from youtube. Make sure you configured your Youtube-Channel-Id and your Youtube-Api-Key correctly under 'Settings'")), videos !== undefined && videos.length > 0 && videos.map(video => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.post_id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: '/wp-admin/post.php?post=' + video.post_id + '&action=edit'
  }, video.title) : video.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.id), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.post_id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "button button-secondary",
    href: '/wp-admin/post.php?post=' + video.post_id + '&action=edit'
  }, "Open Post") : video.loading ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "button button-primary",
    onClick: () => {
      createArticle(video.id);
    }
  }, "Create post")))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YoutubeToPostAdminPageList);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cmp_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cmp/main */ "./src/cmp/main.js");




window.onload = function () {
  (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_cmp_main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    settings: window.yttpData
  }), document.getElementById('yttpMain'));
};
console.log('React for  the win 2');
})();

/******/ })()
;
//# sourceMappingURL=index.js.map