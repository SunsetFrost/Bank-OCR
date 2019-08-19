<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="scan">扫描</van-tabbar-item>
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

export default {
    name: 'home',
}
</script>