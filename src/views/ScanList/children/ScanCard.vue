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
      <van-button type="info" size="small" @click="onDetail">详情</van-button>
      <van-button type="danger" size="small" @click="onDelete">删除</van-button>
    </section>
  </van-collapse-item>
</template>

<script>
import Vue from "vue";
import { Button, Collapse, CollapseItem, Divider, Dialog, Notify } from "vant";
import moment from "moment";
import { deleteScan } from "../../../service";
import { async } from "q";

Vue.use(Button);
Vue.use(Collapse).use(CollapseItem);
Vue.use(Divider);

export default {
  props: ["scan", "getList"],

  computed: {
    formatScanDate() {
      return {
        start: moment(this.scan.start_scan_time).format("YYYY-MM-DD HH:mm:ss"),
        end: moment(this.scan.end_scan_time).format("YYYY-MM-DD HH:mm:ss")
      };
    }
  },

  methods: {
    onDetail() {
      this.$router.push(`/scan/${this.scan.id}`);
    },
    async onDelete() {
      Dialog.confirm({
        title: "删除扫描记录",
        message: "确定要删除当前记录吗?"
      })
        .then(async () => {
          try {
            const { status, data } = await deleteScan({ id: this.scan.id });
            if (status) {
                this.getList();
            } else {
              throw Error("删除失败");
            }
          } catch (error) {
            Notify("删除失败");
          }
        })
        .catch(() => {});
    }
  }
};
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