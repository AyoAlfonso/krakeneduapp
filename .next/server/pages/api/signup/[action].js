module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("F0sM");


/***/ }),

/***/ "2CTY":
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js/pure");

/***/ }),

/***/ "2k9J":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Event update no account\",\"Alias\":\"event-update-no-account\",\"Subject\":\"{{event_name}} has been updated\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"event_name\":\"event_name_Value\",\"event_page_url\":\"cohort_page_url_Value\"}}");

/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "8yhK":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Event RSVP\",\"Alias\":\"event-rsvp\",\"Subject\":\"You've RSVP'd to {{event_name}}\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"event_name\":\"event_name_Value\",\"event_page_url\":\"cohort_page_url_Value\"}}");

/***/ }),

/***/ "DPTN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PJMN");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (input => {
  const hmac = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHmac('sha256', '');
  hmac.update(input);
  return hmac.digest('hex');
});

/***/ }),

/***/ "EQGd":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Cohort Enrollment\",\"Alias\":\"cohort-enrollment\",\"Subject\":\"You're enrolled in {{course_name}} on Kraken!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"course_name\":\"course_name_Value\",\"course_start_date\":\"course_start_date_Value\",\"get_started_topic_url\":\"get_started_topic_url_Value\",\"cohort_page_url\":\"cohort_page_url_Value\",\"cohort_forum_url\":\"cohort_forum_url_Value\"}}");

/***/ }),

/***/ "F0sM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("yFn1");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("kNaX");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_hmac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DPTN");
/* harmony import */ var _src_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rkef");
/* harmony import */ var _src_apiHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("0CBl");
/* harmony import */ var _src_discourse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("+khs");
/* harmony import */ var _emails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("PNXN");
/* harmony import */ var src_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("fdqv");
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("1ygI");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/* harmony default export */ __webpack_exports__["default"] = (Object(_src_apiHelpers__WEBPACK_IMPORTED_MODULE_4__[/* multiRouteHandler */ "c"])('action', {
  request: Signup,
  verify: VerifyEmail,
  newsletter: newsletterSignup
}));

async function Signup(req) {
  let msg = req.body;

  if (!msg.email || !msg.password || !msg.username || msg.newsletter === undefined) {
    return {
      status: 400,
      result: 'Error: invalid message, missing email, password, newsletter, or display_name'
    };
  }

  if (!Object(src_utils__WEBPACK_IMPORTED_MODULE_7__[/* usernameValidate */ "i"])(msg.username)) return {
    status: 400,
    result: "Error: Username must be between 3 and 15 characters, and contain only numbers, letters, dots, dashes, and underscores"
  };

  if (!(await checkUser(msg.email))) {
    return {
      status: 401,
      result: "Error: A user exists with that email"
    };
  }

  let salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.genSalt();
  let password_hash = await bcryptjs__WEBPACK_IMPORTED_MODULE_0___default.a.hash(msg.password, salt);
  let key = await createActivationKey({
    email: msg.email.toLowerCase(),
    username: msg.username,
    password_hash,
    newsletter: msg.newsletter
  });
  let origin = new URL(req.headers.referer || '').origin;
  let activation_url = `${origin}/signup?verifyEmail=${key}`;
  await Object(_emails__WEBPACK_IMPORTED_MODULE_6__[/* sendVerificationEmail */ "i"])(msg.email, {
    activation_code: key,
    name: msg.username,
    activation_url
  });
  return {
    status: 200,
    result: ''
  };
}

async function VerifyEmail(req) {
  let msg = req.body;
  if (!msg.key) return {
    status: 400,
    result: 'Error: invalid message, missing property key'
  };
  let keyHash = Object(_src_hmac__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(msg.key);
  let token = await getActivationKey(keyHash);
  if (!token) return {
    status: 403,
    result: 'Error: invalid activation_key'
  };
  let date = new Date(token.created_time);

  if ((Date.now() - date.getTime()) / (1000 * 60) > 30) {
    return {
      status: 403,
      result: "Error: activation_key is out of date"
    };
  }

  let id = await createUser({
    username: token.username,
    email: token.email,
    password_hash: token.password_hash
  });

  if (token.newsletter) {
    fetch('https://api.buttondown.email/v1/subscribers', {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
        "Content-Type": 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        email: token.email
      })
    });
  }

  if (!id) return {
    status: 403,
    result: "Error: Couldn't create user. May already exist"
  };
  await Object(_src_discourse__WEBPACK_IMPORTED_MODULE_5__[/* syncSSO */ "i"])({
    external_id: "7abd6904-73ed-4f33-b9b7-864a3e574c6a",
    username: "pudakas",
    email: "faryk@mailinator.com"
  });
  return {
    status: 200,
    result: '',
    headers: Object(_src_token__WEBPACK_IMPORTED_MODULE_3__[/* setTokenHeader */ "c"])({
      id,
      email: token.email,
      username: token.username
    })
  };
}

const createActivationKey = async person => {
  let key = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
  await lib_prisma__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].activation_keys.create({
    data: _objectSpread(_objectSpread({}, person), {}, {
      created_time: new Date(Date.now()).toISOString(),
      key_hash: Object(_src_hmac__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(key)
    })
  });
  return key;
};

const checkUser = async email => {
  return !(await lib_prisma__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].people.findFirst({
    where: {
      email: {
        equals: email,
        mode: 'insensitive'
      }
    }
  }));
};

const createUser = async input => {
  let previousEvents = await lib_prisma__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].no_account_rsvps.findMany({
    where: {
      email: {
        equals: input.email,
        mode: 'insensitive'
      }
    }
  });
  let user;

  try {
    [user] = await Promise.all([lib_prisma__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].people.create({
      data: _objectSpread(_objectSpread({}, input), {}, {
        id: Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])(),
        people_in_events: {
          create: previousEvents.map(ev => {
            return {
              events: {
                connect: {
                  id: ev.event
                }
              }
            };
          })
        }
      })
    }), lib_prisma__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].activation_keys.deleteMany({
      where: {
        email: input.email
      }
    }), previousEvents.length > 0 ? lib_prisma__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].no_account_rsvps.deleteMany({
      where: {
        email: {
          equals: input.email,
          mode: 'insensitive'
        }
      }
    }) : undefined]);
  } catch (e) {
    console.log(e);
    return false;
  }

  return user.id;
};

const getActivationKey = async hash => {
  return lib_prisma__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].activation_keys.findUnique({
    where: {
      key_hash: hash
    },
    select: {
      username: true,
      email: true,
      password_hash: true,
      created_time: true,
      newsletter: true
    }
  });
};

async function newsletterSignup(req) {
  let msg = req.body;
  if (!msg.email) return {
    status: 400,
    result: "ERROR: no email provided"
  };
  await fetch('https://api.buttondown.email/v1/subscribers', {
    method: "POST",
    headers: {
      Authorization: `Token ${process.env.BUTTONDOWN_API_KEY}`,
      "Content-Type": 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      email: msg.email,
      tags: ['homepage']
    })
  });
  return {
    status: 200,
    result: 'Signed up for newsletter'
  };
}

/***/ }),

/***/ "Ilxa":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Password Reset\",\"Alias\":\"password-reset\",\"Subject\":\"Set up a new password for your KrakenEdu account\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"action_url\":\"action_url_Value\"}}");

/***/ }),

/***/ "M+vo":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Enroll notification\",\"Alias\":\"enroll-notification\",\"Subject\":\"{{learner}} enrolled in {{course}}\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"learner\":\"learner_Value\",\"course\":\"course_Value\",\"cohort_forum_url\":\"cohort_forum_url_Value\",\"cohort_page_url\":\"cohort_page_url_Value\"}}");

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

/***/ "TZPe":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Welcome\",\"Alias\":\"welcome\",\"Subject\":\"Welcome to KrakenEdu - confirm your account and get started!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"activation_code\":\"activation_code_Value\",\"activation_url\":\"activation_url_Value\"}}");

/***/ }),

/***/ "UAhG":
/***/ (function(module, exports) {

module.exports = require("@sentry/node");

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "he5r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISCOURSE_URL; });
let DISCOURSE_URL = 'https://forum.krakenedu.com';

/***/ }),

/***/ "i5HK":
/***/ (function(module, exports) {

module.exports = require("postmark");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

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

/***/ "yFn1":
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "yL8g":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Invite to Course\",\"Alias\":\"invite-to-course\",\"Subject\":\"You've been invited to join {{course_name}} on KrakenEdu!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"course_url\":\"course_url_Value\",\"course_name\":\"course_name_Value\"}}");

/***/ }),

/***/ "z7f3":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Watching Course Notification\",\"Alias\":\"watching-notification\",\"Subject\":\"{{course_name}} - new cohort scheduled!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"course_name\":\"course_name_Value\",\"course_description\":\"course_description_Value\",\"cohort_page_url\":\"cohort_page_url_Value\",\"cohort_start_date\":\"cohort_start_date_Value\"}}");

/***/ })

/******/ });
//# sourceMappingURL=[action].js.map