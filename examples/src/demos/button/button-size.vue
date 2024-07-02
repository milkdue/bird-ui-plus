<template>
    <div v-for="type in types" style="display: flex; justify-content: space-around; margin-bottom: 10px;">
        <bird-button v-for="size in sizes" :size="size" :type="type">{{ buttomMap[type] }}</bird-button>
    </div>
</template>

<script setup lang="ts">
const types = [
    "primary",
    "secondary",
    "plain"
];
const sizes = [
    "sm",
    "md",
    "lg",
    "xl"
];

const buttomMap = {
    "primary": "主要按钮",
    "secondary": "次要按钮",
    "plain": "朴素按钮"
};
</script>