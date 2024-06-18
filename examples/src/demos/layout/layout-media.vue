<template>
    <div class="layout-media">
        <bird-row :gutter="20">
            <bird-col class="col" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
                <div class="col-item"></div>
            </bird-col>
            <bird-col class="col" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
                <div class="col-item"></div>
            </bird-col>
            <bird-col class="col" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
                <div class="col-item"></div>
            </bird-col>
            <bird-col class="col" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
                <div class="col-item"></div>
            </bird-col>
            <bird-col class="col" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
                <div class="col-item"></div>
            </bird-col>
            <bird-col class="col" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
                <div class="col-item"></div>
            </bird-col>
            <bird-col class="col" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
                <div class="col-item"></div>
            </bird-col>
            <bird-col class="col" :xs="24" :sm="12" :md="6" :lg="4" :xl="3">
                <div class="col-item"></div>
            </bird-col>
        </bird-row>
    </div>
</template>

<style lang="less" scoped>
    .layout-media {
        .col {
            margin-bottom: 10px;
        }
        .col-item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40px;
            border-radius: 4px;
            background-color: #d3dce6;
        }
    }
</style>
