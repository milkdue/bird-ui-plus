<template>
    <div class="modules">
        <bird-nav-bar :data="navs"></bird-nav-bar>
        <bird-scrollbar ref="$scrollbar" :key="route.path" class="content">
            <router-view></router-view>
        </bird-scrollbar>
    </div>
</template>
<script setup lang="ts">
import { computed, ref, provide, onMounted } from "vue";
import { useRoute } from "vue-router";
import { wrapperKey } from "./module";


const route = useRoute();
const navs = computed(() => (route.meta.navs) || []);
const $scrollbar = ref(null);

provide(
    wrapperKey,
    () => $scrollbar?.value?.wrapEl
);

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