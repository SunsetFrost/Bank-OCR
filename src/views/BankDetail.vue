<template>
  <div>
    <van-nav-bar title="银行卡详情" left-text="返回" left-arrow @click-left="onReturn" />
    <van-cell-group title="银行卡信息">
      <van-cell title="银行卡号" :value="card.number" />
      <van-cell title="归属银行" :value="card.bank" label="归属银行卡信息" />
      <van-cell title="银行卡种类" :value="card.type" label="银行卡所属种类" />
    </van-cell-group>
    <van-cell-group title="操作信息">
        <van-cell title="加入日期" :value="createTime" label="银行卡加入卡包日期" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { Cell, CellGroup, NavBar } from "vant";
import { getCards } from "../service";
import moment from 'moment';

Vue.use(Cell).use(CellGroup);
Vue.use(NavBar);

export default {
    data() {
        return {
            card: null,
        }
    },

  mounted() {
      this.getCard(this.$route.params.id);
  },

  computed: {
      createTime() {
          return moment(this.card.create_time).format("YYYY-MM-DD HH:mm:ss");
      }
  },

  methods: {
    onReturn() {
      this.$router.go(-1);
    },

    async getCard(id) {
        const result = await getCards({
            id
        })
        this.card = result.data[0];
    },
  }
};
</script>