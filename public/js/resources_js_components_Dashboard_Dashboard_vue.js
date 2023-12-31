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
      dataNotFound: false,
      quickNotes: [],
      newNote: ""
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
    },
    // Method to add a new note
    addNote: function addNote() {
      if (this.newNote.trim() !== "") {
        this.quickNotes.push(this.newNote.trim());
        this.newNote = ""; // Clear the input after adding a note
      }
    },
    // Method to edit an existing note
    editNote: function editNote(index) {
      var editedNote = prompt("Edit Note", this.quickNotes[index]);

      if (editedNote !== null) {
        this.$set(this.quickNotes, index, editedNote.trim());
      }
    },
    // Method to delete a note
    deleteNote: function deleteNote(index) {
      var confirmDelete = confirm("Are you sure you want to delete this note?");

      if (confirmDelete) {
        this.quickNotes.splice(index, 1);
      }
    },
    // Method to generate a random color
    getRandomColor: function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';

      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    }
  },
  mounted: function mounted() {
    this.getTask();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Quick Notes Section */\n.quick-notes[data-v-7869435a] {\n    background-color: #f8f9fa;\n    padding: 15px;\n    border-radius: 8px;\n    margin-bottom: 20px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n.quick-note[data-v-7869435a] {\n    background-color: #ffffff;\n    border: 1px solid #dee2e6;\n    padding: 10px;\n    margin-bottom: 10px;\n    border-radius: 5px;\n    position: relative;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.quick-note button[data-v-7869435a] {\n    margin-left: 10px;\n    cursor: pointer;\n    background-color: #007bff;\n    color: #ffffff;\n    border: none;\n    padding: 8px 15px;\n    border-radius: 5px;\n    transition: background-color 0.3s ease;\n}\n.quick-note button[data-v-7869435a]:hover {\n    background-color: #0056b3;\n}\n\n/* Add Note Input */\n.add-note-input[data-v-7869435a] {\n    margin-top: 10px;\n    width: 100%;\n    padding: 8px;\n    border: 1px solid #ced4da;\n    border-radius: 5px;\n}\n.add-note-input[data-v-7869435a]:focus {\n    outline: none;\n    border-color: #007bff;\n}\n\n/* Add, Edit, Delete Buttons */\n.action-buttons button[data-v-7869435a] {\n    cursor: pointer;\n    background-color: #28a745;\n    color: #ffffff;\n    border: none;\n    padding: 8px 15px;\n    border-radius: 5px;\n    margin-right: 10px;\n    transition: background-color 0.3s ease;\n}\n.action-buttons button.edit[data-v-7869435a] {\n    background-color: #ffc107;\n}\n.action-buttons button.delete[data-v-7869435a] {\n    background-color: #dc3545;\n}\n.action-buttons button[data-v-7869435a]:hover {\n    background-color: #218838;\n}\n.add-note-input[data-v-7869435a] {\n    margin-top: 10px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
/* harmony import */ var _TaskTable_vue_vue_type_template_id_7869435a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskTable.vue?vue&type=template&id=7869435a&scoped=true& */ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&scoped=true&");
/* harmony import */ var _TaskTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskTable.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=script&lang=js&");
/* harmony import */ var _TaskTable_vue_vue_type_style_index_0_id_7869435a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css& */ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _TaskTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TaskTable_vue_vue_type_template_id_7869435a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TaskTable_vue_vue_type_template_id_7869435a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7869435a",
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

/***/ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_template_id_7869435a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_template_id_7869435a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_template_id_7869435a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskTable.vue?vue&type=template&id=7869435a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_style_index_0_id_7869435a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_style_index_0_id_7869435a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_style_index_0_id_7869435a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_style_index_0_id_7869435a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TaskTable_vue_vue_type_style_index_0_id_7869435a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=template&id=7869435a&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
                          "\n                                " +
                            _vm._s(item.name) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(item.responsible_user) +
                            "\n                            "
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
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-5 col" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("table", { staticClass: "table align-items-center table-flush" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.quickNotes, function(note, index) {
                return _c("tr", { key: index }, [
                  _c("td", { style: { color: _vm.getRandomColor() } }, [
                    _vm._v(_vm._s(note))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-warning",
                        on: {
                          click: function($event) {
                            return _vm.editNote(index)
                          }
                        }
                      },
                      [_vm._v("Edit")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-danger",
                        on: {
                          click: function($event) {
                            return _vm.deleteNote(index)
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newNote,
                  expression: "newNote"
                }
              ],
              staticClass: "form-control add-note-input",
              attrs: { rows: "2", placeholder: "Type your notes here..." },
              domProps: { value: _vm.newNote },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.newNote = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-sm btn-success",
              on: { click: _vm.addNote }
            },
            [_vm._v("Add Note")]
          )
        ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Quick Notes")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Note")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center", attrs: { scope: "col" } }, [
          _vm._v("Actions")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/TaskTable.vue?vue&type=style&index=0&id=7869435a&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8c286f08", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);