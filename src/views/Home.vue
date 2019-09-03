<template>
    <div>
        <router-view />
        <van-tabbar route>
            <van-tabbar-item
                replace
                to="/scan"
                icon="scan"
            >
                扫描
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/card"
                icon="home-o"
            >
                首页
            </van-tabbar-item>
            <van-tabbar-item
                replace
                to="/user"
                icon="user-o"
            >
                我的
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

export default {

};
</script>

<style lang="less" scoped>

</style>
