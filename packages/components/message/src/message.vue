<template>
    <div>
        <div class="bird-message" :style="Style">
            <bird-svg-icon
                v-if="iconInfo"
                class="message-icon"
                :name="iconInfo.icon"
                :fill="iconInfo.fill"
                :width="16"
                :height="16"
            ></bird-svg-icon>
            <span class="text">
                <component :is="render(props.message)" />
            </span>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { MessageProps, IconType } from "./message";
import { ref, onMounted, computed } from "vue";
import { render } from "../../../utils/render";
import { BirdSvgIcon } from "../../icon";

defineOptions({
    name: "BirdMessage",
});

const typeIcon = {
    info: {
        icon: "reminder",
        fill: "var(--primary-color-light)"
    },
    success: {
        icon: "tick2",
        fill: "var(--success-color-light)"
    },
    warning: {
        icon: "warning2",
        fill: "var(--warn-color-light)"
    },
    error: {
        icon: "cross2",
        fill: "var(--error-color-light)"
    },
    loading: {
        icon: "loading",
        fill: "var(--primary-color-light)"
    }
};

const props = withDefaults(defineProps<MessageProps>(), {
    message: "",
    type: "success",
    duration: 3000,
    offset: 12,
    zIndex: 100,
    onClose: () => ({})
});

const iconInfo = ref<IconType>(typeIcon[props.type]);
const emits = defineEmits(["close"]);

const Style = computed(() => ({
    marginBottom: `${props.offset}px`,
    zIndex: props.zIndex,
}));
const startTimer = () => {
    if (!props.duration || props.type === "loading") {
        return;
    }
    setTimeout(() => {
        close()
    }, props.duration);
};

const close = () => {
    emits("close");
};

onMounted(() => {
    startTimer();
});
</script>