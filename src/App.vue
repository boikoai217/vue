<template>
  <div id="app">
    <h1>Parent:  {{userName}}</h1>
    <app-counter :counter="counter"></app-counter>
    <app-register 
        :userName="userName" 
        :userYear="userYear"
        :changeFunc = "changeNameToEnchik" 
        @nameChanged = "userName = $event"
        @couterUpdated = "counter = $event"
        ></app-register> 
  </div>
</template>

<script>
import Counter from './Counter.vue'
import Registr from './Registr.vue'

export default {
  data () {
    return {
      userName: "Olya from perent",
      userYear: 123,
    }
  },
  methods:{
    changeNameToEnchik(){
      this.userName = "Enchik"
    }
  },
  components:{
    appCounter: Counter,
    appRegister: Registr
  }
}
</script>


<style>

</style>
