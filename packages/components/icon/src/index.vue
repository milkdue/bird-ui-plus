<template>
    <i
        :class="svgClass"
        :style="inlineStyle"
        @mouseenter="enter"
        @mouseleave="leave"
    >
        <img
            v-if="showImg"
            class="svg-icon"
            :class="className"
            :style="style"
            :src="iconName"
        />
        <svg
            v-else
            class="svg-icon"
            :class="className"
            :style="style"
            aria-hidden="true"
        >
            <use :xlink:href="iconName"></use>
        </svg>
    </i>
</template>
<script setup lang="ts">
import { computed, ref, CSSProperties, watch } from "vue";
import type { IconProps } from "./icon";
defineOptions({
    name: "BirdSvgIcon"
});
const props = withDefaults(defineProps<IconProps>(), {
    name: "",
    hover: false,
    hoverColor: "var(--primary-color-light)",
    width: "",
    height: "",
    disabled: false
});
const inlineStyle = ref<CSSProperties>({});
const w = ref(props.width);
const h = ref(props.height);
const f = ref(props.fill);

const showImg = computed(() => {
    return props.name.startsWith("https://") || props.name.startsWith("http://");
});
const iconName = computed(() => {
    if (showImg.value) {
        return props.name;
    }
    return `#svg-${props.name}`;
});
const className = computed(() => {
    return `svg-${props.name}`;
});
const style = computed<CSSProperties>(() => {
    return {
        width: typeof w.value === "number" ? w.value + "px" : w.value,
        height: typeof h.value === "number" ? h.value + "px" : h.value,
        fill: f.value
    };
});
const svgClass = computed(() => {
    return [
        "bird-svg-icon",
        props.type ? "bird-svg-icon__" + props.type : "",
        { "is-disabled": props.disabled }
    ];
});

watch(
    () => props.width,
    (width) => {
        w.value = width;
    }
);
watch(
    () => props.height,
    (height) => {
        h.value = height;
    }
);
watch(
    () => props.fill,
    (fill) => {
        f.value = fill;
    }
);

function enter() {
    if (props.hover) {
        inlineStyle.value = {
            color: props.hoverColor
        };
    }
}

function leave() {
    if (props.hover) {
        inlineStyle.value = {
            color: "initial"
        };
    }
}
</script>