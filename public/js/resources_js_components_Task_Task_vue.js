(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Task_Task_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      addPostData: {
        name: null,
        status: null,
        responsible_user: null,
        due_date: null
      },
      editPostData: {
        id: null,
        name: null,
        status: null,
        responsible_user: null,
        due_date: null
      },
      deletePostData: {
        id: null
      },
      items: {},
      status: {
        pending: "PENDING",
        completed: "COMPLETED"
      },
      addTaskModel: false,
      editTaskModel: false,
      activeTooltip1: false,
      deleteDialog: false,
      dataNotFound: false
    };
  },
  methods: {
    getTask: function getTask() {
      var _this = this;

      var loading = this.block("taskLoading");
      this.axios.get("/api/v1/tasks").then(function (response) {
        _this.items = response.data.data;
        loading.close();
        _this.dataNotFound = false;
      })["catch"](function (error) {
        _this.items = null;
        console.log(error.response.data);
        _this.dataNotFound = true;
        loading.close();
      });
    },
    addTask: function addTask() {
      var _this2 = this;

      var Loading = this.block("addTaskForm");
      this.axios.post('api/v1/add/task', this.addPostData).then(function (response) {
        if (response.data.status === true) {
          document.getElementById("addTaskForm").reset();
          Loading.close();
          _this2.addTaskModel = false;

          _this2.getTask();
        } else {
          _this2.errorNotification(response.data.message);

          Loading.close();
        }
      })["catch"](function (error) {
        _this2.errorNotification(error.response.data.message);

        Loading.close();
      });
    },
    updateTask: function updateTask() {
      var _this3 = this;

      var Loading = this.block("editTaskForm");
      this.axios.put("/api/v1/update/task", this.editPostData).then(function (response) {
        _this3.editTaskModel = false;

        _this3.successNotification(response.data.message);

        Loading.close();

        _this3.getTask();
      })["catch"](function (error) {
        _this3.editTaskModel = false;

        _this3.errorNotification(error.response.data.message);

        Loading.close();
      });
    },
    onChangeStatus: function onChangeStatus(event) {
      this.addPostData.status = event.target.value;
    },
    onEditChangeStatus: function onEditChangeStatus(event) {
      this.editPostData.status = event.target.value;
    },
    deleteBtn: function deleteBtn(id) {
      if (id == '') {
        this.errorNotification("Something we Wrong..");
      }

      this.deleteDialog = true;
      this.deletePostData.id = id;
    },
    deleteTask: function deleteTask() {
      var _this4 = this;

      var Loading = this.block("deleteLoading");
      this.axios["delete"]("/api/v1/delete/task/" + this.deletePostData.id).then(function (response) {
        if (response.data.status === true) {
          _this4.deleteDialog = false;

          _this4.successNotification(response.data.message);

          _this4.getTask();

          Loading.close();
        } else {
          _this4.deleteDialog = false;

          _this4.errorNotification(response.data.message);

          Loading.close();
        }
      })["catch"](function (error) {
        _this4.deleteDialog = false;
        Loading.close();

        _this4.errorNotification(error.response.data.message);
      });
    },
    editBtn: function editBtn(id) {
      var _this5 = this;

      this.editPostData.id = id;
      this.editTaskModel = true;
      this.axios.get("/api/v1/get/task/" + id).then(function (response) {
        var item = response.data.data;
        _this5.editPostData.name = item.name;
        _this5.editPostData.due_date = item.due_date;
        _this5.editPostData.responsible_user = item.responsible_user;
        _this5.editPostData.status = item.status;
        _this5.$refs.getStatus.value = item.status;
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    }
  },
  mounted: function mounted() {
    this.getTask();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.btn i:not(:last-child), .btn svg:not(:last-child) {\n    margin-right: unset;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/components/Task/Task.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Task/Task.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task_vue_vue_type_template_id_4cd08a94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=4cd08a94& */ "./resources/js/components/Task/Task.vue?vue&type=template&id=4cd08a94&");
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./resources/js/components/Task/Task.vue?vue&type=script&lang=js&");
/* harmony import */ var _Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Task_vue_vue_type_template_id_4cd08a94___WEBPACK_IMPORTED_MODULE_0__.render,
  _Task_vue_vue_type_template_id_4cd08a94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Task/Task.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=template&id=4cd08a94&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=template&id=4cd08a94& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_4cd08a94___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_4cd08a94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_4cd08a94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=template&id=4cd08a94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=template&id=4cd08a94&");


/***/ }),

/***/ "./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=template&id=4cd08a94&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=template&id=4cd08a94& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    [
      _c("div", { staticClass: "header bg-primary pb-6" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "header-body" }, [
            _c("div", { staticClass: "row align-items-center py-4" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6 col-5 text-right" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-sm btn-neutral",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        _vm.addTaskModel = !_vm.addTaskModel
                      }
                    }
                  },
                  [_vm._v("New")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--6" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card", attrs: { id: "deleteLoading" } }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "table-responsive",
                  attrs: { id: "taskLoading" }
                },
                [
                  _c(
                    "table",
                    { staticClass: "table align-items-center table-flush" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._l(_vm.items, function(item) {
                        return _c(
                          "tbody",
                          { key: item.id, staticClass: "list" },
                          [
                            _c("tr", [
                              _c("th", { attrs: { scope: "row" } }, [
                                _c(
                                  "div",
                                  { staticClass: "media align-items-center" },
                                  [
                                    _c("div", { staticClass: "media-body" }, [
                                      _c(
                                        "span",
                                        { staticClass: "name mb-0 text-sm" },
                                        [_vm._v(_vm._s(item.name))]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(item.responsible_user) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
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
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "completion mr-2" },
                                      [_vm._v(_vm._s(item.due_date))]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  { staticStyle: { display: "inline-flex" } },
                                  [
                                    _c("div", [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary btn-sm",
                                          on: {
                                            click: function($event) {
                                              return _vm.editBtn(item.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "far fa-edit"
                                          }),
                                          _vm._v(" "),
                                          _vm._m(3, true)
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-danger btn-sm",
                                          attrs: { href: "#" },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteBtn(item.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash-alt"
                                          }),
                                          _vm._v(" "),
                                          _vm._m(4, true)
                                        ]
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ])
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm.dataNotFound ? _c("tbody", [_vm._m(5)]) : _vm._e()
                    ],
                    2
                  )
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          attrs: { "prevent-close": "", blur: "" },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("h4", { staticClass: "not-margin" }, [
                    _vm._v("\n                Add New "),
                    _c("b", [_vm._v("Task")])
                  ])
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.addTaskModel,
            callback: function($$v) {
              _vm.addTaskModel = $$v
            },
            expression: "addTaskModel"
          }
        },
        [
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { id: "addTaskForm" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addTask()
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Name Of Task")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addPostData.name,
                      expression: "addPostData.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Name" },
                  domProps: { value: _vm.addPostData.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.addPostData, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mt--3" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Responsible User")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addPostData.responsible_user,
                      expression: "addPostData.responsible_user"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Responsible User" },
                  domProps: { value: _vm.addPostData.responsible_user },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.addPostData,
                        "responsible_user",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mt--3" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Status")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        return _vm.onChangeStatus($event)
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [
                      _vm._v("Select Status")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "PENDING" } }, [
                      _vm._v("Pending")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "COMPLETED" } }, [
                      _vm._v("Completed")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mt--3" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Due Date")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.addPostData.due_date,
                      expression: "addPostData.due_date"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "due date", type: "date" },
                  domProps: { value: _vm.addPostData.due_date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.addPostData, "due_date", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "footer-dialog text-center" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("Add New Task")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          attrs: { "prevent-close": "", blur: "" },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("h4", { staticClass: "not-margin" }, [
                    _vm._v("\n                Add New "),
                    _c("b", [_vm._v("Task")])
                  ])
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.editTaskModel,
            callback: function($$v) {
              _vm.editTaskModel = $$v
            },
            expression: "editTaskModel"
          }
        },
        [
          _vm._v(" "),
          _c(
            "form",
            {
              attrs: { id: "editTaskForm" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.updateTask()
                }
              }
            },
            [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Name Of Task")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editPostData.name,
                      expression: "editPostData.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Name" },
                  domProps: { value: _vm.editPostData.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.editPostData, "name", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mt--3" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Responsible User")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editPostData.responsible_user,
                      expression: "editPostData.responsible_user"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "Responsible User" },
                  domProps: { value: _vm.editPostData.responsible_user },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.editPostData,
                        "responsible_user",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mt--3" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Status")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    ref: "getStatus",
                    staticClass: "form-control",
                    on: {
                      change: function($event) {
                        return _vm.onEditChangeStatus($event)
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "0" } }, [
                      _vm._v("Select Status")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "PENDING" } }, [
                      _vm._v("Pending")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "COMPLETED" } }, [
                      _vm._v("Completed")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group mt--3" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Due Date")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.editPostData.due_date,
                      expression: "editPostData.due_date"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "due date", type: "date" },
                  domProps: { value: _vm.editPostData.due_date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.editPostData,
                        "due_date",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "footer-dialog text-center" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "submit" } },
                  [_vm._v("Update Task")]
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-dialog",
        {
          attrs: { width: "550px", "not-center": "" },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("h4", { staticClass: "not-margin" }, [
                    _c("b", [_vm._v("Are you sure?")])
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c("div", { staticClass: "con-footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: {
                          click: function($event) {
                            return _vm.deleteTask()
                          }
                        }
                      },
                      [_vm._v("\n                    Ok\n                ")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-light",
                        on: {
                          click: function($event) {
                            _vm.deleteDialog = false
                          }
                        }
                      },
                      [_vm._v("\n                    Cancel\n                ")]
                    )
                  ])
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.deleteDialog,
            callback: function($$v) {
              _vm.deleteDialog = $$v
            },
            expression: "deleteDialog"
          }
        },
        [
          _vm._v(" "),
          _c("div", { staticClass: "con-content" }, [
            _c("p", [_vm._v("Are you sure you want to Delete?")])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-6 col-7" }, [
      _c("h6", { staticClass: "h2 text-white d-inline-block mb-0" }, [
        _vm._v("Task")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _c("div", { staticClass: "col" }, [
          _c("h3", { staticClass: "mb-0" }, [_vm._v("Task")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Task")
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
          _vm._v("Due Date")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "sort", attrs: { scope: "col" } }, [
          _vm._v("Action")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("strong", [_vm._v("Edit")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [_c("strong", [_vm._v("Delete")])])
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

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Task/Task.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("189753b6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);