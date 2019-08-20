<template>
    <div class="card-container">
        <van-skeleton title avatar :row="2" />
    </div>
</template>

<script>
import Vue from 'vue';
import { Skeleton } from 'vant';

Vue.use(Skeleton);

export default {
    data() {
        return {
            card: null,
        }
    }
}
</script>

<style lang="less" scoped>
    .card-container {
        height: 120px;
        margin: 20px;
        padding: 10px;
        border-radius: 6px;
        background: linear-gradient(to right, #616161, #9e9e9e);
    }
</style>