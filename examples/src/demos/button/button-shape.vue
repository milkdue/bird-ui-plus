<template>
    <div v-for="type in types" style="display: flex; justify-content: space-around; margin-bottom: 10px;">
        <bird-button :type="type">默认形状</bird-button>
        <bird-button :type="type" shape="round">全圆角</bird-button>
        <bird-button :type="type" shape="circle">
            <bird-svg-icon name="avatar" :width="14" :height="14"></bird-svg-icon>
        </bird-button>
        <bird-button :type="type" shape="square">
            <bird-svg-icon name="bell" :width="14" :height="14"></bird-svg-icon>
        </bird-button>
    </div>
</template>

<script setup lang="ts">
const types = [
    "primary",
    "secondary",
    "plain"
];
</script>