<template>
    <van-collapse-item :title="'扫描编号: ' + scan.id">
        <section class="scan-info">
            <div>
                <span>开始时间: {{formatScanDate.start}}</span>
                <span>结束时间: {{formatScanDate.end}}</span>
            </div>
            <div>
                <span>扫描状态: {{scan.scan_result === 1? "成功":"失败"}}</span>
                <span>扫描信息: {{scan.card_errmsg? scan.card_errmsg:"暂无" }}</span>
            </div>
        </section>
        <van-divider />
        <section class="scan-btn">
            <van-button type="info" size="small" @click="onDetail()">详情</van-button>
            <van-button type="danger" size="small">删除</van-button>
        </section>
    </van-collapse-item>
</template>

<script>
import Vue from 'vue';
import { Button, Collapse, CollapseItem, Divider } from 'vant';
import moment from 'moment';

Vue.use(Button);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Divider);

export default {
    props: ['scan'],

    computed: {
        formatScanDate() {
            return {
                start: moment(this.scan.start_scan_time).format("YYYY-MM-DD HH:mm:ss"),
                end: moment(this.scan.end_scan_time).format("YYYY-MM-DD HH:mm:ss")
            }
        }
    },

    methods: {
        onDetail() {
            this.$router.push(`/scan/${this.scan.id}`);
        }
    }
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