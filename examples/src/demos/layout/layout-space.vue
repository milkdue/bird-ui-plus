<template>
    <div class="layout-space">
        <bird-row class="row" :gutter="10">
            <bird-col :span="3" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="3" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="3" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="3" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="3" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="3" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="3" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="3" class="col">
                <div class="content"></div>
            </bird-col>
        </bird-row>
    </div>
</template>

<style lang="less" scoped>
    .layout-space {
        .row {
            margin-bottom: 10px;
            .content {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 40px;
                border-radius: 4px;
                background-color: #d3dce6;
            }
        }
    }
</style>
