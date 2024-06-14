<template>
    <div class="bird-ui-develop">
        <div class="scroller"></div>
        <div class="main">
            <section class="chat">
                <div v-for="(item, index) in list" ref="$dialog" class="dialog"
                    :class="{ you: !(index % 2), me: !!(index % 2) }">
                    <figure>
                        <img :src="item.avatar" />
                        <p>{{ item.content }}</p>
                    </figure>
                </div>
            </section>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import data from "./contribution/index.json";
const list = ref(data);
const $dialog = ref([]);
const onScroll = () => {
    const chats = $dialog.value;
    document.body.style.overflowY = "auto";
    const { scrollTop, scrollHeight, clientHeight } =
        document.scrollingElement;
    const phase = scrollTop / (scrollHeight - clientHeight);
    document.body.style.setProperty("--phase", phase + "");
    chats.forEach((e, i) => {
        const step = 1 / chats.length;
        const focalPoint = step * (i - 1);
        const focal = Math.min(
            Math.max(1 - (phase - focalPoint) / step, -1),
            1
        );
        e.style.setProperty("--focal", focal);
        e.style.opacity = Math.min(Math.max(1 + focal * 2, 0), 1);

        const dist = (phase - step * i) / step;
        e.style.filter = `blur(${Math.min(Math.abs(dist ** 2 * 0.5), 1.2)}rem)`;
    });
};
onMounted(() => {
    window.addEventListener("scroll", onScroll);
    onScroll();
});

onBeforeUnmount(() => {
    document.body.style.overflowY = "hidden";
    window.removeEventListener("scroll", onScroll);
});
</script>

<style lang="less">
.bird-ui-develop {
    position: relative;
    margin-top: @top-bar-height;
    height: calc(100% - @top-bar-height);

    .scroller {
        position: relative;
        overflow-x: hidden;
        width: 100%;
        height: 1000vh;
    }

    .main {
        position: fixed;
        top: @top-bar-height;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: calc(100% - @top-bar-height);
        font-size: 2.4rem;
        transform-style: preserve-3d;
        perspective: 15rem;

        @media only screen and (width <=600px) {
            font-size: 1.6rem;
        }

        .chat {
            position: relative;
            display: flex;
            margin: 0 auto;
            padding: 1rem;
            width: 100%;
            max-width: 80rem;
            height: 100%;
            transform-style: preserve-3d;
            transform-origin: bottom center;
            transform: translateY(calc(-50% + 10rem)) translateZ(calc(100vh * var(--phase, 0))) rotateX(90.1deg);
            flex-direction: column-reverse;

            .dialog {
                position: relative;
                display: flex;
                align-items: flex-end;
                width: 100%;
                height: 100%;
                opacity: calc(1 - var(--focal));
                transform: rotateX(-90deg);
                transform-origin: center bottom;
                flex: 1;

                figure {
                    position: absolute;
                    display: flex;
                    align-items: flex-end;
                    width: 100%;

                    img {
                        width: 5rem;
                        height: 5rem;
                        border: solid 1px rgb(0 0 0 / 30%);
                        border-radius: 5rem;
                        margin-inline-end: 1rem;
                    }

                    p {
                        padding: 2rem;
                        max-width: 60%;
                        border: solid 1px rgb(0 0 0 / 30%);
                        border-radius: 0.5rem;
                        color: rgb(0 0 0 / 70%);
                        background-color: lightsteelblue;

                        @media only screen and (width <=600px) {
                            padding: 1rem;
                        }
                    }
                }

                &.me {
                    justify-content: flex-end;

                    img {
                        margin-inline: 1rem 0;
                    }

                    figure {
                        flex-direction: row-reverse;

                        p {
                            background-color: palegoldenrod;
                        }
                    }
                }
            }
        }
    }
}
</style>