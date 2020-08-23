import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "popper.js";
import jQuery from 'jquery';

window.$ = window.jQuery = jQuery;

import "bootstrap";
import "./assets/app.scss";


Vue.component('navbar',require('./components/navbar.vue').default);
Vue.component('Hero',require('./components/Hero.vue').default);
//Vue.component('body',require('./section/body.vue').default);
Vue.component('Products',require('./section/Products.vue').default);

Vue.component('Footer',require('./components/Footer.vue').default);
Vue.component('subscribe',require('./section/subscribe.vue').default);
Vue.component('slide',require('./section/slide.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
