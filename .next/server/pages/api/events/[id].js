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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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

/***/ "0Ge2":
/***/ (function(module, exports) {

module.exports = require("ical.js");

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("X/67");


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

/***/ "2k9J":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Event update no account\",\"Alias\":\"event-update-no-account\",\"Subject\":\"{{event_name}} has been updated\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"event_name\":\"event_name_Value\",\"event_page_url\":\"cohort_page_url_Value\"}}");

/***/ }),

/***/ "8yhK":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Event RSVP\",\"Alias\":\"event-rsvp\",\"Subject\":\"You've RSVP'd to {{event_name}}\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"event_name\":\"event_name_Value\",\"event_page_url\":\"cohort_page_url_Value\"}}");

/***/ }),

/***/ "EQGd":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Cohort Enrollment\",\"Alias\":\"cohort-enrollment\",\"Subject\":\"You're enrolled in {{course_name}} on Kraken!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"course_name\":\"course_name_Value\",\"course_start_date\":\"course_start_date_Value\",\"get_started_topic_url\":\"get_started_topic_url_Value\",\"cohort_page_url\":\"cohort_page_url_Value\",\"cohort_forum_url\":\"cohort_forum_url_Value\"}}");

/***/ }),

/***/ "Ilxa":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Password Reset\",\"Alias\":\"password-reset\",\"Subject\":\"Set up a new password for your KrakenEdu account\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"action_url\":\"action_url_Value\"}}");

/***/ }),

/***/ "KLQ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createEventInvite; });
/* harmony import */ var ical_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0Ge2");
/* harmony import */ var ical_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ical_js__WEBPACK_IMPORTED_MODULE_0__);

const createEventInvite = props => {
  let calendar = new ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Component(['vcalendar', [], []]);
  calendar.updatePropertyWithValue('version', '2.0');
  calendar.updatePropertyWithValue('prodid', 'app.krakenedu.com');
  calendar.updatePropertyWithValue('method', "REQUEST");
  calendar.updatePropertyWithValue('name', 'KrakenEdu Calendar');
  calendar.updatePropertyWithValue('x-wr-calname', 'KrakenEdu Calendar');
  let vevent = new ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Component('vevent');
  let calEvent = new ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Event(vevent);
  calEvent.uid = 'krakenedu-' + props.id;
  calEvent.description = props.description;
  calEvent.summary = props.summary;
  calEvent.location = props.location;
  calEvent.startDate = ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Time.fromJSDate(new Date(props.start_date), true);
  calEvent.endDate = ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Time.fromJSDate(new Date(props.end_date), true);
  calendar.addSubcomponent(vevent);
  return calendar;
};

/***/ }),

/***/ "M+vo":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Enroll notification\",\"Alias\":\"enroll-notification\",\"Subject\":\"{{learner}} enrolled in {{course}}\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"learner\":\"learner_Value\",\"course\":\"course_Value\",\"cohort_forum_url\":\"cohort_forum_url_Value\",\"cohort_page_url\":\"cohort_page_url_Value\"}}");

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

/***/ "X/67":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventDataQuery", function() { return eventDataQuery; });
/* harmony import */ var src_apiHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0CBl");
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1ygI");
/* harmony import */ var src_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rkef");
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("T4kY");
/* harmony import */ var runtypes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(runtypes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var emails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("PNXN");
/* harmony import */ var src_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("KLQ1");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* harmony default export */ __webpack_exports__["default"] = (Object(src_apiHelpers__WEBPACK_IMPORTED_MODULE_0__[/* APIHandler */ "a"])({
  POST: updateEvent,
  DELETE: deleteEvent,
  GET: getEvent
}));
let UpdateEventValidator = runtypes__WEBPACK_IMPORTED_MODULE_3__["Intersect"](runtypes__WEBPACK_IMPORTED_MODULE_3__["Record"]({
  data: runtypes__WEBPACK_IMPORTED_MODULE_3__["Partial"]({
    start_date: runtypes__WEBPACK_IMPORTED_MODULE_3__["String"],
    end_date: runtypes__WEBPACK_IMPORTED_MODULE_3__["String"],
    description: runtypes__WEBPACK_IMPORTED_MODULE_3__["String"],
    location: runtypes__WEBPACK_IMPORTED_MODULE_3__["String"],
    name: runtypes__WEBPACK_IMPORTED_MODULE_3__["String"]
  })
}), runtypes__WEBPACK_IMPORTED_MODULE_3__["Union"](runtypes__WEBPACK_IMPORTED_MODULE_3__["Record"]({
  type: runtypes__WEBPACK_IMPORTED_MODULE_3__["Literal"]('cohort'),
  cohort: runtypes__WEBPACK_IMPORTED_MODULE_3__["Number"],
  data: runtypes__WEBPACK_IMPORTED_MODULE_3__["Partial"]({
    people: runtypes__WEBPACK_IMPORTED_MODULE_3__["Union"](runtypes__WEBPACK_IMPORTED_MODULE_3__["Undefined"], runtypes__WEBPACK_IMPORTED_MODULE_3__["Array"](runtypes__WEBPACK_IMPORTED_MODULE_3__["String"]))
  })
}), runtypes__WEBPACK_IMPORTED_MODULE_3__["Record"]({
  type: runtypes__WEBPACK_IMPORTED_MODULE_3__["Literal"]('standalone'),
  data: runtypes__WEBPACK_IMPORTED_MODULE_3__["Partial"]({
    cost: runtypes__WEBPACK_IMPORTED_MODULE_3__["Number"],
    max_attendees: runtypes__WEBPACK_IMPORTED_MODULE_3__["Number"]
  })
})));
const eventDataQuery = async (id, userId) => {
  let event = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].events.findUnique({
    where: {
      id
    },
    include: {
      people: {
        select: {
          display_name: true,
          username: true,
          bio: true,
          id: true
        }
      },
      people_in_events: {
        include: {
          people: {
            select: {
              display_name: true,
              username: true,
              pronouns: true,
              email: true
            }
          }
        }
      },
      no_account_rsvps: true,
      cohort_events: true,
      standalone_events: {
        include: {
          standalone_events_in_courses: true
        }
      }
    }
  });
  if (!event) return;
  let people_in_events = event.people_in_events.map(person => immer__WEBPACK_IMPORTED_MODULE_4___default()(person, p => {
    if ((event === null || event === void 0 ? void 0 : event.created_by) !== userId) p.people.email = '';
  }));
  let no_accounts_rsvps = event.no_account_rsvps.map(person => (event === null || event === void 0 ? void 0 : event.created_by) !== userId ? _objectSpread(_objectSpread({}, person), {}, {
    email: ''
  }) : person);

  if (userId != event.created_by && !event.people_in_events.find(p => p.person === userId)) {
    return _objectSpread(_objectSpread({}, event), {}, {
      people_in_events,
      location: ''
    });
  }

  return _objectSpread(_objectSpread({}, event), {}, {
    people_in_events,
    no_accounts_rsvps
  });
};

async function getEvent(req) {
  let user = Object(src_token__WEBPACK_IMPORTED_MODULE_2__[/* getToken */ "a"])(req);
  let eventId = parseInt(req.query.id);
  if (Number.isNaN(eventId)) return {
    status: 400,
    result: "ERROR: event id is not a number"
  };
  let event = await eventDataQuery(eventId, user === null || user === void 0 ? void 0 : user.id);
  if (!event) return {
    status: 404,
    result: 'ERROR: no event with id found'
  };
  return {
    status: 200,
    result: event
  };
}

async function updateEvent(req) {
  let eventId = parseInt(req.query.id);
  if (Number.isNaN(eventId)) return {
    status: 400,
    result: "ERROR: event id is not a number"
  };
  let msg;

  try {
    msg = UpdateEventValidator.check(req.body);
  } catch (e) {
    return {
      status: 400,
      result: e.toString()
    };
  }

  let user = Object(src_token__WEBPACK_IMPORTED_MODULE_2__[/* getToken */ "a"])(req);
  if (!user) return {
    status: 401,
    result: "ERROR: no user logged in"
  };
  let event = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].events.findUnique({
    where: {
      id: eventId
    },
    select: {
      id: true,
      created_by: true,
      no_account_rsvps: true,
      name: true
    }
  });
  if (!event) return {
    status: 404,
    result: 'ERROR: no event found'
  };

  switch (msg.type) {
    case 'cohort':
      {
        var _msg$data$people;

        let cohort = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].course_cohorts.findUnique({
          where: {
            id: msg.cohort
          },
          select: {
            cohort_facilitators: true
          }
        });
        if (!cohort) return {
          status: 404,
          result: `ERROR: no cohort with id ${msg.cohort} found`
        };
        if (!cohort.cohort_facilitators.find(f => user && f.facilitator === user.id) && event.created_by !== user.id) return {
          status: 401,
          result: "ERROR: user is not creator of event or a facilitator of the cohort"
        };
        let newEvent = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].cohort_events.update({
          where: {
            cohort_event: {
              cohort: msg.cohort,
              event: eventId
            }
          },
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
          },
          data: {
            everyone: msg.data.people ? msg.data.people.length === 0 : undefined,
            events: {
              update: {
                location: msg.data.location,
                start_date: msg.data.start_date,
                end_date: msg.data.end_date,
                description: msg.data.description,
                name: msg.data.name,
                people_in_events: {
                  deleteMany: {
                    event: eventId
                  },
                  create: (_msg$data$people = msg.data.people) === null || _msg$data$people === void 0 ? void 0 : _msg$data$people.map(p => {
                    return {
                      people: {
                        connect: {
                          username: p
                        }
                      }
                    };
                  })
                }
              }
            }
          }
        });
        return {
          status: 200,
          result: {
            type: 'cohort',
            data: newEvent
          }
        };
      }

    case 'standalone':
      {
        if (event.created_by !== user.id) return {
          status: 401,
          result: "ERROR: user is not a facilitator of the cohort"
        };
        let newEvent = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].standalone_events.update({
          where: {
            event: eventId
          },
          include: {
            standalone_events_in_courses: true,
            events: {
              include: {
                people: true,
                no_account_rsvps: true,
                people_in_events: {
                  where: {
                    person: user.id
                  },
                  include: {
                    people: {
                      select: {
                        display_name: true,
                        username: true,
                        pronouns: true,
                        email: true
                      }
                    }
                  }
                }
              }
            }
          },
          data: {
            cost: msg.data.cost,
            max_attendees: msg.data.max_attendees,
            events: {
              update: {
                start_date: msg.data.start_date,
                end_date: msg.data.end_date,
                description: msg.data.description,
                name: msg.data.name
              }
            }
          }
        });

        if (msg.data.start_date || msg.data.end_date || msg.data.location || msg.data.location || msg.data.name) {
          let Content = Buffer.from(Object(src_calendar__WEBPACK_IMPORTED_MODULE_6__[/* createEventInvite */ "a"])({
            id: newEvent.events.id,
            description: newEvent.events.description,
            start_date: newEvent.events.start_date,
            end_date: newEvent.events.end_date,
            summary: newEvent.events.name,
            location: newEvent.events.location
          }).toString()).toString('base64');
          await Object(emails__WEBPACK_IMPORTED_MODULE_5__[/* sendEventUpdateNoAccountEmail */ "e"])(event.no_account_rsvps.map(rsvp => {
            return {
              email: rsvp.email,
              vars: {
                name: rsvp.name,
                event_name: (event === null || event === void 0 ? void 0 : event.name) || "",
                event_page_url: `https://app.krakenedu.com/events/${event === null || event === void 0 ? void 0 : event.id}`
              },
              data: {
                Attachments: [{
                  Name: "event.ics",
                  ContentType: "text/calender",
                  ContentID: null,
                  Content
                }]
              }
            };
          }));
        }

        return {
          status: 200,
          result: {
            type: 'standalone',
            data: newEvent
          }
        };
      }
  }
}

async function deleteEvent(req) {
  var _event$cohort_events$;

  let eventId = parseInt(req.query.id);
  if (Number.isNaN(eventId)) return {
    status: 400,
    result: "ERROR: Cohort id is not a number"
  };
  let user = Object(src_token__WEBPACK_IMPORTED_MODULE_2__[/* getToken */ "a"])(req);
  if (!user) return {
    status: 401,
    result: "ERROR: no user logged in"
  };
  let event = await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].events.findUnique({
    where: {
      id: eventId
    },
    select: {
      created_by: true,
      cohort_events: {
        select: {
          course_cohorts: {
            select: {
              cohort_facilitators: true,
              people_in_cohorts: {
                select: {
                  people: {
                    select: {
                      username: true
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  if (!event) return {
    status: 404,
    result: `ERROR: no event with id ${eventId} found`
  };
  if (!((_event$cohort_events$ = event.cohort_events[0]) !== null && _event$cohort_events$ !== void 0 && _event$cohort_events$.course_cohorts.cohort_facilitators.find(f => user && f.facilitator === user.id)) && user.id !== event.created_by) return {
    status: 401,
    result: "ERROR: user is not a facilitator of the cohort this event is in"
  };
  await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].cohort_events.deleteMany({
    where: {
      event: eventId
    }
  }), await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].people_in_events.deleteMany({
    where: {
      event: eventId
    }
  });
  await lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].events.delete({
    where: {
      id: eventId
    }
  });
  return {
    status: 200,
    result: true
  };
}

/***/ }),

/***/ "aYjl":
/***/ (function(module, exports) {

module.exports = require("swr");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "i5HK":
/***/ (function(module, exports) {

module.exports = require("postmark");

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

/***/ "yL8g":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Invite to Course\",\"Alias\":\"invite-to-course\",\"Subject\":\"You've been invited to join {{course_name}} on KrakenEdu!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"name\":\"name_Value\",\"course_url\":\"course_url_Value\",\"course_name\":\"course_name_Value\"}}");

/***/ }),

/***/ "z7f3":
/***/ (function(module) {

module.exports = JSON.parse("{\"Name\":\"Watching Course Notification\",\"Alias\":\"watching-notification\",\"Subject\":\"{{course_name}} - new cohort scheduled!\",\"TemplateType\":\"Standard\",\"LayoutTemplate\":\"KrakenEdu\",\"TestRenderModel\":{\"course_name\":\"course_name_Value\",\"course_description\":\"course_description_Value\",\"cohort_page_url\":\"cohort_page_url_Value\",\"cohort_start_date\":\"cohort_start_date_Value\"}}");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map