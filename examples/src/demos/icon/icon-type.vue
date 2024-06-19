<template>
    <div class="icon-type">
        <bird-svg-icon
            v-for="type in types"
            name="search"
            :key="type"
            :type="type"
            :width="18"
            :height="18"
        ></bird-svg-icon>
        <bird-svg-icon
            disabled
            name="search"
            :width="18"
            :height="18"
        ></bird-svg-icon>
    </div>
</template>

<script setup lang="ts">
const types = ["primary", "ordinary", "aux"];
</script>

<style lang="less" scoped>
    .icon-type {
        display: flex;
        justify-content: space-around;
    }
</style>
