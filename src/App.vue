<template>
  <div>
    <h2>{{title}}</h2>
    <h2>{{title | lowercase}}</h2>

  </div>
</template>

<script>

export default {
  data () {
    return {
      title: "Hello title"
    }
  },
  filters:{
    lowercase(value){
      return value.toLowerCase()
    }
  }
}
</script>


<style>

</style>

