<script setup>
import { ref } from "vue";

    let message = ref('');

    /*
    function inputUpdate(event) {
        console.log(event);
        message.value = event.target.value;
    }
        */
       
let items = ref(['Piim', 'Viin', 'Õlu']);

function add(){
  if(message.value.trim() !== '') {
    items.value.push(message.value.trim());
  }
  message.value = '';
}
</script>

<template>
    <!--
    <button @click="message = 'Hello, TA25B!'" class="button is-primary">Click me</button>
    <h1>{{ message.split('').reverse().join('') }}</h1>
    <input type="text" class="input" v-bind:value="message" @input="message = $event.target.value">
    <input type="text" class="input" v-model="message">
    -->

    <div class="container content mt-2">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="message" class="input" type="text" placeholder="Add item">
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Add
                </button>
            </div>
        </div>
        
        <ul>
          <li v-for="item in items">{{ item }}</li>
         
        </ul>

    </div>
</template>

<style>

</style>