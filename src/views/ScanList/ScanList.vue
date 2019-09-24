<template>
  <div>
    <van-nav-bar title="我的扫描记录" left-text="返回" left-arrow @click-left="onReturn" />
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <van-collapse v-model="activeNames" class="list">
      <scan-card v-for="item in scanList" :key="item.log_id" :scan="item" :getList="getScanList"></scan-card>
    </van-collapse>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { Collapse, Panel, DropdownItem, DropdownMenu, NavBar } from "vant";
import ScanCard from "./children/ScanCard.vue";
import { getScans } from "../../service";

Vue.use(Collapse);
Vue.use(Panel);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(NavBar);

export default {
  data() {
    return {
      scanList: [],
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部扫描", value: 0 },
        { text: "扫描成功", value: 1 },
        { text: "扫描失败", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "按扫描时间排序", value: "b" },
        { text: "按ID排序", value: "c" }
      ],
      activeNames: []
    };
  },

  mounted() {
    if (this.login) {
      this.getScanList();
    }
  },

  computed: {
    ...mapState(["login", "userInfo"])
  },

  components: {
    ScanCard
  },

  methods: {
    onReturn() {
      this.$router.go(-1);
    },

    async getScanList() {
      const result = await getScans();
      this.scanList = result.data;
    }
  }
};
</script>

<style lang="less" scoped>
</style>