<template>
    <div class="container">
        <section class="user">
            <van-skeleton title avatar :row="2" />
        </section>
        <section>
            <van-cell-group style="margin-bottom: 30px;">
                <van-cell title="我的银行卡" is-link to="scan" />
                <van-cell title="我的OCR记录" is-link to="scan" />
            </van-cell-group>
            <van-cell-group>
                <van-cell title="设置" is-link to="card" />
                <van-cell title="注销" is-link to="card" />
            </van-cell-group>
        </section>
        <section></section>
    </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup, Skeleton } from 'vant';

Vue.use(Cell).use(CellGroup);
Vue.use(Skeleton);

export default {
    
}
</script>

<style lang="less" scoped>
.container {
    > section {
        margin-bottom: 20px;
    }
    .user {
        padding: 20px 12px;
        background: #fff;
    }

}
</style>