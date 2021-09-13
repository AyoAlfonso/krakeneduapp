module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("N2G4");


/***/ }),

/***/ "N2G4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_apiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0CBl");
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1ygI");


/* harmony default export */ __webpack_exports__["default"] = (Object(src_apiHelpers__WEBPACK_IMPORTED_MODULE_0__[/* APIHandler */ "a"])(getCohortEvents));

async function getCohortEvents(req) {
  let cohortId = parseInt(req.query.cohortId);
  if (Number.isNaN(cohortId)) return {
    status: 400,
    result: "ERROR: Cohort id is not a number"
  };
  let cohort_events = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].cohort_events.findMany({
    where: {
      cohort: cohortId
    },
    select: {
      events: {
        select: {
          start_date: true,
          end_date: true,
          description: true,
          name: true
        }
      }
    }
  });
  return {
    status: 200,
    result: cohort_events
  };
}

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

/***/ })

/******/ });
//# sourceMappingURL=events.js.map