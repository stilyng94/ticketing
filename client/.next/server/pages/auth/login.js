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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AuthForm.jsx":
/*!*********************************!*\
  !*** ./components/AuthForm.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-request */ \"./hooks/use-request.js\");\n\nvar _jsxFileName = \"/Users/sayetech/freelance/ticketing/client/components/AuthForm.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst AuthForm = ({\n  formType,\n  url\n}) => {\n  const {\n    0: formData,\n    1: setFormData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    email: \"\",\n    password: \"\"\n  });\n  const {\n    errors,\n    doRequest\n  } = Object(_hooks_use_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n    url: url,\n    body: formData,\n    method: \"POST\",\n    onSuccess: _ => {\n      setFormData({\n        email: \"\",\n        password: \"\"\n      });\n      Router.push(\"/\");\n      return;\n    }\n  });\n\n  const onInputChangeHandler = ev => {\n    ev.stopPropagation();\n    const target = ev.target;\n    const value = ev.target.value;\n    setFormData(_objectSpread(_objectSpread({}, formData), {}, {\n      [target]: value\n    }));\n    return;\n  };\n\n  const onSubmitHandler = async ev => {\n    ev.preventDefault();\n    await doRequest();\n    return;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      method: \"POST\",\n      onSubmit: onSubmitHandler,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: formType\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"email\",\n          children: \"Email address\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: formData.email,\n          onChange: onInputChangeHandler,\n          type: \"email\",\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"form-group\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          htmlFor: \"password\",\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          value: formData.password,\n          onChange: onInputChangeHandler,\n          type: \"password\",\n          className: \"form-control\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        onSubmit: onSubmitHandler,\n        className: \"btn btn-primary\",\n        children: formType\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, undefined), errors]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhGb3JtLmpzeD85OTQ4Il0sIm5hbWVzIjpbIkF1dGhGb3JtIiwiZm9ybVR5cGUiLCJ1cmwiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZXJyb3JzIiwiZG9SZXF1ZXN0IiwidXNlUmVxdWVzdCIsImJvZHkiLCJtZXRob2QiLCJvblN1Y2Nlc3MiLCJfIiwiUm91dGVyIiwicHVzaCIsIm9uSW5wdXRDaGFuZ2VIYW5kbGVyIiwiZXYiLCJzdG9wUHJvcGFnYXRpb24iLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uU3VibWl0SGFuZGxlciIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQXVCO0FBQ3RDLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQztBQUFFQyxTQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFRLEVBQUU7QUFBdkIsR0FBRCxDQUF4QztBQUNBLFFBQU07QUFBRUMsVUFBRjtBQUFVQztBQUFWLE1BQXdCQyxrRUFBVSxDQUFDO0FBQ3ZDUixPQUFHLEVBQUVBLEdBRGtDO0FBRXZDUyxRQUFJLEVBQUVSLFFBRmlDO0FBR3ZDUyxVQUFNLEVBQUUsTUFIK0I7QUFJdkNDLGFBQVMsRUFBR0MsQ0FBRCxJQUFPO0FBQ2hCVixpQkFBVyxDQUFDO0FBQUVFLGFBQUssRUFBRSxFQUFUO0FBQWFDLGdCQUFRLEVBQUU7QUFBdkIsT0FBRCxDQUFYO0FBQ0FRLFlBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVo7QUFDQTtBQUNEO0FBUnNDLEdBQUQsQ0FBeEM7O0FBV0EsUUFBTUMsb0JBQW9CLEdBQUlDLEVBQUQsSUFBUTtBQUNuQ0EsTUFBRSxDQUFDQyxlQUFIO0FBRUEsVUFBTUMsTUFBTSxHQUFHRixFQUFFLENBQUNFLE1BQWxCO0FBQ0EsVUFBTUMsS0FBSyxHQUFHSCxFQUFFLENBQUNFLE1BQUgsQ0FBVUMsS0FBeEI7QUFFQWpCLGVBQVcsaUNBQU1ELFFBQU47QUFBZ0IsT0FBQ2lCLE1BQUQsR0FBVUM7QUFBMUIsT0FBWDtBQUVBO0FBQ0QsR0FURDs7QUFXQSxRQUFNQyxlQUFlLEdBQUcsTUFBT0osRUFBUCxJQUFjO0FBQ3BDQSxNQUFFLENBQUNLLGNBQUg7QUFDQSxVQUFNZCxTQUFTLEVBQWY7QUFDQTtBQUNELEdBSkQ7O0FBTUEsc0JBQ0U7QUFBQSwyQkFDRTtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLGNBQVEsRUFBRWEsZUFBOUI7QUFBQSw4QkFDRTtBQUFBLGtCQUFLckI7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsZUFBSyxFQUFFRSxRQUFRLENBQUNHLEtBRGxCO0FBRUUsa0JBQVEsRUFBRVcsb0JBRlo7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLG1CQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQVdFO0FBQUssaUJBQVMsRUFBQyxZQUFmO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGVBQUssRUFBRWQsUUFBUSxDQUFDSSxRQURsQjtBQUVFLGtCQUFRLEVBQUVVLG9CQUZaO0FBR0UsY0FBSSxFQUFDLFVBSFA7QUFJRSxtQkFBUyxFQUFDO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBWEYsZUFvQkU7QUFDRSxZQUFJLEVBQUMsUUFEUDtBQUVFLGdCQUFRLEVBQUVLLGVBRlo7QUFHRSxpQkFBUyxFQUFDLGlCQUhaO0FBQUEsa0JBS0dyQjtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGLEVBMkJHTyxNQTNCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFpQ0QsQ0EvREQ7O0FBaUVlUix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aEZvcm0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlUmVxdWVzdCBmcm9tIFwiLi4vaG9va3MvdXNlLXJlcXVlc3RcIjtcblxuY29uc3QgQXV0aEZvcm0gPSAoeyBmb3JtVHlwZSwgdXJsIH0pID0+IHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcbiAgY29uc3QgeyBlcnJvcnMsIGRvUmVxdWVzdCB9ID0gdXNlUmVxdWVzdCh7XG4gICAgdXJsOiB1cmwsXG4gICAgYm9keTogZm9ybURhdGEsXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBvblN1Y2Nlc3M6IChfKSA9PiB7XG4gICAgICBzZXRGb3JtRGF0YSh7IGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9KTtcbiAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBvbklucHV0Q2hhbmdlSGFuZGxlciA9IChldikgPT4ge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgY29uc3QgdGFyZ2V0ID0gZXYudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gZXYudGFyZ2V0LnZhbHVlO1xuXG4gICAgc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgW3RhcmdldF06IHZhbHVlIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIGNvbnN0IG9uU3VibWl0SGFuZGxlciA9IGFzeW5jIChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgZG9SZXF1ZXN0KCk7XG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17b25TdWJtaXRIYW5kbGVyfT5cbiAgICAgICAgPGgxPntmb3JtVHlwZX08L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25JbnB1dENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbklucHV0Q2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn1cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICA+XG4gICAgICAgICAge2Zvcm1UeXBlfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge2Vycm9yc31cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AuthForm.jsx\n");

/***/ }),

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/sayetech/freelance/ticketing/client/hooks/use-request.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst useRequest = async ({\n  url,\n  method,\n  body,\n  onSuccess\n}) => {\n  const {\n    0: errors,\n    1: setErrors\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n\n  const doRequest = async () => {\n    setErrors(null);\n\n    try {\n      const {\n        data\n      } = await axios__WEBPACK_IMPORTED_MODULE_2___default.a[method](url, _objectSpread({}, body));\n\n      if (onSuccess) {\n        onSuccess(data);\n      }\n    } catch (error) {\n      const errors = error.response.data;\n      setErrors( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"alert alert-danger\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n          children: \"Oooops....\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          className: \"my-0\",\n          children: errors.map((error, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: \"error.message\"\n          }, error.index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 15\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, undefined));\n    }\n\n    return;\n  };\n\n  return {\n    errors,\n    doRequest\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useRequest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2UtcmVxdWVzdC5qcz9hOThjIl0sIm5hbWVzIjpbInVzZVJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJib2R5Iiwib25TdWNjZXNzIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidXNlU3RhdGUiLCJkb1JlcXVlc3QiLCJkYXRhIiwiYXhpb3MiLCJlcnJvciIsInJlc3BvbnNlIiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxPQUFPO0FBQUVDLEtBQUY7QUFBT0MsUUFBUDtBQUFlQyxNQUFmO0FBQXFCQztBQUFyQixDQUFQLEtBQTRDO0FBQzdELFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkMsc0RBQVEsQ0FBQyxJQUFELENBQXBDOztBQUVBLFFBQU1DLFNBQVMsR0FBRyxZQUFZO0FBQzVCRixhQUFTLENBQUMsSUFBRCxDQUFUOztBQUNBLFFBQUk7QUFDRixZQUFNO0FBQUVHO0FBQUYsVUFBVyxNQUFNQyw0Q0FBSyxDQUFDUixNQUFELENBQUwsQ0FBY0QsR0FBZCxvQkFDbEJFLElBRGtCLEVBQXZCOztBQUdBLFVBQUlDLFNBQUosRUFBZTtBQUNiQSxpQkFBUyxDQUFDSyxJQUFELENBQVQ7QUFDRDtBQUNGLEtBUEQsQ0FPRSxPQUFPRSxLQUFQLEVBQWM7QUFDZCxZQUFNTixNQUFNLEdBQUdNLEtBQUssQ0FBQ0MsUUFBTixDQUFlSCxJQUE5QjtBQUNBSCxlQUFTLGVBQ1A7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFJLG1CQUFTLEVBQUMsTUFBZDtBQUFBLG9CQUNHRCxNQUFNLENBQUNRLEdBQVAsQ0FBVyxDQUFDRixLQUFELEVBQVFHLEtBQVIsa0JBQ1Y7QUFBQTtBQUFBLGFBQVNILEtBQUssQ0FBQ0csS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE8sQ0FBVDtBQVVEOztBQUNEO0FBQ0QsR0F2QkQ7O0FBeUJBLFNBQU87QUFBRVQsVUFBRjtBQUFVRztBQUFWLEdBQVA7QUFDRCxDQTdCRDs7QUErQmVSLHlFQUFmIiwiZmlsZSI6Ii4vaG9va3MvdXNlLXJlcXVlc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5jb25zdCB1c2VSZXF1ZXN0ID0gYXN5bmMgKHsgdXJsLCBtZXRob2QsIGJvZHksIG9uU3VjY2VzcyB9KSA9PiB7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0RXJyb3JzKG51bGwpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zW21ldGhvZF0odXJsLCB7XG4gICAgICAgIC4uLmJvZHksXG4gICAgICB9KTtcbiAgICAgIGlmIChvblN1Y2Nlc3MpIHtcbiAgICAgICAgb25TdWNjZXNzKGRhdGEpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xuICAgICAgc2V0RXJyb3JzKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxuICAgICAgICAgIDxoND5Pb29vcHMuLi4uPC9oND5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktMFwiPlxuICAgICAgICAgICAge2Vycm9ycy5tYXAoKGVycm9yLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtlcnJvci5pbmRleH0+ZXJyb3IubWVzc2FnZTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfTtcblxuICByZXR1cm4geyBlcnJvcnMsIGRvUmVxdWVzdCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_AuthForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/AuthForm */ \"./components/AuthForm.jsx\");\n\nvar _jsxFileName = \"/Users/sayetech/freelance/ticketing/client/pages/auth/login.js\";\n\n\nconst signin = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AuthForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    url: \"/api/users/signin\",\n    formType: \"Sign In\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (signin);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2xvZ2luLmpzP2YzZGQiXSwibmFtZXMiOlsic2lnbmluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsTUFBTTtBQUNuQixzQkFBTyxxRUFBQyw0REFBRDtBQUFVLE9BQUcsRUFBRSxtQkFBZjtBQUFvQyxZQUFRLEVBQUU7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FGRDs7QUFJZUEscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dGhGb3JtIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0F1dGhGb3JtXCI7XG5cbmNvbnN0IHNpZ25pbiA9ICgpID0+IHtcbiAgcmV0dXJuIDxBdXRoRm9ybSB1cmw9e1wiL2FwaS91c2Vycy9zaWduaW5cIn0gZm9ybVR5cGU9e1wiU2lnbiBJblwifSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpZ25pbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });