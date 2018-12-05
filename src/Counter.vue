<template>
    <h1>Counter: {{counter}}</h1>
</template>

<script>
import { eventEmitter } from './main.js';
    export default{
        data(){
            return{
                counter: 0
            }
        },
        created(){
            eventEmitter.$on('couterUpdated',()=>{
                this.counter ++
            })
        }
    }
</script>