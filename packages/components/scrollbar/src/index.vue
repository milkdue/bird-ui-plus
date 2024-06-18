<template>
    <div ref="$scrollbar" class="bird-scrollbar">
        <div ref="$wrap" :class="wrapClass" @scroll="handleScroll">
            <div ref="$content" class="bird-scrollbar__content">
                <slot></slot>
            </div>
        </div>
        <template v-if="!native">
            <bird-thumb vertical :size="thumbHeight" :move="moveY" :always="always" :ratio="ratioY"></bird-thumb>
            <bird-thumb :size="thumbWidth" :move="moveX" :always="always" :ratio="ratioX"></bird-thumb>
        </template>
    </div>
</template>

<script setup lang="ts">
import {
    ref,
    onMounted,
    computed,
    onBeforeUnmount,
    provide,
    shallowRef,
    reactive
} from "vue";
import BirdThumb from "./thumb.vue";
import { ScrollbarProps, scrollbarContextKey } from "./scrollbar";
defineOptions({
    name: 'BirdScrollbar'
});

const props = withDefaults(defineProps<ScrollbarProps>(), {
    native: false,
    always: false
});
const emits = defineEmits<{
    scroll: [e: Event]
}>();

const GAP = 4;
const moveY = ref<number>(0);
const moveX = ref<number>(0);
const ratioX = ref<number>(1);
const ratioY = ref<number>(1);
const thumbWidth = ref<string>("0");
const thumbHeight = ref<string>("0");
const resizeObserver = shallowRef<ResizeObserver>();
const $scrollbar = shallowRef<HTMLDivElement>();
const $wrap = shallowRef<HTMLDivElement>();
const $content = shallowRef<HTMLDivElement>();

const wrapClass = computed(() => ({
    "bird-scrollbar__wrap": true,
    "bird-scrollbar__wrap--default-hide": !props.native
}));

function handleResize(): void {
    if (!$wrap.value) return;
    const offsetHeight: number = $wrap.value.offsetHeight;
    const offsetWidth: number = $wrap.value.offsetWidth;
    const ogH: number = offsetHeight ** 2 / $wrap.value.scrollHeight;
    const ogW: number = offsetWidth ** 2 / $wrap.value.scrollWidth;

    thumbHeight.value = ogH + "px";
    thumbWidth.value = ogW + "px";

    ratioX.value = ogW / offsetWidth;
    ratioY.value = ogH / offsetHeight;

    moveX.value = ($wrap.value.scrollLeft * offsetWidth) / $wrap.value.scrollWidth;
    moveY.value = ($wrap.value.scrollTop * offsetHeight) / $wrap.value.scrollHeight;
}

function handleScroll(event: Event): void {
    if (!$wrap.value || !$content.value) return;
    // 真实宽度需要减去滚动条的宽度 才是真正的宽度，这是因为滚动条是模拟出来的 原生的滚动条不存在这个问题
    const offsetHeight = $wrap.value.offsetHeight - GAP;
    const offsetWidth = $wrap.value.offsetWidth - GAP;
    // 计算比例，因为最终显示的还是容器的宽度，内容的宽度会被隐藏，但它实际的宽度或高度远远超过了容器的宽度和高度
    // 计算公式应该为 垂直或水平滚动的像素数 / 内容的滚动高度或内容的滚动宽度 * 容器的宽度
    moveY.value =
        ($wrap.value.scrollTop * offsetHeight) / $content.value.scrollHeight;
    moveX.value =
        ($wrap.value.scrollLeft * offsetWidth) / $content.value.scrollWidth;

    emits("scroll", event);
}

onMounted(() => {
    handleResize();
    resizeObserver.value = new ResizeObserver(() => {
        handleResize();
    });

    resizeObserver.value.observe($scrollbar.value as Element);
});
onBeforeUnmount(() => {
    resizeObserver.value?.unobserve($scrollbar.value as Element);
});
provide(
    scrollbarContextKey,
    reactive({
        scrollbarEl: $scrollbar,
        wrapEl: $wrap,
    })
);

defineExpose({
    wrapEl: $wrap
});
</script>
