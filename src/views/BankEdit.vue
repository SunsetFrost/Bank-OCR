<template>
  <div>
    <van-nav-bar title="编辑银行卡" left-text="返回" left-arrow @click-left="onReturn" />
    <van-cell-group title="银行卡信息">
      <van-field label="银行卡号" v-model="card.number" placeholder="请输入卡号" />
      <van-field label="归属银行" v-model="card.bank" placeholder="请输入归属银行" />
      <van-field label="银行卡种类" v-model="card.type" placeholder="请输入银行卡种类" />
    </van-cell-group>
    <div style="text-align: center">
      <van-button style="width:240px; margin: 18px auto" type="info" @click="onSave">保存</van-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  Button, CellGroup, Field, Notify,
} from 'vant';
import moment from 'moment';
import { getCards, updateCard } from '../service';

Vue.use(Button);
Vue.use(CellGroup);
Vue.use(Field);

export default {
  data() {
    return {
      card: null,
    };
  },

  mounted() {
    this.getCard(this.$route.params.id);
  },

  methods: {
    onReturn() {
      this.$router.go(-1);
    },

    async getCard(id) {
      const result = await getCards({
        id,
      });
      if (result.status) {
        this.card = result.data[0];
      } else {
        Notify('无法获取该银行卡信息');
        this.$router.go(-1);
      }
    },

    async onSave() {
      if (
        this.card.number.trim() !== ''
        || this.card.type.trim() !== ''
        || this.card.bank.trim() !== ''
      ) {
        const result = await updateCard({
          id: this.card.id,
          number: this.card.number,
          bank: this.card.bank,
          type: this.card.type,
        });
        if (result.status) {
          Notify('保存成功');
        } else {
          Notify('保存失败');
        }
      } else {
        Notify('字段不能为空');
      }
    },
  },
};
</script>
