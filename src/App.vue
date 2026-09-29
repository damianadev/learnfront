<script setup>
import { ref } from "vue";

    let message = ref('Hello, Vue!');

    /*
    function inputUpdate(event) {
        console.log(event);
        message.value = event.target.value;
    }
        */
       
</script>

<template>
    <button v-on:click="message = 'Hello, TA25B!'" class="button is-primary">Click me</button>
    <h1>{{ message }}</h1>
    <!--<input type="text" class="input" v-bind:value="message" @input="message = $event.target.value"> -->
    <input type="text" class="input" v-model="message">
</template>

<style>

</style>