<template>
    <div class="divider-transparent">
        <bird-divider
            fade
            v-for="type in lineTypes"
            :key="type"
            :line-type="type"
        ></bird-divider>
        <bird-divider fade :width="3"></bird-divider>
        <bird-divider
            fade
            line-type="dashed"
            type="link"
            :width="6"
            :fillWidth="1"
            :dashWidth="5"
            :angle="135"
        ></bird-divider>
        <bird-divider
            fade
            line-type="dashed"
            type="warn"
            :fillWidth="4"
            :dashWidth="6"
        ></bird-divider>
    </div>
</template>

<script setup lang="ts">
const lineTypes = ["solid", "dotted", "dashed", "double"];
</script>

<style lang="less" scoped>
    .divider-transparent {
        :deep(.bird-divider:not(:last-child)) {
            margin-bottom: 16px;
        }
    }
</style>
