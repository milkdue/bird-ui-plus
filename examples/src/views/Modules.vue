<template>
    <div class="modules">
        <bird-nav-bar :data="navs"></bird-nav-bar>
        <bird-scrollbar :key="route.path" class="content">
            <router-view></router-view>
        </bird-scrollbar>
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const navs = computed(() => (route.meta.navs) || [])
</script>

<style lang="less">
    .modules {
        display: flex;
        padding-top: @top-bar-height;
        .content {
            padding: 20px;
            width: calc(100% - @nav-bar-width);
            height: calc(100vh - @top-bar-height);
        }
    }
</style>