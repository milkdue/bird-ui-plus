<template>
    <div class="bird-space" :class="classList" :style="spaceStyle">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { toRefs, computed, CSSProperties } from "vue";
import type { SpaceProps } from "./space";
import {
    isString,
    isNumber,
    isBoolean
} from "../../../utils/type.util";

defineOptions({
    name: "BirdSpace"
});

const props = withDefaults(defineProps<SpaceProps>(), {
    inline: false,
    dir: "horizontal",
    size: "lg",
    align: "start",
    justify: "start",
    overflow: "visible",
    wrap: false
});

const {
    inline,
    dir,
    size,
    align,
    justify,
    overflow,
    wrap
} = toRefs(props);

const classList = computed(() => {
    const classes: string[] = [];

    if (inline.value) classes.push(`inline`);

    if (isBoolean(wrap.value)) {
        wrap.value && classes.push(`wrap`);
    } else {
        classes.push(`wrap-${wrap.value}`);
    }

    if (isString(size.value) && size.value !== "lg") {
        classes.push(`size-${size.value}`);
    }

    if (dir.value !== "horizontal") {
        classes.push(`dir-${dir.value}`);
    }

    if (overflow.value !== "visible") {
        classes.push(`overflow-${overflow.value}`)
    }

    classes.push(`align-${align.value}`)
    classes.push(`justify-${justify.value}`)

    return classes
});

const spaceStyle = computed(() => {
    const style: CSSProperties = {};

    if (isNumber(size.value)) {
        style.gap = `${size.value}px`;
    } else if (isString(size.value)) {
        style.gap = `${size.value}`;
    } else if (Array.isArray(size.value)) {
        const [columnGap, rowGap] = size.value;

        if (isNumber(columnGap) && isNumber(rowGap)) {
            style.columnGap = `${size.value[0]}px`;
            style.rowGap = `${size.value[1]}px`;
        } else {
            style.columnGap = `${size.value[0]}`;
            style.rowGap = `${size.value[1]}`;
        }
    }

    if (Array.isArray(overflow.value)) {
        const [overflowX, overflowY] = overflow.value;

        style.overflowX = overflowX;
        style.overflowY = overflowY;
    }

    return style
});

</script>