(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Chats_Chats_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_chat_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chat-scroll */ "./node_modules/vue-chat-scroll/dist/vue-chat-scroll.js");
/* harmony import */ var vue_chat_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_chat_scroll__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueChatScroll: vue_chat_scroll__WEBPACK_IMPORTED_MODULE_0__.VueChatScroll
  },
  data: function data() {
    return {
      messages: [{
        text: 'Xin chào!',
        sender: 'bot'
      }, {
        text: 'Chào bạn! Tôi là bot quản lý nhiệm vụ. Bạn cần giúp đỡ về điều gì?',
        sender: 'bot'
      }],
      newMessage: '',
      faqData: [{
        question: 'Làm cách nào để tạo một nhiệm vụ mới?',
        answer: 'Để tạo một nhiệm vụ mới, bạn có thể điều hướng đến trang Quản lý Nhiệm Vụ và nhấp vào nút "Thêm Nhiệm Vụ".'
      }, {
        question: 'Làm cách nào để thêm thành viên vào dự án?',
        answer: 'Để thêm thành viên vào dự án, bạn có thể vào trang Dự Án, chọn dự án cần thêm thành viên, và sau đó chọn "Quản lý Thành Viên".'
      }, {
        question: 'Làm cách nào để quản lý nhiệm vụ cá nhân?',
        answer: 'Để quản lý nhiệm vụ cá nhân, bạn có thể vào trang "Nhiệm Vụ Cá Nhân" và thực hiện các thao tác như thêm, sửa, xoá nhiệm vụ.'
      }, {
        question: 'Làm cách nào để tạo dự án nhóm?',
        answer: 'Để tạo dự án nhóm, bạn có thể vào trang "Dự Án Nhóm" và nhấp vào nút "Tạo Dự Án Nhóm" để bắt đầu.'
      }],
      topicQuestions: ['Làm cách nào để quản lý nhiệm vụ cá nhân?', 'Làm cách nào để tạo dự án nhóm?']
    };
  },
  methods: {
    selectTopicQuestion: function selectTopicQuestion(question) {
      this.newMessage = question;
      this.sendMessage(true); // Pass true to indicate it's a topic question
    },
    sendMessage: function sendMessage() {
      var isTopicQuestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var userMessage = {
        text: this.newMessage,
        sender: 'user'
      };
      this.messages.push(userMessage);
      this.newMessage = '';

      if (isTopicQuestion) {
        var answer = this.getAnswerFromFAQ(userMessage.text);
        this.sendBotMessage(answer);
      } else {
        var _answer = this.getBotAnswer(userMessage.text);

        this.sendBotMessage(_answer);
      }
    },
    getAnswerFromFAQ: function getAnswerFromFAQ(question) {
      var faqEntry = this.faqData.find(function (entry) {
        return entry.question === question;
      });
      return faqEntry ? faqEntry.answer : 'Xin lỗi, tôi không hiểu câu hỏi của bạn.';
    },
    getBotAnswer: function getBotAnswer(userMessage) {
      // Implement your logic to get a bot response based on user's message
      // Return the response string
      return 'Để quản lý nhiệm vụ cá nhân, bạn có thể vào trang "Task" o Sidebar và thực hiện các thao tác như thêm, sửa, xoá nhiệm vụ.';
    },
    sendBotMessage: function sendBotMessage(answer) {
      var _this = this;

      setTimeout(function () {
        _this.messages.push({
          text: answer,
          sender: 'bot'
        });
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Thêm các kiểu CSS cho trang chat của bạn */\n.chat-container[data-v-440c3728] {\n  height: 300px;\n  overflow-y: auto;\n}\n.message[data-v-440c3728] {\n  padding: 10px;\n  margin: 5px;\n  border-radius: 5px;\n}\n.user-message[data-v-440c3728] {\n  background-color: #3490dc;\n  color: #fff;\n}\n.bot-message[data-v-440c3728] {\n  background-color: #38c172;\n  color: #fff;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-chat-scroll/dist/vue-chat-scroll.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-chat-scroll/dist/vue-chat-scroll.js ***!
  \**************************************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /**
  * @name VueJS vChatScroll (vue-chat-scroll)
  * @description Monitors an element and scrolls to the bottom if a new child is added
  * @author Theodore Messinezis <theo@theomessin.com>
  * @file v-chat-scroll  directive definition
  */
  var scrollToBottom = function scrollToBottom(el, smooth) {
    if (typeof el.scroll === "function") {
      el.scroll({
        top: el.scrollHeight,
        behavior: smooth ? 'smooth' : 'instant'
      });
    } else {
      el.scrollTop = el.scrollHeight;
    }
  };

  var vChatScroll = {
    bind: function bind(el, binding) {
      var scrolled = false;
      el.addEventListener('scroll', function (e) {
        scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;

        if (scrolled && el.scrollTop === 0) {
          el.dispatchEvent(new Event("v-chat-scroll-top-reached"));
        }
      });
      new MutationObserver(function (e) {
        var config = binding.value || {};
        if (config.enabled === false) return;
        var pause = config.always === false && scrolled;
        var addedNodes = e[e.length - 1].addedNodes.length;
        var removedNodes = e[e.length - 1].removedNodes.length;

        if (config.scrollonremoved) {
          if (pause || addedNodes != 1 && removedNodes != 1) return;
        } else {
          if (pause || addedNodes != 1) return;
        }

        var smooth = config.smooth;
        var loadingRemoved = !addedNodes && removedNodes === 1;

        if (loadingRemoved && config.scrollonremoved && 'smoothonremoved' in config) {
          smooth = config.smoothonremoved;
        }

        scrollToBottom(el, smooth);
      }).observe(el, {
        childList: true,
        subtree: true
      });
    },
    inserted: function inserted(el, binding) {
      var config = binding.value || {};
      scrollToBottom(el, config.notSmoothOnInit ? false : config.smooth);
    }
  };

  /**
  * @name VueJS vChatScroll (vue-chat-scroll)
  * @description Monitors an element and scrolls to the bottom if a new child is added
  * @author Theodore Messinezis <theo@theomessin.com>
  * @file vue-chat-scroll plugin definition
  */
  var VueChatScroll = {
    install: function install(Vue, options) {
      Vue.directive('chat-scroll', vChatScroll);
    }
  };

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueChatScroll);
  }

  return VueChatScroll;

})));


/***/ }),

/***/ "./resources/js/components/Chats/Chats.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Chats/Chats.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Chats_vue_vue_type_template_id_440c3728_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chats.vue?vue&type=template&id=440c3728&scoped=true& */ "./resources/js/components/Chats/Chats.vue?vue&type=template&id=440c3728&scoped=true&");
/* harmony import */ var _Chats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chats.vue?vue&type=script&lang=js& */ "./resources/js/components/Chats/Chats.vue?vue&type=script&lang=js&");
/* harmony import */ var _Chats_vue_vue_type_style_index_0_id_440c3728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css& */ "./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Chats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Chats_vue_vue_type_template_id_440c3728_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Chats_vue_vue_type_template_id_440c3728_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "440c3728",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Chats/Chats.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Chats/Chats.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Chats/Chats.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chats.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Chats/Chats.vue?vue&type=template&id=440c3728&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Chats/Chats.vue?vue&type=template&id=440c3728&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_template_id_440c3728_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_template_id_440c3728_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_template_id_440c3728_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chats.vue?vue&type=template&id=440c3728&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=template&id=440c3728&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_440c3728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader/index.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_440c3728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_440c3728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_440c3728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chats_vue_vue_type_style_index_0_id_440c3728_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=template&id=440c3728&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=template&id=440c3728&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container-fluid mt--6" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c(
                  "vue-chat-scroll",
                  { staticClass: "chat-container" },
                  _vm._l(_vm.messages, function(message, index) {
                    return _c(
                      "div",
                      {
                        key: index,
                        staticClass: "message",
                        class: {
                          "user-message": message.sender === "user",
                          "bot-message": message.sender === "bot"
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(message.text) +
                            "\n              "
                        )
                      ]
                    )
                  }),
                  0
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-footer" }, [
              _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newMessage,
                      expression: "newMessage"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", placeholder: "Nhập tin nhắn..." },
                  domProps: { value: _vm.newMessage },
                  on: {
                    keyup: function($event) {
                      if (
                        !$event.type.indexOf("key") &&
                        _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                      ) {
                        return null
                      }
                      return _vm.sendMessage($event)
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.newMessage = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      on: { click: _vm.sendMessage }
                    },
                    [_vm._v("Gửi")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "topic-questions" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "ul",
                  _vm._l(_vm.topicQuestions, function(question, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        on: {
                          click: function($event) {
                            return _vm.selectTopicQuestion(question)
                          }
                        }
                      },
                      [_vm._v(_vm._s(question))]
                    )
                  }),
                  0
                )
              ])
            ])
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
    return _c("div", { staticClass: "header bg-primary pb-6" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "header-body" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Chat")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("strong", [_vm._v("Câu hỏi thường gặp:")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Chats/Chats.vue?vue&type=style&index=0&id=440c3728&scoped=true&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4c915771", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);