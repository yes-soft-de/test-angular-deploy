(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-toastr/toastr.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./node_modules/ngx-toastr/toastr.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n", "",{"version":3,"sources":["toastr.css"],"names":[],"mappings":"AAAA,kJAAkJ;;AAElJ,aAAa;;AACb;EACE,QAAQ;EACR,SAAS;EACT,gCAAgC;AAClC;;AACA;EACE,MAAM;EACN,QAAQ;EACR,WAAW;AACb;;AACA;EACE,SAAS;EACT,QAAQ;EACR,WAAW;AACb;;AACA;EACE,MAAM;EACN,QAAQ;EACR,WAAW;AACb;;AACA;EACE,SAAS;EACT,QAAQ;EACR,WAAW;AACb;;AACA;EACE,SAAS;EACT,UAAU;AACZ;;AACA;EACE,SAAS;EACT,WAAW;AACb;;AACA;EACE,WAAW;EACX,YAAY;AACd;;AACA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA,iBAAiB;;AACjB;EACE,iBAAiB;AACnB;;AACA;EACE,qBAAqB;AACvB;;AACA;;EAEE,cAAc;AAChB;;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,4BAA4B;EAC5B,kBAAkB;AACpB;;AACA;;EAEE,cAAc;EACd,qBAAqB;EACrB,eAAe;EACf,YAAY;AACd;;AACA;;yDAEyD;;AACzD;EACE,UAAU;EACV,eAAe;EACf,uBAAuB;EACvB,SAAS;AACX;;AACA;EACE,oBAAoB;EACpB,eAAe;EACf,eAAe;AACjB;;AACA;EACE,sBAAsB;AACxB;;AACA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,4BAA4B;EAC5B,YAAY;EACZ,8BAA8B;EAC9B,gCAAgC;EAChC,4BAA4B;EAC5B,qBAAqB;EACrB,4BAA4B;EAC5B,cAAc;AAChB;;AACA;EACE,4BAA4B;EAC5B,UAAU;EACV,eAAe;AACjB;;AACA,iHAAiH;;AACjH;EACE,qlBAAqlB;AACvlB;;AACA,kHAAkH;;AAClH;EACE,6jBAA6jB;AAC/jB;;AACA,2GAA2G;;AAC3G;EACE,wdAAwd;AAC1d;;AACA,0HAA0H;;AAC1H;EACE,soBAAsoB;AACxoB;;AACA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AACA;;EAEE,UAAU;EACV,iBAAiB;EACjB,kBAAkB;AACpB;;AACA;EACE,yBAAyB;EACzB,oBAAoB;AACtB;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,YAAY;AACd;;AACA,sBAAsB;;AACtB;EACE;IACE,yBAAyB;IACzB,WAAW;EACb;EACA;IACE,aAAa;IACb,WAAW;EACb;AACF;;AACA;EACE;IACE,yBAAyB;IACzB,WAAW;EACb;EACA;IACE,aAAa;IACb,WAAW;EACb;AACF;;AACA;EACE;IACE,4BAA4B;IAC5B,WAAW;EACb;AACF","file":"toastr.css","sourcesContent":["/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container * {\n  box-sizing: border-box;\n}\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/styles.scss ***!
  \************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container * {\n  box-sizing: border-box;\n}\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n/*** Admin Loader Style ***/\n.lds-ring {\n  display: inline-block;\n  position: fixed;\n  right: 33.3%;\n  top: 45vh;\n  width: 64px;\n  height: 64px;\n}\n@media (max-width: 767px) {\n  .lds-ring {\n    left: calc(50vw - 32px);\n    right: calc(50vw - 32px);\n  }\n}\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 6px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #6c757d transparent transparent transparent;\n}\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\na.btn-danger {\n  color: #fff !important;\n}\n/*Global Class*/\n.img-custom {\n  width: 75px;\n  max-width: none;\n}\n.search-input {\n  font-size: 14px;\n}\ntd {\n  font-size: 14px;\n  vertical-align: middle !important;\n}\n.ml-custom-auto {\n  margin-left: auto !important;\n}\n.mr-custom-auto {\n  margin-right: auto !important;\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .details-title {\n    font-size: 2.2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 991px) {\n  .details-title {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 575px) {\n  .details-title {\n    font-size: 1.9rem;\n  }\n}\n.text-light-blue {\n  color: #36485e;\n}\n.text-grey-blue {\n  color: #517197;\n}\n.text-grey-blue {\n  color: #21a5b8;\n}\n.text-dark-blue {\n  color: #1d3557;\n}\n.bg-light-blue {\n  background-color: #36485e;\n}\n.bg-grey-blue {\n  background-color: #21a5b8;\n}\n.bg-sidebar-item-button {\n  background: rgba(54, 72, 94, 0.92);\n}\n.bg-grey {\n  background-color: #2a9d8f;\n}\n.bg-gradient-x-dark-blue {\n  background-image: linear-gradient(to right, #008385 0, #00E7EB 100%);\n  background-repeat: repeat-x;\n}\n.bg-gradient-x-info {\n  background-image: linear-gradient(to right, #40407a 0, #5AD9E9 100%);\n  background-repeat: repeat-x;\n}\n.img-responsive {\n  width: 100%;\n  height: 100%;\n}\n.second-images-details {\n  cursor: pointer;\n  width: 100%;\n  height: 130px;\n  overflow-y: hidden;\n  filter: brightness(50%);\n  transition: all 0.5s ease;\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .second-images-details {\n    height: 90px;\n  }\n}\n@media (min-width: 576px) and (max-width: 991px) {\n  .second-images-details {\n    height: 60px;\n  }\n}\n@media (max-width: 575px) {\n  .second-images-details {\n    height: 60px;\n  }\n}\n.second-images-details:hover {\n  filter: brightness(100%);\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .status {\n    width: -webkit-max-content;\n    width: max-content;\n    width: -moz-max-content;\n    display: inline-block;\n    font-size: 0.9rem;\n  }\n}\n.overlay {\n  background: rgba(225, 225, 225, 0.3);\n  width: calc(100% - 30px);\n  height: 100%;\n  z-index: 9;\n  position: absolute;\n  top: 0;\n  left: 15px;\n}\n.overlay .overlay-lds-ring {\n  display: inline-block;\n  position: absolute;\n  right: 40%;\n  top: 40%;\n  width: 64px;\n  height: 64px;\n  z-index: 10;\n}\n.overlay .overlay-lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  margin: 6px;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #cdcece transparent transparent transparent;\n}\n.overlay .overlay-lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.overlay .overlay-lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.overlay .overlay-lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\na {\n  text-decoration: none;\n  color: #fff;\n  transition: all 0.5s ease-in-out;\n}\na:hover, a:active {\n  text-decoration: none;\n}\n/*Global Class*/\nhtml, body {\n  height: 100%;\n}\ntable tr:last-child {\n  border-bottom: 1px solid #dee2e6;\n}\n.td-custom {\n  max-height: 100px;\n  min-width: 250px;\n  overflow-y: scroll;\n  display: block;\n  border-bottom: none !important;\n  overflow-x: hidden;\n  margin-bottom: 0.75rem;\n}\n.td-custom::-webkit-scrollbar {\n  width: 4px;\n}\n.td-custom::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.td-custom::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n.td-custom::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n.input-group-text-custom {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n}", "",{"version":3,"sources":["D:\\Servers\\dashboards\\tourist-test-deploy/src\\styles.scss","D:\\Servers\\dashboards\\tourist-test-deploy/node_modules\\ngx-toastr\\toastr.css","styles.scss","D:\\Servers\\dashboards\\tourist-test-deploy/src\\_variable.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\r\n// regular style toast\r\n@import '~ngx-toastr/toastr';\r\n@import 'variable';\r\n\r\n\r\n/*** Admin Loader Style ***/\r\n.lds-ring {\r\n    display: inline-block;\r\n    position: fixed;\r\n    right: 33.3%;\r\n    // left: 33.3%;\r\n    top: 45vh;\r\n    width: 64px;\r\n    height: 64px;\r\n    @media (max-width: '767px') {\r\n      left: calc(50vw - 32px);\r\n      right: calc(50vw - 32px);\r\n    }\r\n  }\r\n\r\n  .lds-ring div {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    //left: 50%;\r\n    width: 51px;\r\n    height: 51px;\r\n    margin: 6px;\r\n    border: 6px solid #fff;\r\n    border-radius: 50%;\r\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: #6c757d transparent transparent transparent;\r\n  }\r\n\r\n  .lds-ring div:nth-child(1) {\r\n    animation-delay: -0.45s;\r\n  }\r\n\r\n  .lds-ring div:nth-child(2) {\r\n    animation-delay: -0.3s;\r\n  }\r\n\r\n  .lds-ring div:nth-child(3) {\r\n    animation-delay: -0.15s;\r\n  }\r\n\r\n  @keyframes lds-ring {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n  a.btn-danger { color: #fff !important; }\r\n\r\n/*Global Class*/\r\n.img-custom {\r\n  width: 75px;\r\n  max-width: none;\r\n}\r\n.search-input { font-size: 14px; }\r\ntd { font-size: 14px; vertical-align: middle !important; }\r\n\r\n.ml-custom-auto {\r\n  margin-left: auto!important;\r\n}\r\n\r\n.mr-custom-auto {\r\n  margin-right: auto!important;\r\n}\r\n\r\n.details-title {\r\n    @media (min-width: '992px') and (max-width: '1199px') {\r\n      font-size: 2.2rem;\r\n    }\r\n    @media (min-width: '576px') and (max-width: '991px') {\r\n      font-size: 2rem;\r\n    }\r\n    @media (max-width: '575px') {\r\n      font-size: 1.9rem;\r\n    }\r\n}\r\n\r\n\r\n.text-light-blue {\r\n  color: $medium_blue;\r\n}\r\n\r\n.text-grey-blue {\r\n  color: $light_blue;\r\n}\r\n\r\n.text-grey-blue {\r\n  color: $warm_green;\r\n}\r\n\r\n.text-dark-blue {\r\n  color: $dark_blue;\r\n}\r\n\r\n.bg-light-blue {\r\n  background-color: $medium_blue;\r\n}\r\n\r\n.bg-grey-blue {\r\n  // background-color: $light_blue;\r\n  background-color: $warm_green;\r\n}\r\n\r\n.bg-sidebar-item-button {\r\n  background: $sidebar_item_button\r\n}\r\n\r\n.bg-grey {\r\n  background-color: $quiet_green;\r\n}\r\n\r\n.bg-gradient-x-dark-blue {\r\n  background-image: -webkit-linear-gradient(left,#008385 0,#00E7EB 100%);\r\n  background-image: linear-gradient(to right,#008385 0,#00E7EB 100%);\r\n  background-repeat: repeat-x;\r\n}\r\n.bg-gradient-x-info {\r\n  background-image: -webkit-linear-gradient(left,#40407a 0,#5AD9E9 100%);\r\n  background-image: linear-gradient(to right,#40407a 0,#5AD9E9 100%);\r\n  background-repeat: repeat-x;\r\n}\r\n\r\n.img-responsive {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.second-images-details {\r\n  cursor: pointer;\r\n  width: 100%;\r\n  height: 130px;\r\n  overflow-y: hidden;\r\n  filter: brightness(50%);\r\n  -webkit-transition: all .5s ease;\r\n  -moz-transition: all .5s ease;\r\n  -o-transition: all .5s ease;\r\n  -ms-transition: all .5s ease;\r\n  transition: all .5s ease;\r\n  @media (min-width: '992px') and (max-width: '1199px') {\r\n    height: 90px;\r\n  }\r\n  @media (min-width: '576px') and (max-width: '991px') {\r\n    height: 60px;\r\n  }\r\n  @media (max-width: '575px') {\r\n    height: 60px;\r\n  }\r\n  &:hover { filter: brightness(100%); }\r\n}\r\n\r\n.status {\r\n  @media (min-width: '768px') and (max-width: '991px') {\r\n    width: max-content;\r\n    width: -moz-max-content;\r\n    display: inline-block;\r\n    font-size: .9rem;\r\n  }\r\n}\r\n.overlay {\r\n  background: rgb(225 225 225 / 30%);\r\n  width: calc(100% - 30px);\r\n  height: 100%;\r\n  z-index: 9;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 15px;\r\n  .overlay-lds-ring {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 40%;\r\n    top: 40%;\r\n    width: 64px;\r\n    height: 64px;\r\n    z-index: 10;\r\n    div {\r\n      box-sizing: border-box;\r\n      display: block;\r\n      position: absolute;\r\n      width: 35px;\r\n      height: 35px;\r\n      margin: 6px;\r\n      border: 3px solid #fff;\r\n      border-radius: 50%;\r\n      -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n      animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n      border-color: rgb(205 206 206) transparent transparent transparent;\r\n      &:nth-child(1) {\r\n        animation-delay: -0.45s;\r\n      }\r\n      &:nth-child(2) {\r\n        animation-delay: -0.3s;\r\n      }\r\n      &:nth-child(3) {\r\n        animation-delay: -0.15s;\r\n      }\r\n    }\r\n  }\r\n\r\n  //@keyframes lds-ring {\r\n  //  0% {\r\n  //    transform: rotate(0deg);\r\n  //  }\r\n  //  100% {\r\n  //    transform: rotate(360deg);\r\n  //  }\r\n  //}\r\n}\r\n\r\na { text-decoration: none; color: #fff;\r\n  -webkit-transition: all .5s ease-in-out;\r\n  -moz-transition: all .5s ease-in-out;\r\n  -o-transition: all .5s ease-in-out;\r\n  transition: all .5s ease-in-out;\r\n  &:hover, &:active { text-decoration: none; }\r\n}\r\n/*Global Class*/\r\nhtml, body { height: 100%; }\r\ntable tr:last-child {\r\n  border-bottom: 1px solid #dee2e6;\r\n}\r\n.td-custom {\r\n  max-height: 100px;\r\n  min-width: 250px;\r\n  overflow-y: scroll;\r\n  display: block;\r\n  border-bottom: none !important;\r\n  overflow-x: hidden;\r\n  margin-bottom: .75rem;\r\n  &::-webkit-scrollbar {\r\n    width: 4px;\r\n  }\r\n  &::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n  }\r\n  &::-webkit-scrollbar-thumb {\r\n    background: #ccc;\r\n  }\r\n  &::-webkit-scrollbar-thumb:hover {\r\n    background: #999;\r\n  }\r\n}\r\n\r\n.input-group-text-custom {\r\n  display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding: .375rem .75rem;\r\n    margin-bottom: 0;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    background-color: #e9ecef;\r\n    border: 1px solid #ced4da;\r\n}\r\n","/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n.toast-message {\n  word-wrap: break-word;\n}\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n.toast-container * {\n  box-sizing: border-box;\n}\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n.toast-success {\n  background-color: #51A351;\n}\n.toast-error {\n  background-color: #BD362F;\n}\n.toast-info {\n  background-color: #2F96B4;\n}\n.toast-warning {\n  background-color: #F89406;\n}\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n","/* You can add global styles to this file, and also import other style files */\n/* based on angular-toastr css https://github.com/Foxandxss/angular-toastr/blob/cb508fe6801d6b288d3afc525bb40fee1b101650/dist/angular-toastr.css */\n/* position */\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%;\n}\n\n.toast-top-left {\n  top: 12px;\n  left: 12px;\n}\n\n.toast-top-right {\n  top: 12px;\n  right: 12px;\n}\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px;\n}\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px;\n}\n\n/* toast styles */\n.toast-title {\n  font-weight: bold;\n}\n\n.toast-message {\n  word-wrap: break-word;\n}\n\n.toast-message a,\n.toast-message label {\n  color: #FFFFFF;\n}\n\n.toast-message a:hover {\n  color: #CCCCCC;\n  text-decoration: none;\n}\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */\n}\n\n.toast-close-button:hover,\n.toast-close-button:focus {\n  color: #000000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: 0.4;\n}\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999;\n}\n\n.toast-container * {\n  box-sizing: border-box;\n}\n\n.toast-container .ngx-toastr {\n  position: relative;\n  overflow: hidden;\n  margin: 0 0 6px;\n  padding: 15px 15px 15px 50px;\n  width: 300px;\n  border-radius: 3px 3px 3px 3px;\n  background-position: 15px center;\n  background-repeat: no-repeat;\n  background-size: 24px;\n  box-shadow: 0 0 12px #999999;\n  color: #FFFFFF;\n}\n\n.toast-container .ngx-toastr:hover {\n  box-shadow: 0 0 12px #000000;\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\");\n}\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\");\n}\n\n.toast-container.toast-top-center .ngx-toastr,\n.toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.toast-container.toast-top-full-width .ngx-toastr,\n.toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto;\n}\n\n.toast-success {\n  background-color: #51A351;\n}\n\n.toast-error {\n  background-color: #BD362F;\n}\n\n.toast-info {\n  background-color: #2F96B4;\n}\n\n.toast-warning {\n  background-color: #F89406;\n}\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4;\n}\n\n/* Responsive Design */\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em;\n  }\n\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em;\n  }\n\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em;\n  }\n}\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em;\n  }\n}\n/*** Admin Loader Style ***/\n.lds-ring {\n  display: inline-block;\n  position: fixed;\n  right: 33.3%;\n  top: 45vh;\n  width: 64px;\n  height: 64px;\n}\n@media (max-width: 767px) {\n  .lds-ring {\n    left: calc(50vw - 32px);\n    right: calc(50vw - 32px);\n  }\n}\n\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 6px solid #fff;\n  border-radius: 50%;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #6c757d transparent transparent transparent;\n}\n\n.lds-ring div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n\n.lds-ring div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n\n.lds-ring div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\na.btn-danger {\n  color: #fff !important;\n}\n\n/*Global Class*/\n.img-custom {\n  width: 75px;\n  max-width: none;\n}\n\n.search-input {\n  font-size: 14px;\n}\n\ntd {\n  font-size: 14px;\n  vertical-align: middle !important;\n}\n\n.ml-custom-auto {\n  margin-left: auto !important;\n}\n\n.mr-custom-auto {\n  margin-right: auto !important;\n}\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .details-title {\n    font-size: 2.2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 991px) {\n  .details-title {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 575px) {\n  .details-title {\n    font-size: 1.9rem;\n  }\n}\n\n.text-light-blue {\n  color: #36485e;\n}\n\n.text-grey-blue {\n  color: #517197;\n}\n\n.text-grey-blue {\n  color: #21a5b8;\n}\n\n.text-dark-blue {\n  color: #1d3557;\n}\n\n.bg-light-blue {\n  background-color: #36485e;\n}\n\n.bg-grey-blue {\n  background-color: #21a5b8;\n}\n\n.bg-sidebar-item-button {\n  background: rgba(54, 72, 94, 0.92);\n}\n\n.bg-grey {\n  background-color: #2a9d8f;\n}\n\n.bg-gradient-x-dark-blue {\n  background-image: -webkit-linear-gradient(left, #008385 0, #00E7EB 100%);\n  background-image: linear-gradient(to right, #008385 0, #00E7EB 100%);\n  background-repeat: repeat-x;\n}\n\n.bg-gradient-x-info {\n  background-image: -webkit-linear-gradient(left, #40407a 0, #5AD9E9 100%);\n  background-image: linear-gradient(to right, #40407a 0, #5AD9E9 100%);\n  background-repeat: repeat-x;\n}\n\n.img-responsive {\n  width: 100%;\n  height: 100%;\n}\n\n.second-images-details {\n  cursor: pointer;\n  width: 100%;\n  height: 130px;\n  overflow-y: hidden;\n  filter: brightness(50%);\n  -webkit-transition: all 0.5s ease;\n  -moz-transition: all 0.5s ease;\n  -o-transition: all 0.5s ease;\n  -ms-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .second-images-details {\n    height: 90px;\n  }\n}\n@media (min-width: 576px) and (max-width: 991px) {\n  .second-images-details {\n    height: 60px;\n  }\n}\n@media (max-width: 575px) {\n  .second-images-details {\n    height: 60px;\n  }\n}\n.second-images-details:hover {\n  filter: brightness(100%);\n}\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .status {\n    width: max-content;\n    width: -moz-max-content;\n    display: inline-block;\n    font-size: 0.9rem;\n  }\n}\n\n.overlay {\n  background: rgba(225, 225, 225, 0.3);\n  width: calc(100% - 30px);\n  height: 100%;\n  z-index: 9;\n  position: absolute;\n  top: 0;\n  left: 15px;\n}\n.overlay .overlay-lds-ring {\n  display: inline-block;\n  position: absolute;\n  right: 40%;\n  top: 40%;\n  width: 64px;\n  height: 64px;\n  z-index: 10;\n}\n.overlay .overlay-lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  margin: 6px;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #cdcece transparent transparent transparent;\n}\n.overlay .overlay-lds-ring div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n.overlay .overlay-lds-ring div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n.overlay .overlay-lds-ring div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n\na {\n  text-decoration: none;\n  color: #fff;\n  -webkit-transition: all 0.5s ease-in-out;\n  -moz-transition: all 0.5s ease-in-out;\n  -o-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n}\na:hover, a:active {\n  text-decoration: none;\n}\n\n/*Global Class*/\nhtml, body {\n  height: 100%;\n}\n\ntable tr:last-child {\n  border-bottom: 1px solid #dee2e6;\n}\n\n.td-custom {\n  max-height: 100px;\n  min-width: 250px;\n  overflow-y: scroll;\n  display: block;\n  border-bottom: none !important;\n  overflow-x: hidden;\n  margin-bottom: 0.75rem;\n}\n.td-custom::-webkit-scrollbar {\n  width: 4px;\n}\n.td-custom::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.td-custom::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n.td-custom::-webkit-scrollbar-thumb:hover {\n  background: #999;\n}\n\n.input-group-text-custom {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n}","$light_blue: #517197;\r\n$sidebar_item_button: rgba(54, 72, 94, 0.92);\r\n$sidebar_item_button_lang: rgba(54, 72, 94, 0);\r\n$medium_blue: #36485e;\r\n$light_blue_hover: #36485e;\r\n$light_black: #3a3a3a;\r\n$light_meduim_black: #303030;\r\n$light_grey: #9e9e9e;\r\n\r\n\r\n$light_white: #f1faee;\r\n$medium_light_blue: #5085a7;\r\n$dark_blue: #1d3557;\r\n$quiet_green: #2a9d8f;\r\n$warm_green: #21a5b8;"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
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

/***/ "./node_modules/ngx-toastr/toastr.css":
/*!********************************************!*\
  !*** ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../css-loader/dist/cjs.js??ref--12-1!../postcss-loader/src??embedded!./toastr.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/ngx-toastr/toastr.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
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

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!********************************************************************!*\
  !*** multi ./src/styles.scss ./node_modules/ngx-toastr/toastr.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Servers\dashboards\tourist-test-deploy\src\styles.scss */"./src/styles.scss");
module.exports = __webpack_require__(/*! D:\Servers\dashboards\tourist-test-deploy\node_modules\ngx-toastr\toastr.css */"./node_modules/ngx-toastr/toastr.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map