<template>
  <div id="app">
    <h1>Parent:  {{userName}}</h1>
    <app-register :userName="userName" :userYear="userYear"></app-register> 
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: "Olya from perent",
      userYear: 123
    }
  }
}
</script>


<style>

</style>
