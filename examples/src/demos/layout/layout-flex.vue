<template>
    <div class="layout-flex">
        <bird-row class="row" flex :gutter="10">
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
        <bird-row class="row" flex justify="start" :gutter="10">
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
        <bird-row class="row" flex justify="center" :gutter="10">
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
        <bird-row class="row" flex justify="end" :gutter="10">
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
        <bird-row class="row" flex justify="space-around" :gutter="10">
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
        <bird-row class="row" flex justify="space-between" :gutter="10">
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
        <bird-row class="row" flex justify="space-evenly" :gutter="10">
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
    .layout-flex {
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
