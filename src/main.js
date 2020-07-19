import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'

import {routes} from "./routes"
import {store} from "./store/store"

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history"
})


new Vue({
  el: '#app',
  store,
  router,
  beforeCreate() {
    this.$store.commit('initialiseStore');
  },
  render: h => h(App)
})
