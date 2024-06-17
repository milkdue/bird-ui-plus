<template>
    <div ref="doc" class="bird-demo-doc">
        <div class="wrapper">
            <slot></slot>
        </div>
        <div ref="anchor" class="anchor-wrap">
            <bird-anchor
                :options="anchors"
                :scrollEl="scrollEl"
                scrollbar
                showMarker
            ></bird-anchor>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, inject } from "vue";
import { wrapperKey } from "../views/module";

defineOptions({
    "name": "BirdDoc"
});

const scrollEl = inject(wrapperKey);
const anchors = ref<any[]>([]);
const doc = ref<HTMLElement>();

onMounted(() => {
    const docNode = doc.value
    const wrapperNode = docNode?.children[0] as HTMLElement;
    const docH3 = wrapperNode.querySelectorAll("h3.snippet-title[id]");

    Array.from(docH3).forEach(el => {
        anchors.value.push({
            href: '#'.concat(el.id),
            title: el.id.replace(/-/g, " ")
        })
    });
});
</script>

<style>
    .bird-demo-doc {
        --anchor-width: 212px;
        display: inline-block;
        width: 100%;
        .wrapper {
            float: left;
            width: calc(100% - var(--anchor-width));
        }
        .anchor-wrap {
            position: fixed;
            top: 88px;
            right: 0;
            float: left;
            margin-top: 88px;
            padding-right: 14px;
            padding-left: 56px;
            width: var(--anchor-width);
        }
    }
</style>
