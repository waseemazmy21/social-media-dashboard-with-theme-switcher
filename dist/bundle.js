"use strict";
(self["webpackChunksocial_media_dashboard_with_theme_switcher"] = self["webpackChunksocial_media_dashboard_with_theme_switcher"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --font-inter: \"Inter\", sans-serif;\n}\n\n:root {\n  --limegreen: hsl(163, 72%, 41%);\n  --brightred: hsl(356, 69%, 56%);\n  --facebook: hsl(208, 92%, 53%);\n  --twitter: hsl(203, 89%, 53%);\n  --instagram-start: hsl(37, 97%, 70%);\n  --instagram-middle: hsl(5, 77%, 71%);\n  --instagram-end: hsl(329, 70%, 58%);\n  --youtube: hsl(348, 97%, 39%);\n  --toggle-bg-light: hsl(230, 22%, 74%);\n  --toggle-bg-start: hsl(210, 78%, 56%);\n  --toggle-bg-end: hsl(146, 68%, 55%);\n  --toggle-light: hsl(230, 19%, 60%);\n  --toggle-button-light: hsl(228, 46%, 96%);\n  --dark-bg: hsl(230, 17%, 14%);\n  --dark-top-bg: hsl(232, 19%, 15%);\n  --dark-card: hsl(228, 28%, 20%);\n  --dark-card-hover: hsl(228, 25%, 27%);\n  --dark-text1: hsl(228, 34%, 66%);\n  --dark-text2: hsl(0, 0%, 100%);\n  --light-bg: hsl(0, 0%, 100%);\n  --light-top-bg: hsl(225, 100%, 98%);\n  --light-card: hsl(227, 47%, 96%);\n  --light-card-hover: hsl(228, 33%, 91%);\n  --light-text1: hsl(230, 12%, 44%);\n  --light-text2: hsl(230, 17%, 14%);\n}\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\nbody {\n  font-family: var(--font-inter);\n  background-color: var(--dark-bg);\n  color: var(--dark-text2);\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin-bottom: 0.1875rem;\n  font-weight: bold;\n}\n@media (min-width: 71.875rem) {\n  h1 {\n    font-size: 1.75rem;\n  }\n}\n\nh1, h2, h3 {\n  line-height: 1.1;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  width: min(69.375rem, 100% - 3.125rem);\n  margin-inline: auto;\n  margin-bottom: 2.875rem;\n}\n\n.header {\n  margin-top: 2.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 40rem) {\n  .header {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n.header__title {\n  border-bottom: 1px solid var(--dark-text1);\n  padding-bottom: 1rem;\n}\n@media (min-width: 40rem) {\n  .header__title {\n    border: none;\n  }\n}\n.header__subtitle {\n  font-size: 0.875rem;\n  font-weight: bold;\n  color: var(--dark-text1);\n}\n.header__toggle {\n  align-self: flex-end;\n}\n\n.toggle {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-template-rows: repeat(2, auto);\n  gap: 0.3rem 0.5rem;\n}\n.toggle label {\n  font-size: 0.875rem;\n  align-self: center;\n}\n.toggle label[for=dark] {\n  grid-column: 1/2;\n}\n.toggle label[for=system] {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  align-self: start;\n}\n.toggle label[for=light] {\n  grid-column: 3/4;\n}\n.toggle__wrapper {\n  height: 1.5rem;\n  grid-column: 2/3;\n  grid-row: 1/2;\n  position: relative;\n}\n.toggle input[type=radio] {\n  opacity: 0;\n  z-index: 2;\n  position: relative;\n  height: 1.25rem;\n  width: 1.25rem;\n  margin: 0 -2px 0 -2px;\n}\n.toggle input[type=radio]:focus ~ .toggle__button {\n  border: 2px solid #fff;\n}\n.toggle__background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 0.75rem;\n  background-image: linear-gradient(22deg, var(--toggle-bg-start), var(--toggle-bg-end));\n}\n.toggle__button {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 1.125rem;\n  height: 1.125rem;\n  border-radius: 50%;\n  background-color: var(--dark-bg);\n  transition: all 150ms ease-in-out;\n}\n.toggle #light:checked ~ .toggle__button {\n  left: calc(100% - 21px);\n}\n.toggle #system:checked ~ .toggle__button {\n  left: 50%;\n  transform: translateX(-50%);\n}", "",{"version":3,"sources":["webpack://./src/sass/globals/_fonts.scss","webpack://./src/sass/style.scss","webpack://./src/sass/globals/_colors.scss","webpack://./src/sass/globals/_boilerplate.scss","webpack://./src/sass/globals/_typography.scss","webpack://./src/sass/util/_breakpoints.scss","webpack://./src/sass/globals/_layout.scss","webpack://./src/sass/components/_header.scss","webpack://./src/sass/components/_toggle.scss"],"names":[],"mappings":"AAAA;EACC,iCAAA;ACCD;;ACFA;EACI,+BAAA;EACA,+BAAA;EAEA,8BAAA;EAEA,6BAAA;EAEA,oCAAA;EACA,oCAAA;EACA,mCAAA;EAEA,6BAAA;EAEA,qCAAA;EACA,qCAAA;EACA,mCAAA;EACA,kCAAA;EACA,yCAAA;EAEA,6BAAA;EACA,iCAAA;EAEA,+BAAA;EACA,qCAAA;EAEA,gCAAA;EACA,8BAAA;EAEA,4BAAA;EACA,mCAAA;EAEA,gCAAA;EACA,sCAAA;EAEA,iCAAA;EACA,iCAAA;ADNJ;;AE9BA;EACI,eAAA;EACA,sBAAA;AFiCJ;;AE9BA;;;EAGI,mBAAA;EACA,UAAA;EACA,SAAA;EACA,YAAA;AFiCJ;;AE9BA;EACI,8BAAA;EACA,gCAAA;EACA,wBAAA;AFiCJ;;AGhDA;EACI,iBAAA;EACA,wBAAA;EACA,iBAAA;AHmDJ;AI9CI;EDRJ;IAKQ,kBAAA;EHqDN;AACF;;AGlDA;EACI,gBAAA;AHqDJ;;AGlDA;;;EAGI,qBAAA;AHqDJ;;AKrEA;EACI,sCAAA;EACA,mBAAA;EACA,uBAAA;ALwEJ;;AM3EA;EACI,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AN8EJ;AI1EI;EERJ;IAOQ,mBAAA;IACA,8BAAA;EN+EN;AACF;AM7EI;EACI,0CAAA;EACA,oBAAA;AN+ER;AIpFI;EEGA;IAKQ,YAAA;ENgFV;AACF;AM7EI;EACI,mBAAA;EACA,iBAAA;EACA,wBAAA;AN+ER;AM5EI;EACI,oBAAA;AN8ER;;AOzGA;EAEI,aAAA;EACA,sCAAA;EACA,mCAAA;EACA,kBAAA;AP2GJ;AOzGI;EACI,mBAAA;EACA,kBAAA;AP2GR;AOzGQ;EACI,gBAAA;AP2GZ;AOxGQ;EACI,gBAAA;EACA,aAAA;EAEA,iBAAA;APyGZ;AOtGQ;EACI,gBAAA;APwGZ;AOlGI;EACI,cAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;APoGR;AOjGI;EACI,UAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;EACA,cAAA;EACA,qBAAA;APmGR;AOjGQ;EACI,sBAAA;APmGZ;AO/FI;EACI,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EAEA,sBAAA;EACA,sFAAA;APgGR;AOzFI;EACI,kBAAA;EACA,QAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,gCAAA;EACA,iCAAA;AP2FR;AOxFI;EACI,uBAAA;AP0FR;AOvFI;EACI,SAAA;EACA,2BAAA;APyFR","sourcesContent":[":root {\r\n\t--font-inter: 'Inter', sans-serif;\r\n}",":root {\n  --font-inter: \"Inter\", sans-serif;\n}\n\n:root {\n  --limegreen: hsl(163, 72%, 41%);\n  --brightred: hsl(356, 69%, 56%);\n  --facebook: hsl(208, 92%, 53%);\n  --twitter: hsl(203, 89%, 53%);\n  --instagram-start: hsl(37, 97%, 70%);\n  --instagram-middle: hsl(5, 77%, 71%);\n  --instagram-end: hsl(329, 70%, 58%);\n  --youtube: hsl(348, 97%, 39%);\n  --toggle-bg-light: hsl(230, 22%, 74%);\n  --toggle-bg-start: hsl(210, 78%, 56%);\n  --toggle-bg-end: hsl(146, 68%, 55%);\n  --toggle-light: hsl(230, 19%, 60%);\n  --toggle-button-light: hsl(228, 46%, 96%);\n  --dark-bg: hsl(230, 17%, 14%);\n  --dark-top-bg: hsl(232, 19%, 15%);\n  --dark-card: hsl(228, 28%, 20%);\n  --dark-card-hover: hsl(228, 25%, 27%);\n  --dark-text1: hsl(228, 34%, 66%);\n  --dark-text2: hsl(0, 0%, 100%);\n  --light-bg: hsl(0, 0%, 100%);\n  --light-top-bg: hsl(225, 100%, 98%);\n  --light-card: hsl(227, 47%, 96%);\n  --light-card-hover: hsl(228, 33%, 91%);\n  --light-text1: hsl(230, 12%, 44%);\n  --light-text2: hsl(230, 17%, 14%);\n}\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  padding: 0;\n  margin: 0;\n  border: none;\n}\n\nbody {\n  font-family: var(--font-inter);\n  background-color: var(--dark-bg);\n  color: var(--dark-text2);\n}\n\nh1 {\n  font-size: 1.5rem;\n  margin-bottom: 0.1875rem;\n  font-weight: bold;\n}\n@media (min-width: 71.875rem) {\n  h1 {\n    font-size: 1.75rem;\n  }\n}\n\nh1, h2, h3 {\n  line-height: 1.1;\n}\n\na,\na:visited,\na:active {\n  text-decoration: none;\n}\n\n.container {\n  width: min(69.375rem, 100% - 3.125rem);\n  margin-inline: auto;\n  margin-bottom: 2.875rem;\n}\n\n.header {\n  margin-top: 2.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n@media (min-width: 40rem) {\n  .header {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n.header__title {\n  border-bottom: 1px solid var(--dark-text1);\n  padding-bottom: 1rem;\n}\n@media (min-width: 40rem) {\n  .header__title {\n    border: none;\n  }\n}\n.header__subtitle {\n  font-size: 0.875rem;\n  font-weight: bold;\n  color: var(--dark-text1);\n}\n.header__toggle {\n  align-self: flex-end;\n}\n\n.toggle {\n  display: grid;\n  grid-template-columns: repeat(3, auto);\n  grid-template-rows: repeat(2, auto);\n  gap: 0.3rem 0.5rem;\n}\n.toggle label {\n  font-size: 0.875rem;\n  align-self: center;\n}\n.toggle label[for=dark] {\n  grid-column: 1/2;\n}\n.toggle label[for=system] {\n  grid-column: 2/3;\n  grid-row: 2/3;\n  align-self: start;\n}\n.toggle label[for=light] {\n  grid-column: 3/4;\n}\n.toggle__wrapper {\n  height: 1.5rem;\n  grid-column: 2/3;\n  grid-row: 1/2;\n  position: relative;\n}\n.toggle input[type=radio] {\n  opacity: 0;\n  z-index: 2;\n  position: relative;\n  height: 1.25rem;\n  width: 1.25rem;\n  margin: 0 -2px 0 -2px;\n}\n.toggle input[type=radio]:focus ~ .toggle__button {\n  border: 2px solid #fff;\n}\n.toggle__background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 0.75rem;\n  background-image: linear-gradient(22deg, var(--toggle-bg-start), var(--toggle-bg-end));\n}\n.toggle__button {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 1.125rem;\n  height: 1.125rem;\n  border-radius: 50%;\n  background-color: var(--dark-bg);\n  transition: all 150ms ease-in-out;\n}\n.toggle #light:checked ~ .toggle__button {\n  left: calc(100% - 21px);\n}\n.toggle #system:checked ~ .toggle__button {\n  left: 50%;\n  transform: translateX(-50%);\n}",":root {\r\n    --limegreen: hsl(163, 72%, 41%);\r\n    --brightred: hsl(356, 69%, 56%);\r\n\r\n    --facebook: hsl(208, 92%, 53%);\r\n\r\n    --twitter: hsl(203, 89%, 53%);\r\n\r\n    --instagram-start: hsl(37, 97%, 70%);\r\n    --instagram-middle: hsl(5, 77%, 71%);\r\n    --instagram-end: hsl(329, 70%, 58%);\r\n\r\n    --youtube: hsl(348, 97%, 39%);\r\n\r\n    --toggle-bg-light: hsl(230, 22%, 74%);\r\n    --toggle-bg-start: hsl(210, 78%, 56%);\r\n    --toggle-bg-end: hsl(146, 68%, 55%);\r\n    --toggle-light: hsl(230, 19%, 60%);\r\n    --toggle-button-light: hsl(228, 46%, 96%);\r\n\r\n    --dark-bg: hsl(230, 17%, 14%);\r\n    --dark-top-bg: hsl(232, 19%, 15%);\r\n\r\n    --dark-card: hsl(228, 28%, 20%);\r\n    --dark-card-hover: hsl(228, 25%, 27%);\r\n\r\n    --dark-text1: hsl(228, 34%, 66%);\r\n    --dark-text2: hsl(0, 0%, 100%);\r\n\r\n    --light-bg: hsl(0, 0%, 100%);\r\n    --light-top-bg: hsl(225, 100%, 98%);\r\n\r\n    --light-card: hsl(227, 47%, 96%);\r\n    --light-card-hover: hsl(228, 33%, 91%);\r\n    \r\n    --light-text1: hsl(230, 12%, 44%);\r\n    --light-text2: hsl(230, 17%, 14%);\r\n    // --background: var(--light-bg);\r\n    // --text-color: var(--light-text2);\r\n    // --text-color2: var(--light-text1);\r\n    // --card-bg: var(--light-card);\r\n    // --card-hover: var(--light-card-hover);\r\n    // --toggle: var(--toggle-light);\r\n    // --toggle-bg: var(--toggle-bg-light);\r\n    // --toggle-button: var(--toggle-button-light);\r\n  }\r\n  \r\n","html {\r\n    font-size: 100%;\r\n    box-sizing: border-box;\r\n}\r\n  \r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: inherit;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: none;\r\n}\r\n\r\nbody {\r\n    font-family: var(--font-inter);\r\n    background-color: var(--dark-bg);\r\n    color: var(--dark-text2);\r\n}","@use '../util' as u;\r\n\r\nh1 {\r\n    font-size: u.rem(24);\r\n    margin-bottom: u.rem(3);\r\n    font-weight: bold;\r\n    @include u.breakpoints-up(large) {\r\n        font-size: u.rem(28);\r\n    }\r\n}\r\n\r\nh1, h2, h3 {\r\n    line-height: 1.1;\r\n}\r\n\r\na,\r\na:visited,\r\na:active {\r\n    text-decoration: none;\r\n}","@use 'functions' as f;\r\n\r\n// 640px, 1150px, 1400px\r\n$breakpoints-up: (\r\n    'medium': f.rem(640),\r\n    'large': f.rem(1150),\r\n    'xlarge': f.rem(1400),\r\n);\r\n\r\n@mixin breakpoints-up($size) {\r\n    @media (min-width: map-get($breakpoints-up, $size)) {\r\n        @content;\r\n    }\r\n}\r\n\r\n// 639px, 1149px, 1399px\r\n$breakpoints-down: (\r\n\t'small': f.rem(639),\r\n\t'medium': f.rem(949),\r\n\t'large': f.rem(1399),\r\n);\r\n\r\n\r\n@mixin breakpoint-down($size) {\r\n\t@media (max-width: map-get($breakpoints-down, $size)) {\r\n\t\t@content;\r\n\t}\r\n}","@use '../util/' as u;\r\n\r\n.container {\r\n    width: min(u.rem(1110), 100% - u.rem(50));\r\n    margin-inline: auto;\r\n    margin-bottom: u.rem(46);\r\n}","@use '../util' as u;\r\n\r\n.header {\r\n    margin-top: u.rem(36);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n\r\n    @include u.breakpoints-up(medium) {\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    &__title {\r\n        border-bottom: 1px solid var(--dark-text1);\r\n        padding-bottom: 1rem;\r\n\r\n        @include u.breakpoints-up(medium) {\r\n            border: none;\r\n        }\r\n    }\r\n\r\n    &__subtitle {\r\n        font-size: u.rem(14);\r\n        font-weight: bold;\r\n        color: var(--dark-text1);\r\n    }\r\n\r\n    &__toggle {\r\n        align-self: flex-end;\r\n    }\r\n}","@use '../util' as u;\r\n\r\n.toggle {\r\n\r\n    display: grid;\r\n    grid-template-columns: repeat((3, auto));\r\n    grid-template-rows: repeat(2, auto);\r\n    gap: u.rem(4.8) u.rem(8);\r\n\r\n    label {\r\n        font-size: u.rem(14);\r\n        align-self: center;\r\n\r\n        &[for=\"dark\"] {\r\n            grid-column: 1/2;\r\n        }\r\n\r\n        &[for=\"system\"] {\r\n            grid-column: 2/3;\r\n            grid-row: 2/3;\r\n\r\n            align-self: start;\r\n        }\r\n\r\n        &[for=\"light\"] {\r\n            grid-column: 3/4;\r\n        }\r\n\r\n\r\n    }\r\n\r\n    &__wrapper {\r\n        height: u.rem(24);\r\n        grid-column: 2/3;\r\n        grid-row: 1/2;\r\n        position: relative;\r\n    }\r\n\r\n    input[type=\"radio\"] {\r\n        opacity: 0;\r\n        z-index: 2;\r\n        position: relative;\r\n        height: u.rem(20);\r\n        width: u.rem(20);\r\n        margin: 0 -2px 0 -2px;\r\n\r\n        &:focus ~ .toggle__button {\r\n            border: 2px solid #fff;\r\n        }\r\n    }\r\n\r\n    &__background {\r\n        position: absolute;\r\n        top: 0; \r\n        left: 0;\r\n        right: 0; \r\n        bottom: 0;\r\n \r\n        border-radius: u.rem(12);\r\n        background-image: linear-gradient(\r\n            22deg, \r\n            var(--toggle-bg-start), \r\n            var(--toggle-bg-end)\r\n        );\r\n    }\r\n\r\n    &__button {\r\n        position: absolute;\r\n        top: 3px;\r\n        left: 3px;\r\n        width: u.rem(18);\r\n        height: u.rem(18);\r\n        border-radius: 50%;\r\n        background-color: var(--dark-bg);\r\n        transition: all 150ms ease-in-out;\r\n    }\r\n\r\n    #light:checked ~ .toggle__button {\r\n        left: calc(100% - 21px);\r\n    } \r\n\r\n    #system:checked ~ .toggle__button {\r\n        left: 50%;\r\n        transform: translateX(-50%);\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _images_favicon_32x32_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/favicon-32x32.png */ "./src/images/favicon-32x32.png");





/***/ }),

/***/ "./src/images/favicon-32x32.png":
/*!**************************************!*\
  !*** ./src/images/favicon-32x32.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/favicon-32x32.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNmMkI7QUFDUztBQUNwQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbC1tZWRpYS1kYXNoYm9hcmQtd2l0aC10aGVtZS1zd2l0Y2hlci8uL3NyYy9zYXNzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLWRhc2hib2FyZC13aXRoLXRoZW1lLXN3aXRjaGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEtZGFzaGJvYXJkLXdpdGgtdGhlbWUtc3dpdGNoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEtZGFzaGJvYXJkLXdpdGgtdGhlbWUtc3dpdGNoZXIvLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzRkMzciLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLWRhc2hib2FyZC13aXRoLXRoZW1lLXN3aXRjaGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS1kYXNoYm9hcmQtd2l0aC10aGVtZS1zd2l0Y2hlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc29jaWFsLW1lZGlhLWRhc2hib2FyZC13aXRoLXRoZW1lLXN3aXRjaGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3NvY2lhbC1tZWRpYS1kYXNoYm9hcmQtd2l0aC10aGVtZS1zd2l0Y2hlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEtZGFzaGJvYXJkLXdpdGgtdGhlbWUtc3dpdGNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEtZGFzaGJvYXJkLXdpdGgtdGhlbWUtc3dpdGNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9zb2NpYWwtbWVkaWEtZGFzaGJvYXJkLXdpdGgtdGhlbWUtc3dpdGNoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWZvbnQtaW50ZXI6IFxcXCJJbnRlclxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbjpyb290IHtcXG4gIC0tbGltZWdyZWVuOiBoc2woMTYzLCA3MiUsIDQxJSk7XFxuICAtLWJyaWdodHJlZDogaHNsKDM1NiwgNjklLCA1NiUpO1xcbiAgLS1mYWNlYm9vazogaHNsKDIwOCwgOTIlLCA1MyUpO1xcbiAgLS10d2l0dGVyOiBoc2woMjAzLCA4OSUsIDUzJSk7XFxuICAtLWluc3RhZ3JhbS1zdGFydDogaHNsKDM3LCA5NyUsIDcwJSk7XFxuICAtLWluc3RhZ3JhbS1taWRkbGU6IGhzbCg1LCA3NyUsIDcxJSk7XFxuICAtLWluc3RhZ3JhbS1lbmQ6IGhzbCgzMjksIDcwJSwgNTglKTtcXG4gIC0teW91dHViZTogaHNsKDM0OCwgOTclLCAzOSUpO1xcbiAgLS10b2dnbGUtYmctbGlnaHQ6IGhzbCgyMzAsIDIyJSwgNzQlKTtcXG4gIC0tdG9nZ2xlLWJnLXN0YXJ0OiBoc2woMjEwLCA3OCUsIDU2JSk7XFxuICAtLXRvZ2dsZS1iZy1lbmQ6IGhzbCgxNDYsIDY4JSwgNTUlKTtcXG4gIC0tdG9nZ2xlLWxpZ2h0OiBoc2woMjMwLCAxOSUsIDYwJSk7XFxuICAtLXRvZ2dsZS1idXR0b24tbGlnaHQ6IGhzbCgyMjgsIDQ2JSwgOTYlKTtcXG4gIC0tZGFyay1iZzogaHNsKDIzMCwgMTclLCAxNCUpO1xcbiAgLS1kYXJrLXRvcC1iZzogaHNsKDIzMiwgMTklLCAxNSUpO1xcbiAgLS1kYXJrLWNhcmQ6IGhzbCgyMjgsIDI4JSwgMjAlKTtcXG4gIC0tZGFyay1jYXJkLWhvdmVyOiBoc2woMjI4LCAyNSUsIDI3JSk7XFxuICAtLWRhcmstdGV4dDE6IGhzbCgyMjgsIDM0JSwgNjYlKTtcXG4gIC0tZGFyay10ZXh0MjogaHNsKDAsIDAlLCAxMDAlKTtcXG4gIC0tbGlnaHQtYmc6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWxpZ2h0LXRvcC1iZzogaHNsKDIyNSwgMTAwJSwgOTglKTtcXG4gIC0tbGlnaHQtY2FyZDogaHNsKDIyNywgNDclLCA5NiUpO1xcbiAgLS1saWdodC1jYXJkLWhvdmVyOiBoc2woMjI4LCAzMyUsIDkxJSk7XFxuICAtLWxpZ2h0LXRleHQxOiBoc2woMjMwLCAxMiUsIDQ0JSk7XFxuICAtLWxpZ2h0LXRleHQyOiBoc2woMjMwLCAxNyUsIDE0JSk7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaW50ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICBjb2xvcjogdmFyKC0tZGFyay10ZXh0Mik7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4xODc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3MS44NzVyZW0pIHtcXG4gIGgxIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbiAgfVxcbn1cXG5cXG5oMSwgaDIsIGgzIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbmEsXFxuYTp2aXNpdGVkLFxcbmE6YWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogbWluKDY5LjM3NXJlbSwgMTAwJSAtIDMuMTI1cmVtKTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAyLjg3NXJlbTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBtYXJnaW4tdG9wOiAyLjI1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xcbiAgLmhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG59XFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWRhcmstdGV4dDEpO1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0MHJlbSkge1xcbiAgLmhlYWRlcl9fdGl0bGUge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVxcbi5oZWFkZXJfX3N1YnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQxKTtcXG59XFxuLmhlYWRlcl9fdG9nZ2xlIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcbiAgZ2FwOiAwLjNyZW0gMC41cmVtO1xcbn1cXG4udG9nZ2xlIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi50b2dnbGUgbGFiZWxbZm9yPWRhcmtdIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxufVxcbi50b2dnbGUgbGFiZWxbZm9yPXN5c3RlbV0ge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAyLzM7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuLnRvZ2dsZSBsYWJlbFtmb3I9bGlnaHRdIHtcXG4gIGdyaWQtY29sdW1uOiAzLzQ7XFxufVxcbi50b2dnbGVfX3dyYXBwZXIge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRvZ2dsZSBpbnB1dFt0eXBlPXJhZGlvXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbiAgbWFyZ2luOiAwIC0ycHggMCAtMnB4O1xcbn1cXG4udG9nZ2xlIGlucHV0W3R5cGU9cmFkaW9dOmZvY3VzIH4gLnRvZ2dsZV9fYnV0dG9uIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxufVxcbi50b2dnbGVfX2JhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMmRlZywgdmFyKC0tdG9nZ2xlLWJnLXN0YXJ0KSwgdmFyKC0tdG9nZ2xlLWJnLWVuZCkpO1xcbn1cXG4udG9nZ2xlX19idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzcHg7XFxuICBsZWZ0OiAzcHg7XFxuICB3aWR0aDogMS4xMjVyZW07XFxuICBoZWlnaHQ6IDEuMTI1cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxufVxcbi50b2dnbGUgI2xpZ2h0OmNoZWNrZWQgfiAudG9nZ2xlX19idXR0b24ge1xcbiAgbGVmdDogY2FsYygxMDAlIC0gMjFweCk7XFxufVxcbi50b2dnbGUgI3N5c3RlbTpjaGVja2VkIH4gLnRvZ2dsZV9fYnV0dG9uIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFscy9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFscy9fY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbHMvX2JvaWxlcnBsYXRlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2dsb2JhbHMvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvdXRpbC9fYnJlYWtwb2ludHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Nhc3MvZ2xvYmFscy9fbGF5b3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL2NvbXBvbmVudHMvX2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Fzcy9jb21wb25lbnRzL190b2dnbGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLGlDQUFBO0FDQ0Q7O0FDRkE7RUFDSSwrQkFBQTtFQUNBLCtCQUFBO0VBRUEsOEJBQUE7RUFFQSw2QkFBQTtFQUVBLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUVBLDZCQUFBO0VBRUEscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSx5Q0FBQTtFQUVBLDZCQUFBO0VBQ0EsaUNBQUE7RUFFQSwrQkFBQTtFQUNBLHFDQUFBO0VBRUEsZ0NBQUE7RUFDQSw4QkFBQTtFQUVBLDRCQUFBO0VBQ0EsbUNBQUE7RUFFQSxnQ0FBQTtFQUNBLHNDQUFBO0VBRUEsaUNBQUE7RUFDQSxpQ0FBQTtBRE5KOztBRTlCQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBRmlDSjs7QUU5QkE7OztFQUdJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FGaUNKOztBRTlCQTtFQUNJLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtBRmlDSjs7QUdoREE7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7QUhtREo7QUk5Q0k7RURSSjtJQUtRLGtCQUFBO0VIcUROO0FBQ0Y7O0FHbERBO0VBQ0ksZ0JBQUE7QUhxREo7O0FHbERBOzs7RUFHSSxxQkFBQTtBSHFESjs7QUtyRUE7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUx3RUo7O0FNM0VBO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FOOEVKO0FJMUVJO0VFUko7SUFPUSxtQkFBQTtJQUNBLDhCQUFBO0VOK0VOO0FBQ0Y7QU03RUk7RUFDSSwwQ0FBQTtFQUNBLG9CQUFBO0FOK0VSO0FJcEZJO0VFR0E7SUFLUSxZQUFBO0VOZ0ZWO0FBQ0Y7QU03RUk7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7QU4rRVI7QU01RUk7RUFDSSxvQkFBQTtBTjhFUjs7QU96R0E7RUFFSSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FQMkdKO0FPekdJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBUDJHUjtBT3pHUTtFQUNJLGdCQUFBO0FQMkdaO0FPeEdRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7QVB5R1o7QU90R1E7RUFDSSxnQkFBQTtBUHdHWjtBT2xHSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBUG9HUjtBT2pHSTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FQbUdSO0FPakdRO0VBQ0ksc0JBQUE7QVBtR1o7QU8vRkk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxzQkFBQTtFQUNBLHNGQUFBO0FQZ0dSO0FPekZJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBUDJGUjtBT3hGSTtFQUNJLHVCQUFBO0FQMEZSO0FPdkZJO0VBQ0ksU0FBQTtFQUNBLDJCQUFBO0FQeUZSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG5cXHQtLWZvbnQtaW50ZXI6ICdJbnRlcicsIHNhbnMtc2VyaWY7XFxyXFxufVwiLFwiOnJvb3Qge1xcbiAgLS1mb250LWludGVyOiBcXFwiSW50ZXJcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWxpbWVncmVlbjogaHNsKDE2MywgNzIlLCA0MSUpO1xcbiAgLS1icmlnaHRyZWQ6IGhzbCgzNTYsIDY5JSwgNTYlKTtcXG4gIC0tZmFjZWJvb2s6IGhzbCgyMDgsIDkyJSwgNTMlKTtcXG4gIC0tdHdpdHRlcjogaHNsKDIwMywgODklLCA1MyUpO1xcbiAgLS1pbnN0YWdyYW0tc3RhcnQ6IGhzbCgzNywgOTclLCA3MCUpO1xcbiAgLS1pbnN0YWdyYW0tbWlkZGxlOiBoc2woNSwgNzclLCA3MSUpO1xcbiAgLS1pbnN0YWdyYW0tZW5kOiBoc2woMzI5LCA3MCUsIDU4JSk7XFxuICAtLXlvdXR1YmU6IGhzbCgzNDgsIDk3JSwgMzklKTtcXG4gIC0tdG9nZ2xlLWJnLWxpZ2h0OiBoc2woMjMwLCAyMiUsIDc0JSk7XFxuICAtLXRvZ2dsZS1iZy1zdGFydDogaHNsKDIxMCwgNzglLCA1NiUpO1xcbiAgLS10b2dnbGUtYmctZW5kOiBoc2woMTQ2LCA2OCUsIDU1JSk7XFxuICAtLXRvZ2dsZS1saWdodDogaHNsKDIzMCwgMTklLCA2MCUpO1xcbiAgLS10b2dnbGUtYnV0dG9uLWxpZ2h0OiBoc2woMjI4LCA0NiUsIDk2JSk7XFxuICAtLWRhcmstYmc6IGhzbCgyMzAsIDE3JSwgMTQlKTtcXG4gIC0tZGFyay10b3AtYmc6IGhzbCgyMzIsIDE5JSwgMTUlKTtcXG4gIC0tZGFyay1jYXJkOiBoc2woMjI4LCAyOCUsIDIwJSk7XFxuICAtLWRhcmstY2FyZC1ob3ZlcjogaHNsKDIyOCwgMjUlLCAyNyUpO1xcbiAgLS1kYXJrLXRleHQxOiBoc2woMjI4LCAzNCUsIDY2JSk7XFxuICAtLWRhcmstdGV4dDI6IGhzbCgwLCAwJSwgMTAwJSk7XFxuICAtLWxpZ2h0LWJnOiBoc2woMCwgMCUsIDEwMCUpO1xcbiAgLS1saWdodC10b3AtYmc6IGhzbCgyMjUsIDEwMCUsIDk4JSk7XFxuICAtLWxpZ2h0LWNhcmQ6IGhzbCgyMjcsIDQ3JSwgOTYlKTtcXG4gIC0tbGlnaHQtY2FyZC1ob3ZlcjogaHNsKDIyOCwgMzMlLCA5MSUpO1xcbiAgLS1saWdodC10ZXh0MTogaHNsKDIzMCwgMTIlLCA0NCUpO1xcbiAgLS1saWdodC10ZXh0MjogaHNsKDIzMCwgMTclLCAxNCUpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWludGVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgY29sb3I6IHZhcigtLWRhcmstdGV4dDIpO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuMTg3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzEuODc1cmVtKSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gIH1cXG59XFxuXFxuaDEsIGgyLCBoMyB7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG5hLFxcbmE6dmlzaXRlZCxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IG1pbig2OS4zNzVyZW0sIDEwMCUgLSAzLjEyNXJlbSk7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMi44NzVyZW07XFxufVxcblxcbi5oZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMi4yNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXG4gIC5oZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxufVxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLXRleHQxKTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDByZW0pIHtcXG4gIC5oZWFkZXJfX3RpdGxlIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcbn1cXG4uaGVhZGVyX19zdWJ0aXRsZSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogdmFyKC0tZGFyay10ZXh0MSk7XFxufVxcbi5oZWFkZXJfX3RvZ2dsZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRvZ2dsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIGdhcDogMC4zcmVtIDAuNXJlbTtcXG59XFxuLnRvZ2dsZSBsYWJlbCB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4udG9nZ2xlIGxhYmVsW2Zvcj1kYXJrXSB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbn1cXG4udG9nZ2xlIGxhYmVsW2Zvcj1zeXN0ZW1dIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcbi50b2dnbGUgbGFiZWxbZm9yPWxpZ2h0XSB7XFxuICBncmlkLWNvbHVtbjogMy80O1xcbn1cXG4udG9nZ2xlX193cmFwcGVyIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50b2dnbGUgaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHotaW5kZXg6IDI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxuICB3aWR0aDogMS4yNXJlbTtcXG4gIG1hcmdpbjogMCAtMnB4IDAgLTJweDtcXG59XFxuLnRvZ2dsZSBpbnB1dFt0eXBlPXJhZGlvXTpmb2N1cyB+IC50b2dnbGVfX2J1dHRvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbn1cXG4udG9nZ2xlX19iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjJkZWcsIHZhcigtLXRvZ2dsZS1iZy1zdGFydCksIHZhcigtLXRvZ2dsZS1iZy1lbmQpKTtcXG59XFxuLnRvZ2dsZV9fYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogM3B4O1xcbiAgbGVmdDogM3B4O1xcbiAgd2lkdGg6IDEuMTI1cmVtO1xcbiAgaGVpZ2h0OiAxLjEyNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmcpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG4udG9nZ2xlICNsaWdodDpjaGVja2VkIH4gLnRvZ2dsZV9fYnV0dG9uIHtcXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDIxcHgpO1xcbn1cXG4udG9nZ2xlICNzeXN0ZW06Y2hlY2tlZCB+IC50b2dnbGVfX2J1dHRvbiB7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxufVwiLFwiOnJvb3Qge1xcclxcbiAgICAtLWxpbWVncmVlbjogaHNsKDE2MywgNzIlLCA0MSUpO1xcclxcbiAgICAtLWJyaWdodHJlZDogaHNsKDM1NiwgNjklLCA1NiUpO1xcclxcblxcclxcbiAgICAtLWZhY2Vib29rOiBoc2woMjA4LCA5MiUsIDUzJSk7XFxyXFxuXFxyXFxuICAgIC0tdHdpdHRlcjogaHNsKDIwMywgODklLCA1MyUpO1xcclxcblxcclxcbiAgICAtLWluc3RhZ3JhbS1zdGFydDogaHNsKDM3LCA5NyUsIDcwJSk7XFxyXFxuICAgIC0taW5zdGFncmFtLW1pZGRsZTogaHNsKDUsIDc3JSwgNzElKTtcXHJcXG4gICAgLS1pbnN0YWdyYW0tZW5kOiBoc2woMzI5LCA3MCUsIDU4JSk7XFxyXFxuXFxyXFxuICAgIC0teW91dHViZTogaHNsKDM0OCwgOTclLCAzOSUpO1xcclxcblxcclxcbiAgICAtLXRvZ2dsZS1iZy1saWdodDogaHNsKDIzMCwgMjIlLCA3NCUpO1xcclxcbiAgICAtLXRvZ2dsZS1iZy1zdGFydDogaHNsKDIxMCwgNzglLCA1NiUpO1xcclxcbiAgICAtLXRvZ2dsZS1iZy1lbmQ6IGhzbCgxNDYsIDY4JSwgNTUlKTtcXHJcXG4gICAgLS10b2dnbGUtbGlnaHQ6IGhzbCgyMzAsIDE5JSwgNjAlKTtcXHJcXG4gICAgLS10b2dnbGUtYnV0dG9uLWxpZ2h0OiBoc2woMjI4LCA0NiUsIDk2JSk7XFxyXFxuXFxyXFxuICAgIC0tZGFyay1iZzogaHNsKDIzMCwgMTclLCAxNCUpO1xcclxcbiAgICAtLWRhcmstdG9wLWJnOiBoc2woMjMyLCAxOSUsIDE1JSk7XFxyXFxuXFxyXFxuICAgIC0tZGFyay1jYXJkOiBoc2woMjI4LCAyOCUsIDIwJSk7XFxyXFxuICAgIC0tZGFyay1jYXJkLWhvdmVyOiBoc2woMjI4LCAyNSUsIDI3JSk7XFxyXFxuXFxyXFxuICAgIC0tZGFyay10ZXh0MTogaHNsKDIyOCwgMzQlLCA2NiUpO1xcclxcbiAgICAtLWRhcmstdGV4dDI6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuXFxyXFxuICAgIC0tbGlnaHQtYmc6IGhzbCgwLCAwJSwgMTAwJSk7XFxyXFxuICAgIC0tbGlnaHQtdG9wLWJnOiBoc2woMjI1LCAxMDAlLCA5OCUpO1xcclxcblxcclxcbiAgICAtLWxpZ2h0LWNhcmQ6IGhzbCgyMjcsIDQ3JSwgOTYlKTtcXHJcXG4gICAgLS1saWdodC1jYXJkLWhvdmVyOiBoc2woMjI4LCAzMyUsIDkxJSk7XFxyXFxuICAgIFxcclxcbiAgICAtLWxpZ2h0LXRleHQxOiBoc2woMjMwLCAxMiUsIDQ0JSk7XFxyXFxuICAgIC0tbGlnaHQtdGV4dDI6IGhzbCgyMzAsIDE3JSwgMTQlKTtcXHJcXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1iZyk7XFxyXFxuICAgIC8vIC0tdGV4dC1jb2xvcjogdmFyKC0tbGlnaHQtdGV4dDIpO1xcclxcbiAgICAvLyAtLXRleHQtY29sb3IyOiB2YXIoLS1saWdodC10ZXh0MSk7XFxyXFxuICAgIC8vIC0tY2FyZC1iZzogdmFyKC0tbGlnaHQtY2FyZCk7XFxyXFxuICAgIC8vIC0tY2FyZC1ob3ZlcjogdmFyKC0tbGlnaHQtY2FyZC1ob3Zlcik7XFxyXFxuICAgIC8vIC0tdG9nZ2xlOiB2YXIoLS10b2dnbGUtbGlnaHQpO1xcclxcbiAgICAvLyAtLXRvZ2dsZS1iZzogdmFyKC0tdG9nZ2xlLWJnLWxpZ2h0KTtcXHJcXG4gICAgLy8gLS10b2dnbGUtYnV0dG9uOiB2YXIoLS10b2dnbGUtYnV0dG9uLWxpZ2h0KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblwiLFwiaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuICBcXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtaW50ZXIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJnKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRhcmstdGV4dDIpO1xcclxcbn1cIixcIkB1c2UgJy4uL3V0aWwnIGFzIHU7XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IHUucmVtKDI0KTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogdS5yZW0oMyk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBAaW5jbHVkZSB1LmJyZWFrcG9pbnRzLXVwKGxhcmdlKSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IHUucmVtKDI4KTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5oMSwgaDIsIGgzIHtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuYSxcXHJcXG5hOnZpc2l0ZWQsXFxyXFxuYTphY3RpdmUge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVwiLFwiQHVzZSAnZnVuY3Rpb25zJyBhcyBmO1xcclxcblxcclxcbi8vIDY0MHB4LCAxMTUwcHgsIDE0MDBweFxcclxcbiRicmVha3BvaW50cy11cDogKFxcclxcbiAgICAnbWVkaXVtJzogZi5yZW0oNjQwKSxcXHJcXG4gICAgJ2xhcmdlJzogZi5yZW0oMTE1MCksXFxyXFxuICAgICd4bGFyZ2UnOiBmLnJlbSgxNDAwKSxcXHJcXG4pO1xcclxcblxcclxcbkBtaXhpbiBicmVha3BvaW50cy11cCgkc2l6ZSkge1xcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMtdXAsICRzaXplKSkge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8gNjM5cHgsIDExNDlweCwgMTM5OXB4XFxyXFxuJGJyZWFrcG9pbnRzLWRvd246IChcXHJcXG5cXHQnc21hbGwnOiBmLnJlbSg2MzkpLFxcclxcblxcdCdtZWRpdW0nOiBmLnJlbSg5NDkpLFxcclxcblxcdCdsYXJnZSc6IGYucmVtKDEzOTkpLFxcclxcbik7XFxyXFxuXFxyXFxuXFxyXFxuQG1peGluIGJyZWFrcG9pbnQtZG93bigkc2l6ZSkge1xcclxcblxcdEBtZWRpYSAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cy1kb3duLCAkc2l6ZSkpIHtcXHJcXG5cXHRcXHRAY29udGVudDtcXHJcXG5cXHR9XFxyXFxufVwiLFwiQHVzZSAnLi4vdXRpbC8nIGFzIHU7XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiBtaW4odS5yZW0oMTExMCksIDEwMCUgLSB1LnJlbSg1MCkpO1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiB1LnJlbSg0Nik7XFxyXFxufVwiLFwiQHVzZSAnLi4vdXRpbCcgYXMgdTtcXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogdS5yZW0oMzYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIHUuYnJlYWtwb2ludHMtdXAobWVkaXVtKSB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RpdGxlIHtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1kYXJrLXRleHQxKTtcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgdS5icmVha3BvaW50cy11cChtZWRpdW0pIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fc3VidGl0bGUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiB1LnJlbSgxNCk7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLXRleHQxKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX190b2dnbGUge1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIH1cXHJcXG59XCIsXCJAdXNlICcuLi91dGlsJyBhcyB1O1xcclxcblxcclxcbi50b2dnbGUge1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgoMywgYXV0bykpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCBhdXRvKTtcXHJcXG4gICAgZ2FwOiB1LnJlbSg0LjgpIHUucmVtKDgpO1xcclxcblxcclxcbiAgICBsYWJlbCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IHUucmVtKDE0KTtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICZbZm9yPVxcXCJkYXJrXFxcIl0ge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAmW2Zvcj1cXFwic3lzdGVtXFxcIl0ge1xcclxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcXHJcXG5cXHJcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICZbZm9yPVxcXCJsaWdodFxcXCJdIHtcXHJcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3dyYXBwZXIge1xcclxcbiAgICAgICAgaGVpZ2h0OiB1LnJlbSgyNCk7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgaGVpZ2h0OiB1LnJlbSgyMCk7XFxyXFxuICAgICAgICB3aWR0aDogdS5yZW0oMjApO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIC0ycHggMCAtMnB4O1xcclxcblxcclxcbiAgICAgICAgJjpmb2N1cyB+IC50b2dnbGVfX2J1dHRvbiB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmX19iYWNrZ3JvdW5kIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogMDsgXFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7IFxcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiBcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHUucmVtKDEyKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAgICAgICAyMmRlZywgXFxyXFxuICAgICAgICAgICAgdmFyKC0tdG9nZ2xlLWJnLXN0YXJ0KSwgXFxyXFxuICAgICAgICAgICAgdmFyKC0tdG9nZ2xlLWJnLWVuZClcXHJcXG4gICAgICAgICk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJl9fYnV0dG9uIHtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogM3B4O1xcclxcbiAgICAgICAgbGVmdDogM3B4O1xcclxcbiAgICAgICAgd2lkdGg6IHUucmVtKDE4KTtcXHJcXG4gICAgICAgIGhlaWdodDogdS5yZW0oMTgpO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1iZyk7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2xpZ2h0OmNoZWNrZWQgfiAudG9nZ2xlX19idXR0b24ge1xcclxcbiAgICAgICAgbGVmdDogY2FsYygxMDAlIC0gMjFweCk7XFxyXFxuICAgIH0gXFxyXFxuXFxyXFxuICAgICNzeXN0ZW06Y2hlY2tlZCB+IC50b2dnbGVfX2J1dHRvbiB7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgJy4vaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nJztcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==