<!--
 * @Author: 可以清心
 * @Description:
 * @Date: 2024-01-24 10:37:52
 * @LastEditTime: 2024-02-18 10:05:48
-->
<template>
    <div class="color-shadow">
        <div
            class="box"
            v-for="type in types"
            :style="{ boxShadow: `var(--shadow-${type})` }"
        >
            {{ `shadow-${type}` }}
        </div>
    </div>
</template>

<script setup lang="ts">
const types = ["xs", "md", "lg"];
</script>

<style lang="less" scoped>
    .color-shadow {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        width: 100%;
        .box {
            width: 20%;
            height: 80px;
            font-size: var(--size-xs);
            border-radius: var(--radius-md);
            text-align: center;
            transition: transform var(--animats);
            line-height: 80px;
            &:hover {
                transform: scale(1.05);
            }
        }
    }
</style>
