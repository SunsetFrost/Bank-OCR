<template>
  <div>
    <van-nav-bar title="编辑银行卡" left-text="返回" left-arrow @click-left="onReturn" />
  </div>
</template>

<script>
import Vue from "vue";
import { CellGroup, Field } from "vant";
import { getCards, updateCard } from "../service";
import moment from "moment";

Vue.use(CellGroup);
Vue.use(Field);

export default {
  data() {
    return {
      card: null
    };
  },

  mounted() {
    this.getCards(this.$route.params.id);
  },

  methods: {
    onReturn() {
      this.$router.go(-1);
    },

    async getCard(id) {
      const result = await getCards({
        id
      });
      this.card = result.data[0];
    }
  }
};
</script>