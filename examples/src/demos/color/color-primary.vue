<template>
    <div class="color-primary">
        <div class="primary">
            <span>primary-color-light</span>
        </div>
        <div class="primary-series">
            <div
                class="box"
                v-for="num in 10"
                :style="{
                    backgroundColor: `var(--primary-color-light-${num})`
                }"
            ></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .color-primary {
        width: 100%;
        .primary {
            width: 40%;
            height: 100px;
            border-radius: var(--radius-md) var(--radius-md) 0 0;
            text-align: center;
            color: var(--white);
            background-color: var(--primary-color-light);
            line-height: 100px;
        }
        .primary-series {
            display: flex;
            overflow: hidden;
            width: 40%;
            height: 30px;
            border-radius: 0 0 var(--radius-md) var(--radius-md);
            .box {
                width: 10%;
                height: 30px;
                height: 100%;
            }
        }
    }
</style>
