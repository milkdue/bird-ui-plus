<template>
    <ul :class="['bird-anchor-list', props.root && 'bird-anchor-list-root']">
        <li v-for="item in options" :key="item.href" class="bird-anchor-item">
            <a
                :href="item.href"
                :class="{
                    'bird-anchor-item-title': true,
                    'bird-anchor-item-title-active': active === item.href
                }"
                @click="handleClick(item, $event)"
            >
                {{ item.title }}
            </a>
            <anchor-list
                v-if="item.children && item.children.length"
                :active="active"
                :options="item.children"
                @update-active="$emit(`update-active`, $event)"
            ></anchor-list>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { AnchorListProps, AnchorOption } from "./anchor";
defineOptions({
    name: "AnchorList"
});
const emits = defineEmits(["update-active"]);
const props = defineProps<AnchorListProps>();

const handleClick = (item: AnchorOption, e: Event) => {
    window.history.pushState("", "", item.href);
    e.preventDefault();
    const el = document.querySelector(item.href);
    el?.scrollIntoView({
        behavior: "smooth"
    });
    emits("update-active", item.href);
}
</script>