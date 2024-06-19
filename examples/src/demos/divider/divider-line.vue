<template>
    <div class="divider-line">
        <bird-divider
            v-for="type in lineTypes"
            :key="type"
            :line-type="type"
        ></bird-divider>
    </div>
</template>

<script setup lang="ts">
const lineTypes = ["solid", "dotted", "dashed", "double"];
</script>

<style lang="less" scoped>
    .divider-line {
        :deep(.bird-divider:not(:last-child)) {
            margin-bottom: 10px;
        }
    }
</style>
