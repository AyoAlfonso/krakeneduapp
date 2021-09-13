module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+ErQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pill; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mirl");


const Pill = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('span', {
  target: "erqyxa00"
})("height:min-content;width:fit-content;font-weight:bold;font-family:Roboto Mono;padding:2px 8px;font-size:0.75rem;border-radius:4px;color:", props => props.red ? _Tokens__WEBPACK_IMPORTED_MODULE_1__[/* colors */ "d"].accentRed : _Tokens__WEBPACK_IMPORTED_MODULE_1__[/* colors */ "d"].textSecondary, ";", props => props.borderOnly ? `border: 2px solid ${props.red ? _Tokens__WEBPACK_IMPORTED_MODULE_1__[/* colors */ "d"].accentRed : _Tokens__WEBPACK_IMPORTED_MODULE_1__[/* colors */ "d"].grey55};` : `background-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_1__[/* colors */ "d"].grey90};`, true ? "" : undefined);

/***/ }),

/***/ "+Xui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Hbq");
/* harmony import */ var src_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5++N");




/* harmony default export */ __webpack_exports__["default"] = (() => {
  let {
    data: user
  } = Object(src_data__WEBPACK_IMPORTED_MODULE_3__[/* useUserData */ "i"])();
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* Box */ "b"], {
    style: {
      textAlign: 'center',
      width: 'fit-content',
      margin: 'auto'
    }
  }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('h1', '404'), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('p', "This page doesn't exist :("), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('p', "It could be bad link, or maybe we're just still working on it!"), react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: user ? '/dashboard' : '/'
  }, react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()('a.mono', 'take me back to the homepage'))]);
});

/***/ }),

/***/ "+khs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return updateTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return updateCategory; });
/* unused harmony export getCategory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getUsername; });
/* unused harmony export getGroupId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addMember; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTaggedPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return makeSSOPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return syncSSO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createPost; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PJMN");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8xkj");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("he5r");
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1ygI");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





let headers = {
  "Api-Key": process.env.DISCOURSE_API_KEY || '',
  "Api-Username": process.env.DISCOURSE_API_USERNAME || ''
};

let fetchWithBackoff = async (url, options, exponent = 1) => {
  let result = await fetch(url, options);

  if (result.status === 429) {
    let value = 1000 * 2 ** exponent;
    await new Promise(resolve => {
      let backoff = Math.min(value + Math.floor(Math.random() * value), 64000);
      setTimeout(() => resolve(), backoff);
    });
    return fetchWithBackoff(url, options, exponent + 1);
  }

  return result;
};

async function createGroup(group) {
  console.log(group, "grouphere");
  if (typeof group.owner_usernames !== 'string') group.owner_usernames = group.owner_usernames.join(',');
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/admin/groups`, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      "Content-Type": 'application/json; charset=utf-8'
    }),
    body: JSON.stringify({
      group
    })
  });
  console.log(result, "grouphereafter");

  if (result.status !== 200) {
    console.log(await result.text());
    return false;
  }

  return await result.json();
}
async function updateTopic(topic, input, username) {
  await fetch(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}${topic}`, {
    method: "PUT",
    headers: _objectSpread({
      "Content-Type": 'application/json; charset=utf-8'
    }, headers),
    body: JSON.stringify({
      tags: input.tags,
      title: input.title
    })
  }); // Update the content

  let topicData = await (await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}${topic}.json`, {
    headers
  })).json();
  let postID = topicData.post_stream.posts[0].id;
  await fetch(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/posts/${postID}`, {
    method: "PUT",
    headers: _objectSpread({
      "Content-Type": 'application/json; charset=utf-8'
    }, headers),
    body: JSON.stringify({
      post: {
        raw: input.raw
      }
    })
  }); // Update the owner

  if (username) await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/t/${topicData.id}/change-owner`, {
    method: "POST",
    headers: _objectSpread({
      "Content-Type": 'application/json; charset=utf-8'
    }, headers),
    body: JSON.stringify({
      post_ids: [postID],
      username
    })
  });
}
async function createTopic(input, asUser) {
  console.log(asUser, "asUser");
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/posts.json`, {
    method: "POST",
    headers: _objectSpread(_objectSpread({
      "Content-Type": 'application/json; charset=utf-8'
    }, headers), {}, {
      "Api-Username": headers["Api-Username"]
    }),
    body: JSON.stringify(input)
  });

  if (result.status !== 200) {
    console.log(await result.text());
  }

  if (result.status === 200) return await result.json();
}
const createCategory = async (name, options) => {
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/categories.json`, {
    method: 'POST',
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      "Content-Type": 'application/json; charset=utf-8'
    }),
    body: JSON.stringify(_objectSpread({
      name,
      color: '0088CC',
      text_color: 'FFFFFF'
    }, options))
  });
  if (result.status === 200) return (await result.json()).category;
  console.log(await result.text());
  return false;
};
async function updateGroup(id, name) {
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/g/${id}.json`, {
    method: "PUT",
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      "Content-Type": 'application/json; charset=utf-8'
    }),
    body: JSON.stringify({
      name
    })
  });
  if (result.status !== 200) console.log(await result.text());else {
    await lib_prisma__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].discourse_groups.update({
      where: {
        id
      },
      data: {
        name
      }
    });
    return true;
  }
}
async function updateCategory(id, options) {
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/categories/${id}`, {
    method: "PUT",
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      "Content-Type": 'application/json; charset=utf-8'
    }),
    body: JSON.stringify(_objectSpread(_objectSpread({}, options), {}, {
      color: '0088CC',
      text_color: 'FFFFFF'
    }))
  });
  if (result.status !== 200) console.log(await result.text());else return true;
}
async function getCategory(path) {
  let res = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/c/${path}.json`, {
    method: 'GET',
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      "Content-Type": 'application/json; charset=utf-8'
    })
  });

  if (res.status === 200) {
    let category = await res.json();
    return category;
  } else console.log(await res.text());
}
const getUsername = async userId => {
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/u/by-external/${userId}.json`, {
    method: "GET",
    headers
  });

  if (result.status === 200) {
    return (await result.json()).user.username;
  } else return;
};
const getGroupId = async groupName => {
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/groups/${groupName}.json`, {
    method: "GET",
    headers
  });
  if (result.status === 200) return (await result.json()).group.id;
  return undefined;
};
const addMember = async (groupId, username) => {
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/groups/${groupId}/members.json`, {
    method: "PUT",
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      "Content-Type": 'application/json; charset=utf-8'
    }),
    body: JSON.stringify({
      usernames: username
    })
  });
  return result.status === 200;
};
const getTaggedPost = async (c, tag) => {
  var _category$topic_list$;

  let res = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/c/${c}.json`, {
    method: 'GET',
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      "Content-Type": 'application/json; charset=utf-8'
    })
  });
  if (res.status !== 200) console.log(await res.text());
  let category = await res.json();
  console.log(category.topic_list.topics, tag, "category");
  let topicID = (_category$topic_list$ = category.topic_list.topics.find(topic => topic.tags && topic.tags.includes(tag))) === null || _category$topic_list$ === void 0 ? void 0 : _category$topic_list$.id;
  if (!topicID) return {
    text: '',
    id: ''
  };
  let topicRequest = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/raw/${topicID}`, {
    headers
  });
  return {
    text: await topicRequest.text(),
    id: topicID
  };
};
const makeSSOPayload = params => {
  let payload = Buffer.from(querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params)).toString('base64');
  const sig = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHmac('sha256', process.env.DISCOURSE_SECRET || '');
  sig.update(payload);
  let result = querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify({
    sso: payload,
    sig: sig.digest('hex')
  });
  return result;
};
const syncSSO = async params => {
  let payload = Buffer.from(querystring__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params)).toString('base64');
  const sig = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHmac('sha256', process.env.DISCOURSE_SECRET || '');
  sig.update(payload);
  return fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/admin/users/sync_sso`, {
    method: "POST",
    headers: {
      "Api-Key": process.env.DISCOURSE_API_KEY || '',
      "Api-Username": 'system',
      "Content-Type": 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      sso: payload,
      sig: sig.digest('hex')
    })
  });
};
async function createPost(params) {
  let result = await fetchWithBackoff(`${src_constants__WEBPACK_IMPORTED_MODULE_2__[/* DISCOURSE_URL */ "a"]}/posts.json`, {
    method: "POST",
    headers: _objectSpread(_objectSpread({
      "Content-Type": 'application/json; charset=utf-8'
    }, headers), {}, {
      "Api-Username": 'system'
    }),
    body: JSON.stringify(params)
  });
  console.log(result);
}

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0CBl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return multiRouteHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return callApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useApiData; });
/* harmony import */ var _sentry_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UAhG");
/* harmony import */ var _sentry_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);



const APIHandler = handler => {
  if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
    _sentry_node__WEBPACK_IMPORTED_MODULE_0__["init"]({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
    });
  }

  return async (req, res) => {
    let result;

    try {
      if (typeof handler === 'object') {
        let method = req.method;
        let methodHandler = handler[method];

        if (!methodHandler) {
          res.status(404).end();
          return;
        }

        result = await methodHandler(req);
      } else {
        result = await handler(req);
      }
    } catch (e) {
      if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
        _sentry_node__WEBPACK_IMPORTED_MODULE_0__["captureException"](e, {
          contexts: {
            headers: req.headers
          }
        });
        await _sentry_node__WEBPACK_IMPORTED_MODULE_0__["flush"](2000);
      }

      console.log(e);
      return res.status(500).end();
    }

    if (result.headers) {
      for (let header of Object.keys(result.headers)) {
        res.setHeader(header, result.headers[header]);
      }
    }

    if (result.status !== 200) console.log(result.result);
    if (typeof result.result !== 'object') return res.status(result.status).send(result.result);
    return res.status(result.status).json(result.result);
  };
};
const multiRouteHandler = (query, handlers) => {
  return APIHandler(async req => {
    let route = typeof req.query[query] === 'string' ? req.query[query] : req.query[query][0];
    return handlers[route](req);
  });
};
async function callApi(endpoint, msg, method) {
  var _result$headers$get;

  let result = await fetch(endpoint, {
    method: method ? method : msg ? "POST" : "GET",
    headers: {
      'Content-type': typeof msg === 'object' ? 'application/json' : 'text/html'
    },
    body: typeof msg === 'string' ? msg : JSON.stringify(msg)
  });
  return {
    status: result.status,
    result: (_result$headers$get = result.headers.get('Content-type')) !== null && _result$headers$get !== void 0 && _result$headers$get.includes('application/json') ? await result.json() : await result.text()
  };
}
function useApi(deps, successCallback) {
  let {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('normal');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => setState('normal'), deps);

  let call = async (path, msg, method) => {
    setState('loading');
    let res = await callApi(path, msg, method);

    if (res.status === 200) {
      if (successCallback) await successCallback(res.result);
      setState('success');
    } else setState('error');

    return res;
  };

  return [state, call, setState];
}
function useApiData(path, initialData) {
  return swr__WEBPACK_IMPORTED_MODULE_2___default()(path ? path : null, async path => {
    let res = await callApi(path);
    if (res.status = 200) return res.result;
    return res;
  }, {
    initialData
  });
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1N0Q":
/***/ (function(module, exports) {

module.exports = require("@prisma/client");

/***/ }),

/***/ "1ygI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1N0Q");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
const globalAny = global;

let prisma;

if (process.env.APP_ENV === "production") {
  prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__["PrismaClient"]();
} else {
  if (!globalAny.prisma) {
    globalAny.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__["PrismaClient"]();
  }

  prisma = globalAny.prisma;
}

/* harmony default export */ __webpack_exports__["a"] = (prisma);

/***/ }),

/***/ "2CTY":
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js/pure");

/***/ }),

/***/ "2k9J":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Event update no account\",\"Alias\":\"event-update-no-account\",\"Subject\":\"{{event_name}} has been updated\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"event_name\":\"event_name_Value\",\"event_page_url\":\"cohort_page_url_Value\"}}");

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WLep");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3vLF":
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5++N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return useUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useProfileData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useCourseData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useEventData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useCohortData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useUserCohorts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return useUserCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useCourses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useDiscounts; });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("0CBl");


const useUserData = () => {
  return swr__WEBPACK_IMPORTED_MODULE_0___default()('/api/get/whoami', async api => {
    let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
    return res.result;
  });
};
const useProfileData = (username, initialData) => {
  return swr__WEBPACK_IMPORTED_MODULE_0___default()(username ? '/api/people/' + username : null, async api => {
    let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
    if (res.status === 200) return res.result;else return false;
  }, {
    initialData
  });
};
const useCourseData = (id, initialData) => {
  return swr__WEBPACK_IMPORTED_MODULE_0___default()(id ? '/api/courses/' + id : null, async api => {
    let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
    if (res.status === 200) return res.result;
  }, {
    initialData
  });
};
const useEventData = (id, initialData) => swr__WEBPACK_IMPORTED_MODULE_0___default()(`/api/events/${id}`, async api => {
  let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
  if (res.status === 200) return res.result;else return false;
}, {
  initialData
});
const useCohortData = (cohort, initialData) => {
  return swr__WEBPACK_IMPORTED_MODULE_0___default()(cohort ? `/api/cohorts/${cohort}` : null, async api => {
    let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
    if (res.status === 200) return res.result;else return false;
  }, {
    initialData,
    revalidateOnMount: true
  });
};
const useUserCohorts = () => {
  return swr__WEBPACK_IMPORTED_MODULE_0___default()('/api/get/user_cohorts', async api => {
    let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
    if (res.status === 200) return res.result;
  });
};
const useUserCourses = () => {
  return swr__WEBPACK_IMPORTED_MODULE_0___default()('/api/get/user_courses', async api => {
    let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
    if (res.status === 200) return res.result;
  });
};
const useCourses = options => {
  return swr__WEBPACK_IMPORTED_MODULE_0___default()(`/api/courses${options !== null && options !== void 0 && options.type ? `?type=${options.type}` : ''}`, async api => {
    let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
    return res.result;
  }, {
    initialData: options === null || options === void 0 ? void 0 : options.initialData
  });
};
const useDiscounts = id => {
  return swr__WEBPACK_IMPORTED_MODULE_0___default()(`/api/courses/${id}/discounts`, async api => {
    let res = await Object(_apiHelpers__WEBPACK_IMPORTED_MODULE_1__[/* callApi */ "b"])(api);
    if (res.status === 200) return res.result;
  });
};

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6d7b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StickyWrapper */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Hbq");
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mirl");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_clientData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("GRjo");
/* harmony import */ var src_apiHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0CBl");
/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("BTHN");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const Enroll = props => {
  var _props$course, _props$course3, _props$course4, _props$course5, _props$course6, _props$course7;

  let {
    data: discounts
  } = Object(src_clientData__WEBPACK_IMPORTED_MODULE_5__[/* useLocalDiscounts */ "c"])();
  let price = ((_props$course = props.course) === null || _props$course === void 0 ? void 0 : _props$course.cost) || 0;
  let discount = discounts === null || discounts === void 0 ? void 0 : discounts.find(d => {
    var _props$course2;

    return d.course == ((_props$course2 = props.course) === null || _props$course2 === void 0 ? void 0 : _props$course2.id);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    (async function () {
      if (!discount || !discounts) return;
      let res = await Object(src_apiHelpers__WEBPACK_IMPORTED_MODULE_6__[/* callApi */ "b"])('/api/discounts/' + discount.code);

      if (res.status !== 200 || res.result.deleted || res.result.max_redeems !== 0 && res.result.max_redeems <= res.result.redeems) {
        Object(src_clientData__WEBPACK_IMPORTED_MODULE_5__[/* setDiscounts */ "b"])(discounts.filter(d => d.code !== (discount === null || discount === void 0 ? void 0 : discount.code)));
      }
    })();
  }, [discount, discounts]);

  if (discount) {
    if (discount.type === 'absolute') price = price - discount.amount;else price = price - Math.floor(discount.amount / 100 * price);
  } //Laying out the Enroll Panel


  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__[/* Box */ "b"], {
    gap: 16
  }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__[/* Box */ "b"], {
    gap: 8
  }, [discount ? react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Cost, {
    green: true
  }, '$' + price) : null, react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Cost, {
    discounted: !!discount
  }, '$' + ((_props$course3 = props.course) === null || _props$course3 === void 0 ? void 0 : _props$course3.cost))]), react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__[/* Box */ "b"], {
    gap: 8,
    style: {
      color: _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].textSecondary
    }
  }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('b', (_props$course4 = props.course) === null || _props$course4 === void 0 ? void 0 : _props$course4.duration), ((_props$course5 = props.course) === null || _props$course5 === void 0 ? void 0 : _props$course5.cohort_max_size) === 0 ? null : react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('b', `Up to ${(_props$course6 = props.course) === null || _props$course6 === void 0 ? void 0 : _props$course6.cohort_max_size} learners`), react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__[/* Box */ "b"], {
    gap: 4
  }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('b', 'Prerequisites'), react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(components_Text__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    source: (_props$course7 = props.course) === null || _props$course7 === void 0 ? void 0 : _props$course7.prerequisites,
    disallowedTypes: ["heading"]
  })])]), props.children]);
};

/* harmony default export */ __webpack_exports__["a"] = (Enroll);

const Cost = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('span', {
  target: "egkpgdv0"
})("width:min-content;line-height:56px;font-size:56px;font-weight:bold;", props => props.green ? `color: ${_Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].accentSuccess};` : '', " ", props => props.discounted ? `
font-size: 32px;
line-height: 32px;
background: linear-gradient(20deg, transparent 45.75%, currentColor 47.5%, currentColor 52.5%, transparent 53.25%);
` : '', true ? "" : undefined); // Add a wrapper around Enroll Panel so apply the sticky feature on screens above 768px


const StickyWrapper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "egkpgdv1"
})(true ? {
  name: "h8kt2i",
  styles: "position:sticky;top:32px;"
} : undefined);

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7SPv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseDataQuery", function() { return courseDataQuery; });
/* harmony import */ var _src_apiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0CBl");
/* harmony import */ var _src_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rkef");
/* harmony import */ var _src_discourse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+khs");
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fdqv");
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("T4kY");
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(runtypes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1ygI");






const UpdateCourseMsgValidator = runtypes__WEBPACK_IMPORTED_MODULE_4__["Partial"]({
  invite_only: runtypes__WEBPACK_IMPORTED_MODULE_4__["Boolean"],
  cost: runtypes__WEBPACK_IMPORTED_MODULE_4__["Number"],
  cohort_max_size: runtypes__WEBPACK_IMPORTED_MODULE_4__["Number"],
  name: runtypes__WEBPACK_IMPORTED_MODULE_4__["String"],
  card_image: runtypes__WEBPACK_IMPORTED_MODULE_4__["String"],
  status: runtypes__WEBPACK_IMPORTED_MODULE_4__["Union"](runtypes__WEBPACK_IMPORTED_MODULE_4__["Literal"]("live"), runtypes__WEBPACK_IMPORTED_MODULE_4__["Literal"]('draft')),
  prerequisites: runtypes__WEBPACK_IMPORTED_MODULE_4__["String"],
  duration: runtypes__WEBPACK_IMPORTED_MODULE_4__["String"],
  description: runtypes__WEBPACK_IMPORTED_MODULE_4__["String"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_apiHelpers__WEBPACK_IMPORTED_MODULE_0__[/* APIHandler */ "a"])({
  POST: updateCourse,
  GET: getCourseData
}));

async function updateCourse(req) {
  let msg;

  try {
    msg = UpdateCourseMsgValidator.check(req.body);
  } catch (e) {
    return {
      status: 400,
      result: e.toString()
    };
  }

  let courseId = parseInt(req.query.id);
  if (Number.isNaN(courseId)) return {
    status: 400,
    result: "ERROR: Course id is not a number"
  };
  let user = Object(_src_token__WEBPACK_IMPORTED_MODULE_1__[/* getToken */ "a"])(req);
  if (!user) return {
    status: 403,
    result: "ERROR: No user logged in"
  };
  let course = await lib_prisma__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].courses.findUnique({
    where: {
      id: courseId
    },
    select: {
      status: true,
      name: true,
      category_id: true,
      maintainer_groupTodiscourse_groups: true,
      course_groupTodiscourse_groups: true,
      course_maintainers: {
        where: {
          maintainer: user.id
        }
      },
      course_cohorts: {
        select: {
          discourse_groups: true,
          name: true
        }
      }
    }
  });
  if (!course || course.course_maintainers.length === 0) return {
    status: 403,
    result: `ERROR: user is not maintainer of course ${courseId}`
  };
  if (msg.description && msg.description.length > 200) return {
    status: 400,
    result: "ERROR: description must be less than 200 characters"
  };
  if (msg.name && msg.name.length > 50) return {
    status: 400,
    result: "ERROR: name must be less than 50 characters"
  };
  let slug;

  if (msg.name) {
    slug = Object(src_utils__WEBPACK_IMPORTED_MODULE_3__[/* slugify */ "g"])(msg.name);
    await Promise.all([Object(_src_discourse__WEBPACK_IMPORTED_MODULE_2__[/* updateGroup */ "k"])(course.maintainer_groupTodiscourse_groups.id, slug + '-m'), Object(_src_discourse__WEBPACK_IMPORTED_MODULE_2__[/* updateCategory */ "j"])(course.category_id, {
      name: msg.name,
      slug: slug
    }), Object(_src_discourse__WEBPACK_IMPORTED_MODULE_2__[/* updateGroup */ "k"])(course.course_groupTodiscourse_groups.id, slug), ...course.course_cohorts.map(cohort => Object(_src_discourse__WEBPACK_IMPORTED_MODULE_2__[/* updateGroup */ "k"])(cohort.discourse_groups.id, slug + '-' + cohort.name))]);
  }

  let newData = await lib_prisma__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].courses.update({
    where: {
      id: courseId
    },
    data: {
      slug,
      invite_only: msg.invite_only,
      cohort_max_size: msg.cohort_max_size,
      duration: msg.duration,
      status: msg.status,
      card_image: msg.card_image,
      prerequisites: msg.prerequisites,
      description: msg.description,
      cost: msg.cost,
      name: msg.name
    }
  });
  return {
    status: 200,
    result: newData
  };
}

const courseDataQuery = id => lib_prisma__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].courses.findUnique({
  where: {
    id
  },
  include: {
    course_maintainers: {
      include: {
        people: {
          select: {
            display_name: true,
            username: true,
            link: true,
            bio: true
          }
        }
      }
    },
    course_templates: true,
    course_cohorts: {
      include: {
        courses: {
          select: {
            name: true
          }
        },
        cohort_facilitators: {
          select: {
            facilitator: true,
            people: {
              select: {
                display_name: true,
                username: true
              }
            }
          }
        },
        people: {
          select: {
            display_name: true,
            username: true
          }
        },
        people_in_cohorts: {
          select: {
            people: {
              select: {
                id: true
              }
            }
          }
        }
      }
    }
  }
});

async function getCourseData(req) {
  let id = parseInt(req.query.id);
  if (Number.isNaN(id)) return {
    status: 400,
    result: "ERROR: Course id is not a number"
  };
  let data = await courseDataQuery(id);
  if (!data) return {
    status: 403,
    result: `ERROR: no course with id ${id} found`
  };
  return {
    status: 200,
    result: data
  };
}

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "8yhK":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Event RSVP\",\"Alias\":\"event-rsvp\",\"Subject\":\"You've RSVP'd to {{event_name}}\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"event_name\":\"event_name_Value\",\"event_page_url\":\"cohort_page_url_Value\"}}");

/***/ }),

/***/ "9GwF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoList; });
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("T4kY");
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(runtypes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rk+T");




let TodoParser = runtypes__WEBPACK_IMPORTED_MODULE_1__["Array"](runtypes__WEBPACK_IMPORTED_MODULE_1__["Boolean"]);
function TodoList(props) {
  let items = props.items.filter(i => !!i);
  let {
    0: checked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new Array(items.length).fill(false));
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!props.persistKey) return;
    let savedValue = localStorage.getItem(props.persistKey);

    try {
      let localData = TodoParser.check(JSON.parse(savedValue || ''));
      setChecked(localData);
    } catch (e) {}
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!props.persistKey) return;
    localStorage.setItem(props.persistKey, JSON.stringify(checked));
  }, [checked]);
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], items.map((todo, index) => {
    return react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(_Form__WEBPACK_IMPORTED_MODULE_3__[/* CheckBox */ "a"], [react_hyperscript__WEBPACK_IMPORTED_MODULE_0___default()(_Form__WEBPACK_IMPORTED_MODULE_3__[/* Input */ "d"], {
      type: 'checkbox',
      checked: checked[index],
      onChange: e => {
        let newValues = checked.slice(0);
        newValues[index] = e.currentTarget.checked;
        setChecked(newValues);
      }
    }), todo]);
  }));
}

/***/ }),

/***/ "9Hbq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Body; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Box; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ LabelBox; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ FormBox; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* binding */ Seperator; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* binding */ TwoColumn; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* binding */ Sidebar; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* binding */ WhiteContainer; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ FlexGrid; });

// UNUSED EXPORTS: PageWrapper, LandingPageFeatures

// EXTERNAL MODULE: external "@emotion/styled-base"
var styled_base_ = __webpack_require__("hsUr");
var styled_base_default = /*#__PURE__*/__webpack_require__.n(styled_base_);

// EXTERNAL MODULE: external "@emotion/core"
var core_ = __webpack_require__("3vLF");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-hyperscript"
var external_react_hyperscript_ = __webpack_require__("WkmV");
var external_react_hyperscript_default = /*#__PURE__*/__webpack_require__.n(external_react_hyperscript_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/Tokens.ts
var Tokens = __webpack_require__("mirl");

// CONCATENATED MODULE: ./components/Layout/GlobalStyleSheet.ts


const GlobalStyleSheet = /*#__PURE__*/Object(core_["css"])(".textSecondary{color:", Tokens["d" /* colors */].textSecondary, "};.bgtextSecondary{background-color:", Tokens["d" /* colors */].textSecondary, "};.accentSuccess{color:", Tokens["d" /* colors */].accentSuccess, "};.accentRed{color:", Tokens["d" /* colors */].accentRed, "};.mono{font-family:'Roboto Mono',mono;}input::placeholder{font-style:italic;}html{overflow-y:scroll;overflow-x:hidden;line-height:1.375;font-size:16px;font-family:'Lato',sans-serif;color:", Tokens["d" /* colors */].textPrimary, ";scroll-behavior:smooth;}body{background-color:", Tokens["d" /* colors */].appBackground, ";}a.notBlue{color:inherit;}a.notBlue:visited{color:inherit;}a.notBlue:hover{color:", Tokens["d" /* colors */].linkHover, ";}a.notBlue:visited{color:inherit;}a.notBlue:hover{color:", Tokens["d" /* colors */].linkHover, ";}a:visited{color:blue;}a:hover{color:#00008B;}img{image-rendering:pixelated;image-rendering:crisp-edges;}h1,h2{font-family:'Roboto Mono',monospace;font-weight:normal;}h1,h2,h3,h4,h5,h6{margin:0;}h1{font-size:2.8rem;font-weight:bold;}h2{font-size:2rem;font-weight:bold;}h3{font-size:1.375rem;font-weight:900;}h4{font-weight:900;}p{margin:0;}p.big{font-size:1.25rem;}hr{width:100%;color:black;border:1px solid;}small{color:", Tokens["d" /* colors */].textSecondary, ";display:inline-block;line-height:1.25rem;font-size:.875rem;}li{margin-left:32px;}" + (true ? "" : undefined));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./components/Icons.tsx
var Icons = __webpack_require__("FPCx");

// EXTERNAL MODULE: ./src/data.ts
var data = __webpack_require__("5++N");

// EXTERNAL MODULE: ./src/hooks.ts
var hooks = __webpack_require__("mB65");

// EXTERNAL MODULE: ./components/Form.ts
var Form = __webpack_require__("rk+T");

// EXTERNAL MODULE: ./components/Button.ts
var Button = __webpack_require__("Hzj1");

// EXTERNAL MODULE: ./components/Modal.ts
var Modal = __webpack_require__("wyA/");

// EXTERNAL MODULE: ./src/apiHelpers.ts
var apiHelpers = __webpack_require__("0CBl");

// CONCATENATED MODULE: ./components/Layout/Header.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }














// import {DISCOURSE_URL} from 'src/constants'
let TWITTER_URL = 'https://twitter.com/BojaleLabs';
const COPY = {
  feedbackTitle: "Tell us what's on your mind!",
  feedbackSuccess: "🎉 Thank you for your thoughts 🎉"
};
function Header() {
  const {
    data: user,
    mutate: mutateUser
  } = Object(data["i" /* useUserData */])();
  let mobile = Object(hooks["c" /* useMediaQuery */])('(max-width:768px)');
  return external_react_hyperscript_default()(HeaderContainer, [external_react_hyperscript_default()(link_default.a, {
    href: user ? '/dashboard' : '/',
    passHref: true
  }, external_react_hyperscript_default()('a', [Icons["e" /* Logo */]])), mobile ? external_react_hyperscript_default()(MobileMenu, {
    user,
    mutateUser
  }) : external_react_hyperscript_default()(Container, {}, [external_react_hyperscript_default()(LoginButtons, {
    user,
    mutateUser
  }), !user ? null : external_react_hyperscript_default()(FeedbackModal), external_react_hyperscript_default()(Seperator, {
    style: {
      height: "100%"
    }
  }), !user ? null : external_react_hyperscript_default()(NavLink, {
    href: TWITTER_URL
  }, 'Twitter'), external_react_hyperscript_default()(link_default.a, {
    href: "/courses",
    passHref: true
  }, external_react_hyperscript_default()(NavLink, 'Courses')), external_react_hyperscript_default()(LearnMenu)])]);
}

const LearnMenu = () => {
  let {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  let menuRef = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    if (!open || !menuRef) return;

    let listener = e => {
      var _menuRef$current;

      if (!((_menuRef$current = menuRef.current) !== null && _menuRef$current !== void 0 && _menuRef$current.contains(e.target))) setOpen(false);
    };

    window.addEventListener('click', listener);
    return () => window.removeEventListener('click', listener);
  }, [open]);
  return external_react_hyperscript_default()('div', [external_react_hyperscript_default()(CoursesButton, {
    onClick: () => setOpen(!open)
  }, 'Learn'), !open ? null : external_react_hyperscript_default()(Dropdown, {
    ref: menuRef,
    onClick: () => setOpen(false)
  }, [external_react_hyperscript_default()(LearnMenuItems)])]);
};

let LearnMenuItems = () => external_react_hyperscript_default()('div', {
  style: {
    textAlign: 'right',
    display: "grid"
  }
}, [external_react_hyperscript_default()(link_default.a, {
  href: "/courses"
}, external_react_hyperscript_default()(LearnMenuItem, [external_react_hyperscript_default()('b.mono', 'courses'), external_react_hyperscript_default()('p', "structured deep learning")])), // h(Link, {href:"/clubs"}, h(LearnMenuItem, [
//   h('b.mono', 'clubs'),
//   h('p', "social peer learning")
// ])),
external_react_hyperscript_default()(link_default.a, {
  href: "/events"
}, external_react_hyperscript_default()(LearnMenuItem, [external_react_hyperscript_default()('b.mono', 'events'), external_react_hyperscript_default()('p', "single sessions")]))]);

let LearnMenuItem = /*#__PURE__*/styled_base_default()('a', {
  target: "ekal7xw0"
})("&:hover{background-color:", Tokens["d" /* colors */].accentLightBlue, ";cursor:pointer;}color:", Tokens["d" /* colors */].textSecondary, ";padding:8px 16px;" + (true ? "" : undefined));

const Dropdown = /*#__PURE__*/styled_base_default()('nav', {
  target: "ekal7xw1"
})("position:absolute;box-sizing:border-box;z-index:9;border:1px solid;border-radius:2px;margin-left:-120px;transform:translate(0px,8px);background-color:", Tokens["d" /* colors */].appBackground, ";" + (true ? "" : undefined));

const MobileMenu = props => {
  let {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  let router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    let handleRouteChange = () => setOpen(false);

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
  if (open) return external_react_hyperscript_default()(FullPageOverlay, {}, external_react_hyperscript_default()(Box, {
    padding: 24
  }, [external_react_hyperscript_default()(HeaderContainer, {
    style: {
      paddingBottom: "0px"
    }
  }, [external_react_hyperscript_default()(link_default.a, {
    href: props.user ? '/dashboard' : '/',
    passHref: true
  }, external_react_hyperscript_default()('a', [Icons["e" /* Logo */]])), external_react_hyperscript_default()(Container, [external_react_hyperscript_default()(Button["e" /* LinkButton */], {
    style: {
      justifySelf: 'right',
      textDecoration: "none"
    },
    onClick: () => {
      setOpen(false);
    }
  }, 'close')])]), external_react_hyperscript_default()(Box, {
    style: {
      textAlign: "right"
    }
  }, [external_react_hyperscript_default()(link_default.a, {
    href: "/courses"
  }, external_react_hyperscript_default()(NavLink, [external_react_hyperscript_default()('b', 'courses'), external_react_hyperscript_default()('p', "structured deep learning")])), // h(Link, {href:"/clubs"}, h(NavLink, [
  //   h('b', 'clubs'),
  //   h('p', "social peer learning")
  // ])),
  external_react_hyperscript_default()(link_default.a, {
    href: "/events"
  }, external_react_hyperscript_default()(NavLink, [external_react_hyperscript_default()('b', 'events'), external_react_hyperscript_default()('p', "single sessions")])), !props.user ? null : external_react_hyperscript_default()(NavLink, {
    href: TWITTER_URL
  }, external_react_hyperscript_default()('b', 'twitter')), // h(Link, {href: "/library", passHref:true}, h(NavLink, {}, h('b', 'library'))),
  // h(Seperator),
  external_react_hyperscript_default()(Box, {
    gap: 16,
    style: {
      textAlign: 'right'
    }
  }, [external_react_hyperscript_default()(LoginButtons, props)]), external_react_hyperscript_default()(Seperator), !props.user ? null : external_react_hyperscript_default()(Feedback)])]));else return external_react_hyperscript_default()(Container, [external_react_hyperscript_default()(Button["e" /* LinkButton */], {
    style: {
      justifySelf: 'right',
      paddingLeft: '10px',
      textDecoration: "none"
    },
    onClick: () => setOpen(true)
  }, 'menu')]);
};

const LoginButtons = props => {
  let router = Object(router_["useRouter"])();
  let redirect = router.pathname === '/' ? '' : '?redirect=' + encodeURIComponent(router.asPath);
  if (!props.user) return external_react_hyperscript_default()(external_react_["Fragment"], {}, [external_react_hyperscript_default()(link_default.a, {
    href: '/signup'
  }, external_react_hyperscript_default()(NavLink, 'sign up')), external_react_hyperscript_default()(link_default.a, {
    href: '/login' + redirect
  }, external_react_hyperscript_default()(NavLink, "log in"))]);else {
    return external_react_hyperscript_default()(NavLink, {
      onClick: async e => {
        e.preventDefault();
        let res = await fetch('/api/logout');

        if (res.status === 200) {
          props.mutateUser(false);
        }
      }
    }, 'Logout');
  }
};

const Feedback = () => {
  let router = Object(router_["useRouter"])();
  let {
    data: user
  } = Object(data["i" /* useUserData */])();
  let {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])({
    email: '',
    feedback: ''
  });
  let [status, callFeedback, setStatus] = Object(apiHelpers["d" /* useApi */])([]);

  let onSubmit = e => {
    e.preventDefault();
    if (status === 'success') return;
    callFeedback('/api/feedback', {
      feedback: form.feedback,
      email: user ? undefined : form.email,
      page: router.pathname,
      username: user ? user.username : undefined
    });
  };

  if (status === 'success') return external_react_hyperscript_default()(Box, {
    style: {
      textAlign: 'center'
    }
  }, [COPY.feedbackSuccess, external_react_hyperscript_default()('br'), external_react_hyperscript_default()(Button["e" /* LinkButton */], {
    onClick: () => {
      setStatus('normal');
      setForm(_objectSpread(_objectSpread({}, form), {}, {
        feedback: ''
      }));
    }
  }, "I have more feedback!")]);
  return external_react_hyperscript_default()(FormBox, {
    onSubmit,
    gap: 16
  }, [external_react_hyperscript_default()('h4', COPY.feedbackTitle), external_react_hyperscript_default()(Form["h" /* Textarea */], {
    value: form.feedback,
    required: true,
    onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
      feedback: e.currentTarget.value
    }))
  }), user ? null : external_react_hyperscript_default()(LabelBox, [external_react_hyperscript_default()('h4', "Your email (optional)"), external_react_hyperscript_default()(Form["d" /* Input */], {
    type: 'email',
    value: form.email,
    onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
      email: e.currentTarget.value
    }))
  })]), external_react_hyperscript_default()(Button["g" /* Secondary */], {
    type: 'submit',
    disabled: form.feedback === '',
    style: {
      justifySelf: 'center'
    }
  }, "Submit")]);
};

const FeedbackModal = () => {
  let {
    0: display,
    1: setDisplay
  } = Object(external_react_["useState"])(false);
  return external_react_hyperscript_default()(external_react_["Fragment"], [external_react_hyperscript_default()(NavLink, {
    onClick: () => setDisplay(true)
  }, ''), external_react_hyperscript_default()(Modal["a" /* Modal */], {
    display,
    onExit: () => setDisplay(false)
  }, external_react_hyperscript_default()(Feedback))]);
};

const CoursesButton = /*#__PURE__*/styled_base_default()(Button["f" /* Primary */], {
  target: "ekal7xw2"
})(true ? {
  name: "1g9jcxr",
  styles: "color:green;background-color:white;border-color:#19ef7d;padding:7px 16px;"
} : undefined);

const FullPageOverlay = /*#__PURE__*/styled_base_default()('div', {
  target: "ekal7xw3"
})("display:block;position:fixed;z-index:11;top:0;left:0;width:100vw;height:100vh;background-color:", Tokens["d" /* colors */].appBackground, ";" + (true ? "" : undefined));

const Container = /*#__PURE__*/styled_base_default()('div', {
  target: "ekal7xw4"
})(true ? {
  name: "1kh6546",
  styles: "justify-self:right;align-self:center;align-items:center;display:grid;grid-gap:32px;grid-auto-flow:column;grid-auto-columns:max-content;"
} : undefined);

const NavLink = /*#__PURE__*/styled_base_default()('a', {
  target: "ekal7xw5"
})("font-family:'Roboto Mono',monospace;text-decoration:none;color:", Tokens["d" /* colors */].textSecondary, ";&:visited{color:", Tokens["d" /* colors */].textSecondary, ";}&:hover{cursor:pointer;color:#00008B;}" + (true ? "" : undefined));

const HeaderContainer = /*#__PURE__*/styled_base_default()('div', {
  target: "ekal7xw6"
})("display:grid;grid-template-columns:auto auto;height:32px;padding-bottom:64px;align-items:center;", Tokens["a" /* Mobile */], "{padding-bottom:32px;padding-top:16px;}" + (true ? "" : undefined));
// CONCATENATED MODULE: ./components/Layout/Footer.ts


function Footer_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }




function Footer() {
  return external_react_hyperscript_default()(FooterContainer, [external_react_hyperscript_default()(Body, [external_react_hyperscript_default()(Columns, [// h(Box, {gap: 4}, [
  // h('h4', "More Info"),
  // h(Link, {href: '/team', passHref: true}, h(FooterLink, 'About the Team')),
  // h(Link, {href: '/manual', passHref: true}, h(FooterLink, 'KrakenEdu Manual')),
  // h(Link, {href: '/library', passHref: true}, h(FooterLink, 'KrakenEdu Library')),
  // h(Link, {href: '/faq', passHref: true}, h(FooterLink, 'FAQ')),
  // ]),
  external_react_hyperscript_default()(Box, {
    gap: 4
  }, [external_react_hyperscript_default()('h4', "Contact Us"), external_react_hyperscript_default()(FooterLink, {
    href: 'https://twitter.com/BojaleLabs'
  }, 'Twitter'), external_react_hyperscript_default()(FooterLink, {
    href: 'mailto:contact@reftify.com'
  }, 'Email')]), external_react_hyperscript_default()(Box, {
    gap: 4
  }, [// h('h4', "Technical"),
    // h(FooterLink, {href: 'https://gitlab.com/jaredpereira/hyperlink-academy'}, "Source Code"),
    // h(FooterLink, {href: 'https://gitlab.com/jaredpereira/hyperlink-academy/-/issues/new?'}, "Report a Bug"),
  ]), external_react_hyperscript_default()(Box, {
    gap: 4
  }, [// h('h4', "Policies"),
    // h(FooterLink, {href: '/terms'}, "Terms and Conditions"),
    // h(FooterLink, {href: '/privacy'}, "Privacy Policy"),
  ])]), external_react_hyperscript_default()('br'), external_react_hyperscript_default()(Seperator), external_react_hyperscript_default()('br'), external_react_hyperscript_default()('p', `© BojaleLabs Inc`)])]);
}

const FooterLink = /*#__PURE__*/styled_base_default()('a', {
  target: "edum1gy0"
})("color:", Tokens["d" /* colors */].textSecondary, ";&:visited{color:", Tokens["d" /* colors */].textSecondary, ";}&:hover{color:", Tokens["d" /* colors */].linkHover, ";}text-decoration:none;" + (true ? "" : undefined));

const FooterContainer = /*#__PURE__*/styled_base_default()('footer', {
  target: "edum1gy1"
})("background-color:", Tokens["d" /* colors */].grey95, ";width:100vw;color:", Tokens["d" /* colors */].textSecondary, ";box-sizing:border-box;margin-top:32px;" + (true ? "" : undefined));

const Columns = /*#__PURE__*/styled_base_default()('div', {
  target: "edum1gy2"
})(true ? {
  name: "16rxac2",
  styles: "display:grid;grid-gap:32px;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));grid-auto-flow:row;"
} : undefined);
// CONCATENATED MODULE: ./components/Layout/index.ts


function Layout_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const Layout = props => {
  return external_react_hyperscript_default()(external_react_["Fragment"], [external_react_hyperscript_default()(core_["Global"], {
    styles: GlobalStyleSheet
  }), external_react_hyperscript_default()(head_default.a, {
    children: []
  }, external_react_hyperscript_default()('link', {
    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,400;1,700;1,900&family=Roboto+Mono:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
    rel: "stylesheet"
  })), external_react_hyperscript_default()(PageWrapper, [external_react_hyperscript_default()(Body, {}, [external_react_hyperscript_default()(Header, []), props.children]), external_react_hyperscript_default()(Footer)])]);
};

/* harmony default export */ var components_Layout = __webpack_exports__["j"] = (Layout); // export const PageWrapper = styled ('div')`
// min-height: 100%;
// display: grid;
// grid-template-rows: auto 1fr auto

const PageWrapper = /*#__PURE__*/styled_base_default()('div', {
  target: "e5febq80"
})(true ? {
  name: "1ds8s3w",
  styles: "min-height:100vh;display:grid;grid-template-rows:1fr auto;"
} : undefined);
const Body = /*#__PURE__*/styled_base_default()('div', {
  target: "e5febq81"
})("max-width:1024px;width:100%;padding:32px;margin:0 auto;box-sizing:border-box;", Tokens["a" /* Mobile */], "{padding:24px;}" + (true ? "" : undefined));
const Box = /*#__PURE__*/styled_base_default()('div', {
  target: "e5febq82"
})("display:grid;", props => props.width ? 'max-width:' + props.width + 'px;' : '', " padding:", props => props.padding ? props.padding : '0', "px;", props => !props.h ? 'grid-auto-rows: min-content;' : `
grid-auto-columns: max-content;
grid-auto-flow: column;
`, ";margin-top:", props => props.mt || 0, "px;grid-gap:", props => props.gap || 16, "px;", props => props.ma ? 'margin: auto;' : '', true ? "" : undefined);
const LabelBox = Box.withComponent('label', {
  target: "e5febq89"
});
const FormBox = Box.withComponent('form', {
  target: "e5febq810"
});
const Seperator = /*#__PURE__*/styled_base_default()('hr', {
  target: "e5febq83"
})("border:1px dashed;border-bottom:none;border-right:none;margin:0;color:", Tokens["d" /* colors */].borderColor, true ? "" : undefined);
const TwoColumn = /*#__PURE__*/styled_base_default()('div', {
  target: "e5febq84"
})("display:grid;grid-template-columns:2fr 1fr;grid-column-gap:64px;grid-row-gap:32px;", Tokens["c" /* Tablet */], "{grid-template-columns:auto;}" + (true ? "" : undefined));
const Sidebar = /*#__PURE__*/styled_base_default()('div', {
  target: "e5febq85"
})("grid-column:2;grid-row:1 / 3;", Tokens["c" /* Tablet */], "{grid-row:2;grid-column:1;}" + (true ? "" : undefined));
const LandingPageFeatures = /*#__PURE__*/styled_base_default()('div', {
  target: "e5febq86"
})("width:100%;margin:auto;display:grid;grid-gap:64px;grid-template-columns:auto auto auto;", Tokens["c" /* Tablet */], "{grid-template-rows:auto auto auto;grid-template-columns:auto;max-width:400px;};" + (true ? "" : undefined));
const WhiteContainer = /*#__PURE__*/styled_base_default()('div', {
  target: "e5febq87"
})("padding:16px;background-color:white;border-style:dashed;border-width:1px;border-color:", Tokens["d" /* colors */].grey55, ";border-radius:2px;" + (true ? "" : undefined));
const FlexGrid = /*#__PURE__*/styled_base_default()('div', {
  target: "e5febq88"
})("width:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(", props => props.min, "px,1fr));", Tokens["a" /* Mobile */], "{grid-template-columns:repeat(auto-fill,minmax(", props => props.mobileMin, "px,1fr));}grid-gap:32px;" + (true ? "" : undefined));

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BTHN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Text; });
/* unused harmony export TextStyles */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("id0+");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mirl");
/* harmony import */ var remark_emoji__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("vglc");
/* harmony import */ var remark_emoji__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_emoji__WEBPACK_IMPORTED_MODULE_4__);





function Text(props) {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(TextStyles, {}, react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    source: props.source,
    plugins: [remark_emoji__WEBPACK_IMPORTED_MODULE_4___default.a],
    disallowedTypes: props.disallowedTypes
  }));
}
const TextStyles = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "ettwqfc0"
})("h1:first-of-type{margin-top:0 !important;margin-left:0 !important;}h1{margin-top:2.75rem;margin-bottom:.5rem;font-family:'Lato',sans-serif;font-weight:bold;font-size:1.8rem;}h2{margin-top:1.75rem;margin-bottom:.75rem;font-family:'Lato',sans-serif;font-weight:900;font-size:1.35rem;font-kerning:normal;}h3{margin-top:1.25rem;margin-bottom:.6rem;font-family:'Lato',sans-serif;font-weight:900;font-size:1.25rem;font-kerning:normal;}h4{margin-top:1.5rem;margin-bottom:.6rem;font-family:'Lato',sans-serif;font-weight:700;font-size:1.1rem;text-transform:uppercase;font-kerning:normal;color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].textSecondary, ";}p{margin-bottom:1rem;margin-top:0;font-size:1rem;line-height:165%;font-kerning:normal;}li{margin-bottom:8px;margin-top:8px;font-size:1rem;line-height:155%;}pre{white-space:pre-wrap;font-family:'Roboto Mono',monospace;background-color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey95, ";color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].textSecondary, ";border-radius:2px;padding:16px;}img{max-width:100%;}blockquote{background-color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].accentPeach, ";margin:0 0 8px 0;padding:16px 32px 4px 32px;color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].textSecondary, ";font-style:italic;}" + (true ? "" : undefined));

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "EQGd":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Cohort Enrollment\",\"Alias\":\"cohort-enrollment\",\"Subject\":\"You're enrolled in {{course_name}} on Kraken!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"course_name\":\"course_name_Value\",\"course_start_date\":\"course_start_date_Value\",\"get_started_topic_url\":\"get_started_topic_url_Value\",\"cohort_page_url\":\"cohort_page_url_Value\",\"cohort_forum_url\":\"cohort_forum_url_Value\"}}");

/***/ }),

/***/ "FPCx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Checkmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return RSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Pencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bell; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mirl");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Checkmark = __jsx("svg", {
  width: "18",
  height: "14",
  viewBox: "0 0 18 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M16.9126 0.374095C17.4792 0.900219 17.512 1.78604 16.9859 2.35264L6.58591 13.5526C6.32102 13.8379 5.9493 14 5.56 14C5.17071 14 4.79899 13.8379 4.53409 13.5526L0.374095 9.07263C-0.152029 8.50604 -0.11922 7.62022 0.447374 7.09409C1.01397 6.56797 1.89979 6.60078 2.42592 7.16737L5.56 10.5425L14.9341 0.447374C15.4602 -0.11922 16.346 -0.152029 16.9126 0.374095Z",
  fill: "currentColor"
}));
const Logo = __jsx("svg", {
  version: "1.0",
  xmlns: "http://www.w3.org/2000/svg",
  width: "50",
  height: "50",
  viewBox: "0 0 1080.000000 1080.000000",
  preserveAspectRatio: "xMidYMid meet"
}, __jsx("g", {
  transform: "translate(0.000000,1080.000000) scale(0.100000,-0.100000)",
  fill: "#000000",
  stroke: "none"
}, __jsx("path", {
  d: "M0 5400 l0 -5400 5400 0 5400 0 0 5400 0 5400 -5400 0 -5400 0 0\n-5400z m3642 714 l3 -177 110 122 109 121 121 0 120 0 -128 -128 c-70 -70\n-127 -133 -127 -139 0 -12 29 -58 193 -310 37 -57 67 -105 67 -108 0 -3 -50\n-4 -111 -3 l-112 3 -79 125 c-44 69 -83 132 -88 140 -7 12 -15 9 -44 -19 l-36\n-35 0 -108 0 -109 -97 3 -98 3 -3 398 -2 397 100 0 100 0 2 -176z m1860 -1 l3\n-177 109 122 109 122 121 0 121 0 -132 -132 -132 -133 55 -85 c30 -47 91 -140\n135 -207 43 -67 79 -124 79 -127 0 -3 -49 -6 -109 -6 l-108 0 -88 138 c-49 75\n-90 139 -92 141 -2 3 -19 -11 -38 -29 l-35 -34 0 -108 0 -109 -97 3 -98 3 -3\n398 -2 397 100 0 100 0 2 -177z m-947 -18 l0 -100 -48 -7 c-63 -9 -119 -46\n-143 -95 -16 -32 -20 -68 -24 -218 l-5 -180 -97 -3 -98 -3 0 346 0 345 100 0\n100 0 0 -56 0 -56 40 51 c22 28 41 51 43 51 1 0 20 7 42 15 22 8 51 14 65 12\n25 -2 25 -3 25 -102z m1892 75 c56 -25 115 -79 148 -135 32 -56 63 -205 50\n-244 -6 -20 -15 -21 -246 -23 l-239 -3 22 -44 c29 -56 79 -84 151 -83 55 0\n115 21 137 46 19 24 28 20 87 -30 l54 -47 -33 -34 c-18 -19 -58 -46 -88 -61\n-49 -24 -66 -27 -160 -27 -99 0 -110 2 -172 33 -73 36 -119 82 -158 159 -22\n42 -25 61 -25 158 0 98 3 116 26 165 44 92 124 160 217 187 63 17 169 10 229\n-17z m744 19 c39 -9 62 -21 93 -53 65 -64 71 -98 71 -391 l0 -250 -97 -3 -98\n-3 0 216 c0 240 -6 272 -59 299 -63 33 -142 10 -167 -49 -11 -26 -14 -86 -14\n-250 l0 -215 -100 0 -100 0 0 345 0 345 100 0 100 0 0 -42 0 -42 28 25 c44 40\n60 51 99 65 47 16 78 17 144 3z m-2165 -14 c71 -21 128 -73 155 -143 21 -53\n23 -73 23 -297 l1 -240 -92 -3 -93 -3 0 36 c0 19 -3 35 -6 35 -3 0 -19 -11\n-36 -25 -35 -29 -115 -55 -173 -55 -117 0 -216 71 -230 165 -17 109 17 185\n106 235 40 23 55 25 159 25 63 0 130 -4 149 -9 l33 -8 -7 33 c-10 45 -30 73\n-61 87 -36 17 -174 15 -224 -3 -23 -8 -46 -15 -50 -15 -6 0 -22 45 -48 136 -3\n13 63 42 123 54 69 14 218 11 271 -5z m1594 -1210 l0 -446 -97 3 -98 3 -5 43\n-5 44 -25 -27 c-14 -15 -47 -38 -75 -51 -145 -69 -333 19 -395 185 -32 88 -33\n213 0 300 73 195 294 271 453 154 l47 -35 0 129 c0 72 3 133 7 136 3 4 48 7\n100 7 l93 0 0 -445z m-1020 254 c140 -32 235 -163 247 -341 l6 -78 -243 0\n-242 0 7 -27 c15 -60 79 -104 155 -105 58 0 83 7 133 39 42 26 45 26 107 -30\nl42 -39 -33 -34 c-19 -19 -59 -47 -89 -62 -49 -24 -66 -27 -160 -27 -96 0\n-110 3 -164 29 -75 37 -131 93 -164 165 -23 49 -27 69 -27 156 0 89 3 107 28\n160 73 157 228 233 397 194z m1320 -231 c5 -210 7 -229 26 -255 46 -62 159\n-52 195 17 17 31 19 60 19 253 l0 218 98 -3 97 -3 0 -345 0 -345 -97 -3 -98\n-3 0 51 0 51 -34 -35 c-65 -70 -165 -93 -257 -61 -55 20 -96 58 -123 115 -19\n42 -21 65 -24 313 l-3 268 98 -3 98 -3 5 -227z m-1890 -93 l0 -265 -790 0\n-790 0 0 265 0 265 790 0 790 0 0 -265z"
}), __jsx("path", {
  d: "M6244 6026 c-33 -15 -68 -62 -79 -108 l-7 -28 146 0 c145 0 146 0\n146 23 0 32 -35 84 -72 107 -38 23 -89 25 -134 6z"
}), __jsx("path", {
  d: "M4825 5785 c-22 -8 -45 -22 -52 -32 -22 -29 -16 -81 13 -110 23 -23\n31 -25 96 -21 66 4 72 6 104 41 44 48 48 102 8 117 -48 18 -127 21 -169 5z"
}), __jsx("path", {
  d: "M6180 5039 c-58 -35 -88 -91 -89 -165 -2 -112 68 -193 170 -194 107\n-1 183 107 163 231 -19 120 -147 187 -244 128z"
}), __jsx("path", {
  d: "M5455 5060 c-43 -18 -107 -115 -88 -134 10 -9 281 -7 287 2 3 5 -6\n32 -19 61 -19 39 -33 55 -59 66 -39 16 -90 18 -121 5z"
})));
const Calendar = __jsx("svg", {
  width: "24",
  height: "22",
  viewBox: "0 0 24 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M3 1.5C3 0.671573 3.67157 0 4.5 0C5.32843 0 6 0.671573 6 1.5V3H8V1.5C8 0.671573 8.67157 0 9.5 0C10.3284 0 11 0.671573 11 1.5V3H13V1.5C13 0.671573 13.6716 0 14.5 0C15.3284 0 16 0.671573 16 1.5V3H18V1.5C18 0.671573 18.6716 0 19.5 0C20.3284 0 21 0.671573 21 1.5V3H23C23.5523 3 24 3.44772 24 4V7V21C24 21.5523 23.5523 22 23 22H1C0.447716 22 0 21.5523 0 21V7V4C0 3.44771 0.447715 3 1 3H3V1.5ZM23 7H1V21H23V7ZM6 9V11H3V9H6ZM6 15V13H3V15H6ZM6 17V19H3V17H6ZM11 11V9H8V11H11ZM11 13V15H8V13H11ZM11 19V17H8V19H11ZM16 9V11H13V9H16ZM16 15V13H13V15H16ZM16 17V19H13V17H16ZM21 11V9H18V11H21ZM21 13V15H18V13H21ZM21 19V17H18V19H21Z",
  fill: "#272727"
}));
const RSS = __jsx("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0.142012 4.57143C6.37347 4.57143 11.3709 7.26828 14.9276 11.4424C17.3309 14.2629 19.4556 18.4059 19.4556 23.8571H24C24 17.1279 21.3561 11.9626 18.3779 8.46736C14.034 3.36933 7.81276 0 0.142012 0V4.57143ZM8.78329 16.6304C6.6636 14.1427 3.80815 12.5714 0.141602 12.5714V8C5.27978 8 9.34966 10.2707 12.2336 13.6553C14.2433 16.0139 15.9049 19.3852 15.9049 23.8571H11.3605C11.3605 20.6148 10.1819 18.2718 8.78329 16.6304ZM6.81657 20.5714C6.81657 22.465 5.29063 24 3.40828 24C1.52594 24 0 22.465 0 20.5714C0 18.6779 1.52594 17.1429 3.40828 17.1429C5.29063 17.1429 6.81657 18.6779 6.81657 20.5714Z",
  fill: "#272727"
}));
const Pencil = __jsx("svg", {
  width: "16",
  height: "24",
  viewBox: "0 0 16 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M10.036 1.1827L8.93784 3.53482L13.8252 5.81668L14.9234 3.46456C15.157 2.96413 14.9407 2.36904 14.4403 2.1354L11.3652 0.699648C10.8648 0.466002 10.2697 0.682272 10.036 1.1827ZM8.17675 5.16518L2.0918 18.1981L2.44376 23.8191L6.97913 20.4799L13.0641 7.44704L8.17675 5.16518Z",
  fill: "#272727"
}));
const Cross = props => {
  return __jsx("svg", {
    width: props.width ? props.width : "17",
    height: "auto",
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.4513 13.2686C17.0761 13.8935 17.0761 14.9065 16.4513 15.5314C15.8265 16.1562 14.8134 16.1562 14.1886 15.5314L8.91992 10.2627L3.65129 15.5314C3.02645 16.1562 2.01339 16.1562 1.38855 15.5314C0.763712 14.9065 0.763712 13.8935 1.38855 13.2686L6.65718 8L1.38855 2.73137C0.763712 2.10653 0.763712 1.09347 1.38855 0.468629C2.01339 -0.15621 3.02645 -0.15621 3.65129 0.468629L8.91992 5.73726L14.1886 0.468631C14.8134 -0.156208 15.8265 -0.156208 16.4513 0.468631C17.0761 1.09347 17.0761 2.10653 16.4513 2.73137L11.1827 8L16.4513 13.2686Z",
    fill: "currentColor"
  }));
};
const Bell = props => __jsx("svg", {
  width: "16",
  height: "18",
  viewBox: "0 0 16 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, __jsx("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M0 16V14H1V8H2V6H3V4H4V3H5V2H6V0H10V2H11V3H12V4H13V6H14V8H15V14H16V16H10V17H9V18H7V17H6V16H0ZM9 1H7V2H9V1ZM5 4H6V5H5V4ZM5 5V6H4V5H5ZM3 9H4V13H3V9Z",
  fill: props.blue ? "blue" : components_Tokens__WEBPACK_IMPORTED_MODULE_1__[/* colors */ "d"].borderColor
}));

/***/ }),

/***/ "GRjo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useLocalDiscounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDiscounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setDiscounts; });
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T4kY");
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(runtypes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("aYjl");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_1__);


let discountsParser = runtypes__WEBPACK_IMPORTED_MODULE_0__["Array"](runtypes__WEBPACK_IMPORTED_MODULE_0__["Record"]({
  course: runtypes__WEBPACK_IMPORTED_MODULE_0__["Number"],
  code: runtypes__WEBPACK_IMPORTED_MODULE_0__["String"],
  amount: runtypes__WEBPACK_IMPORTED_MODULE_0__["Number"],
  date_added: runtypes__WEBPACK_IMPORTED_MODULE_0__["String"],
  type: runtypes__WEBPACK_IMPORTED_MODULE_0__["Union"](runtypes__WEBPACK_IMPORTED_MODULE_0__["Literal"]('percentage'), runtypes__WEBPACK_IMPORTED_MODULE_0__["Literal"]('absolute'))
}));
function useLocalDiscounts() {
  return swr__WEBPACK_IMPORTED_MODULE_1___default()('discounts', async () => {
    return getDiscounts();
  }, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
}
function getDiscounts() {
  try {
    let localData = discountsParser.check(JSON.parse(localStorage.getItem('discounts') || ''));
    return localData;
  } catch (e) {
    localStorage.setItem('discounts', JSON.stringify([]));
    return [];
  }
}
function setDiscounts(discounts) {
  localStorage.setItem('discounts', JSON.stringify(discounts));
  Object(swr__WEBPACK_IMPORTED_MODULE_1__["mutate"])('discounts', discounts);
}

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "Hzj1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Primary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Secondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Destructive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DestructiveSmallButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SmallLinkButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IconButton; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mirl");
/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FPCx");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("kacE");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const Primary = props => {
  let {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(props.status || 'normal');
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {
    if (props.status) setStatus(props.status);

    if (props.status === 'success') {
      let timeout = setTimeout(() => setStatus('normal'), 1000);
      return () => clearTimeout(timeout);
    }
  }, [props.status]);
  let displayComponent = {
    success: _Icons__WEBPACK_IMPORTED_MODULE_3__[/* Checkmark */ "c"],
    loading: react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Loader__WEBPACK_IMPORTED_MODULE_4__[/* default */ "b"]),
    error: props.children,
    normal: props.children
  };
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(PrimaryButton, _objectSpread(_objectSpread({}, props), {}, {
    success: status === 'success'
  }), displayComponent[status]);
};

const PrimaryButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('button', {
  target: "eiqlzln0"
})("font-family:Roboto Mono;font-size:inherit;height:fit-content;width:fit-content;background-color:", _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey15, ";color:white;box-sizing:border-box;border:2px solid;border-color:", _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey15, ";border-radius:2px;padding:8px 16px;text-decoration:none;&:visited{color:white;}&:hover{cursor:pointer;}", props => {
  if (props.disabled) return `
border-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey80};
background-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey80};
color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey55};
`;
}, " ", props => {
  if (props.success) return `
background-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].accentSuccess};
border: none;
`;
}, true ? "" : undefined);

const Secondary = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(Primary, {
  target: "eiqlzln1"
})("color:black;background-color:white;", props => {
  if (props.disabled) return `
border-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey80};
color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey55};
`;
}, " ", props => {
  if (props.success) return `
border-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].accentSuccess};
`;
}, true ? "" : undefined);
const Destructive = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()(Secondary, {
  target: "eiqlzln2"
})("color:", _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].accentRed, ";border-color:", _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].accentRed, ";", props => {
  if (props.disabled) return `
border-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey80};
color: ${_Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey55};
`;
}, true ? "" : undefined);
const DestructiveSmallButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('button', {
  target: "eiqlzln3"
})("color:", _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].accentRed, ";border:none;font-size:1rem;background-color:inherit;&:focus{outline:none;}&:hover{cursor:pointer;}" + (true ? "" : undefined));
const LinkButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('a', {
  target: "eiqlzln4"
})("color:", props => props.textSecondary ? _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].textSecondary : 'blue', ";text-decoration:underline;font-family:'Roboto Mono',monospace;&:hover{cursor:pointer;}" + (true ? "" : undefined));
const SmallLinkButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('a', {
  target: "eiqlzln5"
})("color:", props => props.textSecondary ? _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].textSecondary : 'blue', ";text-decoration:underline;font-family:'Lato',sans-serif;&:hover{cursor:pointer;}" + (true ? "" : undefined));
const BackButton = props => {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('div.textSecondary', ['⇠ ', react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: `${props.href}`,
    as: props.as,
    shallow: props.shallow
  }, react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('a.notBlue', ['Back to ', props.children])) //capitalize the first letter of the page name
  ]);
};
const IconButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('button', {
  target: "eiqlzln6"
})(true ? {
  name: "1owxlb9",
  styles: "background-color:inherit;border:none;padding:0;&:hover{cursor:pointer;}&:focus{outline:none;}"
} : undefined);

/***/ }),

/***/ "Ilxa":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Password Reset\",\"Alias\":\"password-reset\",\"Subject\":\"Set up a new password for your KrakenEdu account\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"action_url\":\"action_url_Value\"}}");

/***/ }),

/***/ "M+vo":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Enroll notification\",\"Alias\":\"enroll-notification\",\"Subject\":\"{{learner}} enrolled in {{course}}\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"learner\":\"learner_Value\",\"course\":\"course_Value\",\"cohort_forum_url\":\"cohort_forum_url_Value\",\"cohort_page_url\":\"cohort_page_url_Value\"}}");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "PNXN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return sendResetPasswordEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return sendVerificationEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendCohortEnrollmentEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sendEventRSVPEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sendEventRSVPNoAccountEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return sendEventUpdateNoAccountEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return sendInviteToCourseEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sendEnrollNotificationEmaill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return sendWatchingNotificationEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sendUnenrollEmail; });
/* unused harmony export sendEmail */
/* unused harmony export sendBatchEmail */
/* harmony import */ var postmark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i5HK");
/* harmony import */ var postmark__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(postmark__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_cohort_enrollment_meta_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EQGd");
var _templates_cohort_enrollment_meta_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t("EQGd", 1);
/* harmony import */ var _templates_welcome_meta_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TZPe");
var _templates_welcome_meta_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t("TZPe", 1);
/* harmony import */ var _templates_password_reset_meta_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Ilxa");
var _templates_password_reset_meta_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t("Ilxa", 1);
/* harmony import */ var _templates_invite_to_course_meta_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yL8g");
var _templates_invite_to_course_meta_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t("yL8g", 1);
/* harmony import */ var _templates_enroll_notification_meta_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("M+vo");
var _templates_enroll_notification_meta_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t("M+vo", 1);
/* harmony import */ var _templates_cohort_unenroll_meta_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("PUlY");
var _templates_cohort_unenroll_meta_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t("PUlY", 1);
/* harmony import */ var _templates_watching_notification_meta_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("z7f3");
var _templates_watching_notification_meta_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t("z7f3", 1);
/* harmony import */ var _templates_event_rsvp_meta_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("8yhK");
var _templates_event_rsvp_meta_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t("8yhK", 1);
/* harmony import */ var _templates_event_rsvp_no_account_meta_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("uNyZ");
var _templates_event_rsvp_no_account_meta_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t("uNyZ", 1);
/* harmony import */ var _templates_event_update_no_account_meta_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("2k9J");
var _templates_event_update_no_account_meta_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t("2k9J", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var client = new postmark__WEBPACK_IMPORTED_MODULE_0__["ServerClient"](process.env.POSTMARK_TOKEN || '');
const sendResetPasswordEmail = sendEmail(_templates_password_reset_meta_json__WEBPACK_IMPORTED_MODULE_3__);
const sendVerificationEmail = sendEmail(_templates_welcome_meta_json__WEBPACK_IMPORTED_MODULE_2__);
const sendCohortEnrollmentEmail = sendEmail(_templates_cohort_enrollment_meta_json__WEBPACK_IMPORTED_MODULE_1__);
const sendEventRSVPEmail = sendEmail(_templates_event_rsvp_meta_json__WEBPACK_IMPORTED_MODULE_8__);
const sendEventRSVPNoAccountEmail = sendEmail(_templates_event_rsvp_no_account_meta_json__WEBPACK_IMPORTED_MODULE_9__);
const sendEventUpdateNoAccountEmail = sendBatchEmail(_templates_event_update_no_account_meta_json__WEBPACK_IMPORTED_MODULE_10__);
const sendInviteToCourseEmail = sendEmail(_templates_invite_to_course_meta_json__WEBPACK_IMPORTED_MODULE_4__);
const sendEnrollNotificationEmaill = sendEmail(_templates_enroll_notification_meta_json__WEBPACK_IMPORTED_MODULE_5__);
const sendWatchingNotificationEmail = sendBatchEmail(_templates_watching_notification_meta_json__WEBPACK_IMPORTED_MODULE_7__);
const sendUnenrollEmail = sendEmail(_templates_cohort_unenroll_meta_json__WEBPACK_IMPORTED_MODULE_6__);
function sendEmail(meta) {
  return async function (email, vars, data) {
    if (process.env.NODE_ENVIRONMENT === 'production') {
      try {
        return client.sendEmailWithTemplate(_objectSpread({
          From: `wecare@krakenedu.com`,
          To: email,
          TemplateAlias: meta.Alias,
          TemplateModel: vars
        }, data));
      } catch (error) {
        console.log(error);
      }
    }
  };
}
function sendBatchEmail(meta) {
  return msgs => {
    if (process.env.NODE_ENVIRONMENT === 'production') return client.sendEmailBatchWithTemplates(msgs.filter(x => x !== undefined).map(msg => {
      return _objectSpread({
        From: `wecare@krakenedu.com`,
        To: (msg === null || msg === void 0 ? void 0 : msg.email) || '',
        TemplateAlias: meta.Alias,
        TemplateModel: (msg === null || msg === void 0 ? void 0 : msg.vars) || {},
        MessageStream: "notifications"
      }, msg === null || msg === void 0 ? void 0 : msg.data);
    }));
  };
}

/***/ }),

/***/ "PUlY":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Cohort Unenroll\",\"Alias\":\"cohort-unenroll\",\"Subject\":\"You've been unenrolled from {{course_name}}\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"course_name\":\"course_name_Value\",\"paid\":\"paid_Value\"}}");

/***/ }),

/***/ "R1ly":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TitleImg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccentImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HalfLoopImg; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_2__);



let TitleImg = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('img', {
  target: "e1gjxmdy0"
})("image-rendering:pixelated;image-rendering:crisp-edges;display:block;border:2px solid;height:", props => props.height ? props.height + 'px' : 'auto', ";width:", props => props.width, "px;" + (true ? "" : undefined));
let AccentImg = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('img', {
  target: "e1gjxmdy1"
})("image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;display:block;border:none;height:", props => props.height ? props.height + 'px' : '100px', ";width:", props => props.width ? props.width + 'px' : '100px', ";" + (true ? "" : undefined));
function HalfLoopImg(props) {
  let {
    0: looping,
    1: setLooping
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    var _imageRef$current;

    if ((_imageRef$current = imageRef.current) !== null && _imageRef$current !== void 0 && _imageRef$current.complete && !looping) {
      setTimeout(() => setLooping(true), props.startLoop);
    }
  }, []);

  if (!looping) {
    return react_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()(AccentImg, {
      ref: imageRef,
      onLoad: () => {
        setTimeout(() => setLooping(true), props.startLoop);
      },
      src: props.src1,
      alt: props.alt
    });
  }

  return react_hyperscript__WEBPACK_IMPORTED_MODULE_2___default()(AccentImg, {
    src: props.src2,
    alt: props.alt
  });
}

/***/ }),

/***/ "SVbj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cohortDataQuery", function() { return cohortDataQuery; });
/* harmony import */ var src_apiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0CBl");
/* harmony import */ var src_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rkef");
/* harmony import */ var emails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("PNXN");
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fdqv");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_discourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+khs");
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1ygI");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = (Object(src_apiHelpers__WEBPACK_IMPORTED_MODULE_0__[/* APIHandler */ "a"])({
  POST: updateCohort,
  GET: getCohortData
}));

async function updateCohort(req) {
  let msg = req.body;
  let cohortId = parseInt(req.query.cohortId);
  if (Number.isNaN(cohortId)) return {
    status: 400,
    result: "ERROR: Cohort id is not a number"
  };
  if (!msg.data) return {
    status: 400,
    result: "Error: invalid request, missing data"
  };
  let user = Object(src_token__WEBPACK_IMPORTED_MODULE_1__[/* getToken */ "a"])(req);
  if (!user) return {
    status: 400,
    result: "ERROR: no user logged in'"
  };
  let cohort = await lib_prisma__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].course_cohorts.findUnique({
    where: {
      id: cohortId
    },
    select: {
      name: true,
      cohort_facilitators: true,
      completed: true,
      live: true,
      start_date: true,
      course: true,
      category_id: true,
      discourse_groups: true,
      courses: {
        select: {
          name: true,
          slug: true,
          description: true
        }
      }
    }
  });
  if (!cohort) return {
    status: 404,
    result: `No cohort with id ${cohortId} found`
  };
  if (!cohort.cohort_facilitators.find(f => user && f.facilitator === user.id)) return {
    status: 401,
    result: `ERROR: User is not facilitator of cohort`
  };
  let completed;

  if (msg.data.completed && !cohort.completed) {
    completed = new Date().toISOString();
  }

  if (msg.data.name && cohort.name !== msg.data.name) {
    await Promise.all([Object(src_discourse__WEBPACK_IMPORTED_MODULE_5__[/* updateGroup */ "k"])(cohort.discourse_groups.id, cohort.courses.slug + '-' + msg.data.name), Object(src_discourse__WEBPACK_IMPORTED_MODULE_5__[/* updateCategory */ "j"])(cohort.category_id, {
      name: cohort.courses.slug + '-' + msg.data.name
    })]);
  }

  if (cohort.live === false && msg.data.live === true) {
    // If we're toggling a cohort live, notify those watching
    let watchers = await lib_prisma__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].watching_courses.findMany({
      where: {
        course: cohort.course
      },
      select: {
        email: true
      }
    });
    await Object(emails__WEBPACK_IMPORTED_MODULE_2__[/* sendWatchingNotificationEmail */ "j"])(watchers.map(watcher => {
      if (!cohort) return;
      return {
        email: watcher.email,
        Metadata: {
          type: "course-watching-notification",
          course: cohort.course.toString()
        },
        vars: {
          course_name: cohort.courses.name,
          cohort_page_url: `https://app.krakenedu.com/courses/${cohort.courses.slug}/${cohort.course}/cohorts/${cohortId}`,
          cohort_start_date: Object(src_utils__WEBPACK_IMPORTED_MODULE_3__[/* prettyDate */ "f"])(cohort.start_date),
          course_description: cohort.courses.description
        }
      };
    }));
  }

  let newData = await lib_prisma__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].course_cohorts.update({
    where: {
      id: cohortId
    },
    data: {
      live: msg.data.live,
      completed,
      name: msg.data.name,
      start_date: msg.data.start_date,
      description: msg.data.description
    }
  });
  if (!newData) return {
    status: 404,
    result: `No cohort with id ${cohortId} found`
  };
  return {
    status: 200,
    result: newData
  };
}

const cohortDataQuery = async (id, userId) => {
  let data = await lib_prisma__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].course_cohorts.findUnique({
    where: {
      id
    },
    select: {
      description: true,
      name: true,
      category_id: true,
      start_date: true,
      id: true,
      live: true,
      completed: true,
      cohort_facilitators: {
        select: {
          facilitator: true,
          people: {
            select: {
              display_name: true,
              username: true,
              bio: true,
              pronouns: true
            }
          }
        }
      },
      people: {
        select: {
          display_name: true,
          username: true,
          bio: true,
          pronouns: true
        }
      },
      cohort_events: {
        include: {
          events: {
            include: {
              people_in_events: {
                select: {
                  people: {
                    select: {
                      username: true,
                      display_name: true,
                      id: true
                    }
                  }
                }
              }
            }
          }
        }
      },
      courses: {
        select: {
          name: true,
          card_image: true,
          cohort_max_size: true,
          id: true,
          type: true,
          slug: true,
          cost: true,
          duration: true,
          description: true,
          category_id: true
        }
      },
      people_in_cohorts: {
        include: {
          people: {
            select: {
              display_name: true,
              pronouns: true,
              username: true,
              email: true
            }
          }
        }
      }
    }
  });
  if (!data) return;
  let enrolled = data.people_in_cohorts.find(x => x.person === userId);
  let isFacilitator = data.cohort_facilitators.find(f => f.facilitator === userId);
  let cohort_events = data.cohort_events.filter(c => c.everyone || isFacilitator || enrolled && c.events.people_in_events.find(p => p.people.id === userId)).map(event => immer__WEBPACK_IMPORTED_MODULE_4___default()(event, e => {
    if (!enrolled && !isFacilitator) e.events.location = '';
  }));
  let people_in_cohorts = data.people_in_cohorts.map(person => immer__WEBPACK_IMPORTED_MODULE_4___default()(person, p => {
    if (!isFacilitator) p.people.email = '';
  }));
  return _objectSpread(_objectSpread({}, data), {}, {
    cohort_events,
    people_in_cohorts
  });
};

async function getCohortData(req) {
  let cohortId = parseInt(req.query.cohortId);
  if (Number.isNaN(cohortId)) return {
    status: 400,
    result: "ERROR: Cohort id is not a number"
  };
  let user = Object(src_token__WEBPACK_IMPORTED_MODULE_1__[/* getToken */ "a"])(req);
  let data = await cohortDataQuery(cohortId, user === null || user === void 0 ? void 0 : user.id);
  if (!data) return {
    status: 404,
    result: `Error: no cohort with id ${cohortId} found`
  };
  return {
    status: 200,
    result: data
  };
}

/***/ }),

/***/ "T4kY":
/***/ (function(module, exports) {

module.exports = require("runtypes");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TZPe":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Welcome\",\"Alias\":\"welcome\",\"Subject\":\"Welcome to KrakenEdu - confirm your account and get started!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"activation_code\":\"activation_code_Value\",\"activation_url\":\"activation_url_Value\"}}");

/***/ }),

/***/ "UAhG":
/***/ (function(module, exports) {

module.exports = require("@sentry/node");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "WLep":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EmptyImg", function() { return /* binding */ EmptyImg; });
__webpack_require__.d(__webpack_exports__, "CohortMembers", function() { return /* binding */ CohortMembers; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "@emotion/styled-base"
var styled_base_ = __webpack_require__("hsUr");
var styled_base_default = /*#__PURE__*/__webpack_require__.n(styled_base_);

// EXTERNAL MODULE: external "react-hyperscript"
var external_react_hyperscript_ = __webpack_require__("WkmV");
var external_react_hyperscript_default = /*#__PURE__*/__webpack_require__.n(external_react_hyperscript_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/Course/Enroll.ts
var Enroll = __webpack_require__("6d7b");

// EXTERNAL MODULE: ./src/data.ts
var data = __webpack_require__("5++N");

// EXTERNAL MODULE: ./src/apiHelpers.ts
var apiHelpers = __webpack_require__("0CBl");

// EXTERNAL MODULE: ./src/clientData.ts
var clientData = __webpack_require__("GRjo");

// EXTERNAL MODULE: ./components/Layout/index.ts + 3 modules
var Layout = __webpack_require__("9Hbq");

// EXTERNAL MODULE: ./components/Modal.ts
var Modal = __webpack_require__("wyA/");

// EXTERNAL MODULE: ./components/Button.ts
var Button = __webpack_require__("Hzj1");

// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__("fdqv");

// CONCATENATED MODULE: ./components/Course/EnrollButton.ts










const EnrollButton = props => {
  let {
    data: user
  } = Object(data["i" /* useUserData */])();
  let router = Object(router_["useRouter"])();
  let {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);
  let [status, callEnroll] = Object(apiHelpers["d" /* useApi */])([], async res => {
    let stripe = await Object(utils["d" /* getStripe */])();
    if (res.zeroCost) await router.push('/courses/[slug]/[id]/cohorts/[cohortId]', `/courses/${router.query.slug}/${props.course}/cohorts/${props.id}?welcome`);else await (stripe === null || stripe === void 0 ? void 0 : stripe.redirectToCheckout({
      sessionId: res.sessionId
    }));
  });

  let onClick = async e => {
    e.preventDefault();
    if (user === false) await router.push('/login?redirect=' + encodeURIComponent(router.asPath));
    if (!props.id) return;
    let discount = Object(clientData["a" /* getDiscounts */])().find(d => d.course === props.course);
    let res = await callEnroll(`/api/cohorts/${props.id}/enroll`, {
      discount: discount === null || discount === void 0 ? void 0 : discount.code,
      paystack: undefined
    });

    if (res.status === 403) {
      setError(true);
      Object(clientData["b" /* setDiscounts */])(Object(clientData["a" /* getDiscounts */])().filter(d => res.status === 403 && d.code !== res.result.discount));
    }
  };

  return external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 4,
    style: {
      alignItems: 'center'
    }
  }, [external_react_hyperscript_default()(Modal["a" /* Modal */], {
    display: error
  }, [external_react_hyperscript_default()('h3', "Sorry, the discount code you're using is no longer valid")]), external_react_hyperscript_default()(Button["f" /* Primary */], {
    onClick,
    status,
    disabled: !props.invited || props.max_size !== 0 && props.max_size === props.learners
  }, props.children), props.max_size === 0 ? null : props.max_size > props.learners ? external_react_hyperscript_default()('span.accentSuccess', `${props.max_size - props.learners} ${props.max_size - props.learners === 1 ? 'spot' : 'spots'} left!`) : external_react_hyperscript_default()('span.accentRed', `Sorry! This cohort is full.`)]);
};
// CONCATENATED MODULE: ./src/paystack/paystack-actions.ts
const callPaystackPop = paystackArgs => {
  //@ts-ignore
  const handler = window.PaystackPop && window.PaystackPop.setup(paystackArgs);
  handler && handler.openIframe();
};
// CONCATENATED MODULE: ./src/paystack/use-paystack.ts

function usePaystackPayment(options) {
  const {
    publicKey,
    firstname,
    lastname,
    phone,
    email,
    amount,
    reference,
    metadata = {},
    currency = 'NGN',
    channels,
    label = '',
    plan = '',
    quantity = '',
    subaccount = '',
    transaction_charge = 0,
    bearer = 'account',
    split,
    split_code
  } = options;

  function initializePayment(callback, onClose) {
    const paystackArgs = {
      callback: callback ? callback : () => null,
      onClose: onClose ? onClose : () => null,
      key: publicKey,
      ref: reference,
      email,
      firstname,
      lastname,
      phone,
      amount,
      currency,
      plan,
      quantity,
      'data-custom-button': options['data-custom-button'] || '',
      channels,
      subaccount,
      transaction_charge,
      bearer,
      label,
      metadata,
      split,
      split_code
    };
    callPaystackPop(paystackArgs);
  }

  return initializePayment;
}
// CONCATENATED MODULE: ./src/paystack/compress-data.ts
// @ts-nocheck

function compress(config, defaultConfig) {
  return usePaystackPayment(Object.assign(config, defaultConfig, {
    reference: new Date().getTime()
  }));
}
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__("z6Iz");
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);

// CONCATENATED MODULE: ./components/Course/SubEnrollButton.ts










 // import {PaystackProps} from 'src/paystack/types';
// import Toast from 'light-toast';

const errorNotify = msg => external_react_hot_toast_default.a.error(msg, {
  icon: "😟"
});

const successNotify = msg => external_react_hot_toast_default.a.success(msg, {
  icon: "👏"
});

const SubEnrollButton_defaultConfig = {
  publicKey: "pk_test_4f48d4a92f97d0e8b3d2429418679cab9fd5f36d"
};

const onSuccess = () => {
  successNotify("Your payment was successful!");
};

const SubEnrollButton_onClose = () => {
  errorNotify("Your payment failed, try again?");
};

const paystackHook = config => {
  try {
    let initializePayment = compress(config, SubEnrollButton_defaultConfig); // @ts-ignore

    initializePayment(onSuccess, SubEnrollButton_onClose)();
  } catch (error) {
    console.log(error);
  }
};

const SubEnrollButton = props => {
  let {
    data: user
  } = Object(data["i" /* useUserData */])();
  let router = Object(router_["useRouter"])();
  let {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);
  let [status, callEnroll] = Object(apiHelpers["d" /* useApi */])([], async res => {
    if (res.zeroCost) await router.push("/courses/[slug]/[id]/cohorts/[cohortId]", `/courses/${router.query.slug}/${props.course}/cohorts/${props.id}?welcome`);
    paystackHook(res);
  });

  let onClick = async e => {
    e.preventDefault();
    if (user === false) await router.push("/login?redirect=" + encodeURIComponent(router.asPath));
    if (!props.id) return;
    let discount = Object(clientData["a" /* getDiscounts */])().find(d => d.course === props.course);
    let res = await callEnroll(`/api/cohorts/${props.id}/enroll`, {
      discount: discount === null || discount === void 0 ? void 0 : discount.code,
      paystack: true
    });

    if (res.status === 403) {
      setError(true);
      Object(clientData["b" /* setDiscounts */])(Object(clientData["a" /* getDiscounts */])().filter(d => res.status === 403 && d.code !== res.result.discount));
    }
  };

  return external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 4,
    style: {
      alignItems: "center"
    }
  }, [external_react_hyperscript_default()(Modal["a" /* Modal */], {
    display: error
  }, [external_react_hyperscript_default()("h3", "Sorry, the discount code you're using is no longer valid")]), external_react_hyperscript_default()(Button["f" /* Primary */], {
    onClick,
    status,
    disabled: !props.invited || props.max_size !== 0 && props.max_size === props.learners
  }, props.children)]);
};
// EXTERNAL MODULE: ./components/Tabs.ts
var components_Tabs = __webpack_require__("lnWS");

// EXTERNAL MODULE: ./components/Loader.ts
var Loader = __webpack_require__("kacE");

// EXTERNAL MODULE: ./components/Form.ts
var Form = __webpack_require__("rk+T");

// EXTERNAL MODULE: ./components/Banner.ts
var Banner = __webpack_require__("Zp4/");

// EXTERNAL MODULE: ./components/Text.ts
var Text = __webpack_require__("BTHN");

// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__("he5r");

// CONCATENATED MODULE: ./components/pages/cohorts/WelcomeModal.ts









const WelcomeModal = props => {
  let router = Object(router_["useRouter"])();
  return external_react_hyperscript_default()(Modal["a" /* Modal */], {
    display: props.display,
    onExit: () => {
      router.replace(`/courses/[slug]/[id]/cohorts/[cohortId]`, `/courses/${props.cohort.courses.slug}/${props.cohort.courses.id}/cohorts/${props.cohort.id}`, {
        shallow: true
      });
    }
  }, external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 32,
    width: 640,
    style: {
      textAlign: "center"
    }
  }, [external_react_hyperscript_default()("h2", "You're enrolled!"), external_react_hyperscript_default()(Form["c" /* Info */], {}, external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()("b", `This cohort starts on ${Object(utils["f" /* prettyDate */])(props.cohort.start_date)}`), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 8
  }, [external_react_hyperscript_default()(link_default.a, {
    href: "/calendar"
  }, external_react_hyperscript_default()("a", [external_react_hyperscript_default()(Button["g" /* Secondary */], {
    style: {
      justifySelf: "center"
    }
  }, "Add to calendar")])), external_react_hyperscript_default()("p", [external_react_hyperscript_default()("small.textSecondary", "If you’ve added to calendar from"), external_react_hyperscript_default()("small.textSecondary", "KrakenEdu before, you don’t need to do this. ")])])])), external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()("b", `Head to the cohort forum to introduce yourself and see what you'll be doing on your first day`), external_react_hyperscript_default()("a", {
    style: {
      margin: "auto"
    },
    href: `${constants["a" /* DISCOURSE_URL */]}/session/sso?return_path=/c/${props.cohort.category_id}`
  }, external_react_hyperscript_default()(Button["f" /* Primary */], "Get started"))])]));
};
// EXTERNAL MODULE: ./src/discourse.ts
var discourse = __webpack_require__("+khs");

// EXTERNAL MODULE: ./pages/404.ts
var _404 = __webpack_require__("+Xui");

// EXTERNAL MODULE: ./pages/api/cohorts/[cohortId]/index.ts
var _cohortId_ = __webpack_require__("SVbj");

// EXTERNAL MODULE: ./pages/api/courses/[id]/index.ts
var _id_ = __webpack_require__("7SPv");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Tokens.ts
var Tokens = __webpack_require__("mirl");

// EXTERNAL MODULE: ./components/Icons.tsx
var Icons = __webpack_require__("FPCx");

// EXTERNAL MODULE: ./components/Pill.ts
var Pill = __webpack_require__("+ErQ");

// CONCATENATED MODULE: ./components/pages/cohorts/CreateEvent.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const CreateEvent = props => {
  let {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(false);
  let {
    0: event,
    1: setEvent
  } = Object(external_react_["useState"])({
    name: '',
    start_date: '',
    start_time: '',
    end_time: '',
    location: '',
    description: '',
    everyone: false,
    people: []
  });
  let [status, callCreateEvent] = Object(apiHelpers["d" /* useApi */])([event], e => {
    if (e.type === 'cohort') props.mutate(e.event);
    setEvent({
      everyone: false,
      people: [],
      name: '',
      start_date: '',
      start_time: '',
      end_time: '',
      location: '',
      description: ''
    });
    setOpen(false);
  });

  let onSubmit = e => {
    e.preventDefault();
    let d1 = event.start_date.split('-').map(x => parseInt(x));
    let t1 = event.start_time.split(':').map(x => parseInt(x));
    let t2 = event.end_time.split(':').map(x => parseInt(x));
    let start_date = new Date(d1[0], d1[1] - 1, d1[2], t1[0], t1[1]);
    let end_date = new Date(d1[0], d1[1] - 1, d1[2], t2[0], t2[1]);
    callCreateEvent('/api/events', {
      type: 'cohort',
      people: event.people,
      cohort: props.cohort,
      name: event.name,
      description: event.description,
      location: event.location,
      start_date: start_date.toISOString(),
      end_date: end_date.toISOString()
    });
  };

  return external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()(Button["g" /* Secondary */], {
    disabled: open,
    onClick: () => setOpen(true)
  }, '+ Add New Event'), !open ? null : external_react_hyperscript_default()(Layout["d" /* FormBox */], {
    onSubmit
  }, [external_react_hyperscript_default()(EventForm, {
    state: event,
    onChange: setEvent,
    people: props.people
  }), external_react_hyperscript_default()(Layout["b" /* Box */], {
    h: true,
    style: {
      justifySelf: "right"
    }
  }, [external_react_hyperscript_default()(Button["g" /* Secondary */], {
    onClick: () => setOpen(!open)
  }, "Cancel"), external_react_hyperscript_default()(Button["f" /* Primary */], {
    type: 'submit',
    status
  }, "Create Event")])])]);
};
const EventForm = props => {
  let timezone = new Date().toLocaleDateString('en-us', {
    timeZoneName: "short"
  }).split(', ')[1];
  return external_react_hyperscript_default()(Layout["b" /* Box */], {
    width: 640,
    padding: 32,
    gap: 32,
    style: {
      backgroundColor: Tokens["d" /* colors */].grey95
    }
  }, [external_react_hyperscript_default()(Layout["e" /* LabelBox */], {
    gap: 8
  }, [external_react_hyperscript_default()('h4', "Event Name"), external_react_hyperscript_default()(Form["d" /* Input */], {
    type: 'text',
    required: true,
    onChange: e => props.onChange(_objectSpread(_objectSpread({}, props.state), {}, {
      name: e.currentTarget.value
    })),
    value: props.state.name
  })]), external_react_hyperscript_default()(Layout["b" /* Box */], {
    h: true,
    gap: 32,
    style: {
      gridAutoColumns: 'auto'
    }
  }, [external_react_hyperscript_default()(Layout["e" /* LabelBox */], {
    gap: 8
  }, [external_react_hyperscript_default()('h4', 'Date'), external_react_hyperscript_default()(Form["d" /* Input */], {
    type: 'date',
    placeholder: 'yyyy-mm-dd',
    required: true,
    value: props.state.start_date,
    onChange: e => props.onChange(_objectSpread(_objectSpread({}, props.state), {}, {
      start_date: e.currentTarget.value
    }))
  })]), external_react_hyperscript_default()(Layout["e" /* LabelBox */], {
    gap: 8
  }, [external_react_hyperscript_default()('h4', 'Start Time ' + `(${timezone})`), external_react_hyperscript_default()(Form["d" /* Input */], {
    type: 'time',
    placeholder: '23:59',
    required: true,
    value: props.state.start_time,
    onChange: e => props.onChange(_objectSpread(_objectSpread({}, props.state), {}, {
      start_time: e.currentTarget.value
    }))
  })]), external_react_hyperscript_default()(Layout["e" /* LabelBox */], {
    gap: 8
  }, [external_react_hyperscript_default()('h4', 'End Time ' + `(${timezone})`), external_react_hyperscript_default()(Form["d" /* Input */], {
    type: "time",
    required: true,
    value: props.state.end_time,
    onChange: e => props.onChange(_objectSpread(_objectSpread({}, props.state), {}, {
      end_time: e.currentTarget.value
    }))
  })])]), external_react_hyperscript_default()(Layout["e" /* LabelBox */], {
    gap: 8
  }, [external_react_hyperscript_default()('div', [external_react_hyperscript_default()('h4', "Location"), external_react_hyperscript_default()('small.textSecondary', "A link to where the conversation will happen (like Zoom)")]), external_react_hyperscript_default()(Form["d" /* Input */], {
    type: 'text',
    required: true,
    value: props.state.location,
    onChange: e => props.onChange(_objectSpread(_objectSpread({}, props.state), {}, {
      location: e.currentTarget.value
    }))
  })]), external_react_hyperscript_default()(Layout["e" /* LabelBox */], {
    gap: 8
  }, [external_react_hyperscript_default()('h4', "Description"), external_react_hyperscript_default()(Form["h" /* Textarea */], {
    value: props.state.description,
    onChange: e => props.onChange(_objectSpread(_objectSpread({}, props.state), {}, {
      description: e.currentTarget.value
    }))
  })]), external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()('h4', "Attendees"), external_react_hyperscript_default()(Form["g" /* Select */], {
    onChange: e => {
      if (e.currentTarget.value !== '') {
        props.onChange(_objectSpread(_objectSpread({}, props.state), {}, {
          people: [...props.state.people, e.currentTarget.value]
        }));
        e.currentTarget.value = '';
      }
    }
  }, [external_react_hyperscript_default()('option', {
    value: ''
  }, props.state.people.length === 0 ? 'Everyone' : 'Select another attendee'), ...props.people.filter(p => !props.state.people.includes(p)).map(p => external_react_hyperscript_default()('option', {
    value: p
  }, p))]), external_react_hyperscript_default()(AttendeeList, props.state.people.map(p => external_react_hyperscript_default()('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto min-content',
      maxWidth: '400px'
    }
  }, [external_react_hyperscript_default()(AttendeePill, [p, ' ', external_react_hyperscript_default()(Button["e" /* LinkButton */], {
    style: {
      color: Tokens["d" /* colors */].textSecondary
    },
    onClick: e => {
      e.preventDefault();
      props.onChange(_objectSpread(_objectSpread({}, props.state), {}, {
        people: props.state.people.filter(person => person !== p)
      }));
    }
  }, external_react_hyperscript_default()(Icons["d" /* Cross */], {
    width: 10
  }))])])))])]);
};

let AttendeeList = /*#__PURE__*/styled_base_default()('div', {
  target: "e1w000r60"
})(true ? {
  name: "2imjyh",
  styles: "display:flex;flex-wrap:wrap;"
} : undefined);

let AttendeePill = /*#__PURE__*/styled_base_default()(Pill["a" /* Pill */], {
  target: "e1w000r61"
})("background-color:", Tokens["d" /* colors */].appBackground, ";margin:0 8px 8px 0;" + (true ? "" : undefined));
// EXTERNAL MODULE: ./src/hooks.ts
var hooks = __webpack_require__("mB65");

// CONCATENATED MODULE: ./components/pages/cohorts/Events.ts


function Events_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }















const CohortEvents = props => {
  let {
    data: user
  } = Object(data["i" /* useUserData */])();
  let pastEvents = props.events.filter(event => new Date() > new Date(event.events.end_date));
  let {
    0: showPastEvents,
    1: setShowPastEvents
  } = Object(external_react_["useState"])(pastEvents.length === props.events.length);
  let displayedEvents = props.events.filter(event => showPastEvents ? true : new Date() < new Date(event.events.end_date)).sort((a, b) => new Date(a.events.start_date) > new Date(b.events.start_date) ? 1 : -1);
  return external_react_hyperscript_default()(Layout["b" /* Box */], [// (inCohort || isFacilitator) && cohort.cohort_events.length > 0 ? h(Link, {href: "/calendar"}, 
  external_react_hyperscript_default()(Layout["b" /* Box */], {
    h: true,
    gap: 0,
    style: {
      gridTemplateColumns: 'auto min-content',
      gridGap: 0
    }
  }, [pastEvents.length === 0 ? null : external_react_hyperscript_default()(Button["h" /* SmallLinkButton */], {
    textSecondary: true,
    onClick: () => {
      setShowPastEvents(!showPastEvents);
    }
  }, showPastEvents ? "hide past events" : "show past events"), !props.showCal ? null : external_react_hyperscript_default()(link_default.a, {
    href: "/calendar"
  }, external_react_hyperscript_default()(Button["h" /* SmallLinkButton */], {
    textSecondary: true,
    style: {
      justifySelf: 'end'
    }
  }, external_react_hyperscript_default()(Layout["b" /* Box */], {
    h: true,
    gap: 8,
    style: {
      textAlign: 'right'
    }
  }, ['add to your calendar ', Icons["b" /* Calendar */]])))]), external_react_hyperscript_default()(TimelineContainer, {}, displayedEvents.map((event, index) => external_react_hyperscript_default()(Event, {
    user: user ? user.id : undefined,
    inCohort: props.inCohort,
    key: event.events.id,
    facilitating: props.facilitating,
    event,
    people: props.people,
    cohort: props.cohort,
    mutate: newEvent => {
      let events = props.events.slice(0);
      events[index] === newEvent;
      return props.mutate(events);
    },
    mutateDelete: () => {
      let events = props.events.slice(0);
      events.splice(index, 1);
      return props.mutate(events);
    },
    first: showPastEvents ? index === pastEvents.length : index === 0,
    last: index === displayedEvents.length - 1
  })))]);
};

const Event = props => {
  let {
    0: editting,
    1: setEditing
  } = Object(external_react_["useState"])(false);
  let {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(props.first);
  let event = props.event;
  let start_date = new Date(event.events.start_date);
  let end_date = new Date(event.events.end_date);
  let past = end_date < new Date();
  let {
    state,
    setState
  } = Object(hooks["b" /* useFormData */])({
    everyone: !event.everyone,
    name: event.events.name,
    location: event.events.location,
    description: event.events.description,
    start_date: `${start_date.getFullYear()}-${('0' + (start_date.getMonth() + 1)).slice(-2)}-${('0' + start_date.getDate()).slice(-2)}`,
    start_time: start_date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }),
    end_time: end_date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }),
    people: event.events.people_in_events.map(p => p.people.username)
  }, [event]);
  let [status, callUpdateEvent] = Object(apiHelpers["d" /* useApi */])([props], async event => {
    if (event.type === 'cohort') props.mutate(event.data);
    setEditing(false);
  });
  let [deleteStatus, callDeleteEvent] = Object(apiHelpers["d" /* useApi */])([], () => {
    setEditing(false);
    props.mutateDelete();
  });

  const onSubmit = e => {
    e.preventDefault();
    let event = state;
    let d1 = event.start_date.split('-').map(x => parseInt(x));
    let t1 = event.start_time.split(':').map(x => parseInt(x));
    let t2 = event.end_time.split(':').map(x => parseInt(x));
    let start_date = new Date(d1[0], d1[1] - 1, d1[2], t1[0], t1[1]);
    let end_date = new Date(d1[0], d1[1] - 1, d1[2], t2[0], t2[1]);
    callUpdateEvent('/api/events/' + props.event.events.id, {
      type: 'cohort',
      cohort: props.cohort,
      data: {
        name: event.name,
        description: event.description,
        location: event.location,
        start_date: start_date.toISOString(),
        end_date: end_date.toISOString(),
        people: event.people
      }
    });
  };

  return external_react_hyperscript_default()(EventContainer, {
    last: props.last,
    selected: expanded
  }, [external_react_hyperscript_default()(Dot, {
    selected: expanded,
    onClick: () => setExpanded(event.events.description === '' ? false : !expanded),
    past
  }), editting ? external_react_hyperscript_default()(Layout["d" /* FormBox */], {
    onSubmit
  }, [external_react_hyperscript_default()(EventForm, {
    onChange: setState,
    state,
    people: props.people
  }), external_react_hyperscript_default()(Layout["b" /* Box */], {
    h: true,
    style: {
      justifySelf: "right",
      alignItems: "center"
    }
  }, [external_react_hyperscript_default()(Button["e" /* LinkButton */], {
    textSecondary: true,
    onClick: () => setEditing(false)
  }, "cancel"), external_react_hyperscript_default()(Button["b" /* Destructive */], {
    status: deleteStatus,
    onClick: e => {
      e.preventDefault();
      callDeleteEvent('/api/events/' + props.event.events.id, null, "DELETE");
    }
  }, "Delete Event"), external_react_hyperscript_default()(Button["f" /* Primary */], {
    type: 'submit',
    status
  }, "Save Changes")])]) : external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 8
  }, [external_react_hyperscript_default()('p.textSecondary', {
    style: {
      color: past ? Tokens["d" /* colors */].grey55 : undefined
    }
  }, [external_react_hyperscript_default()('b', {
    style: {
      fontWeight: "900"
    }
  }, start_date.toLocaleDateString([], {
    weekday: 'short',
    month: "short",
    day: "numeric"
  }).toUpperCase()), ' ' + start_date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: 'short'
  }) + ` | ` + Object(utils["e" /* getTimeBetween */])(start_date, end_date) + ' hrs ', (() => {
    if (event.everyone) return null;

    switch (event.events.people_in_events.length) {
      case 1:
        return external_react_hyperscript_default()(Pill["a" /* Pill */], {
          style: {
            alignSelf: "center"
          }
        }, "Solo");

      case 2:
        return external_react_hyperscript_default()(Pill["a" /* Pill */], {
          style: {
            alignSelf: "center"
          }
        }, "1:1");

      default:
        return external_react_hyperscript_default()(Pill["a" /* Pill */], {
          style: {
            alignSelf: "center"
          }
        }, "Group");
    }
  })()]), external_react_hyperscript_default()(Layout["b" /* Box */], {
    h: true,
    style: {
      gridTemplateColumns: "auto auto min-content"
    }
  }, [external_react_hyperscript_default()(EventTitle, {
    past,
    onClick: () => setExpanded(!expanded)
  }, [event.events.name]), props.facilitating || props.user === event.events.created_by ? external_react_hyperscript_default()(Button["d" /* IconButton */], {
    style: {
      alignSelf: 'baseline',
      justifySelf: 'right'
    },
    onClick: () => setEditing(true)
  }, Icons["f" /* Pencil */]) : null])]), event.events.location && expanded ? external_react_hyperscript_default()('a', {
    href: event.events.location
  }, external_react_hyperscript_default()(Button["f" /* Primary */], "Join Event")) : null]), !expanded || event.events.description === '' ? null : external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()('div', {
    style: {
      padding: '32px',
      backgroundColor: 'white',
      border: 'dotted 1px',
      overflow: 'auto',
      overflowWrap: "break-word"
    }
  }, external_react_hyperscript_default()(Text["a" /* default */], {
    source: event.events.description
  })), event.events.people_in_events.length === 0 ? null : external_react_hyperscript_default()('p.textSecondary', [external_react_hyperscript_default()('b', 'Attendees: '), event.events.people_in_events.map(p => p.people.display_name || p.people.username).join(', ')])])])]);
};

const Dot = /*#__PURE__*/styled_base_default()('div', {
  target: "e1h6j2wc0"
})(p => {
  let size = p.selected ? 24 : 16;
  return `
width: ${size}px;
height: ${size}px;
margin-right: ${p.selected ? 32 : 34}px;
`;
}, " box-sizing:border-box;border:4px solid;background-color:white;border-radius:50%;", p => p.past ? `background-color: ${Tokens["d" /* colors */].grey80};` : '', " &:hover{cursor:pointer;}" + (true ? "" : undefined));

const EventTitle = /*#__PURE__*/styled_base_default()('h3', {
  target: "e1h6j2wc1"
})(p => p.past ? `color: ${Tokens["d" /* colors */].textSecondary};` : '', " &:hover{cursor:pointer;}" + (true ? "" : undefined));

const TimelineContainer = /*#__PURE__*/styled_base_default()('div', {
  target: "e1h6j2wc2"
})(true ? {
  name: "1erdf7f",
  styles: "display:grid;grid-gap:32px;border-left:4px solid;padding-left:32px;"
} : undefined);

const EventContainer = /*#__PURE__*/styled_base_default()('div', {
  target: "e1h6j2wc3"
})("box-sizing:border-box;margin-left:-", p => p.selected ? 46 : 42, "px;display:grid;grid-template-columns:min-content auto;max-width:1024px;", p => p.last ? `background-color: ${Tokens["d" /* colors */].appBackground};` : '', true ? "" : undefined);
// EXTERNAL MODULE: ./components/Images.ts
var Images = __webpack_require__("R1ly");

// EXTERNAL MODULE: ./components/TodoList.ts
var TodoList = __webpack_require__("9GwF");

// CONCATENATED MODULE: ./pages/courses/[slug]/[id]/cohorts/[cohortId]/index.ts


function _cohortId_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _cohortId_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _cohortId_ownKeys(Object(source), true).forEach(function (key) { _cohortId_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _cohortId_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _cohortId_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _cohortId_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }































const WrappedCohortPage = props => props.notFound ? external_react_hyperscript_default()(_404["default"]) : external_react_hyperscript_default()(CohortPage, props);

/* harmony default export */ var cohorts_cohortId_ = __webpack_exports__["default"] = (WrappedCohortPage);

const CohortPage = props => {
  var _props$artifacts, _props$curriculum, _props$curriculum2;

  let router = Object(router_["useRouter"])();
  let {
    data: user
  } = Object(data["i" /* useUserData */])();
  let {
    data: userCohorts
  } = Object(data["g" /* useUserCohorts */])();
  let {
    data: profile
  } = Object(data["f" /* useProfileData */])(user ? user.username : undefined);
  let {
    data: cohort,
    mutate
  } = Object(data["a" /* useCohortData */])(props.cohortId, props.cohort);
  let {
    data: course
  } = Object(data["b" /* useCourseData */])(props.courseId, props.course);
  let selectedTab = router.query.tab;
  Object(external_react_["useEffect"])(() => {
    mutate(undefined, true);
  }, [!!cohort]);
  if (!cohort || !course) return external_react_hyperscript_default()(Loader["a" /* PageLoader */]);
  let invited = !!(userCohorts !== null && userCohorts !== void 0 && userCohorts.invited_courses.find(course => course.id === props.course.id));
  let inCohort = cohort.people_in_cohorts.find(p => p.person === (user ? user.id : undefined));
  let isFacilitator = !!user && !!cohort.cohort_facilitators.find(f => user && f.people.username === user.username);
  let isStarted = cohort && new Date() > new Date(cohort.start_date);
  let Tabs = {
    Artifacts: props.artifacts.text === '' ? null : external_react_hyperscript_default()(Layout["b" /* Box */], {
      gap: 64
    }, [external_react_hyperscript_default()(Layout["b" /* Box */], {
      gap: 32
    }, [external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()(Text["a" /* default */], {
      source: (_props$artifacts = props.artifacts) === null || _props$artifacts === void 0 ? void 0 : _props$artifacts.text
    })])])]),
    Schedule: cohort.cohort_events.length === 0 && !isFacilitator ? null : external_react_hyperscript_default()(Layout["b" /* Box */], {
      gap: 32
    }, [isFacilitator || inCohort ? external_react_hyperscript_default()(CreateEvent, {
      cohort: cohort.id,
      people: [...cohort.people_in_cohorts.map(p => p.people.username), ...cohort.cohort_facilitators.map(f => f.people.username)],
      mutate: c => {
        if (!cohort) return;
        mutate(_cohortId_objectSpread(_cohortId_objectSpread({}, cohort), {}, {
          cohort_events: [...cohort.cohort_events, c]
        }));
      }
    }) : null, external_react_hyperscript_default()(Layout["b" /* Box */], [cohort.cohort_events.length === 0 ? external_react_hyperscript_default()(Layout["i" /* WhiteContainer */], [external_react_hyperscript_default()(Layout["b" /* Box */], {
      gap: 16,
      style: {
        maxWidth: 400,
        textAlign: 'center',
        margin: 'auto'
      }
    }, [external_react_hyperscript_default()(EmptyImg, {
      src: '/img/empty.png'
    }), external_react_hyperscript_default()('small.textSecondary', "Events are great for scheduling live calls or other important cohort dates. Learners can add these to their calendars. Looks like you haven't created any events yet. Hit the button above to schedule one!!")])]) : external_react_hyperscript_default()(CohortEvents, {
      facilitating: isFacilitator,
      inCohort: !!inCohort,
      people: cohort.people_in_cohorts.map(p => p.people.username),
      cohort: cohort.id,
      events: cohort.cohort_events.filter(c => {
        if (!user || !cohort) return c.everyone;
        if (isFacilitator) return true;
        return c.everyone || c.events.people_in_events.find(p => user && p.people.username === user.username);
      }),
      mutate: events => {
        if (!cohort) return;
        mutate(_cohortId_objectSpread(_cohortId_objectSpread({}, cohort), {}, {
          cohort_events: events
        }));
      },
      showCal: (inCohort || isFacilitator) && cohort.cohort_events.length > 0
    })])]),
    [course.type === 'club' ? "Details" : "Curriculum"]: external_react_hyperscript_default()(Layout["b" /* Box */], [!isFacilitator ? null : external_react_hyperscript_default()(Form["c" /* Info */], [`💡 You can make changes to this page by editing `, external_react_hyperscript_default()('a', {
      href: `${constants["a" /* DISCOURSE_URL */]}/session/sso?return_path=/t/${(_props$curriculum = props.curriculum) === null || _props$curriculum === void 0 ? void 0 : _props$curriculum.id}`
    }, `this topic`), ` in the forum`]), external_react_hyperscript_default()(Text["a" /* default */], {
      source: (_props$curriculum2 = props.curriculum) === null || _props$curriculum2 === void 0 ? void 0 : _props$curriculum2.text
    })]),
    Members: external_react_hyperscript_default()(CohortMembers, {
      cohort: cohort,
      isFacilitator,
      mutate,
      user: user ? user.id : undefined
    })
  };
  let tabKeys = Object.keys(Tabs).filter(t => !!Tabs[t]);
  return external_react_hyperscript_default()("div", {}, [external_react_hyperscript_default()(head_default.a, {
    children: [external_react_hyperscript_default()("meta", {
      property: "og:title",
      content: course.name,
      key: "og:title"
    }), external_react_hyperscript_default()("meta", {
      property: "og:description",
      content: "Starting " + Object(utils["f" /* prettyDate */])(cohort.start_date),
      key: "og:description"
    }), external_react_hyperscript_default()("meta", {
      property: "og:image",
      content: course.card_image.split(",")[0],
      key: "og:image"
    }), external_react_hyperscript_default()("meta", {
      property: "twitter:card",
      content: "summary",
      key: "twitter:card"
    })]
  }), external_react_hyperscript_default()(WelcomeModal, {
    display: router.query.welcome !== undefined,
    cohort,
    user_calendar: profile ? profile.calendar_id : ""
  }), external_react_hyperscript_default()(Banners, {
    cohort,
    mutate,
    enrolled: !!inCohort,
    facilitating: isFacilitator
  }), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 32
  }, [external_react_hyperscript_default()(Layout["h" /* TwoColumn */], [external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 8,
    style: {
      gridColumn: 1
    }
  }, [course.type === "course" ? null : external_react_hyperscript_default()(Layout["b" /* Box */], {
    h: true
  }, props.course.card_image.split(",").map(src => external_react_hyperscript_default()("img", {
    src,
    style: {
      imageRendering: "pixelated"
    }
  }))), external_react_hyperscript_default()("h1", Object(utils["a" /* cohortName */])(cohort.name)), external_react_hyperscript_default()(link_default.a, {
    href: `/courses/${cohort.courses.slug}/${cohort.courses.id}`
  }, external_react_hyperscript_default()("a.notBlue", {}, external_react_hyperscript_default()("h3.textSecondary", cohort === null || cohort === void 0 ? void 0 : cohort.courses.name))), external_react_hyperscript_default()("p.big", cohort.description)]), Tabs[selectedTab ? selectedTab : tabKeys[0]], external_react_hyperscript_default()(Layout["g" /* Sidebar */], {}, [external_react_hyperscript_default()(components_Tabs["a" /* StickyWrapper */], [external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 16
  }, [inCohort || isStarted || isFacilitator ? null : external_react_hyperscript_default()(Enroll["a" /* default */], {
    course
  }), inCohort || isStarted || isFacilitator ? null : external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()(Layout["e" /* LabelBox */], {
    style: {
      fontSize: '2rem'
    }
  }, "Join this cohort"), external_react_hyperscript_default()(SubEnrollButton, {
    id: cohort.id,
    course: course.id,
    max_size: course.cohort_max_size,
    learners: cohort.people_in_cohorts.length,
    invited: !course.invite_only || invited
  }, "via Paystack"), external_react_hyperscript_default()(EnrollButton, {
    id: cohort.id,
    course: course.id,
    max_size: course.cohort_max_size,
    learners: cohort.people_in_cohorts.length,
    invited: !course.invite_only || invited
  }, "via Stripe")]), external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()("h3", "Information"), external_react_hyperscript_default()(components_Tabs["c" /* VerticalTabs */], {
    selected: selectedTab && Tabs[selectedTab] ? selectedTab : tabKeys[0],
    tabs: tabKeys,
    onChange: tab => {
      let route = new URL(window.location.href);
      route.searchParams.set("tab", tab);
      router.replace(route, undefined, {
        shallow: true
      });
    }
  })]), inCohort || isFacilitator || cohort.completed ? external_react_hyperscript_default()(Layout["b" /* Box */], {}, [!isFacilitator ? null : external_react_hyperscript_default()(link_default.a, {
    href: window.location.pathname + "/settings"
  }, external_react_hyperscript_default()("a", {}, external_react_hyperscript_default()(Button["f" /* Primary */], "Cohort Settings"))), !inCohort && !isFacilitator ? null : external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()("a", {
    href: `${constants["a" /* DISCOURSE_URL */]}/session/sso?return_path=/c/${cohort.category_id}`
  }, external_react_hyperscript_default()(Button["g" /* Secondary */], "The Forum")), !isFacilitator ? null : external_react_hyperscript_default()(link_default.a, {
    href: "/courses/[slug]/[id]/cohorts/[cohortId]/templates",
    as: `/courses/${cohort.courses.slug}/${cohort.courses.id}/cohorts/${cohort.id}/templates`
  }, external_react_hyperscript_default()(Button["g" /* Secondary */], "Forum Post from Template")), !cohort.completed && isFacilitator && isStarted ? external_react_hyperscript_default()(MarkCohortComplete, {
    cohort,
    mutate
  }) : null])]) : null])])])])])]);
};

let EmptyImg = /*#__PURE__*/styled_base_default()('img', {
  target: "e1jdl2f10"
})(true ? {
  name: "1gm5wpq",
  styles: "image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;display:block;margin:auto auto;border:none;height:200px;width:200px;"
} : undefined);
const CohortMembers = props => {
  let {
    0: unenrollState,
    1: setUnenrollState
  } = Object(external_react_["useState"])();
  return external_react_hyperscript_default()(external_react_["Fragment"], [!unenrollState ? null : external_react_hyperscript_default()(UnenrollModal, _cohortId_objectSpread({
    display: !!unenrollState,
    onExit: () => setUnenrollState(undefined)
  }, unenrollState)), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 16
  }, [external_react_hyperscript_default()("h3", "Facilitators"), props.isFacilitator ? null : external_react_hyperscript_default()(Form["c" /* Info */], [`Questions about this `, props.cohort.courses.type === "club" ? `club` : `course`, `? `, external_react_hyperscript_default()("a", {
    href: `https://forum.krakenedu.com/new-message?groupname=${props.cohort.courses.slug}-m`,
    target: `_blank`
  }, `Message the facilitator`), ` on the forum.`]), ...props.cohort.cohort_facilitators.map(f => external_react_hyperscript_default()(Layout["b" /* Box */], [props.user === f.facilitator ? external_react_hyperscript_default()(Form["c" /* Info */], [`💡 You can edit your bio in the profile tab on your `, external_react_hyperscript_default()(link_default.a, {
    href: "/dashboard"
  }, external_react_hyperscript_default()("a", "dashboard"))]) : null, external_react_hyperscript_default()("h3", [``, external_react_hyperscript_default()(link_default.a, {
    href: "/people/[id]",
    as: `/people/${f.people.username}`
  }, external_react_hyperscript_default()("a", {
    className: "notBlue"
  }, f.people.display_name || f.people.username)), f.people.pronouns ? external_react_hyperscript_default()("span.textSecondary", {}, ` (${f.people.pronouns})`) : null]), external_react_hyperscript_default()(Text["a" /* default */], {
    source: f.people.bio || ""
  })])), // message facilitator - shows for logged in and anon users; hidden on things you're facilitating
  props.cohort.people_in_cohorts.length === 0 ? null : external_react_hyperscript_default()(Layout["b" /* Box */], {
    h: true
  }, [external_react_hyperscript_default()("h4", ["Members ", external_react_hyperscript_default()("span.textSecondary", `(${props.cohort.people_in_cohorts.length}${props.cohort.courses.cohort_max_size !== 0 ? `/${props.cohort.courses.cohort_max_size}` : ""})`)]), !props.isFacilitator ? null : external_react_hyperscript_default()("a", {
    href: `mailto:?bcc=${props.cohort.people_in_cohorts.map(p => p.people.email).join(",")}`
  }, "email everyone")]), ...props.cohort.people_in_cohorts.map(person => {
    return external_react_hyperscript_default()("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "auto auto"
      }
    }, [external_react_hyperscript_default()(Layout["b" /* Box */], {
      h: true
    }, [external_react_hyperscript_default()(link_default.a, {
      href: "/people/[id]",
      as: `/people/${person.people.username}`
    }, [external_react_hyperscript_default()("a", {
      className: "notBlue"
    }, person.people.display_name || person.people.username)]), person.people.pronouns ? external_react_hyperscript_default()("span.textSecondary", {}, ` (${person.people.pronouns})`) : null]), !props.isFacilitator ? null : external_react_hyperscript_default()("div", {
      style: {
        justifySelf: "right"
      }
    }, [external_react_hyperscript_default()("a", {
      style: {
        marginRight: "10px"
      },
      href: `mailto:${person.people.email}`
    }, "email"), external_react_hyperscript_default()(Button["c" /* DestructiveSmallButton */], {
      onClick: () => {
        setUnenrollState({
          personID: person.person,
          cohortID: props.cohort.id,
          username: person.people.username,
          display_name: person.people.display_name,
          removeMember: () => {
            props.mutate(_cohortId_objectSpread(_cohortId_objectSpread({}, props.cohort), {}, {
              people_in_cohorts: props.cohort.people_in_cohorts.filter(p => p.person !== person.person)
            }));
          }
        });
      }
    }, "unenroll")])]);
  })])]);
};

const UnenrollModal = props => {
  let [status, callUnenroll] = Object(apiHelpers["d" /* useApi */])([]);
  return external_react_hyperscript_default()(Modal["a" /* Modal */], {
    display: props.display,
    onExit: props.onExit,
    hideCloseButton: true
  }, [status === 'success' ? external_react_hyperscript_default()(Layout["b" /* Box */], {
    style: {
      textAlign: 'center',
      justifyItems: 'center'
    }
  }, [external_react_hyperscript_default()('h2', "Unenrolled!"), external_react_hyperscript_default()('p', [`You've unenrolled `, external_react_hyperscript_default()('b', props.display_name || props.username), ` from this cohort`]), external_react_hyperscript_default()('p', [`They'll be refunded within 5 business days`]), external_react_hyperscript_default()(Button["g" /* Secondary */], {
    onClick: props.onExit,
    style: {
      width: "250px"
    }
  }, "exit")]) : external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 32,
    style: {
      textAlign: 'center',
      justifyItems: 'center'
    }
  }, [external_react_hyperscript_default()(Layout["b" /* Box */], [external_react_hyperscript_default()('h2', "Un-Enroll and Issue Refund"), external_react_hyperscript_default()('p', [`You are about to un-enroll `, external_react_hyperscript_default()('b', props.display_name || props.username), ` from this cohort`])]), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 8
  }, [external_react_hyperscript_default()(Button["b" /* Destructive */], {
    status,
    onClick: async () => {
      let result = await callUnenroll(`/api/cohorts/${props.cohortID}/enroll`, {
        person: props.personID
      }, "DELETE");

      if (result.status === 200) {
        props.removeMember();
      }
    },
    style: {
      width: "250px"
    }
  }, 'Un-enroll'), external_react_hyperscript_default()(Button["g" /* Secondary */], {
    onClick: props.onExit,
    style: {
      width: "250px"
    }
  }, "Cancel")])])]);
}; // Button to Publish Draft Cohort


const MarkCohortLive = props => {
  let {
    0: state,
    1: setState
  } = Object(external_react_["useState"])('normal');
  if (state === 'confirm' || state === 'loading') return external_react_hyperscript_default()(Modal["a" /* Modal */], {
    display: true,
    closeText: "nevermind",
    onExit: () => setState('normal')
  }, [external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 32
  }, [external_react_hyperscript_default()('h2', "Are you sure?"), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 16,
    style: {
      textAlign: 'right'
    }
  }, [external_react_hyperscript_default()(Button["f" /* Primary */], {
    onClick: async e => {
      e.preventDefault();
      setState('loading');
      let res = await Object(apiHelpers["b" /* callApi */])(`/api/cohorts/${props.cohort.id}`, {
        data: {
          live: true
        }
      });
      if (res.status === 200) props.mutate(_cohortId_objectSpread(_cohortId_objectSpread({}, props.cohort), {}, {
        live: res.result.live
      }));
      setState('complete');
    }
  }, state === 'loading' ? external_react_hyperscript_default()(Loader["b" /* default */]) : 'Publish!')])])]);
  return external_react_hyperscript_default()(Button["f" /* Primary */], {
    style: {
      justifySelf: "center"
    },
    onClick: async e => {
      e.preventDefault();
      setState('confirm');
    }
  }, 'Publish!');
}; //End Button to publish cohort
//Modal to complete cohort


const MarkCohortComplete = props => {
  let {
    0: state,
    1: setState
  } = Object(external_react_["useState"])('normal');
  if (state === "confirm" || state === "loading") return external_react_hyperscript_default()(Modal["a" /* Modal */], {
    display: true,
    closeText: "nevermind",
    onExit: () => setState("normal")
  }, [external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 32
  }, [external_react_hyperscript_default()("h2", {
    style: {
      textAlign: "center"
    }
  }, "Are you sure?"), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 16
  }, ["Before closing this course, please...", external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 16
  }, [external_react_hyperscript_default()(Form["a" /* CheckBox */], [external_react_hyperscript_default()(Form["d" /* Input */], {
    type: "checkbox"
  }), external_react_hyperscript_default()("span", ["Use the ", external_react_hyperscript_default()(link_default.a, {
    href: `http://krakenedu.com/courses/${props.cohort.courses.slug}/${props.cohort.courses.id}/cohorts/${props.cohort.id}/templates?template=Artifact`
  }, "Artifact template"), " to publicly share any artifacts or final projects produced in the cohort"])]), external_react_hyperscript_default()(Form["a" /* CheckBox */], [external_react_hyperscript_default()(Form["d" /* Input */], {
    type: "checkbox"
  }), external_react_hyperscript_default()("span", ["Use the ", external_react_hyperscript_default()(link_default.a, {
    href: `http://krakenedu.com/courses/${props.cohort.courses.slug}/${props.cohort.courses.id}/cohorts/${props.cohort.id}/templates?template=Retro`
  }, "Retrospective template"), " to post a cohort retro in the forum."])]), external_react_hyperscript_default()(Layout["f" /* Seperator */]), external_react_hyperscript_default()("span", ["You can find more information about artifacts and retros in our ", external_react_hyperscript_default()(link_default.a, {
    href: `https://app.krakenedu.com/manual/facilitators#facilitating-a-cohort`
  }, "facilitator guide"), "."])])]), external_react_hyperscript_default()(Button["f" /* Primary */], {
    style: {
      justifySelf: "center"
    },
    onClick: async e => {
      e.preventDefault();
      setState("loading");
      let res = await Object(apiHelpers["b" /* callApi */])(`/api/cohorts/${props.cohort.id}`, {
        data: {
          completed: true
        }
      });
      if (res.status === 200) props.mutate(_cohortId_objectSpread(_cohortId_objectSpread({}, props.cohort), {}, {
        completed: res.result.completed
      }));
      setState("complete");
    }
  }, state === "loading" ? external_react_hyperscript_default()(Loader["b" /* default */]) : "Mark this cohort complete")])]);
  return external_react_hyperscript_default()(Button["b" /* Destructive */], {
    onClick: async e => {
      e.preventDefault();
      setState('confirm');
    }
  }, 'Mark as complete');
}; //end modal to complete cohorts
// Defining Banners (upcoming-facilitator, upcoming-learner, draft)


const Banners = props => {
  let isStarted = new Date(props.cohort.start_date).getTime() - new Date().getTime();
  let forum = `${constants["a" /* DISCOURSE_URL */]}/session/sso?return_path=/c/${props.cohort.category_id}`;
  if (props.facilitating && !props.cohort.live) return external_react_hyperscript_default()(TODOBanner, props);
  if (props.cohort.completed && (props.enrolled || props.facilitating)) return external_react_hyperscript_default()(Banner["a" /* TwoColumnBanner */], [external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 8,
    className: "textSecondary"
  }, [external_react_hyperscript_default()('h4', `You completed this course on ${Object(utils["f" /* prettyDate */])(props.cohort.completed || '')}!`), external_react_hyperscript_default()('p', [`This cohort's `, external_react_hyperscript_default()('a', {
    href: forum
  }, 'private forum'), ` will always be open! Feel free to come back whenever`])])]);

  if (isStarted > 0 && (props.enrolled || props.facilitating)) {
    if (props.facilitating) {
      return external_react_hyperscript_default()(Banner["a" /* TwoColumnBanner */], [external_react_hyperscript_default()(Layout["b" /* Box */], {
        gap: 8,
        className: "textSecondary"
      }, [external_react_hyperscript_default()('h4', `You're facilitating in ${Math.round(isStarted / (1000 * 60 * 60 * 24))} days `), external_react_hyperscript_default()('p', [`Check out the `, external_react_hyperscript_default()('a', {
        href: forum
      }, 'forum'), ` and meet the learners. You can also read our `, external_react_hyperscript_default()('a', {
        href: "/manual/facilitators"
      }, 'facilitator guide'), ` in the Krakenedu Manual`])])]);
    }

    return external_react_hyperscript_default()(Banner["a" /* TwoColumnBanner */], [external_react_hyperscript_default()(Layout["b" /* Box */], {
      gap: 8,
      className: "textSecondary"
    }, [external_react_hyperscript_default()('h4', `You start in ${Math.round(isStarted / (1000 * 60 * 60 * 24))} days `), external_react_hyperscript_default()('p', [`Check out the `, external_react_hyperscript_default()('a', {
      href: forum
    }, 'forum'), ` while you're waiting. You can introduce yourself and learn more about what you'll be doing when your cohort starts!`])])]);
  }

  return null;
};

const TODOBanner = props => {
  let {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(false);
  return external_react_hyperscript_default()(Banner["a" /* TwoColumnBanner */], {
    red: true
  }, [external_react_hyperscript_default()(BannerContent, [external_react_hyperscript_default()(Images["a" /* AccentImg */], {
    height: 32,
    width: 36,
    src: "https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/Seedling.png"
  }), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 8
  }, [external_react_hyperscript_default()("h4", "This cohort is still a draft"), external_react_hyperscript_default()("p", "It’s hidden from public view. People can’t join until you publish it.")]), ...(!expanded ? [] : [external_react_hyperscript_default()(Images["a" /* AccentImg */], {
    height: 32,
    width: 36,
    src: "https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/Bud.png"
  }), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 16
  }, [external_react_hyperscript_default()("h4", "Before you publish this cohort make sure that you ...  "), external_react_hyperscript_default()(TodoList["a" /* TodoList */], {
    persistKey: "cohort-publish-todo-" + props.cohort.id,
    items: ["Add events to your cohort schedule for any live calls or important dates people need to remember.", external_react_hyperscript_default()("span", ["Fill out ", external_react_hyperscript_default()(link_default.a, {
      href: `https://app.krakenedu.com/dashboard?tab=Profile`
    }, "your bio"), " and tell people more about you."]), external_react_hyperscript_default()("span", ["Fill out the ", external_react_hyperscript_default()("a", {
      href: `${constants["a" /* DISCOURSE_URL */]}/session/sso?return_path=/c/${props.cohort.category_id}`
    }, "Getting Started topic"), " in the forum with any first steps learners should take. This will be linked in the welcome email sent to everyone who enrolls."])]
  })]), external_react_hyperscript_default()(Images["a" /* AccentImg */], {
    height: 32,
    width: 36,
    src: "https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/Flower.png"
  }), external_react_hyperscript_default()(Layout["b" /* Box */], {
    gap: 16
  }, [external_react_hyperscript_default()("h4", "Once you're ready, hit publish and start spreading the word!"), external_react_hyperscript_default()(MarkCohortLive, {
    cohort: props.cohort,
    mutate: props.mutate
  })])])]), external_react_hyperscript_default()(Button["e" /* LinkButton */], {
    style: {
      justifySelf: "right",
      textDecoration: "none"
    },
    onClick: () => setExpanded(!expanded)
  }, expanded ? "hide checklist" : "show checklist")]);
};

const BannerContent = /*#__PURE__*/styled_base_default()('div', {
  target: "e1jdl2f11"
})(true ? {
  name: "12gnjoo",
  styles: "display:grid;grid-template-columns:min-content auto;grid-column-gap:16px;grid-row-gap:32px;"
} : undefined); //End Bannera


const getStaticProps = async ctx => {
  var _ctx$params, _ctx$params2;

  let courseId = parseInt(((_ctx$params = ctx.params) === null || _ctx$params === void 0 ? void 0 : _ctx$params.id) || "");
  if (Number.isNaN(courseId)) return {
    props: {
      notFound: true
    }
  };
  let course = await Object(_id_["courseDataQuery"])(courseId);
  if (!course) return {
    props: {
      notFound: true
    }
  };
  let cohortId = parseInt(((_ctx$params2 = ctx.params) === null || _ctx$params2 === void 0 ? void 0 : _ctx$params2.cohortId) || "");
  if (Number.isNaN(cohortId)) return {
    props: {
      notFound: true
    }
  };
  let cohort = await Object(_cohortId_["cohortDataQuery"])(cohortId);
  if (!cohort) return {
    props: {
      notFound: true
    }
  };
  let [artifacts, curriculum] = await Promise.all([Object(discourse["f" /* getTaggedPost */])(cohort.category_id, "artifact"), Object(discourse["f" /* getTaggedPost */])(cohort.courses.category_id, "curriculum")]);
  return {
    props: {
      notFound: false,
      courseId,
      cohortId,
      cohort,
      course,
      curriculum,
      artifacts
    },
    revalidate: 1
  };
};
const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  };
};

/***/ }),

/***/ "WkmV":
/***/ (function(module, exports) {

module.exports = require("react-hyperscript");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Zp4/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoColumnBanner; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mirl");



const TwoColumnBanner = props => {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Banner, props, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('div', {
    style: {
      maxWidth: 960,
      padding: 32,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 32
    }
  }, react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(BannerInner, [props.children]))]);
};

const BannerInner = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "er3xx7r0"
})("display:grid;grid-template-columns:2fr 1fr;grid-gap:64px;", _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* Tablet */ "c"], "{grid-template-columns:auto;grid-template-rows:auto;}" + (true ? "" : undefined));

const Banner = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "er3xx7r1"
})("z-index:8;background-color:", props => props.red ? _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].backgroundRed : _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* colors */ "d"].grey95, ";position:relative;width:100vw;position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;margin-bottom:16px;margin-top:-48px;", _Tokens__WEBPACK_IMPORTED_MODULE_2__[/* Mobile */ "a"], "{margin-top:0px}" + (true ? "" : undefined));

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fdqv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return prettyDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dateFromDateAndTimeInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return slugify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return usernameValidate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getTimeBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStripe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return sortByDateAndName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cohortName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return formHelper; });
/* harmony import */ var _stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2CTY");
/* harmony import */ var _stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const prettyDate = str => {
  let date = new Date(str);
  let today = new Date();
  if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) return "Today";
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};
function dateFromDateAndTimeInputs(date, time) {
  let dateParts = date.split('-').map(x => parseInt(x));
  let timeParts = time.split(':').map(x => parseInt(x));
  return new Date(dateParts[0], dateParts[1] - 1, dateParts[2], timeParts[0], timeParts[1]);
}
const slugify = str => {
  var specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g;
  return str.trim().replace(specials, '').replace(/\s/g, '-').toLowerCase();
};
const usernameValidate = s => /^[a-zA-Z0-9_.\-]{3,15}$/.test(s);
function getTimeBetween(d1, d2) {
  return ((d2.getTime() - d1.getTime()) / (1000 * 60 * 60)).toFixed(1);
}
let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = Object(_stripe_stripe_js_pure__WEBPACK_IMPORTED_MODULE_0__["loadStripe"])("pk_live_QK7Q1D4rLw8qU6XS4S7ZjQnz");
  }

  return stripePromise;
};
const sortByDateAndName = (a, b) => {
  if (a.start_date === b.start_date) return a.name > b.name ? 1 : -1;
  return a.start_date > b.start_date ? 1 : -1;
};
const cohortName = name => isNaN(parseInt(name)) ? name : `Cohort #${name}`;
function formHelper(state, setState) {
  return Object.keys(state).reduce((acc, key) => {
    let value = state[key];
    acc[key] = {
      value,
      onChange: e => setState(_objectSpread(_objectSpread({}, state), {}, {
        [key]: typeof value === 'number' ? parseInt(e.currentTarget.value) : e.currentTarget.value
      }))
    };
    return acc;
  }, {});
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "he5r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISCOURSE_URL; });
let DISCOURSE_URL = 'https://forum.krakenedu.com';

/***/ }),

/***/ "hsUr":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled-base");

/***/ }),

/***/ "i5HK":
/***/ (function(module, exports) {

module.exports = require("postmark");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "kacE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Loader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLoader; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



function Loader() {
  let {
    0: dots,
    1: setDots
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    let id = setInterval(() => {
      setDots(count => (count + 1) % 4);
    }, 250);
    return () => {
      clearInterval(id);
    };
  }, []);
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('div', '.'.repeat(dots) + '\u00a0'.repeat(3 - dots));
}
const PageLoader = () => react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(PageLoaderContainer, {}, react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(PageLoaderImage, {
  src: "/img/loading.gif"
}));

let PageLoaderImage = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('img', {
  target: "e1ft89jx0"
})(true ? {
  name: "pvddpw",
  styles: "image-rendering:pixelated;image-rendering:crisp-edges;width:100%;"
} : undefined);

let PageLoaderContainer = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1ft89jx1"
})(true ? {
  name: "vux01b",
  styles: "max-width:300px;margin:auto;padding:32px;"
} : undefined);

/***/ }),

/***/ "lnWS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VerticalTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyWrapper; });
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Hbq");
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mirl");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const Tabs = props => {
  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  let tabs = Object.keys(props.tabs).filter(tab => props.tabs[tab] !== null);
  let selectedTab = typeof router.query.tab !== 'string' || !props.tabs[router.query.tab] ? tabs[0] : router.query.tab;
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__[/* Box */ "b"], {
    gap: 32
  }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(StickyWrapper, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Nav, tabs.map(tab => react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Tab, {
    active: selectedTab === tab,
    onClick: () => {
      let route = new URL(window.location.href);
      route.searchParams.set('tab', tab);
      router.replace(route, undefined, {
        shallow: true
      });
    }
  }, tab)))]), props.tabs[selectedTab]]);
};
function VerticalTabs(props) {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_2__[/* Box */ "b"], {}, props.tabs.map(tab => {
    return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(VerticalTab, {
      selected: props.selected === tab,
      onClick: () => props.onChange(tab)
    }, tab);
  }));
}
const StickyWrapper = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "ei3os2m0"
})("position:sticky;top:0px;background-color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].appBackground, ";z-index:1;margin-top:-32px;padding-top:32px;", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* Mobile */ "a"], "{padding-top:16px;margin-top:-16px;}" + (true ? "" : undefined));

const Nav = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "ei3os2m1"
})("display:grid;grid-gap:32px;grid-auto-columns:max-content;grid-auto-flow:column;grid-template-rows:auto;border-bottom:3px solid;", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* Mobile */ "a"], "{grid-gap:16px;}" + (true ? "" : undefined));

const VerticalTab = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('a', {
  target: "ei3os2m2"
})("padding-left:12px;box-sizing:border-box;&:hover{cursor:pointer;}", p => p.selected ? `
color: blue;
font-weight: bold;
border-collor: blue;
padding-left: 8px;
border-left: solid 4px;
` : "", true ? "" : undefined);

const Tab = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('h4', {
  target: "ei3os2m3"
})("padding-bottom:4px;margin-bottom:2px;font-weight:bold;z-index:8;&:hover{cursor:pointer;}", props => props.active ? 'color: blue' : '', ";", props => props.active ? 'border-bottom: 4px solid' : '', ";" + (true ? "" : undefined)).withComponent('a', {
  target: "ei3os2m4"
});

/***/ }),

/***/ "mB65":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useDebouncedEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useMediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useFormData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fdqv");


const useDebouncedEffect = (callback, delay, deps) => {
  const firstUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    const handler = setTimeout(() => {
      callback();
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, ...deps]);
};
const useMediaQuery = query => {
  let {
    0: match,
    1: setMatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let mediaQuery = window.matchMedia(query);
    setMatch(mediaQuery.matches);

    let listener = () => {
      setMatch(mediaQuery.matches);
    };

    mediaQuery.addListener(listener);
    return () => mediaQuery.removeListener(listener);
  }, [query]);
  return match;
};
function useFormData(initialState, update = []) {
  let {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialState);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setState(initialState);
  }, update);
  let form = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[/* formHelper */ "c"])(state, setState);
  return {
    state,
    setState,
    changed: Object.keys(initialState).reduce((acc, key) => acc || initialState[key] !== state[key], false),
    form,
    reset: () => setState(initialState)
  };
}

/***/ }),

/***/ "mirl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProgressBarZindex; });
const colors = {
  grey95: "#EDECEA",
  grey90: "#E5E5E5",
  grey80: "#CCCCCC",
  grey55: "#8C8C8C",
  grey35: "#595959",
  grey15: "#272727",
  appBackground: "#FDFCFA",
  textSecondary: '#595959',
  textPrimary: '#272727',
  borderColor: "#8C8C8C",
  borderSelected: "blue",
  backgroundRed: "#F9EBE8",
  accentRed: "#C23C1E",
  accentSuccess: "#348C1E",
  accentPeach: "#F8EFE2",
  accentLightBlue: "#F0F7FA",
  linkHover: "#00008B"
};
const Mobile = '@media(max-width:420px)';
const Tablet = '@media(max-width:768px)';
const ProgressBarZindex = 'z-index: 50';

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "rk+T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PasswordInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Textarea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Radio; });
/* unused harmony export Item */
/* unused harmony export RadioButton */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("mirl");
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Hbq");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }






let CheckBox = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e1kkx02t0"
})(true ? {
  name: "hsbua9",
  styles: "display:grid;align-items:center;grid-template-columns:16px auto;grid-gap:16px;input[type=\"checkbox\"]:focus{border:1px solid;outline:none;}input[type=\"checkbox\"]:hover{border:2px solid;}input[type=\"checkbox\"]{background-color:white;appearance:none;position:relative;padding:0;height:16px;width:16px;border:1px solid;border-radius:2px;align-self:first baseline;}input[type=\"checkbox\"]::before{position:absolute;content:url(\"data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4.69231L2.875 7L7 1' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\");visibility:hidden;top:-5.5px;left:2px;}input[type=\"checkbox\"]:checked::before{visibility:visible;}input[type=\"checkbox\"]:checked{border:2px solid;}"
} : undefined);
function PasswordInput(props) {
  let {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('div', {
    style: {
      width: '100%',
      marginBottom: '-16px'
    }
  }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Input, _objectSpread(_objectSpread({}, props), {}, {
    type: visible ? "text" : 'password',
    style: {
      width: '100%',
      boxSizing: 'border-box'
    }
  })), react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(ToggleButton, {
    onClick: e => {
      e.preventDefault();
      setVisible(!visible);
    }
  }, visible ? 'hide' : 'show')]);
}

let ToggleButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('button', {
  target: "e1kkx02t1"
})("font-family:'Roboto Mono',monospace;color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].textSecondary, ";outline:none;background-color:inherit;border:none;position:relative;&:hover{cursor:pointer;}top:-30px;left:-16px;float:right;" + (true ? "" : undefined));

let StyledInput = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('input', {
  target: "e1kkx02t2"
})("min-width:0;padding:12px 16px;border:1px solid;border-color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey55, ";border-radius:2px;font-size:inherit;font-family:inherit;", p => p.readOnly ? `
border: none;
background-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey95};

&:focus {
outline: none;
}
` : '', true ? "" : undefined);

const Input = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
  if (!props.maxLength || typeof props.value !== 'string') return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(StyledInput, _objectSpread(_objectSpread({}, props), {}, {
    ref
  }));
  let placeholder;
  if (props.type === 'date') placeholder = 'yyyy-mm-dd';
  if (props.type === 'time') placeholder = '23:59';
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_4__[/* Box */ "b"], {
    gap: 4
  }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(StyledInput, _objectSpread(_objectSpread({}, props), {}, {
    ref,
    placeholder: placeholder || props.placeholder
  })), react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('small.textSecondary', {
    style: {
      justifySelf: 'right'
    }
  }, `${props.value.length}/${props.maxLength}`)]);
});

const StyledTextarea = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('textarea', {
  target: "e1kkx02t3"
})("resize:vertical;padding:12px 16px;border:1px solid;border-color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey55, ";border-radius:2px;padding:12px 16px;font-size:1rem;height:128px;font-family:Lato;border-radius:2px;" + (true ? "" : undefined));

const Textarea = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
  if (!props.maxLength || typeof props.value !== 'string') return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(StyledTextarea, _objectSpread(_objectSpread({}, props), {}, {
    ref
  }));
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_4__[/* Box */ "b"], {
    gap: 4
  }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(StyledTextarea, _objectSpread(_objectSpread({}, props), {}, {
    ref
  })), react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('small.textSecondary', {
    style: {
      justifySelf: 'right'
    }
  }, `${props.value.length}/${props.maxLength}`)]);
});
const Error = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1kkx02t4"
})("background-color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].backgroundRed, ";color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].accentRed, ";padding:16px;" + (true ? "" : undefined));
const Info = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1kkx02t5"
})("background-color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].accentPeach, ";padding:16px;" + (true ? "" : undefined));
const Select = props => {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Container, {}, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(SelectEl, props), react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Icon, {
    width: 18,
    height: 11,
    xmlns: "http://www.w3.org/2000/svg",
    fill: 'none'
  }, react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()('path', {
    d: "M1 1L9 9L17 1",
    stroke: _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].textSecondary,
    strokeWidth: 2
  }))]);
};
function Radio(props) {
  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_4__[/* Box */ "b"], {
    h: props.h,
    gap: 16
  }, props.items.map(item => {
    return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(Item, {
      disabled: props.selected !== item.value && props.disabled
    }, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(RadioButton, {
      key: item.value,
      onChange: e => {
        if (props.disabled) e.preventDefault();else props.onChange(e.currentTarget.value);
      },
      value: item.value,
      name: props.name,
      type: 'radio',
      checked: props.selected === item.value
    }), item.component]);
  }));
}
const Item = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('label', {
  target: "e1kkx02t6"
})("display:grid;grid-template-columns:min-content auto;grid-gap:8px;&:hover{cursor:pointer;input{border:2px solid;}}", props => props.disabled ? `
color: ${_Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey55};
input {
  background-color: ${_Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey90};
  border: 1px solid ${_Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey80};
  box-shadow:none;
}

&:hover {
  cursor: auto;
  input {
    border: 1px solid ${_Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey80};
  }
}
` : null, true ? "" : undefined);
const RadioButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('input', {
  target: "e1kkx02t7"
})(true ? {
  name: "f7oww7",
  styles: "appearance:none;padding:0px;margin-left:0px;margin-right:0px;border-radius:50%;border:1px solid;width:16px;height:16px;box-shadow:0px 0px 0px 2px white inset;&:active{outline:none;}&:checked{border:2px solid;background-color:black;}"
} : undefined);

const Container = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "e1kkx02t8"
})(true ? {
  name: "1uxcpfg",
  styles: "display:grid;background-color:white;grid-template-columns:100% auto;"
} : undefined);

const Icon = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('svg', {
  target: "e1kkx02t9"
})(true ? {
  name: "5d0n88",
  styles: "align-self:center;margin-left:-32px;"
} : undefined);

const SelectEl = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('select', {
  target: "e1kkx02t10"
})("width:100%;border:1px solid;border-color:", _Tokens__WEBPACK_IMPORTED_MODULE_3__[/* colors */ "d"].grey55, ";font-size:inherit;background-color:inherit;padding:12px 16px;appearance:none;" + (true ? "" : undefined));

/***/ }),

/***/ "rkef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setTokenHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeToken; });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rlPI");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

function setTokenHeader(token) {
  return {
    'Set-Cookie': cookie__WEBPACK_IMPORTED_MODULE_0___default.a.serialize('loginToken', JSON.stringify(token), {
      path: '/',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      // 30 days
      httpOnly: true,
      sameSite: "lax"
    })
  };
}
function getToken(req) {
  const cookies = req.headers.cookie;
  if (!cookies) return;
  const {
    loginToken
  } = cookie__WEBPACK_IMPORTED_MODULE_0___default.a.parse(cookies);
  if (loginToken) return JSON.parse(loginToken);
  return;
}
function removeToken(res) {
  res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_0___default.a.serialize('loginToken', '', {
    path: '/',
    expires: new Date(Date.now() - 1000),
    httpOnly: false
  }));
}

/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "uNyZ":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Event RSVP no account\",\"Alias\":\"event-rsvp-no-account\",\"Subject\":\"You've RSVP'd to {{event_name}}\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"event_name\":\"event_name_Value\",\"event_page_url\":\"cohort_page_url_Value\"}}");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vglc":
/***/ (function(module, exports) {

module.exports = require("remark-emoji");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wyA/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Modal; });
/* unused harmony export ModalBox */
/* unused harmony export ModalBlur */
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hsUr");
/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WkmV");
/* harmony import */ var react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hyperscript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Hbq");
/* harmony import */ var _Tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mirl");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }





const Modal = props => {
  let {
    0: display,
    1: setDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.display);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => setDisplay(props.display), [props]);
  if (!display) return null;

  const onClick = () => {
    setDisplay(false);
    if (props.onExit) props.onExit();
  };

  return react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(ModalBlur, {
    onClick
  }), react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(ModalBox, [react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(_Layout__WEBPACK_IMPORTED_MODULE_3__[/* Box */ "b"], {
    style: {
      width: '100%'
    }
  }, [props.children, props.hideCloseButton ? null : react_hyperscript__WEBPACK_IMPORTED_MODULE_1___default()(CloseButton, {
    onClick
  }, props.closeText || "close")])])]);
};

const CloseButton = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('a', {
  target: "evhn6l70"
})("font-family:'Roboto Mono',mono;font-size:1rem;justify-self:center;color:", _Tokens__WEBPACK_IMPORTED_MODULE_4__[/* colors */ "d"].textSecondary, ";&:visited{color:", _Tokens__WEBPACK_IMPORTED_MODULE_4__[/* colors */ "d"].textSecondary, ";}&:hover{cursor:pointer;color:#00008B;}" + (true ? "" : undefined));

const ModalBox = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "evhn6l71"
})("position:fixed;border:2px solid;background-color:", _Tokens__WEBPACK_IMPORTED_MODULE_4__[/* colors */ "d"].appBackground, ";max-width:480px;width:60%;padding:32px;left:50%;top:50%;transform:translate(-50%,-50%);z-index:10;justify-content:center;" + (true ? "" : undefined));
const ModalBlur = /*#__PURE__*/_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  target: "evhn6l72"
})(true ? {
  name: "5bhoqh",
  styles: "position:fixed;top:0;left:0;width:100%;height:100%;background-color:white;opacity:0.75;@supports (backdrop-filter:blur(2.5px)){backdrop-filter:blur(2.5px);background-color:transparent;opacity:1;}z-index:9;"
} : undefined);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yL8g":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Invite to Course\",\"Alias\":\"invite-to-course\",\"Subject\":\"You've been invited to join {{course_name}} on KrakenEdu!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"course_url\":\"course_url_Value\",\"course_name\":\"course_name_Value\"}}");

/***/ }),

/***/ "z6Iz":
/***/ (function(module, exports) {

module.exports = require("react-hot-toast");

/***/ }),

/***/ "z7f3":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Watching Course Notification\",\"Alias\":\"watching-notification\",\"Subject\":\"{{course_name}} - new cohort scheduled!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"course_name\":\"course_name_Value\",\"course_description\":\"course_description_Value\",\"cohort_page_url\":\"cohort_page_url_Value\",\"cohort_start_date\":\"cohort_start_date_Value\"}}");

/***/ })

/******/ });
//# sourceMappingURL=[cohortId].js.map