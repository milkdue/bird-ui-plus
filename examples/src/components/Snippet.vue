<template>
    <div class="snippet-wrapper">
        <h3 :id="normalizeTitle" class="snippet-title">{{ title }}</h3>
        <slot name="desc"></slot>
        <div class="demo-block">
            <slot name="demo"></slot>
        </div>

        <div class="snippet-space align-start flex-end" style="gap: 8px">
            <div class="icon" @click="onCopy">
                <bird-svg-icon
                    width="14px"
                    height="14px"
                    name="copy"
                ></bird-svg-icon>
            </div>
            <div
                class="icon"
                :class="{ active: showCode }"
                @click="showCode = !showCode"
            >
                <bird-svg-icon
                    width="14px"
                    height="14px"
                    name="code"
                ></bird-svg-icon>
            </div>
        </div>

        <div v-show="showCode" v-html="html"></div>
    </div>
</template>

<script setup lang="ts">
import { getHighlighter } from "shikiji";
import { computed, ref } from "vue";

defineOptions({
    name: "BirdSnippet"
});

const props = defineProps<{
    code: string;
    title: string;
}>();

const showCode = ref<boolean>(false);
const html = ref<string>("");

const normalizeTitle = computed(() => {
    return props.title.replace(/\s+/g, "-");
});

const shiki = getHighlighter({
    themes: ["vitesse-light", "vitesse-dark"],
    langs: ["vue"]
});
const originCode = decodeURIComponent(props.code);
shiki.then(highlighter => {
    html.value = highlighter.codeToHtml(originCode, {
        lang: "vue",
        themes: {
            dark: "vitesse-dark",
            light: "vitesse-light"
        }
    });
});
function onCopy() {
    const text = decodeURIComponent(props.code);
    navigator.clipboard
        .writeText(text)
        .then(() => {
            // this.$message({
            //     type: "success",
            //     message: "复制成功"
            // });
        })
        .catch(error => {
            // this.$message({
            //     type: "error",
            //     message: error.message
            // });
        });
}
</script>

<style lang="less">
    .snippet-wrapper {
        .demo-block {
            margin: 12px 0 8px;
            padding: 20px;
            border: 1px solid rgb(30 32 37 / 8%);
            border-radius: 8px;
            transition: all 0.3s;
        }
        .snippet-space {
            transition: all 0.2s ease-in-out;
            &.align-start {
                align-items: flex-start;
            }
            &.flex-end {
                display: flex;
                justify-content: flex-end;
                .icon {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 28px;
                    height: 28px;
                    border-radius: 8px;
                    color: rgb(30 32 37 / 72%);
                    background-color: color-mix(in srgb, #fff, #1e2025 3.6%);
                    transition: all 0.3s;
                    cursor: pointer;
                    &:hover {
                        background-color: color-mix(in srgb, #fff, @gray 6.8%);
                    }
                }
                .active {
                    background-color: rgb(30 32 37);
                    &:hover {
                        background-color: rgb(30 32 37);
                    }
                    .svg-icon {
                        color: #fff;
                    }
                }
            }
        }
        pre {
            overflow-x: auto;
            margin: 16px 0;
            padding: 12px;
            border-radius: 8px;
        }
        .shiki {
            background-color: color-mix(in srgb, #fff, #1e2025 3.6%) !important;
        }
    }
</style>
