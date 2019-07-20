import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
import {store} from './store'
window.axios = axios;
Vue.use(VueRouter);
let router = new VueRouter({
  routes,
  mode : 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
