import Vue from 'vue'
import App from './App.vue'

export const eventEmitter = new Vue()

Vue.filter('uppercase', function(value){
    return value.toUpperCase()
})

new Vue({
  el: '#app',
  render: h => h(App)
  /*render: function(h){
    return h(App)
  }*/
})

