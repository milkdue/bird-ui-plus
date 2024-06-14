<template>
    <div class="nav-bar">
        <bird-scrollbar>
            <div
                class="nav-bar-item"
                v-for="navBar in data"
                :key="navBar.title"
            >
                <div class="nav-bar-title">
                    <span>{{ navBar.title }}</span>
                </div>
                <router-link
                    v-for="item in navBar.list"
                    :key="item.src"
                    :to="item.src"
                    class="nav-bar-list"
                >
                    {{ item.name }}
                </router-link>
            </div>
        </bird-scrollbar>
    </div>
</template>

<script setup lang="ts">
import type { NavBar } from "../types";
defineOptions({
    name: "BirdNavBar"
});
defineProps<{
    data: NavBar[];
}>();
</script>

<style lang="less">
    .nav-bar {
        position: sticky;
        top: @top-bar-height;
        z-index: 1;
        width: @nav-bar-width;
        height: calc(100vh - @top-bar-height);
        border-right: 1px solid rgb(30 32 37 / 8%);
        background-color: @background;
        transition: background-color @animats;
        box-sizing: border-box;
        .bird-scrollbar {
            padding: 0 16px;
        }
        .nav-bar-title {
            overflow: hidden;
            margin-top: 24px;
            padding-left: 4px;
            height: 40px;
            line-height: 40px;
            color: rgb(@gray);
            span {
                font-size: 14px;
                font-weight: 700;
            }
        }
        .nav-bar-list {
            display: block;
            margin-bottom: 4px;
            padding: 0 16px;
            height: 40px;
            border-radius: 8px;
            text-decoration: none;
            color: rgb(30 32 37 / 72%);
            transition: background-color 0.2s;
            line-height: 40px;
            &:hover {
                background-color: rgb(30 32 37 / 8%);
            }
            &:last-child {
                margin-bottom: unset;
            }
            &.router-link-active {
                font-weight: bold;
                color: rgb(@primary-color);
                background-color: rgb(43 90 237 / 8%);
            }
        }
    }
</style>