<template>
    <a
        :href="disabled ? undefined : href"
        :class="linkClass"
        :target="target"
        @click="clickLink"
    >
        <slot></slot>
        <span class="bird-link-anchor" v-if="isAnchor">
            <sup>#</sup>
        </span>
    </a>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { LinkProps } from "./link";

defineOptions({
    name: "BirdLink"
});

const props = defineProps<LinkProps>();
const emits = defineEmits(["click"]);

const linkClass = computed(() => {
    let classList = ["bird-link"];

    if (props.disabled) {
        classList.push("bird-link__disabled");
    }

    if (props.underline && !props.disabled) {
        classList.push("bird-link__underline");
    }

    if (props.type) {
        classList.push(`bird-link__${props.type}`);
    }

    return classList;
});

const target = computed(() => {
    if (!props.disabled && props.newTab) {
        return "_blank";
    }

    return "_self";
});

const isAnchor = computed<boolean>(() => {
    return props.href.startsWith("#");
});

function clickLink() {
    emits("click");
}
</script>