<template>
    <div style="display: flex; justify-content: space-around;">
        <bird-button v-for="type in types" :type="type" loading>{{ buttomMap[type] }}</bird-button>
    </div>
</template>

<script setup lang="ts">
const types = [
    "primary",
    "secondary",
    "plain"
];

const buttomMap = {
    "primary": "主要按钮",
    "secondary": "次要按钮",
    "plain": "朴素按钮"
};
</script>