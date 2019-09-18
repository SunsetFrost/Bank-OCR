<template>
  <div>
    <van-nav-bar title="扫描详情" left-text="返回" left-arrow @click-left="onReturn" />
    <van-cell-group title="扫描信息">
      <van-cell title="扫描ID" :value="scan.id" />
      <van-cell title="扫描状态" label="扫描银行卡状态">
        <template slot="default">
          <span v-if="scan.scan_result">成功</span>
          <span v-else>失败</span>
        </template>
      </van-cell>
      <van-cell title="扫描信息" :value="scan.card_errmsg" label="扫描银行卡信息" />
    </van-cell-group>
    <van-cell-group title="操作信息">
      <van-cell title="开始时间" :value="formatScanDate.start" label="银行卡开始扫描时间" />
      <van-cell title="结束时间" :value="formatScanDate.end" label="银行卡结束扫描时间" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { Cell, CellGroup, NavBar } from "vant";
import { getScans } from "../service";
import moment from "moment";

export default {
  data() {
    return {
      scan: null
    };
  },

  mounted() {
    this.getScan(this.$route.params.id);
  },

  computed: {
    formatScanDate() {
      return {
        start: moment(this.scan.start_scan_time).format("YYYY-MM-DD HH:mm:ss"),
        end: moment(this.scan.end_scan_time).format("YYYY-MM-DD HH:mm:ss")
      };
    }
  },

  methods: {
    onReturn() {
      this.$router.go(-1);
    },

    async getScan(id) {
      const result = await getScans({
        id
      });
      this.scan = result.data[0];
    }
  }
};
</script>