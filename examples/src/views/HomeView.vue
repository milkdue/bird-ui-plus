<!--
 * @Author: 可以清心
 * @Description: 主页
 * @Date: 2024-01-16 11:08:28
 * @LastEditTime: 2024-01-25 20:51:27
-->
<template>
    <div ref="home" class="bird-ui-home-page">
        <p>
            <span>B</span>
            <span>I</span>
            <span>R</span>
            <span>D</span>
            <span>-</span>
            <span>U</span>
            <span>I</span>
        </p>
    </div>
</template>

<script setup>
import { start, stop, resize } from "./sakura";
import { ref, onMounted, onBeforeUnmount } from "vue";

const home = ref(null)

onMounted(() => {
    start(home.value)
    window.addEventListener("resize", resize);
});

onBeforeUnmount(() => {
    stop();
    window.removeEventListener("resize", resize);
});
</script>

<style lang="less">
    .bird-ui-home-page {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin-top: @top-bar-height;
        height: calc(100% - @top-bar-height);
        font-family: Apalu, cursive;
        perspective: 160vmin;
        p {
            position: absolute;
            z-index: 9;
            margin: auto;
            font-size: 24vmin;
            white-space: nowrap;
            transform-style: preserve-3d;
            animation: rotate 10s infinite ease-in-out;
            span {
                text-shadow:
                    1px 1px 0 rgb(0 0 0 / 90%),
                    2px 2px 0 rgb(0 0 0 / 70%),
                    3px 3px 0 rgb(0 0 0 / 50%),
                    4px 4px 0 rgb(0 0 0 / 30%),
                    5px 5px 0 rgb(0 0 0 / 10%);
                &:nth-child(-n + 5) {
                    animation-delay: -5s;
                }
            }
        }

        @frames: filterBlur-1, filterBlur-2, filterBlur-3, filterBlur-4,
            filterBlur-5, filterBlur-6, filterBlur-7;

        each(range(7), {
            @blur: 7px - @value;
            @name: extract(@frames, @value);
            span:nth-child(@{value}),
            span:nth-last-child(@{value}) {
                animation: @name 10s infinite ease-in-out;
            }

            @keyframes @name {
                0% {
                    filter: blur(0px) contrast(5);
                }
                50% {
                    filter: blur(@blur) contrast(1);
                }
                100% {
                    filter: blur(0px) contrast(5);
                }
            }
        })
            @keyframes
            rotate {
            0% {
                transform: rotateY(-45deg);
            }
            50% {
                transform: rotateY(45deg);
            }
            100% {
                transform: rotateY(-45deg);
            }
        }
    }
</style>
