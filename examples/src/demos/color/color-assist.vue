<template>
    <div class="color-assist">
        <div class="color-series" v-for="type in types">
            <div class="box" v-for="num in 10" :style="boxStyle(type, num)">
                {{
                    type === "gray"
                        ? `${type}-${num}`
                        : `${type}-color-light-${num}`
                }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const types = ["link", "success", "warn", "error", "gray"];
const boxStyle = computed(() => {
    return function(type: string, num: number) {
        let backgroundColor: string;
        if (type !== "gray") {
            backgroundColor = `var(--${type}-color-light-${num})`;
        } else {
            backgroundColor = `var(--${type}-${num})`;
        }

        return {
            backgroundColor,
            color: "white"
        };
    }
});
</script>

<style lang="less" scoped>
    .color-assist {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        width: 100%;
        .color-series {
            display: flex;
            flex-direction: column;
            width: 15%;
            .box {
                width: 100%;
                height: 40px;
                font-size: var(--size-xs);
                text-align: center;
                transition: transform var(--animats);
                line-height: 40px;
                &:hover {
                    transform: scale(1.05);
                }
                &:first-child {
                    border-radius: var(--radius-md) var(--radius-md) 0 0;
                }
                &:last-child {
                    border-radius: 0 0 var(--radius-md) var(--radius-md);
                }
            }
        }
    }
</style>
