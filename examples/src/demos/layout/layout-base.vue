<template>
    <div class="layout-base">
        <bird-row class="row">
            <bird-col :span="24" class="col">
                <div class="content"></div>
            </bird-col>
        </bird-row>
        <bird-row class="row">
            <bird-col :span="12" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="12" class="col">
                <div class="content"></div>
            </bird-col>
        </bird-row>
        <bird-row class="row">
            <bird-col :span="6" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="6" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="6" class="col">
                <div class="content"></div>
            </bird-col>
            <bird-col :span="6" class="col">
                <div class="content"></div>
            </bird-col>
        </bird-row>
        <bird-row class="row">
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
    .layout-base {
        .row {
            margin-bottom: 10px;
            .content {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 40px;
                border-radius: 4px;
            }
            .col:nth-of-type(odd) {
                .content {
                    background-color: #d3dce6;
                }
            }
            .col:nth-of-type(even) {
                .content {
                    background-color: #e5e9f2;
                }
            }
        }
    }
</style>
