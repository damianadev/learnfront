<script setup>
import { computed, ref } from 'vue';
import ItemList from '../components/ItemList.vue';

let message = ref('');
let i = 1;
let items = ref([
    {id: i++, text: 'Piim', isDone: false, importance: ''},
    {id: i++, text: 'Viin', isDone: true, importance: ''},
    {id: i++, text: 'Õlu', isDone: false, importance: ''},
    {id: i++, text: 'Sai', isDone: true, importance: ''},
]);

function add(){
  if(message.value.trim() !== '') {
    items.value.push({
        id: i++,
        text: message.value.trim(), 
        isDone: false,
        importance:""
    });
  }

  message.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.isDone));
let toDoItems = computed(() => items.value.filter(item => !item.isDone));
let LowImportance = computed(() => items.value.filter(item => item.importance === 'low'));
let MediumImportance = computed(() => items.value.filter(item => item.importance === 'medium'));
let HighImportance = computed(() => items.value.filter(item => item.importance === 'high'));
</script>

<template>
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
        
        <ItemList :items="items" title="All items"></ItemList>
        <ItemList :items="doneItems" title="Done items"></ItemList>
        <ItemList :items="toDoItems" title="ToDo items"></ItemList>
        <ItemList :items="LowImportance" title="Low Importance"></ItemList>
        <ItemList :items="MediumImportance" title="Medium Importance"></ItemList>
        <ItemList :items="HighImportance" title="High Importance"></ItemList>
    </div>
</template>

<style lang="scss" scoped></style>