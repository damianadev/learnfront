<script setup>
defineProps(['items', 'title']);
</script>
<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id" class="item">
            <span :class="'importance-' + item.importance">
            {{ item.text }}
            </span>
            <select v-model="item.importance">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <input type="checkbox" v-model="item.isDone">
        </li>
    </ul>
</template>
<style lang="scss" scoped>
.importance {
    &-low {
        color: #00ff00;
    }

    &-medium {
        color: #ffff00;
    }

    &-high {
        color: #ff0000;
    }
}
.item {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>