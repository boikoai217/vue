<template>
    <div class="reg">
        <h3>Name: {{userName}} / {{reverseName}}</h3>
        <h3>Year: {{userYear}}</h3>
        <button @click="changeName">ChangeName</button>
    </div>
</template>

<script>
export default {
    //props: ['userName', 'userYear'],
    /*props: {
        userName: String,
        userYear: Number
    },*/
    props: {
        userName: {
            type: String,
            default: "Kolya"
        },
        userYear: Number
    },
    methods:{
        changeName(){
            this.userName = "Seyran"
        }
    },
    computed: {
        reverseName(){
            return this.userName.split('').reverse().join('')
        }
    },
    data(){
        return{
        }
    }
}
</script>

<style>
    .reg {
        border : 1px solid black
    }
    .reg h3 {
        margin-bottom: 5px
    }
</style>
