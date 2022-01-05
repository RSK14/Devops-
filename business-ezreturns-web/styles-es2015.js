(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;469;500;600;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.style1 {\n  font-family: \"Tenali Ramakrishna\", sans-serif;\n}\n.style2 {\n  font-family: \"Merriweather\", serif;\n}\n.style3 {\n  font-family: \"Quicksand\", sans-serif;\n}\n.style4 {\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n.style5 {\n  font-family: \"Oswald\", sans-serif;\n}\nhtml {\n  height: 100% !important;\n}\nbody {\n  height: 100% !important;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  /*  font-family: \"Quicksand\", sans-serif; */\n  overflow-x: hidden;\n  background: #f7f7f7;\n}\n.fw-100 {\n  font-weight: 100;\n}\n.fw-200 {\n  font-weight: 200;\n}\n.fw-300 {\n  font-weight: 300;\n}\n.fw-400 {\n  font-weight: 400 !important;\n}\n.fw-500 {\n  font-weight: 500 !important;\n}\n.fw-600 {\n  font-weight: 600;\n}\n.fw-700 {\n  font-weight: 700;\n}\n.fw-800 {\n  font-weight: 800;\n}\n.bold {\n  font-weight: bold;\n}\n.font-12 {\n  font-size: 12px !important;\n}\n.font-13 {\n  font-size: 13px !important;\n}\n.font-14 {\n  font-size: 14px !important;\n}\n.font-16 {\n  font-size: 16px !important;\n}\n.font-17 {\n  font-size: 17px !important;\n}\n.font-18 {\n  font-size: 18px !important;\n}\n.font-20 {\n  font-size: 20px !important;\n}\n.font-22 {\n  font-size: 22px !important;\n}\n.font-24 {\n  font-size: 24px !important;\n}\n.font-26 {\n  font-size: 26px !important;\n}\n.font-28 {\n  font-size: 28px !important;\n}\n.font-30 {\n  font-size: 30px !important;\n}\n.font-32 {\n  font-size: 32px !important;\n}\n.font-34 {\n  font-size: 34px !important;\n}\n.font-36 {\n  font-size: 36px !important;\n}\n.font-38 {\n  font-size: 38px !important;\n}\n.font-40 {\n  font-size: 40px !important;\n}\n.font-italic {\n  font-style: italic !important;\n}\n.margin-left-auto {\n  margin-left: auto;\n}\n.pad-0 {\n  padding: 0px;\n}\n.padt-30 {\n  padding-top: 30px !important;\n}\n.mt-5 {\n  margin-top: 5px !important;\n}\n.mt-10 {\n  margin-top: 10px !important;\n}\n.mt-15 {\n  margin-top: 15px !important;\n}\n.mt-20 {\n  margin-top: 20px !important;\n}\n.mt-25 {\n  margin-top: 25px !important;\n}\n.mt-30 {\n  margin-top: 30px !important;\n}\n.mt-35 {\n  margin-top: 35px !important;\n}\n.mt-40 {\n  margin-top: 40px !important;\n}\n.mt-45 {\n  margin-top: 45px !important;\n}\n.mt-50 {\n  margin-top: 50px !important;\n}\n.mt-60 {\n  margin-top: 60px !important;\n}\n.mt-70 {\n  margin-top: 70px !important;\n}\n.mt-80 {\n  margin-top: 80px !important;\n}\n.mb-3 {\n  margin-bottom: 3px !important;\n}\n.mb-5 {\n  margin-bottom: 5px !important;\n}\n.mb-10 {\n  margin-bottom: 10px !important;\n}\n.mb-15 {\n  margin-bottom: 15px !important;\n}\n.mb-20 {\n  margin-bottom: 20px !important;\n}\n.mb-25 {\n  margin-bottom: 25px !important;\n}\n.mb-30 {\n  margin-bottom: 30px !important;\n}\n.mb-35 {\n  margin-bottom: 35px !important;\n}\n.mb-40 {\n  margin-bottom: 40px !important;\n}\n.mb-45 {\n  margin-bottom: 45px !important;\n}\n.mb-50 {\n  margin-bottom: 50px !important;\n}\n.mb-70 {\n  margin-bottom: 70px !important;\n}\n.pb-20 {\n  padding-bottom: 20px;\n}\n.ml-10 {\n  margin-left: 10px !important;\n}\n.ml-20 {\n  margin-left: 20px !important;\n}\n.ml-30 {\n  margin-left: 30px !important;\n}\n.ml-40 {\n  margin-left: 40px !important;\n}\n.mb-auto {\n  margin-bottom: auto !important;\n}\n.mr-10 {\n  margin-right: 10px;\n}\n.pad-5 {\n  padding: 5px !important;\n}\n.pad-15 {\n  padding: 15px !important;\n}\n.pad-l40 {\n  padding-left: 40px !important;\n}\n.pad-l10 {\n  padding-left: 10px !important;\n}\n.pad-l70 {\n  padding-left: 70px !important;\n}\n.pad-50 {\n  padding: 0px 50px 0px 50px;\n}\n.pad-t20 {\n  padding-top: 20px;\n}\n.pad-t30 {\n  padding-top: 30px;\n}\n.pad-t40 {\n  padding-top: 40px;\n}\n.pad-b10 {\n  padding-bottom: 10px;\n}\n.pad-b20 {\n  padding-bottom: 20px;\n}\n.pad-b30 {\n  padding-bottom: 30px;\n}\n.pad-b40 {\n  padding-bottom: 40px;\n}\n.pad-t50 {\n  padding-top: 50px;\n}\n.pad-t60 {\n  padding-top: 60px;\n}\n.pad-t70 {\n  padding-top: 70px;\n}\n.pad-t80 {\n  padding-top: 80px;\n}\n.pad-t90 {\n  padding-top: 90px;\n}\n.pad-t100 {\n  padding-top: 100px;\n}\n.pad-l5 {\n  padding-left: 5px;\n}\n.h-70 {\n  height: 70px !important;\n}\n.center-align {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block;\n}\n.vertical-align {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n  display: block;\n}\n.capitalise {\n  text-transform: capitalize;\n}\n.upper-case {\n  text-transform: uppercase;\n}\n.lower-case {\n  text-transform: lowercase;\n}\n.block {\n  display: block !important;\n}\n.flex {\n  display: flex !important;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.dark-grey {\n  color: #676767 !important;\n}\n.grey {\n  color: #adadad !important;\n}\n.blue {\n  color: #3e48cc !important;\n}\n.text-blue {\n  color: #4049cd !important;\n}\n.btn-width {\n  width: 180px;\n}\n.width-140 {\n  width: 140px !important;\n}\n.pointer {\n  cursor: pointer;\n}\n.btn-orange {\n  background: #f37c09;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  border: none;\n  height: 45px;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n.btn-red {\n  background: #eb5455;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  border: none;\n  height: 45px;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n.btn-blue {\n  background: #3f49cc;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  height: 45px;\n  border: none;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n.btn-green {\n  background: #51b842;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  height: 45px;\n  border: none;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n.btn-grey {\n  background: #a2abc8;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  height: 45px;\n  border: none;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n.btn:hover {\n  color: white !important;\n}\n.flex {\n  display: flex !important;\n}\n.btn-responsive {\n  height: 55px !important;\n}\n.capitalise {\n  text-transform: capitalize !important;\n}\napp-login .userLoginLabel .mat-form-field-wrapper {\n  padding-bottom: 0px !important;\n}\napp-login .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0px !important;\n}\napp-login .mat-tab-label {\n  opacity: 1.6 !important;\n}\napp-login .mat-tab-header {\n  border: 0 !important;\n}\napp-login .mat-tab-label {\n  padding: 5px !important;\n  min-width: 0 !important;\n}\napp-login .mat-tab-label-active {\n  color: #4c4f75 !important;\n  font-size: 28px !important;\n  font-weight: 500 !important;\n}\napp-login .mat-horizontal-stepper-header-container {\n  margin-top: 3px !important;\n  margin-right: 0px !important;\n  margin-left: 0px;\n  float: right;\n}\napp-login .mat-horizontal-content-container {\n  overflow: hidden;\n  width: 100%;\n  padding: 0px !important;\n}\napp-login .mat-tab-body-wrapper {\n  margin-top: 20px !important;\n}\napp-login .black-color {\n  color: #0e0b0b !important;\n}\napp-login .mat-tab-body-content {\n  height: 100%;\n  overflow: hidden !important;\n}\napp-login .mat-form-field-appearance-outline {\n  border: none !important;\n}\napp-login .mat-form-field {\n  width: 100% !important;\n}\napp-login .mat-form-field {\n  display: inline-block !important;\n  position: relative !important;\n  text-align: left !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0.3em 0 !important;\n}\napp-login .mat-form-field-wrapper {\n  position: relative !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12) !important;\n  background: #f4f4ff !important;\n  border-radius: 13px !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-outline {\n  display: flex !important;\n  position: absolute !important;\n  top: 0.25em !important;\n  left: 0 !important;\n  right: 0 !important;\n  bottom: 0 !important;\n  pointer-events: none !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-outline-start {\n  border-radius: 10px 0 0 10px !important;\n  border-right-style: none !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-outline-start,\napp-login .mat-form-field-appearance-outline .mat-form-field-outline-end {\n  min-width: 5px !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-radius: 0 10px 10px 0 !important;\n}\napp-login .signup-form .user-icons {\n  width: 20px !important;\n  margin-right: 10px !important;\n}\napp-login .signup-form .mat-form-field-appearance-outline .mat-form-field-infix {\n  display: flex !important;\n  border-bottom: 11px solid transparent !important;\n}\napp-login .signup-form input:-internal-autofill-selected {\n  background: none !important;\n}\napp-login .signup-form input.mat-input-element {\n  margin-top: 0.5em !important;\n}\napp-login .signup-form .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\napp-login .signup-form .mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  top: 28px !important;\n  color: #3d47cc;\n}\napp-login .signup-form .mat-form-field-infix {\n  min-width: 100px;\n  width: 100% !important;\n}\napp-login .signup-form .mat-form-field-infix {\n  width: 100% !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-wrapper {\n  margin: 0.3em 0 !important;\n}\napp-login .mat-form-field {\n  width: 100%;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-label {\n  top: 23px !important;\n  left: 30px !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-label {\n  top: 22px !important;\n  left: 30px !important;\n}\napp-login .mat-form-field-appearance-outline {\n  border: none !important;\n}\napp-login .mat-form-field {\n  width: 100% !important;\n}\napp-login .mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 0px !important;\n}\napp-login a {\n  color: #3e48cc !important;\n}\napp-login .mat-horizontal-stepper-header {\n  padding: 0 3px !important;\n  height: 40px !important;\n}\napp-login .mat-horizontal-stepper-header::before,\napp-login .mat-horizontal-stepper-header::after,\napp-login .mat-stepper-horizontal-line {\n  display: none !important;\n}\napp-login .mat-step-header .mat-step-header-ripple {\n  display: none !important;\n}\napp-login .mat-horizontal-stepper-header .mat-step-icon {\n  display: none !important;\n}\napp-login .mat-step-icon-content {\n  display: none !important;\n}\napp-login .mat-step-label-selected {\n  background: #3e48cc !important;\n  color: #fff !important;\n  border: 0px !important;\n}\napp-login .mat-step-header .mat-step-label {\n  text-align: center !important;\n  min-width: 25px !important;\n  padding: 2px 3px !important;\n  margin-right: 5px !important;\n  border-radius: 8px !important;\n  border: 1px solid #ccc !important;\n}\napp-login .mat-tab-label {\n  padding: 5px !important;\n  min-width: 0 !important;\n}\napp-login .mat-tab-label-active {\n  color: #4c4f75 !important;\n  font-size: 28px !important;\n  font-weight: 500 !important;\n}\napp-login .btn-grey {\n  background: #a0abc8 !important;\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n  color: #fff !important;\n  font-weight: 500 !important;\n  font-size: 18px !important;\n  height: 45px !important;\n  border: none !important;\n  border-radius: 10px !important;\n  text-transform: uppercase !important;\n}\napp-login .width-140 {\n  width: 140px !important;\n}\napp-login .margin-left-auto {\n  margin-left: auto !important;\n}\napp-login .block {\n  display: block !important;\n}\napp-login .otp-form {\n  display: flex !important;\n}\napp-login .mat-form-field {\n  width: 100% !important;\n}\napp-login .otp-form input {\n  width: 50px;\n  height: 50px;\n  padding: 0;\n  text-align: center;\n  border-radius: 10px;\n  font-size: 26px;\n  background: #ffffff;\n  font-weight: 500;\n  border: 1px solid #a9a9a9fb;\n  color: #4d5071;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n}\napp-login .otp-form .mat-form-field {\n  width: 25%;\n}\napp-login .otp-form input {\n  width: 50px;\n  height: 50px;\n  padding: 0;\n  text-align: center;\n  border-radius: 10px;\n  font-size: 26px;\n  background: #ffffff;\n  font-weight: 500;\n  border: 1px solid #a9a9a9fb;\n  color: #4d5071;\n}\napp-login .mat-form-field-underline {\n  display: none !important;\n}\napp-login .sign-up-bg {\n  background: url('signup-bg.png');\n  background-size: cover !important;\n  background-repeat: no-repeat !important;\n  height: 100%;\n  background-position: bottom;\n}\napp-pickup-details .mat-form-field {\n  width: 100%;\n}\napp-pickup-details .mat-form-field-infix {\n  border-top: 0em solid transparent !important;\n}\napp-pickup-details .mat-form-field-appearance-legacy .mat-form-field-label {\n  padding: 14px 0px 3px 36px;\n  font-size: 13px;\n}\napp-pickup-details .mat-form-field-appearance-legacy .mat-form-field-underline {\n  height: 0px !important;\n}\napp-pickup-details .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\napp-pickup-details .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  top: 13px;\n  font-size: 18px;\n  color: #5d6beb;\n  margin-left: -25px;\n}\napp-pickup-details .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 0.25em;\n}\napp-pickup-details .mat-form-field-appearance-fill .mat-form-field-ripple {\n  bottom: 0;\n  height: 0px !important;\n}\napp-pickup-details .mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple {\n  height: 0px !important;\n}\napp-pickup-details .mat-form-field.mat-focused .mat-form-field-ripple,\napp-pickup-details .mat-form-field.mat-form-field-invalid .mat-form-field-ripple {\n  opacity: 0 !important;\n}\napp-pickup-details .pickup-detail .form-control {\n  padding-left: 45px;\n  font-size: 18px;\n  border: 2px solid #eaebf2;\n  background: #f9faff;\n  border-radius: 10px;\n  height: 45px;\n  margin-top: -5px;\n}\napp-pickup-details .pickup-detail .mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.8em !important;\n  font-size: 20px !important;\n  padding-left: 15px !important;\n}\napp-pickup-details .pickup-detail .mat-form-field-appearance-fill .mat-form-field-label {\n  top: 0.8em !important;\n  font-size: 20px !important;\n  padding-left: 5px !important;\n}\napp-pickup-details .mat-form-field-appearance-fill .mat-form-field-flex {\n  border-radius: 15px;\n  border: 1px solid #ccc;\n}\napp-pickup-details .mat-form-field-underline {\n  display: none;\n}\napp-pickup-details .mat-form-field .mat-focused .mat-form-field-label {\n  top: 12px;\n}\napp-pickup-details .mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,\napp-pickup-details .mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon {\n  height: 29px !important;\n  width: 30px !important;\n  margin-top: -2px;\n}\napp-pickup-details .mat-form-field-prefix,\napp-pickup-details .mat-form-field-suffix {\n  position: absolute;\n  left: 6px;\n  margin-top: 11px;\n  margin-bottom: auto;\n}\napp-pickup-details .date-picker-css {\n  font-size: 18px;\n  border: 2px solid #eaebf2;\n  background: #f9faff;\n  border-radius: 10px;\n  height: 45px;\n  margin-top: -5px;\n}\napp-pickup-details .mat-button-ripple.mat-ripple,\napp-pickup-details .mat-button-focus-overlay {\n  display: none !important;\n}\napp-pickup-details .mat-datepicker-toggle,\napp-pickup-details .mat-datepicker-content .mat-calendar-next-button,\napp-pickup-details .mat-datepicker-content .mat-calendar-previous-button {\n  color: #525cce !important;\n}\napp-pickup-details .mat-form-field-prefix .mat-icon-button,\napp-pickup-details .mat-form-field-suffix .mat-icon-button {\n  height: 29px !important;\n  width: 30px !important;\n}\n.mat-calendar-body-selected {\n  background-color: #1c2377 !important;\n  color: #fff;\n}\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: #2a318a !important;\n  color: white !important;\n}\n.mat-calendar-controls {\n  margin: 5px !important;\n}\n.mat-calendar-header {\n  padding: 1px 8px 0 8px !important;\n  background: #2a318a;\n  color: white;\n  height: 54px;\n}\n.mat-calendar-arrow {\n  border-top-color: white !important;\n}\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: white !important;\n}\n.mat-calendar-table {\n  margin-top: 15px;\n}\n.mat-calendar-table-header th {\n  font-size: 14px !important;\n  font-weight: 500 !important;\n}\n.mat-calendar-body-label {\n  color: #0a0a0a !important;\n}\n.mat-calendar-table-header {\n  color: #29328a !important;\n}\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  color: #2933af;\n}\n.mat-button-ripple.mat-ripple,\n.mat-button-focus-overlay {\n  display: none;\n}\n@media (orientation: landscape) {\n  .mat-datepicker-content-touch .mat-calendar {\n    width: 40vh !important;\n    height: 50vh !important;\n  }\n}\n.mat-drawer-container {\n  background: #f3f3ff;\n}\n.lg-none {\n  display: none;\n}\n.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,\n.mat-raised-button.cdk-program-focused .mat-button-focus-overlay {\n  opacity: 0 !important;\n}\nbutton:focus {\n  outline: none !important;\n}\nheader {\n  height: 81px;\n  background: #2933af;\n  border-bottom: 1px solid #d4d7f5;\n}\n.burger-menu {\n  background-color: #2933af;\n  padding: 0px !important;\n  height: 80px;\n  border-radius: 0px !important;\n}\n.burger-menu .mat-button-wrapper span {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  width: 30px;\n  height: 4px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #ffffff;\n  border-radius: 10px;\n}\n.burger-menu:focus {\n  outline: 0px !important;\n}\n.close-menu {\n  color: #fff;\n  background-color: #2831ad;\n  padding: 0px !important;\n  height: 80px;\n  border-radius: 0px !important;\n  width: 85px;\n}\n.close-menu .mat-button-wrapper span {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  width: 48px;\n  height: 5px;\n  position: relative;\n  background: #ffffff;\n  border-radius: 3px;\n}\n.close-menu .mat-button-wrapper span:first-child {\n  transform: rotate(45deg);\n}\n.close-menu .mat-button-wrapper span:last-child {\n  transform: rotate(132deg);\n  margin-top: -5px;\n}\n.close-menu:focus {\n  outline: 0px !important;\n}\n.navbar-brand img {\n  height: 70px;\n  margin-left: 10px;\n}\n.clear-btn:focus {\n  outline: 0px !important;\n}\n.top-nav-icon {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n  display: block;\n}\n.top-nav-icon ul {\n  padding-left: 0px !important;\n  margin-bottom: 0px !important;\n  list-style: none;\n  display: flex;\n}\n.top-nav-icon ul li {\n  margin: 0px 10px;\n  cursor: pointer;\n  display: grid;\n  text-align: center;\n  font-size: 14px;\n}\n.mat-drawer-inner-container {\n  display: flex;\n}\n.mat-drawer {\n  padding: 0px !important;\n  width: 350px !important;\n  background-color: rgba(255, 255, 255, 0);\n}\n.sidemenu {\n  width: 100%;\n  background-color: #3d47cc;\n}\n.mat-drawer:not(.mat-drawer-side) {\n  box-shadow: none;\n}\n.sidemenu ul {\n  list-style: none;\n  padding-left: 0px;\n  padding-top: 15px;\n}\n.sidemenu ul li {\n  padding: 25px 29px;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  background: #3d47cc;\n  border-bottom: 1px solid #6b72c7;\n}\n.sidemenu ul li img {\n  margin-right: 15px;\n  height: 30px;\n}\n.sidemenu-profile {\n  padding: 15px;\n  background: #4e57cc;\n  display: flex;\n  color: #fff;\n  font-weight: 400;\n  font-size: 18px;\n}\n.sidemenu-profile img {\n  border-radius: 50%;\n  border: 3px solid #fff;\n  margin-right: 10px;\n}\n.navbar-brand {\n  background: #fffbe2;\n  padding-right: 5px;\n  max-width: 180px;\n}\n.mobile-logo {\n  display: none;\n}\n.company-logo {\n  display: block;\n  height: 40px;\n  margin-left: 10px;\n}\n.card {\n  padding: 15px !important;\n  border-radius: 10px;\n  border: 0px;\n}\n.header-title {\n  text-transform: uppercase;\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n.mobile-title {\n  display: none;\n}\n.width-500 {\n  width: 500px;\n}\n.width-200 {\n  width: 200px;\n}\n.td-underline {\n  text-decoration: underline;\n}\n.board-bg {\n  background: #f5f6fc;\n  margin-top: 15px;\n  border-radius: 5px;\n}\n.bg-blue {\n  background: #f5f6fc;\n}\n.radio-button-tabs input[type=radio] {\n  display: none;\n}\n.radio-button-tabs label {\n  background-color: #a2abc8;\n  color: white;\n  display: inline-block;\n  font-family: Arial;\n  font-size: 16px;\n  margin: 18px;\n  width: 15%;\n  text-align: center;\n  padding: 9px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  box-shadow: #ccc 0 1px 1px;\n  cursor: pointer;\n}\n.radio-button-tabs input[type=radio]:checked + label {\n  background-color: #2933af;\n  color: #fff;\n}\n.radio-button-tabs input[type=radio]:checked + .pending:after {\n  content: \".\";\n  color: #ed782a;\n  float: right;\n  margin-top: -22px;\n  font-size: 80px;\n  font-family: \"FontAwesome\";\n  line-height: 0px;\n}\n.radio-button-tabs input[type=radio]:checked + .approved:after {\n  content: \".\";\n  color: #51b745;\n  float: right;\n  margin-top: -22px;\n  font-size: 80px;\n  font-family: \"FontAwesome\";\n  line-height: 0px;\n}\n.radio-button-tabs input[type=radio]:checked + .denied:after {\n  content: \".\";\n  color: #f60505;\n  float: right;\n  margin-top: -22px;\n  font-size: 80px;\n  font-family: \"FontAwesome\";\n  line-height: 0px;\n}\n.dot::before {\n  content: \".\";\n  font-size: 80px;\n  line-height: 0px;\n  float: right;\n  margin-top: -25px;\n  margin-right: -5px;\n}\n.pending-dot {\n  color: #ed782a;\n}\n.approved-dot {\n  color: #51b745;\n}\n.denied-dot {\n  color: #f60505;\n}\n.border-dashed {\n  border-bottom: 2px dashed #c1c4ce;\n  margin-bottom: 10px;\n  width: 95%;\n  margin: 0px 7px;\n}\n.search-field {\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n}\n.search-input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  margin-top: 5px;\n  caret-color: transparent;\n  line-height: 20px;\n  transition: width 0.4s linear;\n}\n.search .search-input {\n  padding: 0 10px;\n  width: 100%;\n  caret-color: #515151;\n  font-size: 19px;\n  font-weight: 300;\n  color: black;\n  transition: width 0.4s linear;\n}\n.search-icon {\n  height: 30px;\n  width: 34px;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #2933af;\n  background-color: #ffffff;\n  font-size: 20px;\n  bottom: 30px;\n  position: relative;\n  border-radius: 5px;\n}\n.search-icon:hover {\n  color: #2933af !important;\n  text-decoration: none;\n}\n.search {\n  width: 100%;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  height: 42px;\n  background-color: white;\n  padding: 6px;\n  border-radius: 8px;\n}\n.tiles input[type=radio]:checked + label {\n  border: 1px solid red;\n}\n.tiles-border {\n  border: 1px solid #a3acc8;\n  border-radius: 10px;\n  padding: 10px;\n  background: white;\n  cursor: pointer;\n}\n.date {\n  margin-left: 6px;\n  color: grey;\n  font-weight: 400;\n  font-size: 16px;\n}\n.tiles-border :active {\n  border: 2px solid #2933af;\n}\n.customer-select .btn:focus,\n.btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25);\n}\n.customer-select label {\n  width: 32%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.customers label {\n  border: 1px solid #e8dcf0;\n  padding: 14px;\n  cursor: pointer;\n  border-radius: 10px;\n  width: 32%;\n  font-size: 20px;\n  background: #ffffff;\n  margin-bottom: 20px;\n}\n.br-10 {\n  border-radius: 10px !important;\n}\n.br-15 {\n  border-radius: 15px;\n}\n.border-none {\n  border: none !important;\n}\n.bg-white {\n  background-color: white;\n}\n.modal {\n  display: block !important;\n}\n.modal-dialog {\n  max-width: 700px !important;\n  height: 100%;\n  display: table !important;\n  margin: 0px auto !important;\n}\n.modal-content {\n  background-color: #fff0 !important;\n  border: none !important;\n  padding: 20px;\n  display: table-cell !important;\n  vertical-align: middle;\n}\n.popup-close-btn {\n  width: 35px;\n  height: 35px;\n  background: #000;\n  color: #fff;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: 0px;\n  margin-top: -15px;\n  border: 0px;\n  float: right;\n  right: 0px;\n  z-index: 99;\n  position: absolute;\n}\n.modal-body {\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 5px;\n}\n.popup-close-btn:focus {\n  outline: 0px;\n}\n.modal {\n  background: rgba(0, 0, 0, 0.5);\n}\n.btn-width {\n  width: 140px;\n}\n.mb-none {\n  display: block;\n}\n.td-none {\n  display: none;\n}\n.wrap-by-space {\n  white-space: break-spaces;\n}\n.box-shadow-one {\n  box-shadow: #ccc 0 0px 1px;\n}\n.width-100 {\n  width: 100px;\n}\n.width-300 {\n  width: 300px;\n}\n.light-grey {\n  color: #dcdcdf !important;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.completed {\n  color: green;\n}\n.transit {\n  color: #2933af;\n}\n.picked {\n  color: #b2884a;\n}\n.arriving {\n  color: #ed7829;\n}\n.orange {\n  color: #da6713;\n}\n.mt-2 {\n  margin-top: 2px !important;\n}\n/* Loading css */\n.loading {\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n.loading:before {\n  content: \"\";\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n.loading:after {\n  content: \"\";\n  display: block;\n  font-size: 10px;\n  width: 90px;\n  height: 90px;\n  margin-top: -0.5em;\n  border: 5px solid #606ae8;\n  border-radius: 100%;\n  border-bottom-color: transparent;\n  -webkit-animation: spinner 1s linear 0s infinite;\n  animation: spinner 1s linear 0s infinite;\n}\n@-webkit-keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\napp-additional-details .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,\napp-additional-details .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #51ba42;\n  border-radius: 5px;\n}\napp-additional-details .mat-checkbox-inner-container {\n  display: inline-block;\n  height: 25px;\n  width: 25px;\n}\napp-additional-details .mat-checkbox-frame {\n  border-radius: 5px;\n  width: 23px;\n  height: 23px;\n  border-width: 0px;\n  background-image: url('checkbox-grey.svg');\n}\napp-additional-details .mat-checkbox-background {\n  width: 23px;\n  height: 23px;\n}\napp-additional-details .mat-checkbox .mat-checkbox-ripple {\n  display: none;\n}\napp-additional-details .mat-checkbox {\n  margin: 10px;\n}\napp-additional-details .checkbox {\n  display: inline-grid;\n  font-size: 20px;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n@import url(\"https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;469;500;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500&display=swap\");\n.style1 {\n  font-family: \"Tenali Ramakrishna\", sans-serif;\n}\n\n.style2 {\n  font-family: \"Merriweather\", serif;\n}\n\n.style3 {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.style4 {\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n\n.style5 {\n  font-family: \"Oswald\", sans-serif;\n}\n\nhtml {\n  height: 100% !important;\n}\n\nbody {\n  height: 100% !important;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 300;\n  /*  font-family: \"Quicksand\", sans-serif; */\n  overflow-x: hidden;\n  background: #f7f7f7;\n}\n\n.fw-100 {\n  font-weight: 100;\n}\n\n.fw-200 {\n  font-weight: 200;\n}\n\n.fw-300 {\n  font-weight: 300;\n}\n\n.fw-400 {\n  font-weight: 400 !important;\n}\n\n.fw-500 {\n  font-weight: 500 !important;\n}\n\n.fw-600 {\n  font-weight: 600;\n}\n\n.fw-700 {\n  font-weight: 700;\n}\n\n.fw-800 {\n  font-weight: 800;\n}\n\n.bold {\n  font-weight: bold;\n}\n\n.font-12 {\n  font-size: 12px !important;\n}\n\n.font-13 {\n  font-size: 13px !important;\n}\n\n.font-14 {\n  font-size: 14px !important;\n}\n\n.font-16 {\n  font-size: 16px !important;\n}\n\n.font-17 {\n  font-size: 17px !important;\n}\n\n.font-18 {\n  font-size: 18px !important;\n}\n\n.font-20 {\n  font-size: 20px !important;\n}\n\n.font-22 {\n  font-size: 22px !important;\n}\n\n.font-24 {\n  font-size: 24px !important;\n}\n\n.font-26 {\n  font-size: 26px !important;\n}\n\n.font-28 {\n  font-size: 28px !important;\n}\n\n.font-30 {\n  font-size: 30px !important;\n}\n\n.font-32 {\n  font-size: 32px !important;\n}\n\n.font-34 {\n  font-size: 34px !important;\n}\n\n.font-36 {\n  font-size: 36px !important;\n}\n\n.font-38 {\n  font-size: 38px !important;\n}\n\n.font-40 {\n  font-size: 40px !important;\n}\n\n.font-italic {\n  font-style: italic !important;\n}\n\n.margin-left-auto {\n  margin-left: auto;\n}\n\n.pad-0 {\n  padding: 0px;\n}\n\n.padt-30 {\n  padding-top: 30px !important;\n}\n\n.mt-5 {\n  margin-top: 5px !important;\n}\n\n.mt-10 {\n  margin-top: 10px !important;\n}\n\n.mt-15 {\n  margin-top: 15px !important;\n}\n\n.mt-20 {\n  margin-top: 20px !important;\n}\n\n.mt-25 {\n  margin-top: 25px !important;\n}\n\n.mt-30 {\n  margin-top: 30px !important;\n}\n\n.mt-35 {\n  margin-top: 35px !important;\n}\n\n.mt-40 {\n  margin-top: 40px !important;\n}\n\n.mt-45 {\n  margin-top: 45px !important;\n}\n\n.mt-50 {\n  margin-top: 50px !important;\n}\n\n.mt-60 {\n  margin-top: 60px !important;\n}\n\n.mt-70 {\n  margin-top: 70px !important;\n}\n\n.mt-80 {\n  margin-top: 80px !important;\n}\n\n.mb-3 {\n  margin-bottom: 3px !important;\n}\n\n.mb-5 {\n  margin-bottom: 5px !important;\n}\n\n.mb-10 {\n  margin-bottom: 10px !important;\n}\n\n.mb-15 {\n  margin-bottom: 15px !important;\n}\n\n.mb-20 {\n  margin-bottom: 20px !important;\n}\n\n.mb-25 {\n  margin-bottom: 25px !important;\n}\n\n.mb-30 {\n  margin-bottom: 30px !important;\n}\n\n.mb-35 {\n  margin-bottom: 35px !important;\n}\n\n.mb-40 {\n  margin-bottom: 40px !important;\n}\n\n.mb-45 {\n  margin-bottom: 45px !important;\n}\n\n.mb-50 {\n  margin-bottom: 50px !important;\n}\n\n.mb-70 {\n  margin-bottom: 70px !important;\n}\n.pb-20 {\n  padding-bottom: 20px;\n}\n.ml-10 {\n  margin-left: 10px !important;\n}\n\n.ml-20 {\n  margin-left: 20px !important;\n}\n\n.ml-30 {\n  margin-left: 30px !important;\n}\n\n.ml-40 {\n  margin-left: 40px !important;\n}\n\n.mb-auto {\n  margin-bottom: auto !important;\n}\n\n.mr-10 {\n  margin-right: 10px;\n}\n\n.pad-5 {\n  padding: 5px !important;\n}\n\n.pad-15 {\n  padding: 15px !important;\n}\n\n.pad-l40 {\n  padding-left: 40px !important;\n}\n\n.pad-l10 {\n  padding-left: 10px !important;\n}\n\n.pad-l70 {\n  padding-left: 70px !important;\n}\n\n.pad-50 {\n  padding: 0px 50px 0px 50px;\n}\n\n.pad-t20 {\n  padding-top: 20px;\n}\n\n.pad-t30 {\n  padding-top: 30px;\n}\n\n.pad-t40 {\n  padding-top: 40px;\n}\n\n.pad-b10 {\n  padding-bottom: 10px;\n}\n\n.pad-b20 {\n  padding-bottom: 20px;\n}\n\n.pad-b30 {\n  padding-bottom: 30px;\n}\n\n.pad-b40 {\n  padding-bottom: 40px;\n}\n\n.pad-t50 {\n  padding-top: 50px;\n}\n\n.pad-t60 {\n  padding-top: 60px;\n}\n\n.pad-t70 {\n  padding-top: 70px;\n}\n\n.pad-t80 {\n  padding-top: 80px;\n}\n\n.pad-t90 {\n  padding-top: 90px;\n}\n\n.pad-t100 {\n  padding-top: 100px;\n}\n\n.pad-l5 {\n  padding-left: 5px;\n}\n\n.h-70 {\n  height: 70px !important;\n}\n\n.center-align {\n  margin-left: auto !important;\n  margin-right: auto !important;\n  display: block;\n}\n\n.vertical-align {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n  display: block;\n}\n\n.capitalise {\n  text-transform: capitalize;\n}\n\n.upper-case {\n  text-transform: uppercase;\n}\n\n.lower-case {\n  text-transform: lowercase;\n}\n\n.block {\n  display: block !important;\n}\n\n.flex {\n  display: flex !important;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.dark-grey {\n  color: rgb(103, 103, 103) !important;\n}\n\n.grey {\n  color: #adadad !important;\n}\n\n.blue {\n  color: #3e48cc !important;\n}\n\n.text-blue {\n  color: #4049cd !important;\n}\n\n.btn-width {\n  width: 180px;\n}\n\n.width-140 {\n  width: 140px !important;\n}\n\n.pointer {\n  cursor: pointer;\n}\n\n.btn-orange {\n  background: #f37c09;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  border: none;\n  height: 45px;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n\n.btn-red {\n  background: #eb5455;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  border: none;\n  height: 45px;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n\n.btn-blue {\n  background: #3f49cc;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  height: 45px;\n  border: none;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n\n.btn-green {\n  background: #51b842;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  height: 45px;\n  border: none;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n\n.btn-grey {\n  background: #a2abc8;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  color: #fff;\n  font-weight: 500;\n  font-size: 18px;\n  height: 45px;\n  border: none;\n  border-radius: 10px !important;\n  text-transform: uppercase;\n}\n\n.btn:hover {\n  color: white !important;\n}\n\n.flex {\n  display: flex !important;\n}\n\n.btn-responsive {\n  height: 55px !important;\n}\n\n.capitalise {\n  text-transform: capitalize !important;\n}\n\napp-login {\n  .userLoginLabel .mat-form-field-wrapper {\n    padding-bottom: 0px !important;\n  }\n\n  .mat-form-field-appearance-legacy .mat-form-field-infix {\n    padding: 0px !important;\n  }\n\n  .mat-tab-label {\n    opacity: 1.6 !important;\n  }\n\n  .mat-tab-header {\n    border: 0 !important;\n  }\n\n  .mat-tab-label {\n    padding: 5px !important;\n    min-width: 0 !important;\n  }\n\n  .mat-tab-label-active {\n    color: #4c4f75 !important;\n    font-size: 28px !important;\n    font-weight: 500 !important;\n  }\n\n  .mat-horizontal-stepper-header-container {\n    margin-top: 3px !important;\n    margin-right: 0px !important;\n    margin-left: 0px;\n    float: right;\n  }\n\n  .mat-horizontal-content-container {\n    overflow: hidden;\n    width: 100%;\n    padding: 0px !important;\n  }\n\n  .mat-tab-body-wrapper {\n    margin-top: 20px !important;\n  }\n\n  .black-color {\n    color: #0e0b0b !important;\n  }\n\n  .mat-tab-body-content {\n    height: 100%;\n    overflow: hidden !important;\n  }\n\n  .mat-form-field-appearance-outline {\n    border: none !important;\n  }\n\n  .mat-form-field {\n    width: 100% !important;\n  }\n\n  .mat-form-field {\n    display: inline-block !important;\n    position: relative !important;\n    text-align: left !important;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-wrapper {\n    margin: 0.3em 0 !important;\n  }\n\n  .mat-form-field-wrapper {\n    position: relative !important;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n    color: rgba(0, 0, 0, 0.12) !important;\n    background: #f4f4ff !important;\n    border-radius: 13px !important;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n    display: flex !important;\n    position: absolute !important;\n    top: 0.25em !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    pointer-events: none !important;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-outline-start {\n    border-radius: 10px 0 0 10px !important;\n    border-right-style: none !important;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-outline-start,\n  .mat-form-field-appearance-outline .mat-form-field-outline-end {\n    min-width: 5px !important;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-outline-end {\n    border-radius: 0 10px 10px 0 !important;\n  }\n\n  .signup-form .user-icons {\n    width: 20px !important;\n    margin-right: 10px !important;\n  }\n\n  .signup-form .mat-form-field-appearance-outline .mat-form-field-infix {\n    display: flex !important;\n    border-bottom: 11px solid transparent !important;\n  }\n\n  .signup-form {\n    input:-internal-autofill-selected {\n      background: none !important;\n    }\n\n    input.mat-input-element {\n      margin-top: 0.5em !important;\n    }\n\n    .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n    .mat-form-field-can-float\n      .mat-input-server:focus\n      + .mat-form-field-label-wrapper\n      .mat-form-field-label {\n      top: 28px !important;\n      color: #3d47cc;\n    }\n\n    .mat-form-field-infix {\n      min-width: 100px;\n      width: 100% !important;\n    }\n\n    .mat-form-field-infix {\n      width: 100% !important;\n    }\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-wrapper {\n    margin: 0.3em 0 !important;\n  }\n\n  .mat-form-field {\n    width: 100%;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-label {\n    top: 23px !important;\n    left: 30px !important;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-label {\n    top: 22px !important;\n    left: 30px !important;\n  }\n\n  .mat-form-field-appearance-outline {\n    border: none !important;\n  }\n\n  .mat-form-field {\n    width: 100% !important;\n  }\n\n  .mat-form-field-appearance-outline .mat-form-field-infix {\n    padding: 0px !important;\n  }\n\n  a {\n    color: #3e48cc !important;\n  }\n\n  .mat-horizontal-stepper-header {\n    padding: 0 3px !important;\n    height: 40px !important;\n  }\n\n  .mat-horizontal-stepper-header::before,\n  .mat-horizontal-stepper-header::after,\n  .mat-stepper-horizontal-line {\n    display: none !important;\n  }\n\n  .mat-step-header .mat-step-header-ripple {\n    display: none !important;\n  }\n\n  .mat-horizontal-stepper-header .mat-step-icon {\n    display: none !important;\n  }\n\n  .mat-step-icon-content {\n    display: none !important;\n  }\n\n  .mat-step-label-selected {\n    background: #3e48cc !important;\n    color: #fff !important;\n    border: 0px !important;\n  }\n\n  .mat-step-header .mat-step-label {\n    text-align: center !important;\n    min-width: 25px !important;\n    padding: 2px 3px !important;\n    margin-right: 5px !important;\n    border-radius: 8px !important;\n    border: 1px solid #ccc !important;\n  }\n\n  .mat-tab-label {\n    padding: 5px !important;\n    min-width: 0 !important;\n  }\n\n  .mat-tab-label-active {\n    color: #4c4f75 !important;\n    font-size: 28px !important;\n    font-weight: 500 !important;\n  }\n\n  .btn-grey {\n    background: #a0abc8 !important;\n    padding-top: 4px !important;\n    padding-bottom: 4px !important;\n    color: #fff !important;\n    font-weight: 500 !important;\n    font-size: 18px !important;\n    height: 45px !important;\n    border: none !important;\n    border-radius: 10px !important;\n    text-transform: uppercase !important;\n  }\n\n  .width-140 {\n    width: 140px !important;\n  }\n\n  .margin-left-auto {\n    margin-left: auto !important;\n  }\n\n  .block {\n    display: block !important;\n  }\n\n  .otp-form {\n    display: flex !important;\n  }\n\n  .mat-form-field {\n    width: 100% !important;\n  }\n\n  .otp-form input {\n    width: 50px;\n    height: 50px;\n    padding: 0;\n    text-align: center;\n    border-radius: 10px;\n    font-size: 26px;\n    background: #ffffff;\n    font-weight: 500;\n    border: 1px solid #a9a9a9fb;\n    color: #4d5071;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n  }\n\n  .otp-form .mat-form-field {\n    width: 25%;\n  }\n\n  .otp-form input {\n    width: 50px;\n    height: 50px;\n    padding: 0;\n    text-align: center;\n    border-radius: 10px;\n    font-size: 26px;\n    background: #ffffff;\n    font-weight: 500;\n    border: 1px solid #a9a9a9fb;\n    color: #4d5071;\n  }\n\n  .mat-form-field-underline {\n    display: none !important;\n  }\n\n  .sign-up-bg {\n    background: url(./assets/images/signup-bg.png);\n    background-size: cover !important;\n    background-repeat: no-repeat !important;\n    height: 100%;\n    background-position: bottom;\n  }\n}\napp-pickup-details {\n  .mat-form-field {\n    width: 100%;\n  }\n\n  .mat-form-field-infix {\n    border-top: 0em solid transparent !important;\n  }\n\n  .mat-form-field-appearance-legacy .mat-form-field-label {\n    padding: 14px 0px 3px 36px;\n    font-size: 13px;\n  }\n\n  .mat-form-field-appearance-legacy .mat-form-field-underline {\n    height: 0px !important;\n  }\n\n  .mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n  .mat-form-field-appearance-legacy.mat-form-field-can-float\n    .mat-input-server:focus\n    + .mat-form-field-label-wrapper\n    .mat-form-field-label {\n    top: 13px;\n    font-size: 18px;\n    color: #5d6beb;\n    margin-left: -25px;\n  }\n\n  .mat-form-field-appearance-legacy .mat-form-field-wrapper {\n    padding-bottom: 0.25em;\n  }\n\n  .mat-form-field-appearance-fill .mat-form-field-ripple {\n    bottom: 0;\n    height: 0px !important;\n  }\n\n  .mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused)\n    .mat-form-field-ripple {\n    height: 0px !important;\n  }\n\n  .mat-form-field.mat-focused .mat-form-field-ripple,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-ripple {\n    opacity: 0 !important;\n  }\n\n  .pickup-detail .form-control {\n    padding-left: 45px;\n    font-size: 18px;\n    border: 2px solid #eaebf2;\n    background: #f9faff;\n    border-radius: 10px;\n    height: 45px;\n    margin-top: -5px;\n  }\n\n  .pickup-detail .mat-form-field-appearance-legacy .mat-form-field-label {\n    top: 1.8em !important;\n    font-size: 20px !important;\n    padding-left: 15px !important;\n  }\n\n  .pickup-detail .mat-form-field-appearance-fill .mat-form-field-label {\n    top: 0.8em !important;\n    font-size: 20px !important;\n    padding-left: 5px !important;\n  }\n\n  .mat-form-field-appearance-fill .mat-form-field-flex {\n    border-radius: 15px;\n    border: 1px solid #ccc;\n  }\n\n  .mat-form-field-underline {\n    display: none;\n  }\n\n  .mat-form-field .mat-focused .mat-form-field-label {\n    top: 12px;\n  }\n\n  .mat-form-field-appearance-legacy\n    .mat-form-field-prefix\n    .mat-datepicker-toggle-default-icon,\n  .mat-form-field-appearance-legacy\n    .mat-form-field-suffix\n    .mat-datepicker-toggle-default-icon {\n    height: 29px !important;\n    width: 30px !important;\n    margin-top: -2px;\n  }\n\n  .mat-form-field-prefix,\n  .mat-form-field-suffix {\n    position: absolute;\n    left: 6px;\n    margin-top: 11px;\n    margin-bottom: auto;\n  }\n\n  .date-picker-css {\n    font-size: 18px;\n    border: 2px solid #eaebf2;\n    background: #f9faff;\n    border-radius: 10px;\n    height: 45px;\n    margin-top: -5px;\n  }\n\n  .mat-button-ripple.mat-ripple,\n  .mat-button-focus-overlay {\n    display: none !important;\n  }\n\n  .mat-datepicker-toggle,\n  .mat-datepicker-content .mat-calendar-next-button,\n  .mat-datepicker-content .mat-calendar-previous-button {\n    color: #525cce !important;\n  }\n\n  .mat-form-field-prefix .mat-icon-button,\n  .mat-form-field-suffix .mat-icon-button {\n    height: 29px !important;\n    width: 30px !important;\n  }\n}\n\n.mat-calendar-body-selected {\n  background-color: #1c2377 !important;\n  color: #fff;\n}\n// Mat Calendar\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover\n  > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.cdk-keyboard-focused\n  .mat-calendar-body-active\n  > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),\n.cdk-program-focused\n  .mat-calendar-body-active\n  > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {\n  background-color: #2a318a !important;\n  color: white !important;\n}\n\n.mat-calendar-controls {\n  margin: 5px !important;\n}\n\n.mat-calendar-header {\n  padding: 1px 8px 0 8px !important;\n  background: #2a318a;\n  color: white;\n  height: 54px;\n}\n\n.mat-calendar-arrow {\n  border-top-color: white !important;\n}\n\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: white !important;\n}\n\n.mat-calendar-table {\n  margin-top: 15px;\n}\n\n.mat-calendar-table-header th {\n  font-size: 14px !important;\n  font-weight: 500 !important;\n}\n\n.mat-calendar-body-label {\n  color: #0a0a0a !important;\n}\n\n.mat-calendar-table-header {\n  color: rgb(41 50 138) !important;\n}\n\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  color: #2933af;\n}\n\n.mat-button-ripple.mat-ripple,\n.mat-button-focus-overlay {\n  display: none;\n}\n@media (orientation: landscape) {\n  .mat-datepicker-content-touch .mat-calendar {\n    width: 40vh !important;\n    height: 50vh !important;\n  }\n}\n\n.mat-drawer-container {\n  background: #f3f3ff;\n}\n\n.lg-none {\n  display: none;\n}\n\n.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,\n.mat-raised-button.cdk-program-focused .mat-button-focus-overlay {\n  opacity: 0 !important;\n}\n\nbutton:focus {\n  outline: none !important;\n}\n\nheader {\n  height: 81px;\n  background: #2933af;\n  border-bottom: 1px solid #d4d7f5;\n}\n\n.burger-menu {\n  background-color: #2933af;\n  padding: 0px !important;\n  height: 80px;\n  border-radius: 0px !important;\n}\n\n.burger-menu .mat-button-wrapper span {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  width: 30px;\n  height: 4px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #ffffff;\n  border-radius: 10px;\n}\n\n.burger-menu:focus {\n  outline: 0px !important;\n}\n\n.close-menu {\n  color: #fff;\n  background-color: #2831ad;\n  padding: 0px !important;\n  height: 80px;\n  border-radius: 0px !important;\n  width: 85px;\n}\n\n.close-menu .mat-button-wrapper span {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  width: 48px;\n  height: 5px;\n  position: relative;\n  background: #ffffff;\n  border-radius: 3px;\n}\n\n.close-menu .mat-button-wrapper span:first-child {\n  transform: rotate(45deg);\n}\n\n.close-menu .mat-button-wrapper span:last-child {\n  transform: rotate(132deg);\n  margin-top: -5px;\n}\n\n.close-menu:focus {\n  outline: 0px !important;\n}\n\n.navbar-brand img {\n  height: 70px;\n  margin-left: 10px;\n}\n\n.clear-btn:focus {\n  outline: 0px !important;\n}\n\n.top-nav-icon {\n  margin-top: auto !important;\n  margin-bottom: auto !important;\n  display: block;\n}\n\n.top-nav-icon ul {\n  padding-left: 0px !important;\n  margin-bottom: 0px !important;\n  list-style: none;\n  display: flex;\n}\n\n.top-nav-icon ul li {\n  margin: 0px 10px;\n  cursor: pointer;\n  display: grid;\n  text-align: center;\n  font-size: 14px;\n}\n\n.mat-drawer-inner-container {\n  display: flex;\n}\n\n.mat-drawer {\n  padding: 0px !important;\n  width: 350px !important;\n  background-color: rgb(255 255 255 / 0%);\n}\n\n.sidemenu {\n  width: 100%;\n  background-color: #3d47cc;\n}\n\n.mat-drawer:not(.mat-drawer-side) {\n  box-shadow: none;\n}\n\n.sidemenu ul {\n  list-style: none;\n  padding-left: 0px;\n  padding-top: 15px;\n}\n\n.sidemenu ul li {\n  padding: 25px 29px;\n  color: #fff;\n  font-size: 16px;\n  cursor: pointer;\n  background: #3d47cc;\n  border-bottom: 1px solid #6b72c7;\n}\n\n.sidemenu ul li img {\n  margin-right: 15px;\n  height: 30px;\n}\n\n.sidemenu-profile {\n  padding: 15px;\n  background: #4e57cc;\n  display: flex;\n  color: #fff;\n  font-weight: 400;\n  font-size: 18px;\n}\n.sidemenu-profile img {\n  border-radius: 50%;\n  border: 3px solid #fff;\n  margin-right: 10px;\n}\n\n.navbar-brand {\n  background: #fffbe2;\n  padding-right: 5px;\n  max-width: 180px;\n}\n\n.mobile-logo {\n  display: none;\n}\n\n.company-logo {\n  display: block;\n  height: 40px;\n  margin-left: 10px;\n}\n\n.card {\n  padding: 15px !important;\n  border-radius: 10px;\n  border: 0px;\n}\n\n.header-title {\n  text-transform: uppercase;\n  color: white;\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: auto;\n  margin-bottom: auto;\n  display: block;\n}\n\n.mobile-title {\n  display: none;\n}\n\n.width-500 {\n  width: 500px;\n}\n\n.width-200 {\n  width: 200px;\n}\n\n.td-underline {\n  text-decoration: underline;\n}\n\n.board-bg {\n  background: #f5f6fc;\n  margin-top: 15px;\n  border-radius: 5px;\n}\n.bg-blue {\n  background: #f5f6fc;\n}\n\n.radio-button-tabs input[type=\"radio\"] {\n  display: none;\n}\n\n.radio-button-tabs label {\n  background-color: #a2abc8;\n  color: white;\n  display: inline-block;\n  font-family: Arial;\n  font-size: 16px;\n  margin: 18px;\n  width: 15%;\n  text-align: center;\n  padding: 9px;\n  -moz-border-radius: 12px;\n  -webkit-border-radius: 12px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  -moz-box-shadow: #ccc 0 1px 1px;\n  -webkit-box-shadow: #ccc 0 1px 1px;\n  box-shadow: #ccc 0 1px 1px;\n  cursor: pointer;\n}\n\n.radio-button-tabs input[type=\"radio\"]:checked + label {\n  background-color: #2933af;\n  color: #fff;\n}\n\n.radio-button-tabs input[type=\"radio\"]:checked + .pending:after {\n  content: \".\";\n  color: #ed782a;\n  float: right;\n  margin-top: -22px;\n  font-size: 80px;\n  font-family: \"FontAwesome\";\n  line-height: 0px;\n}\n\n.radio-button-tabs input[type=\"radio\"]:checked + .approved:after {\n  content: \".\";\n  color: #51b745;\n  float: right;\n  margin-top: -22px;\n  font-size: 80px;\n  font-family: \"FontAwesome\";\n  line-height: 0px;\n}\n\n.radio-button-tabs input[type=\"radio\"]:checked + .denied:after {\n  content: \".\";\n  color: #f60505;\n  float: right;\n  margin-top: -22px;\n  font-size: 80px;\n  font-family: \"FontAwesome\";\n  line-height: 0px;\n}\n\n.dot::before {\n  content: \".\";\n  font-size: 80px;\n  line-height: 0px;\n  float: right;\n  margin-top: -25px;\n  margin-right: -5px;\n}\n\n.pending-dot {\n  color: #ed782a;\n}\n\n.approved-dot {\n  color: #51b745;\n}\n\n.denied-dot {\n  color: #f60505;\n}\n\n.border-dashed {\n  border-bottom: 2px dashed #c1c4ce;\n  margin-bottom: 10px;\n  width: 95%;\n  margin: 0px 7px;\n}\n\n.search-field {\n  margin-left: auto;\n  margin-right: auto;\n  width: 80%;\n}\n\n.search-input {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  margin-top: 5px;\n  caret-color: transparent;\n  line-height: 20px;\n  transition: width 0.4s linear;\n}\n\n.search .search-input {\n  padding: 0 10px;\n  width: 100%;\n  caret-color: #515151;\n  font-size: 19px;\n  font-weight: 300;\n  color: black;\n  transition: width 0.4s linear;\n}\n\n.search-icon {\n  height: 30px;\n  width: 34px;\n  float: right;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #2933af;\n  background-color: #ffffff;\n  font-size: 20px;\n  bottom: 30px;\n  position: relative;\n  border-radius: 5px;\n}\n\n.search-icon:hover {\n  color: #2933af !important;\n  text-decoration: none;\n}\n\n.search {\n  width: 100%;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  height: 42px;\n  background-color: white;\n  padding: 6px;\n  border-radius: 8px;\n}\n\n.tiles input[type=\"radio\"]:checked + label {\n  border: 1px solid red;\n}\n\n.tiles-border {\n  border: 1px solid #a3acc8;\n  border-radius: 10px;\n  padding: 10px;\n  background: white;\n  cursor: pointer;\n}\n\n.date {\n  margin-left: 6px;\n  color: grey;\n  font-weight: 400;\n  font-size: 16px;\n}\n\n.tiles-border :active {\n  border: 2px solid #2933af;\n}\n\n.customer-select .btn:focus,\n.btn.focus {\n  outline: 0;\n  box-shadow: 0 0 0 0rem rgba(0, 123, 255, 0.25);\n}\n\n.customer-select label {\n  width: 32%;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.customers label {\n  border: 1px solid #e8dcf0;\n  padding: 14px;\n  cursor: pointer;\n  border-radius: 10px;\n  width: 32%;\n  font-size: 20px;\n  background: #ffffff;\n  margin-bottom: 20px;\n}\n\n.br-10 {\n  border-radius: 10px !important;\n}\n.br-15 {\n  border-radius: 15px;\n}\n.border-none {\n  border: none !important;\n}\n.bg-white {\n  background-color: white;\n}\n\n.modal {\n  display: block !important;\n}\n.modal-dialog {\n  max-width: 700px !important;\n  height: 100%;\n  display: table !important;\n  margin: 0px auto !important;\n}\n.modal-content {\n  background-color: #fff0 !important;\n  border: none !important;\n  padding: 20px;\n  display: table-cell !important;\n  vertical-align: middle;\n}\n.popup-close-btn {\n  width: 35px;\n  height: 35px;\n  background: #000;\n  color: #fff;\n  border-radius: 50%;\n  margin-left: auto;\n  margin-right: 0px;\n  margin-top: -15px;\n  border: 0px;\n  float: right;\n  right: 0px;\n  z-index: 99;\n  position: absolute;\n}\n\n.modal-body {\n  background-color: #fff;\n  border-radius: 5px;\n  padding: 5px;\n}\n.popup-close-btn:focus {\n  outline: 0px;\n}\n.modal {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.btn-width {\n  width: 140px;\n}\n\n.mb-none {\n  display: block;\n}\n\n.td-none {\n  display: none;\n}\n.wrap-by-space {\n  white-space: break-spaces;\n}\n.box-shadow-one {\n  -moz-box-shadow: #ccc 0 0px 1px;\n  -webkit-box-shadow: #ccc 0 0px 1px;\n  box-shadow: #ccc 0 0px 1px;\n}\n\n.width-100 {\n  width: 100px;\n}\n\n.width-300 {\n  width: 300px;\n}\n\n.light-grey {\n  color: #dcdcdf !important;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.completed {\n  color: green;\n}\n\n.transit {\n  color: #2933af;\n}\n\n.picked {\n  color: #b2884a;\n}\n\n.arriving {\n  color: #ed7829;\n}\n\n.orange {\n  color: #da6713;\n}\n\n.mt-2 {\n  margin-top: 2px !important;\n}\n/* Loading css */\n.loading {\n  position: fixed;\n  z-index: 999;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 50px;\n  height: 50px;\n}\n\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255,255,255,0.5);\n}\n\n.loading:after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 90px;\n  height: 90px;\n  margin-top: -0.5em;\n  border: 5px solid #606ae8;\n  border-radius: 100%;\n  border-bottom-color: transparent;\n  -webkit-animation: spinner 1s linear 0s infinite;\n  animation: spinner 1s linear 0s infinite;\n}\n\n@keyframes spinner {\n  to {\n    transform: rotate(360deg);\n  }\n}\napp-additional-details {\n  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,\n  .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n    background-color: #51ba42;\n    border-radius: 5px;\n  }\n\n  .mat-checkbox-inner-container {\n    display: inline-block;\n    height: 25px;\n    width: 25px;\n  }\n\n  .mat-checkbox-frame {\n    border-radius: 5px;\n    width: 23px;\n    height: 23px;\n    border-width: 0px;\n    background-image: url(assets/icon/checkbox-grey.svg);\n  }\n\n  .mat-checkbox-background {\n    width: 23px;\n    height: 23px;\n  }\n\n  .mat-checkbox .mat-checkbox-ripple {\n    display: none;\n  }\n  .mat-checkbox {\n    margin: 10px;\n  }\n  .checkbox {\n    display: inline-grid;\n    font-size: 20px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jt8019/GIT/ezreturnsinc/business-ezreturns-web/src/styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map