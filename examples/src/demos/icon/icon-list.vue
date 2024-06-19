<template>
    <div class="icon-list">
        <template v-for="(value, key) in iconList">
            <h3 :id="title[key]" class="snippet-title">
                {{ title[key] }}
            </h3>
            <div class="item-list">
                <div class="icon-item" v-for="icon in value" :key="icon">
                    <bird-svg-icon
                        :name="icon"
                        :width="28"
                        :height="28"
                        hover
                        @click.native="clickButton(icon)"
                    ></bird-svg-icon>
                    <span class="name">{{ icon }}</span>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { getHighlighter } from "shikiji";
import IconList from "./icon";

const iconList = IconList;
const title = {
    color: "多彩图标",
    fill: "面性图标",
    outline: "线性图标"
};

const shiki = getHighlighter({
    themes: ["vitesse-light", "vitesse-dark"],
    langs: ["vue"]
});

function clickButton(icon) {
    const text = `<bird-svg-icon name="${icon}"></bird-svg-icon>`;
    const originCode = decodeURIComponent(text);

    shiki.then(highlighter => {
        let html = highlighter.codeToHtml(originCode, {
            lang: "vue",
            themes: {
                dark: "vitesse-dark",
                light: "vitesse-light"
            }
        });
        navigator.clipboard
            .writeText(text)
            .then(() => {
                // this.$message({
                //     type: "success",
                //     html: true,
                //     message: `<div style="display: flex;"><span style="margin-right: 4px;">复制成功: </span>${html}</div>`
                // });
            })
            .catch(error => {
                // this.$message({
                //     type: "error",
                //     message: error.message
                // });
            });
    });
}
</script>

<style lang="less" scoped>
    .icon-list {
        .snippet-title {
            margin-top: 1em;
            margin-bottom: 0.5em;
            font-weight: 600;
        }
        .item-list {
            display: flex;
            flex-wrap: wrap;
            .icon-item {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin: 0 -1px -1px 0;
                padding: 16px;
                width: 168px;
                height: 148px;
                font-size: 28px;
                border: 1px solid rgb(30 32 37 / 8%);
                transition: all 0.2s;
                flex-direction: column;
                cursor: pointer;
                .name {
                    font-size: 12px;
                    &:hover {
                        color: var(--primary-color-light);
                    }
                }
                :deep(.bird-svg-icon) {
                    transition: all 0.3s;
                }
                &:hover {
                    :deep(.bird-svg-icon) {
                        transform: scale(1.2);
                    }
                }
            }
        }
    }
</style>
