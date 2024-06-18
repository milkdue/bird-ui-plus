<template>
    <div class="top-bar">
        <router-link class="logo" to="/">
            <bird-svg-icon
                name="logo"
                width="36px"
                height="36px"
            ></bird-svg-icon>
            <span class="title">Bird-UI</span>
        </router-link>
        <div class="nav-links">
            <router-link v-for="(link, path) in navLinks" :key="path" :to="path" class="nav-item">
                {{ link }}
            </router-link>
            <a class="nav-item" :href="links.home" target="_blank">博客</a>
            <a class="nav-item" :href="links.github" target="_blank">
                <bird-svg-icon
                    name="github"
                    width="14px"
                    height="14px"
                    fill="var(--gray)"
                ></bird-svg-icon>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineOptions({
    name: "BirdTopBar"
});
const navLinks = ref({
    "/": "首页",
    "/develop": "开发",
    "/module": "组件"
});
const links = ref({
    home: "https://blog.keyiqingxin.cn",
    github: "https://github.com/milkdue/bird-ui/"
});
</script>
<style lang="less" scoped>
    .top-bar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9;
        display: flex;
        justify-content: space-between;
        padding: 0 24px;
        width: 100%;
        height: @top-bar-height;
        border-bottom: 1px solid rgb(@gray 0.08);
        background-color: #fff;
        transition: all 0.3s;
        a {
            text-decoration: none;
        }
        .logo {
            display: flex;
            align-items: center;
            img {
                width: 36px;
                height: 36px;
            }
            .title {
                margin-left: 8px;
                font-size: 28px;
                font-family: Apalu, serif;
                font-weight: 700;
                color: rgb(@gray);
                line-height: @top-bar-height;
            }
        }
        .nav-links {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 24px;
            .nav-item {
                padding: 5px 8px;
                border-radius: 4px;
                color: rgb(@gray);
                img {
                    width: 20px;
                    height: 20px;
                }
                &.router-link-active {
                    font-weight: 600;
                    color: var(--primary-color-light);
                }
            }
        }
    }
</style>