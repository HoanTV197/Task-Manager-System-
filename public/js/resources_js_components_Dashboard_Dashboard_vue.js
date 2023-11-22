(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Dashboard_Dashboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary */ "./resources/js/components/Dashboard/Summary.vue");
/* harmony import */ var _ProductTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductTable */ "./resources/js/components/Dashboard/ProductTable.vue");
/* harmony import */ var _TaskTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskTable */ "./resources/js/components/Dashboard/TaskTable.vue");
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
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Dashboard",
  components: {
    TaskTable: _TaskTable__WEBPACK_IMPORTED_MODULE_2__.default,
    ProductTable: _ProductTable__WEBPACK_IMPORTED_MODULE_1__.default,
    Summary: _Summary__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/ProductTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/ProductTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  name: "ProductTable",
  data: function data() {
    return {
      items: {},
      status: {
        pending: "PENDING",
        completed: "COMPLETED",
        schedule: "SCHEDULE",
        delayed: "DELAYED"
      },
      dataNotFound: false
    };
  },
  methods: {
    getProject: function getProject() {
      var _this = this;

      var Loading = this.block("projectLoading");
      this.axios.get("/api/v1/projects").then(function (response) {
        _this.items = response.data.data;
        console.log(response.data.data);
        Loading.close();
        _this.dataNotFound = false;
      })["catch"](function (error) {
        _this.items = null;
        _this.dataNotFound = true;
        console.log(error.response.data);
        Loading.close();
      });
    }
  },
  mounted: function mounted() {
    this.getProject();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Summary.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Summary.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Summary",
  data: function data() {
    return {
      summary: {
        totalProject: 0,
        totalTask: 0,
        completeProject: 0,
        completeTask: 0
      }
    };
  },
  methods: {
    getSummary: function getSummary() {
      var _this = this;

      var loading = this.block("summaryLoading", "waves");
      this.axios.get("/api/v1/count").then(function (response) {
        var item = response.data.data;
        _this.summary.totalProject = item.totalProject;
        _this.summary.totalTask = item.totalTask;
        _this.summary.completeProject = item.completeProject;
        _this.summary.completeTask = item.completeTask;
        loading.close();
      })["catch"](function (error) {
        loading.close();
      });
    }
  },
  mounted: function mounted() {
    this.getSummary();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TaskTable",
  data: function data() {
    return {
      items: {},
      status: {
        pending: "PENDING",
        completed: "COMPLETED"
      },
      dataNotFound: false
    };
  },
  methods: {
    getTask: function getTask() {
      var _this = this;

      var Loading = this.block("taskLoading");
      this.axios.get("/api/v1/tasks").then(function (response) {
        _this.items = response.data.data;
        Loading.close();
        _this.dataNotFound = false;
      })["catch"](function (error) {
        _this.items = null;
        _this.dataNotFound = true;
        Loading.close();
      });
    }
  },
  mounted: function mounted() {
    this.getTask();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=c3d42bc4& */ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/ProductTable.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Dashboard/ProductTable.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductTable_vue_vue_type_template_id_a1cd59f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductTable.vue?vue&type=template&id=a1cd59f6& */ "./resources/js/components/Dashboard/ProductTable.vue?vue&type=template&id=a1cd59f6&");
/* harmony import */ var _ProductTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/ProductTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductTable_vue_vue_type_template_id_a1cd59f6___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductTable_vue_vue_type_template_id_a1cd59f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/ProductTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Summary.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Dashboard/Summary.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Summary_vue_vue_type_template_id_58a43aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Summary.vue?vue&type=template&id=58a43aa0&scoped=true& */ "./resources/js/components/Dashboard/Summary.vue?vue&type=template&id=58a43aa0&scoped=true&");
/* harmony import */ var _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Summary.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Summary.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Summary_vue_vue_type_template_id_58a43aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Summary_vue_vue_type_template_id_58a43aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "58a43aa0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Summary.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/TaskTable.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Dashboard/TaskTable.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TaskTable_vue_vue_type_template_id_7869435a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskTable.vue?vue&type=template&id=7869435a& */ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&");
/* harmony import */ var _TaskTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TaskTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TaskTable_vue_vue_type_template_id_7869435a___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskTable_vue_vue_type_template_id_7869435a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/TaskTable.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/ProductTable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/ProductTable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/ProductTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Summary.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Summary.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Summary.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/TaskTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_c3d42bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=c3d42bc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&");


/***/ }),

/***/ "./resources/js/components/Dashboard/ProductTable.vue?vue&type=template&id=a1cd59f6&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/ProductTable.vue?vue&type=template&id=a1cd59f6& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTable_vue_vue_type_template_id_a1cd59f6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTable_vue_vue_type_template_id_a1cd59f6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductTable_vue_vue_type_template_id_a1cd59f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductTable.vue?vue&type=template&id=a1cd59f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/ProductTable.vue?vue&type=template&id=a1cd59f6&");


/***/ }),

/***/ "./resources/js/components/Dashboard/Summary.vue?vue&type=template&id=58a43aa0&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Summary.vue?vue&type=template&id=58a43aa0&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_58a43aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_58a43aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Summary_vue_vue_type_template_id_58a43aa0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Summary.vue?vue&type=template&id=58a43aa0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Summary.vue?vue&type=template&id=58a43aa0&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_template_id_7869435a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_template_id_7869435a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_template_id_7869435a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskTable.vue?vue&type=template&id=7869435a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Dashboard.vue?vue&type=template&id=c3d42bc4& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "header bg-primary pb-6" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c(
          "div",
          { staticClass: "header-body" },
          [_vm._m(0), _vm._v(" "), _c("Summary")],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container-fluid mt--6" },
      [_c("ProductTable"), _vm._v(" "), _c("TaskTable")],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row align-items-center py-3" }, [
      _c("div", { staticClass: "col-lg-6 col-7" }, [
        _c("h6", { staticClass: "h2 text-white d-inline-block mb-0" }, [
          _vm._v("Dashboard")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/ProductTable.vue?vue&type=template&id=a1cd59f6&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/ProductTable.vue?vue&type=template&id=a1cd59f6& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header border-0" }, [
          _c("div", { staticClass: "row align-items-center" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col text-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: { to: "/project" }
                  },
                  [_vm._v("See all")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "table-responsive", attrs: { id: "projectLoading" } },
          [
            _c(
              "table",
              { staticClass: "table align-items-center table-flush" },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._l(_vm.items, function(item) {
                  return _c("tbody", { key: item.name, staticClass: "list" }, [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [
                        _c("div", { staticClass: "media align-items-center" }, [
                          _c("div", { staticClass: "media-body" }, [
                            _c("span", { staticClass: "name mb-0 text-sm" }, [
                              _vm._v(
                                "\n                                        " +
                                  _vm._s(item.name) +
                                  "\n                                    "
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "budget" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.budget) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "budget" }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.responsible_user) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c("span", { staticClass: "badge badge-dot mr-4" }, [
                          item.status == _vm.status.pending
                            ? _c("i", { staticClass: "bg-warning" })
                            : _vm._e(),
                          _vm._v(" "),
                          item.status == _vm.status.completed
                            ? _c("i", { staticClass: "bg-success" })
                            : _vm._e(),
                          _vm._v(" "),
                          item.status == _vm.status.delayed
                            ? _c("i", { staticClass: "bg-danger" })
                            : _vm._e(),
                          _vm._v(" "),
                          item.status == _vm.status.schedule
                            ? _c("i", { staticClass: "bg-info" })
                            : _vm._e(),
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.status) +
                              "\n                            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("span", { staticClass: "completion mr-2" }, [
                              _vm._v(_vm._s(item.completion) + " %")
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("div", { staticClass: "progress" }, [
                                item.status == _vm.status.pending
                                  ? _c("div", {
                                      staticClass: "progress-bar bg-warning",
                                      style: { width: item.completion + "%" },
                                      attrs: { role: "progressbar" }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == _vm.status.completed
                                  ? _c("div", {
                                      staticClass: "progress-bar bg-success",
                                      style: { width: item.completion + "%" },
                                      attrs: { role: "progressbar" }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == _vm.status.delayed
                                  ? _c("div", {
                                      staticClass: "progress-bar bg-danger",
                                      style: { width: item.completion + "%" },
                                      attrs: { role: "progressbar" }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == _vm.status.schedule
                                  ? _c("div", {
                                      staticClass: "progress-bar bg-info",
                                      style: { width: item.completion + "%" },
                                      attrs: { role: "progressbar" }
                                    })
                                  : _vm._e()
                              ])
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("span", { staticClass: "completion mr-2" }, [
                              _vm._v(_vm._s(item.created_at))
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                _vm.dataNotFound ? _c("tbody", [_vm._m(2)]) : _vm._e()
              ],
              2
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Project")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Project")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Budget")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Responsible User")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Status")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Completion")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Create At")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("td", { attrs: { colspan: "10" } }, [_vm._v("No Data Display")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Summary.vue?vue&type=template&id=58a43aa0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Summary.vue?vue&type=template&id=58a43aa0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "row py-4", attrs: { id: "summaryLoading" } },
    [
      _c("div", { staticClass: "col-xl-3 col-md-6 " }, [
        _c("div", { staticClass: "card card-stats" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c(
                  "h5",
                  { staticClass: "card-title text-uppercase text-muted mb-0" },
                  [_vm._v("Total Project")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "h2 font-weight-bold mb-0" }, [
                  _vm._v(_vm._s(this.summary.totalProject))
                ])
              ]),
              _vm._v(" "),
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4 mb-0 text-sm" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-md-6 " }, [
        _c("div", { staticClass: "card card-stats" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c(
                  "h5",
                  { staticClass: "card-title text-uppercase text-muted mb-0" },
                  [_vm._v("Total Task")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "h2 font-weight-bold mb-0" }, [
                  _vm._v(_vm._s(this.summary.totalTask))
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4 mb-0 text-sm" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-md-6 " }, [
        _c("div", { staticClass: "card card-stats" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c(
                  "h5",
                  { staticClass: "card-title text-uppercase text-muted mb-0" },
                  [_vm._v("Complete Project")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "h2 font-weight-bold mb-0" }, [
                  _vm._v(_vm._s(this.summary.completeProject))
                ])
              ]),
              _vm._v(" "),
              _vm._m(2)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4 mb-0 text-sm" })
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-md-6 " }, [
        _c("div", { staticClass: "card card-stats" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c(
                  "h5",
                  { staticClass: "card-title text-uppercase text-muted mb-0" },
                  [_vm._v("Complete Task")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "h2 font-weight-bold mb-0" }, [
                  _vm._v(_vm._s(this.summary.completeTask))
                ])
              ]),
              _vm._v(" "),
              _vm._m(3)
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-4 mb-0 text-sm" })
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c(
        "div",
        {
          staticClass:
            "icon icon-shape bg-gradient-red text-white rounded-circle shadow"
        },
        [_c("i", { staticClass: "fas fa-project-diagram" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c(
        "div",
        {
          staticClass:
            "icon icon-shape bg-gradient-red text-white rounded-circle shadow"
        },
        [_c("i", { staticClass: "fas fa-tasks" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c(
        "div",
        {
          staticClass:
            "icon icon-shape bg-gradient-red text-white rounded-circle shadow"
        },
        [_c("i", { staticClass: "fas fa-check" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c(
        "div",
        {
          staticClass:
            "icon icon-shape bg-gradient-red text-white rounded-circle shadow"
        },
        [_c("i", { staticClass: "fas fa-check" })]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-7 col " }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header border-0" }, [
          _c("div", { staticClass: "row align-items-center" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col text-right" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: { to: "/task" }
                  },
                  [_vm._v("See all")]
                )
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "table-responsive", attrs: { id: "taskLoading" } },
          [
            _c(
              "table",
              { staticClass: "table align-items-center table-flush" },
              [
                _vm._m(1),
                _vm._v(" "),
                _vm._l(_vm.items, function(item) {
                  return _c("tbody", { key: item.id }, [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.name) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                            " +
                            _vm._s(item.responsible_user) +
                            "\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c(
                              "span",
                              { staticClass: "badge badge-dot mr-4" },
                              [
                                item.status == _vm.status.pending
                                  ? _c("i", { staticClass: "bg-danger" })
                                  : _vm._e(),
                                _vm._v(" "),
                                item.status == _vm.status.completed
                                  ? _c("i", { staticClass: "bg-success" })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("span", { staticClass: "status" }, [
                                  _vm._v(_vm._s(item.status))
                                ])
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("span", { staticClass: "mr-2" }, [
                              _vm._v(_vm._s(item.due_date))
                            ])
                          ]
                        )
                      ])
                    ])
                  ])
                }),
                _vm._v(" "),
                _vm.dataNotFound ? _c("tbody", [_vm._m(2)]) : _vm._e()
              ],
              2
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Task")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Task")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("User")]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Status")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Due date")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "text-center" }, [
      _c("td", { attrs: { colspan: "10" } }, [_vm._v("No Data Display")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);