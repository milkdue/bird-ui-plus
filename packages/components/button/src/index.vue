<template>
    <button
        :class="buttonClass"
        :disabled="disabled || loading"
    >
        <bird-svg-icon
            v-if="loading"
            class="loading-icon"
            name="loading"
            :width="getSize()"
            :height="getSize()"
        ></bird-svg-icon>
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ButtonProps } from "./button";
import { BirdSvgIcon } from "../../icon";
defineOptions({
    name: "BirdButton"
});

const props = withDefaults(defineProps<ButtonProps>(), {
    type: "primary",
    size: "lg"
});

const buttonClass = computed(() => {
    let classList = [
        "bird-button",
        `bird-button--${props.type}`,
        `bird-button--${props.size}`,
        `bird-button--${props.status}`
    ];

    if (props.shape) {
        classList.push(`bird-button--${props.shape}`);
    }

    if (props.block) {
        classList.push(`bird-button--block`);
    }

    if (props.disabled) {
        classList.push("bird-button--disabled");
    }

    if (props.loading) {
        classList.push("bird-button--loading");
    }

    return classList;
});

function getSize() {
    switch (props.size) {
        case "sm":
            return 12;
        case "md":
        case "lg":
            return 16;
        case "xl":
            return 16;
        default:
            return 14;
    }
}
</script>