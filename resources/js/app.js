
require('./bootstrap');
window.Vue = require('vue').default;


import App from './App.vue';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import axios from 'axios';
import { routes } from './routes';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import Helpers from "./components/Hepler/Helper";
Vue.mixin(Helpers)

//new 23/11/2023
var AddToCalendar = require('vue-add-to-calendar');
Vue.use(AddToCalendar);

Vue.use(Vuesax);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Vue Dashboard';
    next();
});

const app = new Vue({
    el: '#app',
    Vuesax,
    router: router,
    render: h => h(App),
});
