import Vue from 'vue'
import App from './App.vue'
import Registr from './Registr.vue'

Vue.component("app-register", Registr)

new Vue({
  el: '#app',
  render: h => h(App)
  /*render: function(h){
    return h(App)
  }*/
})
