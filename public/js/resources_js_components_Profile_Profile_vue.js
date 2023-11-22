(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Profile_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileView */ "./resources/js/components/Profile/ProfileView.vue");
/* harmony import */ var _ProfileUpdate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileUpdate */ "./resources/js/components/Profile/ProfileUpdate.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Profile",
  components: {
    ProfileUpdate: _ProfileUpdate__WEBPACK_IMPORTED_MODULE_1__.default,
    ProfileView: _ProfileView__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileUpdate.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileUpdate.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProfileUpdate",
  data: function data() {
    return {
      profile: {
        name: null,
        first_name: null,
        last_name: null,
        about_me: null,
        email: null,
        phone_number: null,
        headline: null,
        address: null,
        city: null,
        country: null,
        postal_code: null
      },
      profile_baseURL: 'assets/img/profile/'
    };
  },
  methods: {
    getProfile: function getProfile() {
      var _this = this;

      var Loading = this.block("myProfileLoading");
      this.axios.get("/api/v1/profile").then(function (response) {
        var data = response.data.data;
        _this.profile.name = data.name;
        _this.profile.first_name = data.first_name;
        _this.profile.last_name = data.last_name;
        _this.profile.about_me = data.about_me;
        _this.profile.email = data.email;
        _this.profile.phone_number = data.phone_number;
        _this.profile.headline = data.headline;
        _this.profile.address = data.address;
        _this.profile.city = data.city;
        _this.profile.postal_code = data.postal_code;
        _this.profile.country = data.country;
        _this.profile.profile_pic = data.profile_pic;
        Loading.close();
      })["catch"](function (error) {
        console.log(error.response.data);
        Loading.close();
      });
    },
    updateProfile: function updateProfile() {
      var _this2 = this;

      var Loading = this.block("myProfileLoading");
      this.axios.put('/api/v1/update/profile', this.profile).then(function (response) {
        if (response.data.status === true) {
          _this2.successNotification(response.data.message);

          Loading.close();

          _this2.$root.$refs.ProfileView.getProfile();
        } else {
          Loading.close();
        }
      })["catch"](function (error) {
        Loading.close();

        _this2.errorNotification(error.response.data.message);
      });
    }
  },
  mounted: function mounted() {
    this.getProfile();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileView.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProfileView",
  data: function data() {
    return {
      profile: {
        first_name: null,
        last_name: null,
        about_me: null,
        email: null,
        phone_number: null,
        headline: null,
        address: null,
        city: null,
        country: null,
        postal_code: null,
        profile_pic: null
      },
      profilePic: {
        image: null
      },
      profile_baseURL: 'assets/img/profile/'
    };
  },
  methods: {
    getProfile: function getProfile() {
      var _this = this;

      var Loading = this.block("profileLoading");
      this.axios.get("/api/v1/profile").then(function (response) {
        var data = response.data.data;
        _this.profile.first_name = data.first_name ? data.first_name : '------';
        _this.profile.last_name = data.last_name ? data.last_name : '------';
        _this.profile.about_me = data.about_me ? data.about_me : '--------------------------------------------------------------------------------';
        _this.profile.email = data.email ? data.email : '------';
        _this.profile.phone_number = data.phone_number ? data.phone_number : '-------------';
        _this.profile.headline = data.headline ? data.headline : '------';
        _this.profile.address = data.address ? data.address : '------';
        _this.profile.city = data.city ? data.city : '------';
        _this.profile.postal_code = data.postal_code ? data.postal_code : '------';
        _this.profile.country = data.country ? data.country : '------';
        _this.profile.profile_pic = data.profile_pic ? _this.profile_baseURL + data.profile_pic : _this.profile_baseURL + "default.jpg";
        Loading.close();
      })["catch"](function (error) {
        console.log(error.response.data);
        Loading.close();
      });
    },
    onChange: function onChange(e) {
      var _this2 = this;

      var Loading = this.block("profileLoading");
      this.profilePic.image = e.target.files[0];
      var config = {
        headers: {
          "Content-type": "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
        }
      };
      var data = new FormData();
      data.append('image', this.profilePic.image);
      console.log(data);
      this.axios.post('/api/v1/update/profile/pic', data, config).then(function (response) {
        if (response.data.status === true) {
          _this2.successNotification(response.data.message);

          _this2.getProfile();

          Loading.close();
        } else {
          _this2.errorNotification(response.data.message);

          Loading.close();
        }
      })["catch"](function (error) {
        _this2.errorNotification(error.response.data.message);

        console.log(error.response.data);
        Loading.close();
      });
    }
  },
  mounted: function mounted() {
    this.getProfile();
  },
  created: function created() {
    this.$root.$refs.ProfileView = this;
  }
});

/***/ }),

/***/ "./resources/js/components/Profile/Profile.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Profile/Profile.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=229af208& */ "./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/ProfileUpdate.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Profile/ProfileUpdate.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileUpdate_vue_vue_type_template_id_61f02671_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileUpdate.vue?vue&type=template&id=61f02671&scoped=true& */ "./resources/js/components/Profile/ProfileUpdate.vue?vue&type=template&id=61f02671&scoped=true&");
/* harmony import */ var _ProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileUpdate.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/ProfileUpdate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProfileUpdate_vue_vue_type_template_id_61f02671_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileUpdate_vue_vue_type_template_id_61f02671_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "61f02671",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/ProfileUpdate.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/ProfileView.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Profile/ProfileView.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProfileView_vue_vue_type_template_id_09877e4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileView.vue?vue&type=template&id=09877e4d& */ "./resources/js/components/Profile/ProfileView.vue?vue&type=template&id=09877e4d&");
/* harmony import */ var _ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileView.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/ProfileView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProfileView_vue_vue_type_template_id_09877e4d___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProfileView_vue_vue_type_template_id_09877e4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/ProfileView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Profile/ProfileUpdate.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Profile/ProfileUpdate.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileUpdate.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Profile/ProfileView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Profile/ProfileView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=229af208& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208&");


/***/ }),

/***/ "./resources/js/components/Profile/ProfileUpdate.vue?vue&type=template&id=61f02671&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Profile/ProfileUpdate.vue?vue&type=template&id=61f02671&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUpdate_vue_vue_type_template_id_61f02671_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUpdate_vue_vue_type_template_id_61f02671_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileUpdate_vue_vue_type_template_id_61f02671_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileUpdate.vue?vue&type=template&id=61f02671&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileUpdate.vue?vue&type=template&id=61f02671&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Profile/ProfileView.vue?vue&type=template&id=09877e4d&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Profile/ProfileView.vue?vue&type=template&id=09877e4d& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_09877e4d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_09877e4d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileView_vue_vue_type_template_id_09877e4d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProfileView.vue?vue&type=template&id=09877e4d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileView.vue?vue&type=template&id=09877e4d&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "row" },
        [_c("ProfileView"), _vm._v(" "), _c("ProfileUpdate")],
        1
      )
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
        _c("div", { staticClass: "header-body" }, [
          _c("div", { staticClass: "row align-items-center py-4" }, [
            _c("div", { staticClass: "col-lg-6 col-7" }, [
              _c("h6", { staticClass: "h2 text-white d-inline-block mb-0" }, [
                _vm._v("My Profile")
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileUpdate.vue?vue&type=template&id=61f02671&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileUpdate.vue?vue&type=template&id=61f02671&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-xl-8 order-xl-1" }, [
    _c("div", { staticClass: "card" }, [
      _c("div", { staticClass: "card-header" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-4 text-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-primary",
                on: {
                  click: function($event) {
                    return _vm.updateProfile()
                  }
                }
              },
              [_vm._v("Update Profile")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body", attrs: { id: "myProfileLoading" } },
        [
          _c("form", [
            _c("h6", { staticClass: "heading-small text-muted mb-4" }, [
              _vm._v("User information")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pl-lg-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-email" }
                      },
                      [_vm._v("Email Id")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.email,
                          expression: "profile.email"
                        }
                      ],
                      staticClass: " form-control-plaintext",
                      attrs: { type: "text", id: "input-email", readonly: "" },
                      domProps: { value: _vm.profile.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.profile, "email", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-username" }
                      },
                      [_vm._v("Username")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.name,
                          expression: "profile.name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "input-username",
                        placeholder: "Username"
                      },
                      domProps: { value: _vm.profile.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.profile, "name", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-first-name" }
                      },
                      [_vm._v("First name")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.first_name,
                          expression: "profile.first_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "input-first-name",
                        placeholder: "First name"
                      },
                      domProps: { value: _vm.profile.first_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.profile,
                            "first_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-last-name" }
                      },
                      [_vm._v("Last name")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.last_name,
                          expression: "profile.last_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "input-last-name",
                        placeholder: "Last name"
                      },
                      domProps: { value: _vm.profile.last_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.profile,
                            "last_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("h6", { staticClass: "heading-small text-muted mb-4" }, [
              _vm._v("About me")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pl-lg-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("Headline")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.profile.headline,
                      expression: "profile.headline"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { placeholder: "A few words about you ..." },
                  domProps: { value: _vm.profile.headline },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.profile, "headline", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pl-lg-4" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { staticClass: "form-control-label" }, [
                  _vm._v("About Me")
                ]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.profile.about_me,
                      expression: "profile.about_me"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    rows: "4",
                    placeholder: "A few words about you ..."
                  },
                  domProps: { value: _vm.profile.about_me },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.profile, "about_me", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("hr", { staticClass: "my-4" }),
            _vm._v(" "),
            _c("h6", { staticClass: "heading-small text-muted mb-4" }, [
              _vm._v("Contact information")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "pl-lg-4" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-address" }
                      },
                      [_vm._v("Address")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.address,
                          expression: "profile.address"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "input-address",
                        name: "address",
                        placeholder: "Home Address",
                        type: "text"
                      },
                      domProps: { value: _vm.profile.address },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.profile, "address", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-city" }
                      },
                      [_vm._v("City")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.city,
                          expression: "profile.city"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "input-city",
                        placeholder: "City"
                      },
                      domProps: { value: _vm.profile.city },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.profile, "city", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-country" }
                      },
                      [_vm._v("Country")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.country,
                          expression: "profile.country"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "input-country",
                        placeholder: "Country"
                      },
                      domProps: { value: _vm.profile.country },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.profile, "country", $event.target.value)
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-country" }
                      },
                      [_vm._v("Postal code")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.postal_code,
                          expression: "profile.postal_code"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "number",
                        id: "input-postal-code",
                        placeholder: "Postal code"
                      },
                      domProps: { value: _vm.profile.postal_code },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.profile,
                            "postal_code",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-control-label",
                        attrs: { for: "input-address" }
                      },
                      [_vm._v("Phone Number")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.profile.phone_number,
                          expression: "profile.phone_number"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        id: "input-addressw",
                        placeholder: "9898989898",
                        type: "number"
                      },
                      domProps: { value: _vm.profile.phone_number },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.profile,
                            "phone_number",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ])
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-8" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Edit profile ")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileView.vue?vue&type=template&id=09877e4d&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Profile/ProfileView.vue?vue&type=template&id=09877e4d& ***!
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
  return _c("div", { staticClass: "col-xl-4 order-xl-2" }, [
    _c(
      "div",
      { staticClass: "card card-profile", attrs: { id: "profileLoading" } },
      [
        _c("img", {
          staticClass: "card-img-top",
          attrs: {
            src: "assets/img/theme/img-1-1000x600.jpg",
            alt: "Image placeholder"
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row justify-content-center" }, [
          _c(
            "div",
            { staticClass: "col-lg-3 order-lg-2" },
            [
              _c(
                "vs-avatar",
                {
                  staticClass: "mt--5",
                  attrs: {
                    circle: "",
                    size: "100",
                    badge: "",
                    "badge-color": "danger"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "badge",
                      fn: function() {
                        return [
                          _c(
                            "div",
                            {
                              staticStyle: {
                                position: "relative",
                                overflow: "hidden",
                                display: "inline-block"
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "far fa-edit",
                                staticStyle: { "font-size": "20px" }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                staticStyle: {
                                  "font-size": "100px",
                                  position: "absolute",
                                  left: "0",
                                  top: "0",
                                  opacity: "0"
                                },
                                attrs: { type: "file" },
                                on: { change: _vm.onChange }
                              })
                            ]
                          )
                        ]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _c("img", {
                    staticClass: "rounded-circle",
                    attrs: { src: _vm.profile.profile_pic }
                  })
                ]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body pt-0 mt-2" }, [
          _c("div", { staticClass: "text-center" }, [
            _c("h5", { staticClass: "h3" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.profile.first_name) +
                  " " +
                  _vm._s(_vm.profile.last_name) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "h5 font-weight-300" }, [
              _c("i", { staticClass: "ni location_pin mr-2" }),
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.profile.headline) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mt-2" }, [
            _vm._v(
              "\n                " +
                _vm._s(_vm.profile.about_me) +
                "\n            "
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _vm._m(0),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "font-weight-300 " }, [
                _vm._v("Email Id: "),
                _c("span", [_vm._v(_vm._s(_vm.profile.email))])
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("div", { staticClass: "font-weight-300" }, [
                _vm._v("phone number: "),
                _c("span", [_vm._v(_vm._s(_vm.profile.phone_number))])
              ])
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.profile.address) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.profile.city) +
                  ", " +
                  _vm._s(_vm.profile.country) +
                  " - " +
                  _vm._s(_vm.profile.postal_code) +
                  "\n                "
              )
            ])
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "h5 mt-4" }, [
      _c("i", { staticClass: "ni business_briefcase-24 mr-2" }),
      _vm._v("Contact Me\n                ")
    ])
  }
]
render._withStripped = true



/***/ })

}]);