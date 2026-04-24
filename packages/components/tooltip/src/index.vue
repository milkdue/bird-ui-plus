<template>
    <div
        class="slot"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
    >
        <slot />
    </div>
    <transition name="show">
        <div v-show="showPopper">
            <slot name="content" />
        </div>
    </transition>
</template>
<script setup lang="ts">
    import { ref } from "vue";
    defineOptions({
        name: "BirdTooltip"
    });

    const showPopper = ref(false);

    function handleMouseEnter() {
        showPopper.value = true;
    }

    function handleMouseLeave() {
        showPopper.value = false;
    }
</script>
