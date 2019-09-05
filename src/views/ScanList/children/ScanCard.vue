<template>
    <van-collapse-item :title="'扫描编号: ' + scan.id">
        <section class="scan-info">
            <div>
                <span>开始时间: {{scan.start_scan_time}}</span>
                <span>结束时间: {{scan.end_scan_time}}</span>
            </div>
            <div>
                <span>扫描状态: {{scan.scan_result}}</span>
                <span>扫描错误信息: {{scan.card_errmsg}}</span>
            </div>
        </section>
        <van-divider />
        <section class="scan-btn">
            <van-button type="info" size="small">详情</van-button>
            <van-button type="danger" size="small">删除</van-button>
        </section>
    </van-collapse-item>
</template>

<script>
import Vue from 'vue';
import { Button, Collapse, CollapseItem, Divider } from 'vant';

Vue.use(Button);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Divider);

export default {
    props: ['scan'],
}
</script>

<style lang="less" scoped>
.scan-info {
    display: flex;
    justify-content: space-around;
    div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;    
        span {
            display: inline-block;
            margin-bottom: 10px;    
        }
    }
}
.scan-btn {
    display: flex;
    justify-content: flex-end;
    button {
        margin-left: 12px;
    }
    button:last-child {
        margin-right: 24px;
    }
}
</style>