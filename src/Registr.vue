<template>
    <div class="reg">
        <h3>Name: {{userName}} / {{reverseName}}</h3>
        <h3>Year: {{userYear}}</h3>
        <button @click="changeName">ChangeName</button>
        <button @click="changeFunc">Change prom parent</button>
        <button @click="updateCounter">Counter plus one</button>
    </div>
</template>

<script>

import {eventEmitter} from './main.js'

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
        userYear: Number,
        changeFunc: Function,
    },
    methods:{
        changeName(){
            this.userName = "Seyran",
            this.$emit('nameChanged', this.userName)
        },
        updateCounter(){
            //this.$emit('couterUpdated', this.counter + 1)
            eventEmitter.$emit('couterUpdated')
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
