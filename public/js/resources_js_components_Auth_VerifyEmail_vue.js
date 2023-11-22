(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_VerifyEmail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/VerifyEmail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/VerifyEmail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VerifyEmail",
  data: function data() {
    return {
      isVerify: false,
      preLoader: false
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    this.preLoader = true;
    this.axios.get('/api/v1/conform-mail/' + this.$route.params.key).then(function (response) {
      _this.isVerify = response.data.status;
      _this.preLoader = false;
    })["catch"](function (error) {
      console.log(error.response.data);
      _this.isVerify = error.response.data.status;
      _this.preLoader = false;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Auth/VerifyEmail.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Auth/VerifyEmail.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerifyEmail_vue_vue_type_template_id_a17e7df2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=template&id=a17e7df2& */ "./resources/js/components/Auth/VerifyEmail.vue?vue&type=template&id=a17e7df2&");
/* harmony import */ var _VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/VerifyEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VerifyEmail_vue_vue_type_template_id_a17e7df2___WEBPACK_IMPORTED_MODULE_0__.render,
  _VerifyEmail_vue_vue_type_template_id_a17e7df2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/VerifyEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/VerifyEmail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Auth/VerifyEmail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerifyEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/VerifyEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Auth/VerifyEmail.vue?vue&type=template&id=a17e7df2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Auth/VerifyEmail.vue?vue&type=template&id=a17e7df2& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_a17e7df2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_a17e7df2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_a17e7df2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerifyEmail.vue?vue&type=template&id=a17e7df2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/VerifyEmail.vue?vue&type=template&id=a17e7df2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/VerifyEmail.vue?vue&type=template&id=a17e7df2&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/VerifyEmail.vue?vue&type=template&id=a17e7df2& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "header-body text-center mt-5 mb-7" }, [
        _vm.isVerify
          ? _c(
              "div",
              { attrs: { align: "center" } },
              [
                _c("img", {
                  staticStyle: { display: "block" },
                  attrs: {
                    src:
                      "https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png",
                    alt: "",
                    width: "100"
                  }
                }),
                _vm._v(" "),
                _c("h2", [_vm._v("Email Verify Successfully")]),
                _vm._v(" "),
                _c(
                  "router-link",
                  { staticClass: "btn btn-success", attrs: { to: "/" } },
                  [_vm._v("Back To Home")]
                )
              ],
              1
            )
          : _c(
              "div",
              { attrs: { align: "center" } },
              [
                _c("img", {
                  staticStyle: { display: "block" },
                  attrs: {
                    src:
                      "https://tlr.stripocdn.email/content/guids/CABINET_2663efe83689b9bda1312f85374f56d2/images/10381620386430630.png",
                    alt: "",
                    width: "100"
                  }
                }),
                _vm._v(" "),
                _c("h2", [
                  _vm._v("Invalid Code Or Link is Expire Please Try Again !")
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  { staticClass: "btn btn-primary btn-sm", attrs: { to: "/" } },
                  [_vm._v("Back To Login")]
                )
              ],
              1
            )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);