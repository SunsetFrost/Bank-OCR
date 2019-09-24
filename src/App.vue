<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import { Notify } from 'vant';
import { mapState, mapMutations } from "vuex";
import { checkLogin } from "./service";

Vue.use(Notify);

export default {
  mounted() {
    this.init();
  },

  methods: {
    ...mapMutations(["RECORD_USERINFO"]),

    async init() {
      const result = await checkLogin();
      if (result.status) {
        this.RECORD_USERINFO({
          username: result.data.username
        });
      } else {
        Notify('用户尚未登录');
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style lang="less">
@import "./style/common";
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: #f8f8f8;
  font-size: 14px;
}
//vant样式
.van-field__left-icon {
  margin-right: 25px !important;
}
</style>
