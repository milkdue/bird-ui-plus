<template>
    <transition name="bird-fade-in">
        <div v-show="show" :class="thumbClass">
            <div
                class="bird-scrollbar__thumb"
                :style="thumbStyle"
                @mousedown="handleThumbClick"
            ></div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import {
    computed,
    inject,
    CSSProperties,
    ref,
    toRef
} from "vue";
import { useEventListener } from "@vueuse/core";
import { scrollbarContextKey } from "./scrollbar";
// inject
const context = inject(scrollbarContextKey);
// data
const visible = ref<boolean>(false);
const drag = ref<boolean>(false);
const mouseX = ref<number>(0);
const mouseY = ref<number>(0);
const scrollPos = ref<number>(0);
let originalOnSelectStart = document.onselectstart;
// props
const props = defineProps<{
    ratio: number,
    size: string,
    always: boolean,
    vertical?: boolean,
    move: number
}>();
// computed
const show = computed<boolean>(() => {
    if (props.ratio === 1) {
        return false;
    }

    if (props.always) {
        return true;
    }

    return visible.value || drag.value;
});
const thumbStyle = computed<CSSProperties>(() => {
    if (props.vertical) {
        return {
            height: props.size,
            transform: `translateY(${props.move}px)`
        }
    }

    return {
        width: props.size,
        transform: `translateX(${props.move}px)`
    }
});
const thumbClass = computed(() => {
    return {
        "bird-scrollbar__bar": true,
        "bird-scrollbar__bar--vertical": props.vertical,
        "bird-scrollbar__bar--horizontal": !props.vertical
    }
});

if (!context) throw new Error("can not inject scrollbar context!");

// dom事件
useEventListener(toRef(context, "scrollbarEl"), "mousemove", () => {
    visible.value = true;
});
useEventListener(toRef(context, "scrollbarEl"), "mouseleave", () => {
    visible.value = false;
});

// methods
function handleThumbClick(event: MouseEvent): void {
    event.stopPropagation();
    if (event.ctrlKey || [1, 2].includes(event.button)) return;

    drag.value = true;
    // window.getSelection() 用户选择的文本范围或光标的当前位置
    // see: https://juejin.cn/post/7314572755696681014
    window.getSelection()?.removeAllRanges();
    // 阻止监听同一事件的其他事件监听器被调用
    event.stopImmediatePropagation();

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);

    // 替换 onselectstart 事件
    // onselectstart几乎可以用于所有对象，其触发时间为目标对象被开始选中时（即选中动作刚开始，尚未实质性被选中）。该事件常使用于使目标对象“禁止变蓝”，比如在很多地方当用户双击时，一些元素会变成蓝色（选中状态），
    originalOnSelectStart = document.onselectstart;
    document.onselectstart = () => false;

    const $wrapEl = context?.wrapEl;

    if (props.vertical) {
        scrollPos.value = $wrapEl?.scrollTop ?? 0;
    } else {
        scrollPos.value = $wrapEl?.scrollLeft ?? 0;
    }

    mouseY.value = event.screenY;
    mouseX.value = event.screenX;
}

function mouseMove(event: MouseEvent): void {
    let $wrapEl = context?.wrapEl;
    if (!$wrapEl) return;
    if (props.vertical) {
        const dis = event.screenY - mouseY.value;
        $wrapEl.scrollTop = scrollPos.value + (dis * $wrapEl.scrollHeight) / $wrapEl.clientHeight;
    } else {
        const dis = event.screenX - mouseX.value;
        $wrapEl.scrollLeft = scrollPos.value + (dis * $wrapEl.scrollWidth) / $wrapEl.clientWidth;
    }
}

function mouseUp(): void {
    drag.value = false;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
    restoreOnselectstart();
}

function restoreOnselectstart(): void {
    if (document.onselectstart !== originalOnSelectStart) {
        document.onselectstart = originalOnSelectStart;
    }
}
</script>