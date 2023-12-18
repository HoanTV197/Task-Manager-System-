(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Calendar_Calendar_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Calendar/Calendar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Calendar/Calendar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      event: {
        name: '',
        description: '',
        start: '',
        end: ''
      },
      authorized: false,
      items: undefined
    };
  },
  created: function created() {
    this.api = gapi;
    this.handleClientLoad();
  },
  methods: {
    submitForm: function submitForm() {
      if (this.authorized) {
        this.insertEvent();
      } else {
        console.error('User not authorized.');
      }
    },
    handleClientLoad: function handleClientLoad() {
      var vm = this;
      vm.api.load('client:auth2', this.initClient);
    },
    initClient: function initClient() {
      var vm = this;
      vm.api.client.init({
        apiKey: 'AIzaSyBFv_84lUMIP_GigK_zTUPIZWfiXHcQSIE',
        clientId: '267175014777-nbl6mq4d5ua4ho9aqvgapfvnf9933bhp.apps.googleusercontent.com',
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        scope: 'https://www.googleapis.com/auth/calendar.events'
      }).then(function (_) {
        vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
      });
    },
    handleAuthClick: function handleAuthClick(event) {
      var _this = this;

      Promise.resolve(this.api.auth2.getAuthInstance().signIn()).then(function (_) {
        _this.authorized = true;
      });
    },
    handleSignOutClick: function handleSignOutClick(event) {
      var _this2 = this;

      Promise.resolve(this.api.auth2.getAuthInstance().signOut()).then(function (_) {
        _this2.authorized = false;
      });
    },
    insertEvent: function insertEvent() {
      var vm = this;
      vm.api.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': {
          'summary': vm.event.name,
          'description': vm.event.description,
          'start': {
            'dateTime': new Date(vm.event.start).toISOString(),
            'timeZone': 'Asia/Ho_Chi_Minh' // Thay Asia/Ho_Chi_Minh bằng múi giờ của bạn

          },
          'end': {
            'dateTime': new Date(vm.event.end).toISOString(),
            'timeZone': 'Asia/Ho_Chi_Minh'
          }
        }
      }).then(function (response) {
        console.log('Event created: ', response.result); // Reset form or perform any other actions
      })["catch"](function (error) {
        console.error('Error creating event: ', error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Calendar/Calendar.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Calendar/Calendar.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calendar_vue_vue_type_template_id_03bd8e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calendar.vue?vue&type=template&id=03bd8e98& */ "./resources/js/components/Calendar/Calendar.vue?vue&type=template&id=03bd8e98&");
/* harmony import */ var _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calendar.vue?vue&type=script&lang=js& */ "./resources/js/components/Calendar/Calendar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Calendar_vue_vue_type_template_id_03bd8e98___WEBPACK_IMPORTED_MODULE_0__.render,
  _Calendar_vue_vue_type_template_id_03bd8e98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Calendar/Calendar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Calendar/Calendar.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Calendar/Calendar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Calendar/Calendar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Calendar/Calendar.vue?vue&type=template&id=03bd8e98&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Calendar/Calendar.vue?vue&type=template&id=03bd8e98& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_03bd8e98___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_03bd8e98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_template_id_03bd8e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Calendar.vue?vue&type=template&id=03bd8e98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Calendar/Calendar.vue?vue&type=template&id=03bd8e98&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Calendar/Calendar.vue?vue&type=template&id=03bd8e98&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Calendar/Calendar.vue?vue&type=template&id=03bd8e98& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "app" } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submitForm($event)
          }
        }
      },
      [
        _c("label", [
          _vm._v("\n      Tên sự kiện:\n      "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.event.name,
                expression: "event.name"
              }
            ],
            attrs: { type: "text", required: "" },
            domProps: { value: _vm.event.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.event, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("label", [
          _vm._v("\n      Mô tả sự kiện:\n      "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.event.description,
                expression: "event.description"
              }
            ],
            attrs: { required: "" },
            domProps: { value: _vm.event.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.event, "description", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("label", [
          _vm._v("\n      Thời gian bắt đầu sự kiện:\n      "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.event.start,
                expression: "event.start"
              }
            ],
            attrs: { type: "datetime-local", required: "" },
            domProps: { value: _vm.event.start },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.event, "start", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("label", [
          _vm._v("\n      Thời gian kết thúc sự kiện:\n      "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.event.end,
                expression: "event.end"
              }
            ],
            attrs: { type: "datetime-local", required: "" },
            domProps: { value: _vm.event.end },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.event, "end", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("button", { attrs: { type: "submit" } }, [_vm._v("Tạo sự kiện")])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);