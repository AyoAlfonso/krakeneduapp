module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("OoZR");


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

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "OoZR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "coursesQuery", function() { return /* binding */ coursesQuery; });

// EXTERNAL MODULE: external "runtypes"
var external_runtypes_ = __webpack_require__("T4kY");

// EXTERNAL MODULE: ./src/discourse.ts
var discourse = __webpack_require__("+khs");

// CONCATENATED MODULE: ./writing/TemplateCourseDescription.txt
/* harmony default export */ var TemplateCourseDescription = ("This is a template for a detailed description of this course — an overview of its entire curriculum. \n\nPlease edit this topic to include most or all of the elements listed below!\n\nNote that the following will be included on the course details page, and don't have to be added here:\n\n- Title (max 50 characters)\n- Short description (max 200 characters)\n- Cost\n- Requirements (short prerequisites)\n\n## Course Goals\n\nReplace with: a brief overview of what material the course covers, and its overall learning goals.\n\n## Structure\n\nReplace with: summary of how many sessions, how often you meet, estimate of time required, etc. You don't need a detailed schedule — you'll create an \"event\" for each meeting, per cohort.\n\n## Syllabus / Schedule\n\nReplace with: an outline of what will be covered in each week of the course (or whatever cadence you choose).\n\nNote that this should be generalized e.g. \"Week 1, Week 2…\" — when the course is run, each cohort's schedule will include its specific dates and times.\n\n## Artifacts\n\nReplace with: tangible outcomes of the course — specific goals for final projects, evaluations, next steps, or any other specific output your course may produce.\n\n## Who Should Sign Up\n\nReplace with: further detail on prerequisites for the course, and description of its ideal participant — who would get the most out of this course? Who is it *not* for?\n\n## Anything Else…\n\nReplace with: anything else that you think is essential for participants to know! Feel free to rename this section or add additional ones as needed. Or if nothing comes to mind, simply remove this section.");
// CONCATENATED MODULE: ./writing/TemplateClubDescription.txt
/* harmony default export */ var TemplateClubDescription = ("This is a template for including details about this club.\n\nPlease edit this topic to include most or all of the elements listed below!\n\nNote that the following will be included on the club details page, and don't have to be added here:\n\n- Title (max 50 characters)\n- Short description (max 200 characters)\n- Cost\n- Requirements (short prerequisites)\n\n## Learning Goals\n\nReplace with: a brief overview of what material the Club will cover, and its overall learning goals. Are there specific outcomes you're aiming for? Any concrete artifacts expected? Questions you're exploring?\n\n## Structure\n\nReplace with: summary of how many sessions, how often you meet, estimate of time required, etc. You don't need a detailed schedule — you'll create an \"event\" for each meeting.\n\n## Who Should Sign Up\n\nReplace with: description of the ideal participant — who would get the most out of this Club? Who is it *not* for?\n\n## Anything Else…\n\nReplace with: anything else that you think is essential for participants to know! Feel free to rename this section, remove, or add additional ones as needed.");
// EXTERNAL MODULE: ./src/token.ts
var token = __webpack_require__("rkef");

// EXTERNAL MODULE: ./src/apiHelpers.ts
var apiHelpers = __webpack_require__("0CBl");

// CONCATENATED MODULE: ./writing/TemplateCohortGettingStarted.txt
/* harmony default export */ var TemplateCohortGettingStarted = ("This is a template for outlining a few simple steps for how participants in this cohort should get started.\n\nPlease edit this topic to include most or all of the following elements — or anything else you like!\n\n## Introductions\n\nReplace with: brief note encouraging participants to introduce themselves in this topic. Something like:\n\nPlease post a brief intro below! Let everyone know who you are, why you signed up, and what you hope to learn. And say hello to other participants; let's get to know each other!\n\n## Logistics\n\nReplace with: notes about any logistical details participants need to know. \n\nAny other tools / services participants will need to sign up for or download (e.g. Google Drive, Zoom, etc.)? Materials to prepare? Be sure to let everyone know any preliminary action items.\n\nThis topic contains details for this particular cohort. Right now you're in our private forum just for members of this cohort.\n\n## Start Learning!\n\nReplace with: any day-one action items that participants should complete prior to your first meeting. First reading(s) or assignment(s)? Share those here.");
// CONCATENATED MODULE: ./writing/TemplateCohortNotes.txt
/* harmony default export */ var TemplateCohortNotes = ("This is a template for adding additional information specific to this particular cohort of the course. \n\nPlease edit this topic to include most or all of the elements listed below!\n\n❗️**Important:** The contents of this post will automatically get published on the cohort page. That means it'll be publicly available for ANYONE, not just learners in this cohort, to see. Don't post anything you wouldn't want everyone to know (like links to video conference calls).\n\nAll *other* posts in this forum category are private to participants in this cohort. Note that each course also has its own forum space, parent to this one, that is publicly visible.\n\n## Schedule\n\nReplace with: brief outline of your schedule for this particular cohort, with any important meetings or deadlines.\n\nIf your meetings are regularly scheduled (for example, every Monday for six weeks), be sure to list any days when the course will deviate from the norm (rescheduling around holidays, for example).\n\n**Note:** You'll create a detailed schedule of all events on the cohort page, so this is best as a summary.\n\n## Amendments\n\nReplace with: anything changes to the curriculum specific to this cohort, that deviate from or override the main course description.\n\n## Anything Else…\n\nReplace with: anything else about this cohort that you think is essential for participants to know! For example any particular thematic focus or learning experiments you want to explore…\n\nFeel free to rename this section or add additional ones as needed. Or if nothing comes to mind, simply remove this section.");
// CONCATENATED MODULE: ./writing/TemplateCohortArtifact.txt
/* harmony default export */ var TemplateCohortArtifact = ("This is a template for collecting the artifact resulting from this cohort — a final, publicly viewable summary of what participants learned or created during the course.\n\n❗️**Important:** The contents of this post will appear on the cohort page, visible to everyone. Don't post anything you don't want to be publicly shared.\n\nPlease edit this topic with an artifact that makes sense for your course.\n\n## [Artifact Title]\n\nReplace with: summary description of what the cohort created or learned together.\n\nThis may be a final writeup, a summary of each participant's project, a link roundup to externally hosted  assignments — whatever makes sense for your course.\n\nNote that participants can reply to this post, but only this initial post of the topic will be published to the cohort page as its public artifact.");
// CONCATENATED MODULE: ./writing/TemplateCohortAssignment.txt
/* harmony default export */ var TemplateCohortAssignment = ("This is a template for an assignment you want to give participants in this cohort.\n\nPlease edit this topic with description, instructions, or anything else that makes sense for the assignment you'd like to share. The text below is just a starting point.\n\n## [Assignment Title]\n\nReplace with: summary description of the assignment. What are participants creating? What's the learning goal in the context of this course?\n\n## Instructions\n\nReplace with: details on the expected format or process for completing the assignment.\n\nExample (for a final writeup):\n\n- Please post a link to a Google Doc with 500 words on what you learned\n- Make sure that sharing is turned on so others can comment\n\nExample (for a photography workshop)\n\n- Select your three favorite photos from the week's theme\n- Upload them to a post here, each preceded with a one-paragraph description");
// CONCATENATED MODULE: ./writing/TemplateCohortEvent.txt
/* harmony default export */ var TemplateCohortEvent = ("This is a template for details / discussion related to a specific event in your cohort.\n\nPlease edit this topic to include most or all of the elements listed below!\n\n❗️**Important:** Please schedule each event from the main cohort page. This template is not the main way to create an event, but may be useful as a reminder, a way to share related details, or collaborate on event notes.\n\n## [Event Title]\n\nReplace with: short description of the event; any additional info beyond what you included in the event description on the cohort page.\n\n## Details / Instructions\n\nReplace with: further details about the event, if needed. How to join, anything participants need to do to prepare; etc.");
// CONCATENATED MODULE: ./writing/TemplateCohortPrompt.txt
/* harmony default export */ var TemplateCohortPrompt = ("This is a template for a prompt — a question or discussion topic you'd like participants to discuss or respond to.\n\nPlease edit this topic to include any details necessary to spark this discussion!\n\n## [Prompt Title]\n\nReplace with: the prompt itself, with as much detail as you need, and how you'd like participants to respond below.");
// CONCATENATED MODULE: ./writing/TemplateCohortRetrospective.txt
/* harmony default export */ var TemplateCohortRetrospective = ("This is a template for your cohort to run a retrospective — collecting valuable feedback from participants that will help the course improve over time.\n\nPlease edit this topic to include most or all of the following elements — or anything else you like!\n\n## Questions\n\nReplace with: particular questions you'd like students to answer at the end of the cohort, aimed at helping your course improve.\n\nThe questions below are just examples. You'll get better feedback if you ask targeted questions about specific aspects of your course. Tweak these questions, or write your own!\n\n- What did you expect to get out of this course? Were those expectations met? If not, how do you feel about the progress you made in this course (if any)?\n- What specific things (moments, techniques, conversations) did you feel were most useful to learning in this course?\n- What do you wish we'd spent more time on? Anything you felt we should add?\n- What's one thing you'd suggest we change or remove?\n- Please share anything else you'd like us to know!\n\nParticipants: you can quote some or all of these questions to structure your replies below.\n\n## Sharing the Retro\n\nReplace with: how the info from this retrospective will be used to improve the course. For example:\n\nThe maintainers of this course will review all feedback collected in this retrospective process. We'll think hard about how we can improve the course structure, specific processes, even particular assignments, questions, or readings.\n\nWe may follow up if we want to get more detail on anything mentioned below. \n\nThanks so much for taking the time to help us improve this course — we really appreciate it!");
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__("fdqv");

// EXTERNAL MODULE: ./lib/prisma.ts
var prisma = __webpack_require__("1ygI");

// CONCATENATED MODULE: ./pages/api/courses/index.ts















const CreateCourseMsgValidator = external_runtypes_["Record"]({
  type: external_runtypes_["Union"](external_runtypes_["Literal"]('club'), external_runtypes_["Literal"]('course'), external_runtypes_["Undefined"]),
  description: external_runtypes_["String"],
  name: external_runtypes_["String"],
  cost: external_runtypes_["Number"],
  duration: external_runtypes_["String"],
  prerequisites: external_runtypes_["String"],
  maintainers: external_runtypes_["Array"](external_runtypes_["String"])
});
/* harmony default export */ var courses = __webpack_exports__["default"] = (Object(apiHelpers["a" /* APIHandler */])({
  POST: createCourse,
  GET: getCourses
}));
const coursesQuery = options => prisma["a" /* default */].courses.findMany({
  where: {
    status: "live",
    type: (options === null || options === void 0 ? void 0 : options.type) || undefined
  },
  include: {
    course_cohorts: {
      where: {
        AND: [{
          live: true
        }, {
          start_date: {
            gt: new Date().toISOString()
          }
        }]
      },
      select: {
        name: true,
        start_date: true,
        id: true,
        people_in_cohorts: {
          select: {
            cohort: true
          }
        }
      },
      orderBy: {
        start_date: "desc"
      }
    }
  }
});

async function getCourses(req) {
  let courses = await coursesQuery(req.query);
  return {
    status: 200,
    result: {
      courses
    }
  };
}

async function createCourse(req) {
  let msg;

  try {
    msg = CreateCourseMsgValidator.check(req.body);
  } catch (e) {
    return {
      status: 400,
      result: e.toString()
    };
  }

  let user = Object(token["a" /* getToken */])(req);
  if (!user) return {
    status: 403,
    result: "ERROR: no user logged in"
  };
  let isAdmin = await prisma["a" /* default */].admins.findUnique({
    where: {
      person: user.id
    }
  });
  if (!isAdmin) return {
    status: 403,
    result: "ERROR: user is not an admin"
  };
  let maintainers = await prisma["a" /* default */].people.findMany({
    where: {
      email: {
        in: msg.maintainers,
        mode: "insensitive"
      }
    },
    select: {
      username: true,
      id: true
    }
  });
  let slug = Object(utils["g" /* slugify */])(msg.name);
  if (maintainers.length === 0) return {
    status: 400,
    result: "ERROR: No maintainers provided, or found with the emails provided"
  };
  let maintainerGroupName = slug + "-m";
  let [maintainerGroup, courseGroup] = await Promise.all([Object(discourse["c" /* createGroup */])({
    name: maintainerGroupName,
    visibility_level: 2,
    owner_usernames: maintainers.map(m => m.username),
    messageable_level: 3,
    mentionable_level: 99
  }), Object(discourse["c" /* createGroup */])({
    name: slug,
    visibility_level: 2,
    owner_usernames: maintainers.map(m => m.username),
    messageable_level: 3,
    mentionable_level: 3
  })]);
  if (!maintainerGroup || !courseGroup) return {
    status: 500,
    result: "ERROR: couldn't create course maintainers group"
  };
  let category = await Object(discourse["b" /* createCategory */])(msg.name, {
    slug,
    permissions: {
      [maintainerGroupName]: 1
    },
    show_subcategory_list: true,
    subcategory_list_style: "rows_with_featured_topics",
    default_list_filter: "none"
  });
  if (!category) return {
    status: 500,
    result: "ERROR: couldn't create course category"
  };
  await Object(discourse["l" /* updateTopic */])(category.topic_url, {
    category_id: category.id,
    title: `${msg.name} ${msg.type === "club" ? "Details" : "Curriculum"}`,
    tags: ["curriculum"],
    raw: msg.type === "club" ? TemplateClubDescription : TemplateCourseDescription
  }, await Object(discourse["g" /* getUsername */])(maintainers[0].id));
  await prisma["a" /* default */].courses.create({
    data: {
      maintainer_groupTodiscourse_groups: {
        create: {
          id: maintainerGroup.basic_group.id,
          name: maintainerGroupName
        }
      },
      course_groupTodiscourse_groups: {
        create: {
          id: courseGroup.basic_group.id,
          name: slug
        }
      },
      category_id: category.id,
      slug: Object(utils["g" /* slugify */])(msg.name),
      name: msg.name,
      status: msg.type === "club" ? "live" : "draft",
      card_image: msg.type === "club" ? "https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/EmojiSet/Sparkle.png,https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/EmojiSet/Sparkle.png,https://hyperlink-data.nyc3.cdn.digitaloceanspaces.com/icons/EmojiSet/Sparkle.png" : undefined,
      description: msg.description,
      duration: msg.duration,
      prerequisites: msg.prerequisites,
      cost: msg.cost,
      type: msg.type,
      course_maintainers: {
        create: msg.maintainers.map(email => {
          return {
            people: {
              connect: {
                email
              }
            }
          };
        })
      },
      course_templates: {
        create: [{
          content: TemplateCohortGettingStarted,
          name: "Getting Started",
          title: "Getting Started",
          type: "prepopulated",
          required: true
        }, {
          content: TemplateCohortNotes,
          name: "Notes",
          title: "Notes",
          type: "prepopulated",
          required: true
        }, {
          content: TemplateCohortArtifact,
          name: "Artifact",
          title: "Artifact",
          type: "triggered",
          required: true
        }, {
          content: TemplateCohortAssignment,
          name: "Assignment",
          title: "Assignment",
          type: "triggered",
          required: false
        }, {
          content: TemplateCohortEvent,
          name: "Event",
          title: "Event",
          type: "triggered",
          required: false
        }, {
          content: TemplateCohortPrompt,
          name: "Prompt",
          title: "Prompt",
          type: "triggered",
          required: false
        }, {
          content: TemplateCohortRetrospective,
          name: "Retrospective",
          title: "Retrospective",
          type: "triggered",
          required: false
        }]
      }
    }
  });
  return {
    status: 200,
    result: "Course created"
  };
}

/***/ }),

/***/ "PJMN":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "T4kY":
/***/ (function(module, exports) {

module.exports = require("runtypes");

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

/***/ })

/******/ });
//# sourceMappingURL=courses.js.map