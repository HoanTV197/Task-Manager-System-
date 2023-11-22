(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Register",
  data: function data() {
    return {
      registerData: {
        name: '',
        email: '',
        password: ''
      },
      loginData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      var loading = this.block('registerLoader');
      this.axios.post("api/v1/register", this.registerData).then(function (response) {
        if (response.data.status === true) {
          _this.login(_this.registerData.email, _this.registerData.password);
        } else {
          _this.errorNotification(response.data.message);

          loading.close();
        }
      })["catch"](function (error) {
        _this.errorNotification(error.response.data.message);

        loading.close();
      });
    },
    login: function login(email, password) {
      var _this2 = this;

      this.loginData.email = email;
      this.loginData.password = password;
      var loading = this.block('registerLoader');
      this.axios.post("api/v1/login", this.loginData).then(function (response) {
        if (response.data.status === true) {
          var _loading = _this2.block('registerLoader');

          window.location.href = '/dashboard';
        } else {
          _this2.errorNotification(response.data.message);

          var _loading2 = _this2.block('registerLoader');
        }
      })["catch"](function (error) {
        _this2.errorNotification(error.response.data.message);

        var loading = _this2.block('registerLoader');
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=ff714c22&scoped=true& */ "./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "ff714c22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ff714c22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=ff714c22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/Register.vue?vue&type=template&id=ff714c22&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "header bg-gradient-primary py-3 py-lg-8 pt-lg-9" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "separator separator-bottom separator-skew zindex-100"
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  x: "0",
                  y: "0",
                  viewBox: "0 0 2560 100",
                  preserveAspectRatio: "none",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("polygon", {
                  staticClass: "fill-default",
                  attrs: { points: "2560 0 2560 100 0 100" }
                })
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container mt--8 pb-5" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-lg-5 col-md-7" }, [
          _c(
            "div",
            {
              staticClass: "card bg-secondary border-0 mb-0",
              attrs: { id: "registerLoader" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "card-body px-lg-5 py-lg-5" }, [
                _c(
                  "form",
                  {
                    attrs: { role: "form" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.register()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group mb-3" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "input-group input-group-merge input-group-alternative"
                        },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.registerData.name,
                                expression: "registerData.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { placeholder: "Name", type: "text" },
                            domProps: { value: _vm.registerData.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.registerData,
                                  "name",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-3" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "input-group input-group-merge input-group-alternative"
                        },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.registerData.email,
                                expression: "registerData.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { placeholder: "Email", type: "email" },
                            domProps: { value: _vm.registerData.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.registerData,
                                  "email",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "input-group input-group-merge input-group-alternative"
                        },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.registerData.password,
                                expression: "registerData.password"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              placeholder: "Password",
                              type: "password"
                            },
                            domProps: { value: _vm.registerData.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.registerData,
                                  "password",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._m(5)
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c(
              "div",
              { staticClass: "col text-center" },
              [
                _c(
                  "router-link",
                  { staticClass: "text-light", attrs: { to: "/login" } },
                  [_c("small", [_vm._v("Already have Account")])]
                ),
                _vm._v(" "),
                _c("a", { attrs: { href: "#" } })
              ],
              1
            )
          ])
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
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "header-body text-center mb-7" }, [
        _c("div", { staticClass: "row justify-content-center" }, [
          _c("div", { staticClass: "col-xl-5 col-lg-6 col-md-8 px-5" }, [
            _c("h1", { staticClass: "text-white" }, [
              _vm._v("Create an account")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-lead text-white" }, [
              _vm._v("create new account in your project for free.")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-transparent" }, [
      _c("div", { staticClass: "text-muted text-center mt-2 h1" }, [
        _vm._v(
          "\n                                Register\n                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "ni ni-email-83" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "ni ni-email-83" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [
        _c("i", { staticClass: "ni ni-lock-circle-open" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary my-4", attrs: { type: "submit" } },
        [_vm._v("Register")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);