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
/******/ 	return __webpack_require__(__webpack_require__.s = 29);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0Ge2":
/***/ (function(module, exports) {

module.exports = require("ical.js");

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

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("40PD");


/***/ }),

/***/ "40PD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUserEvents; });
/* harmony import */ var ical_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0Ge2");
/* harmony import */ var ical_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ical_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("1ygI");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



async function getUserEvents(req, res) {
  let calendar_ID = req.query.id;
  let calendar = new ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Component(['vcalendar', [], []]);
  calendar.updatePropertyWithValue('version', '2.0');
  calendar.updatePropertyWithValue('prodid', `${window.location.origin}`);
  calendar.updatePropertyWithValue('method', "PUBLISH");
  calendar.updatePropertyWithValue('name', 'KrakenEdu Calendar');
  calendar.updatePropertyWithValue('x-wr-calname', 'KrakenEdu Calendar');
  let [user_cohorts, facilitator_cohorts, standalone] = await Promise.all([lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].people_in_cohorts.findMany({
    where: {
      people: {
        calendar_id: calendar_ID
      },
      course_cohorts: {
        live: true
      }
    },
    select: {
      course_cohorts: {
        select: {
          id: true,
          courses: {
            select: {
              name: true
            }
          },
          cohort_events: {
            where: {
              OR: [{
                everyone: true
              }, {
                events: {
                  people: {
                    calendar_id: calendar_ID
                  }
                }
              }, {
                events: {
                  people_in_events: {
                    some: {
                      people: {
                        calendar_id: calendar_ID
                      }
                    }
                  }
                }
              }]
            },
            select: {
              events: true
            }
          }
        }
      }
    }
  }), lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].course_cohorts.findMany({
    where: {
      live: true,
      people: {
        calendar_id: calendar_ID
      }
    },
    select: {
      id: true,
      courses: {
        select: {
          name: true
        }
      },
      cohort_events: {
        select: {
          events: true
        }
      }
    }
  }), lib_prisma__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].standalone_events.findMany({
    select: {
      events: true
    },
    where: {
      OR: [{
        events: {
          people_in_events: {
            some: {
              people: {
                calendar_id: calendar_ID
              }
            }
          }
        }
      }, {
        events: {
          people: {
            calendar_id: calendar_ID
          }
        }
      }]
    }
  })]);
  let enrolled_events = user_cohorts.flatMap(cohort => {
    let course = cohort.course_cohorts.courses.name;
    let cohort_id = cohort.course_cohorts.id;
    return cohort.course_cohorts.cohort_events.map(ev => {
      return _objectSpread(_objectSpread({}, ev.events), {}, {
        course,
        cohort_id
      });
    });
  });
  let facilitating_events = facilitator_cohorts.flatMap(cohort => {
    let course = cohort.courses.name;
    let cohort_id = cohort.id;
    return cohort.cohort_events.map(ev => {
      return _objectSpread(_objectSpread({}, ev.events), {}, {
        course,
        cohort_id
      });
    });
  });
  let standalone_events = standalone.map(ev => {
    return ev.events;
  });
  let events = standalone_events.concat(enrolled_events).concat(facilitating_events);

  for (let event of events) {
    let vevent = new ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Component('vevent');
    let calEvent = new ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Event(vevent);
    calEvent.uid = 'krakenedu-' + event.id;
    calEvent.description = event.description;
    calEvent.summary = event.course ? event.course + ' - ' + event.name : event.name;
    calEvent.location = event.location;
    calEvent.startDate = ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Time.fromJSDate(new Date(event.start_date), true);
    calEvent.endDate = ical_js__WEBPACK_IMPORTED_MODULE_0___default.a.Time.fromJSDate(new Date(event.end_date), true);
    calendar.addSubcomponent(vevent);
  }

  res.setHeader('Content-type', "text/calendar");
  res.send(calendar.toString());
}

/***/ })

/******/ });
//# sourceMappingURL=user_calendar.js.map