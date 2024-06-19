<template>
    <div class="divider-base">
        <bird-divider
            v-for="type in types"
            :key="type"
            :type="type"
        ></bird-divider>
    </div>
</template>

<script setup lang="ts">
const types = ["primary", "success", "link", "warn", "error"];
</script>

<style lang="less" scoped>
    .divider-base {
        :deep(.bird-divider:not(:last-child)) {
            margin-bottom: 10px;
        }
    }
</style>
