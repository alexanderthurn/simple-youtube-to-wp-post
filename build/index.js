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
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {}, []);
  console.log('rendering settings');
  function saveSettings() {
    const data = new FormData();
    data.append('action', 'yttp_options');
    data.append('nonce', settings.nonce);
    data.append('yttpYoutubeApiKey', youtubeApiKey);
    data.append('yttpYoutubeChannelId', youtubeChannelId);
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Youtube To Post Settings"), noticeUI, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "password",
    label: "Youtube API Key",
    value: youtubeApiKey,
    onChange: v => {
      setYoutubeApiKey(v);
    },
    placeholder: "AIza...........nqCQ"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    type: "text",
    label: "Youtube Channel ID",
    value: youtubeChannelId,
    onChange: v => {
      setYoutubeChannelId(v);
    },
    placeholder: "UCzN_yRlMz4pyW-LJZJrxTRw"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "button button-primary",
    onClick: () => saveSettings()
  }, "Save Changes")))));
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
      if (v.id === id) v.post_id = wpResult.post_id;
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
  }, "0 results from Youtube. Make sure you configured your Youtube-ChannelId and your Youtube-ApiKey in 'Settings'")), videos !== undefined && videos.length > 0 && videos.map(video => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.post_id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: '/wp-admin/post.php?post=' + video.post_id + '&action=edit'
  }, video.title) : video.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.id), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.post_id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "button button-secondary",
    href: '/wp-admin/post.php?post=' + video.post_id + '&action=edit'
  }, "Open Post") : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
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