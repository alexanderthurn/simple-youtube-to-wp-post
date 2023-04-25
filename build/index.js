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
  const [youtubeApiKey, setYoutubeApiKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpYoutubeApiKey);
  const [youtubeChannelId, setYoutubeChannelId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpYoutubeChannelId);
  const [postRegex, setPostRegex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpPostRegex);
  const [postTemplate, setPostTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpPostTemplate);
  const [pageTemplate, setPageTemplate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(settings.options.yttpPageTemplate);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {}, []);
  function saveSettings() {
    const data = new FormData();
    data.append('action', 'yttp_options');
    data.append('nonce', settings.nonce);
    data.append('yttpYoutubeApiKey', youtubeApiKey);
    data.append('yttpYoutubeChannelId', youtubeChannelId);
    data.append('yttpPostRegex', postRegex);
    data.append('yttpPostTemplate', postTemplate);
    data.append('yttpPageTemplate', pageTemplate);
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
      noticeOperations.removeAllNotices();
      noticeOperations.createNotice({
        status: 'success',
        content: 'Settings saved'
      });
    });
  }
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
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardHeader, null, "Advanced Post-Settings (optional)"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: "Filter your video-description by a regex expression. You can use the found regex groups in the inline-template below",
    type: "text",
    value: postRegex,
    onChange: v => {
      setPostRegex(v);
    },
    placeholder: "/(.*)about this channel/misu would take all text of the video description from top to \"about this channel\". misu is for matching multiline and more"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: "HTML/Gutenberg Inline-Template using the regex groups from above. The first group can be accessed by __GROUP[0]__. The ID of the video is __VIDEO_ID__",
    type: "text",
    value: postTemplate,
    onChange: v => {
      setPostTemplate(v);
    },
    placeholder: "<!-- wp:paragraph -->\r __GROUP[0]__\r <!-- /wp:paragraph -->\r <!-- wp:embed {\"url\":\"https://www.youtube.com/embed/__VIDEO_ID__\",\"type\":\"rich\",\"providerNameSlug\":\"embed-handler\",\"responsive\":true,\"className\":\"wp-embed-aspect-16-9 wp-has-aspect-ratio\"} -->\r <figure class=\"wp-block-embed is-type-rich is-provider-embed-handler wp-block-embed-embed-handler wp-embed-aspect-16-9 wp-has-aspect-ratio\"><div class=\"wp-block-embed__wrapper\">\r https://www.youtube.com/embed/__VIDEO_ID__\r </div></figure>\r <!-- /wp:embed -->"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "components-base-control__label",
    for: "pageTemplateInput"
  }, "Page Template (optional)"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    id: "pageTemplateInput",
    type: "text",
    value: pageTemplate,
    onChange: v => {
      setPageTemplate(v);
    },
    placeholder: "page-template.php"
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
  const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
  async function createArticle(id) {
    var oldVideos = videos.map(v => {
      if (v.id === id) v.loading = 'true';
      return v;
    });
    setVideos(oldVideos);
    let video = await fetchYoutubeVideoDetails(id);
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
      return result;
    }).then(result => {
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
      return result.videos;
    });
  }
  function htmldecode(s) {
    window.HTML_ESC_MAP = {
      "nbsp": " ",
      "iexcl": "¡",
      "cent": "¢",
      "pound": "£",
      "curren": "¤",
      "yen": "¥",
      "brvbar": "¦",
      "sect": "§",
      "uml": "¨",
      "copy": "©",
      "ordf": "ª",
      "laquo": "«",
      "not": "¬",
      "reg": "®",
      "macr": "¯",
      "deg": "°",
      "plusmn": "±",
      "sup2": "²",
      "sup3": "³",
      "acute": "´",
      "micro": "µ",
      "para": "¶",
      "middot": "·",
      "cedil": "¸",
      "sup1": "¹",
      "ordm": "º",
      "raquo": "»",
      "frac14": "¼",
      "frac12": "½",
      "frac34": "¾",
      "iquest": "¿",
      "Agrave": "À",
      "Aacute": "Á",
      "Acirc": "Â",
      "Atilde": "Ã",
      "Auml": "Ä",
      "Aring": "Å",
      "AElig": "Æ",
      "Ccedil": "Ç",
      "Egrave": "È",
      "Eacute": "É",
      "Ecirc": "Ê",
      "Euml": "Ë",
      "Igrave": "Ì",
      "Iacute": "Í",
      "Icirc": "Î",
      "Iuml": "Ï",
      "ETH": "Ð",
      "Ntilde": "Ñ",
      "Ograve": "Ò",
      "Oacute": "Ó",
      "Ocirc": "Ô",
      "Otilde": "Õ",
      "Ouml": "Ö",
      "times": "×",
      "Oslash": "Ø",
      "Ugrave": "Ù",
      "Uacute": "Ú",
      "Ucirc": "Û",
      "Uuml": "Ü",
      "Yacute": "Ý",
      "THORN": "Þ",
      "szlig": "ß",
      "agrave": "à",
      "aacute": "á",
      "acirc": "â",
      "atilde": "ã",
      "auml": "ä",
      "aring": "å",
      "aelig": "æ",
      "ccedil": "ç",
      "egrave": "è",
      "eacute": "é",
      "ecirc": "ê",
      "euml": "ë",
      "igrave": "ì",
      "iacute": "í",
      "icirc": "î",
      "iuml": "ï",
      "eth": "ð",
      "ntilde": "ñ",
      "ograve": "ò",
      "oacute": "ó",
      "ocirc": "ô",
      "otilde": "õ",
      "ouml": "ö",
      "divide": "÷",
      "oslash": "ø",
      "ugrave": "ù",
      "uacute": "ú",
      "ucirc": "û",
      "uuml": "ü",
      "yacute": "ý",
      "thorn": "þ",
      "yuml": "ÿ",
      "fnof": "ƒ",
      "Alpha": "Α",
      "Beta": "Β",
      "Gamma": "Γ",
      "Delta": "Δ",
      "Epsilon": "Ε",
      "Zeta": "Ζ",
      "Eta": "Η",
      "Theta": "Θ",
      "Iota": "Ι",
      "Kappa": "Κ",
      "Lambda": "Λ",
      "Mu": "Μ",
      "Nu": "Ν",
      "Xi": "Ξ",
      "Omicron": "Ο",
      "Pi": "Π",
      "Rho": "Ρ",
      "Sigma": "Σ",
      "Tau": "Τ",
      "Upsilon": "Υ",
      "Phi": "Φ",
      "Chi": "Χ",
      "Psi": "Ψ",
      "Omega": "Ω",
      "alpha": "α",
      "beta": "β",
      "gamma": "γ",
      "delta": "δ",
      "epsilon": "ε",
      "zeta": "ζ",
      "eta": "η",
      "theta": "θ",
      "iota": "ι",
      "kappa": "κ",
      "lambda": "λ",
      "mu": "μ",
      "nu": "ν",
      "xi": "ξ",
      "omicron": "ο",
      "pi": "π",
      "rho": "ρ",
      "sigmaf": "ς",
      "sigma": "σ",
      "tau": "τ",
      "upsilon": "υ",
      "phi": "φ",
      "chi": "χ",
      "psi": "ψ",
      "omega": "ω",
      "thetasym": "ϑ",
      "upsih": "ϒ",
      "piv": "ϖ",
      "bull": "•",
      "hellip": "…",
      "prime": "′",
      "Prime": "″",
      "oline": "‾",
      "frasl": "⁄",
      "weierp": "℘",
      "image": "ℑ",
      "real": "ℜ",
      "trade": "™",
      "alefsym": "ℵ",
      "larr": "←",
      "uarr": "↑",
      "rarr": "→",
      "darr": "↓",
      "harr": "↔",
      "crarr": "↵",
      "lArr": "⇐",
      "uArr": "⇑",
      "rArr": "⇒",
      "dArr": "⇓",
      "hArr": "⇔",
      "forall": "∀",
      "part": "∂",
      "exist": "∃",
      "empty": "∅",
      "nabla": "∇",
      "isin": "∈",
      "notin": "∉",
      "ni": "∋",
      "prod": "∏",
      "sum": "∑",
      "minus": "−",
      "lowast": "∗",
      "radic": "√",
      "prop": "∝",
      "infin": "∞",
      "ang": "∠",
      "and": "∧",
      "or": "∨",
      "cap": "∩",
      "cup": "∪",
      "int": "∫",
      "there4": "∴",
      "sim": "∼",
      "cong": "≅",
      "asymp": "≈",
      "ne": "≠",
      "equiv": "≡",
      "le": "≤",
      "ge": "≥",
      "sub": "⊂",
      "sup": "⊃",
      "nsub": "⊄",
      "sube": "⊆",
      "supe": "⊇",
      "oplus": "⊕",
      "otimes": "⊗",
      "perp": "⊥",
      "sdot": "⋅",
      "lceil": "⌈",
      "rceil": "⌉",
      "lfloor": "⌊",
      "rfloor": "⌋",
      "lang": "〈",
      "rang": "〉",
      "loz": "◊",
      "spades": "♠",
      "clubs": "♣",
      "hearts": "♥",
      "diams": "♦",
      "\"": "quot",
      "amp": "&",
      "lt": "<",
      "gt": ">",
      "OElig": "Œ",
      "oelig": "œ",
      "Scaron": "Š",
      "scaron": "š",
      "Yuml": "Ÿ",
      "circ": "ˆ",
      "tilde": "˜",
      "ndash": "–",
      "mdash": "—",
      "lsquo": "‘",
      "rsquo": "’",
      "sbquo": "‚",
      "ldquo": "“",
      "rdquo": "”",
      "bdquo": "„",
      "dagger": "†",
      "Dagger": "‡",
      "permil": "‰",
      "lsaquo": "‹",
      "rsaquo": "›",
      "euro": "€"
    };
    if (!window.HTML_ESC_MAP_EXP) window.HTML_ESC_MAP_EXP = new RegExp("&(" + Object.keys(HTML_ESC_MAP).join("|") + ");", "g");
    return s ? s.replace(window.HTML_ESC_MAP_EXP, function (x) {
      return HTML_ESC_MAP[x.substring(1, x.length - 1)] || x;
    }) : s;
  }
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    fetchYoutubeVideos().then(videos => {
      setVideos(videos);
    });
  }, []);
  var decodeEntities = function () {
    // this prevents any overhead from creating the object each time
    var element = document.createElement('div');
    function decodeHTMLEntities(str) {
      if (str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }
      return str;
    }
    return decodeHTMLEntities;
  }();
  if (!settings.options.yttpYoutubeApiKey || !settings.options.yttpYoutubeChannelId) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "wrap"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Welcome to Youtube-To-Post"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Click ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "?page=yttp-settings"
    }, "here"), " to get to the settings page to get started"));
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Flex, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FlexBlock, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, "Youtube To Post"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "wp-list-table widefat fixed striped table-view-list yttp_videos"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "manage-column column-title"
  }, "Video Title"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "manage-column column-id"
  }, "Video Id"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    className: "manage-column column-action column-primary"
  }, "Action")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, videos == undefined && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colspan: "3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null))), videos !== undefined && videos.length == 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colspan: "3"
  }, "0 results from youtube. Make sure you configured your Youtube-Channel-Id and your Youtube-Api-Key correctly under 'Settings'")), videos !== undefined && videos.length > 0 && videos.map(video => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.post_id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: '/wp-admin/post.php?post=' + video.post_id + '&action=edit'
  }, decodeEntities(video.title)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, decodeEntities(video.title))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: 'https://studio.youtube.com/video/' + video.id + '/edit'
  }, video.id) : video.id), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, video.post_id ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "button button-secondary",
    href: '/wp-admin/post.php?post=' + video.post_id + '&action=edit'
  }, "Edit Post") : video.loading ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Spinner, null) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
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
})();

/******/ })()
;
//# sourceMappingURL=index.js.map