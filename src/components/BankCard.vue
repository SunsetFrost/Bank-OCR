<template>
  <div class="card-container">
    <section class="card" v-bind:style="styleObj">
      <div class="card-main">
        <h5>{{card && card.bank !== 'null'? card.bank: '未知银行'}}</h5>
        <p>{{card && card.type !== 'null'? card.type: '未知种类'}}</p>
        <h4>{{card? card.number: '未知号码'}}</h4>
      </div>
      <div class="btn-group">
        <van-button icon="info-o" @click="onDetail()">详情</van-button>
        <span class="divider">|</span>
        <van-button icon="plus">编辑</van-button>
        <span class="divider">|</span>
        <van-button icon="scan" @click="onScanRecord">扫描记录</van-button>
      </div>
    </section>
    <!-- <van-skeleton title avatar :row="2" /> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Skeleton, Notify } from "vant";
import { getScans } from "../service";

Vue.use(Button);
Vue.use(Skeleton);
Vue.use(Notify);

export default {
  data() {
    return {};
  },
  props: ["card"],
  computed: {
    styleObj: function() {
      const randomIndex = Math.floor(Math.random() * Math.floor(5));
      const color = [
        "linear-gradient(to right, #597b8d, #93abb8)",
        "linear-gradient(to right, #0277bd, #81d4fa)",
        "linear-gradient(to right, #2e7d32, #a5d6a7)",
        "linear-gradient(to right, #4e342e, #bcaaa4)"
      ];
      return {
        background: color[0]
      };
    }
  },
  methods: {
    onDetail() {
      this.$router.push(`/bankcard/${this.card.id}`);
    },
    async onScanRecord() {
      if (!!this.card) {
        // 查询对应的scan id
        try {
          const { data } = await getScans({
            card_id: this.card.id
          });
          if (Array.isArray(data) && data.length > 0) {
            const logId = data[0].id;
            this.$router.push(`/scan/${logId}`);
          } else {
            throw Error("未找到对应的扫描记录");
          }
        } catch (error) {
          Notify("未找到对应的扫描记录");
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.card-container {
  padding: 10px 20px;
  .card {
    height: 160px;
    padding: 20px 12px 4px 20px;
    border-radius: 6px;
    color: #fff;
    // background: linear-gradient(to right, #597b8d, #93abb8);
    // background: linear-gradient(to right, #757575, #a4a4a4);
    text-align: left;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .card-main {
      margin: 0px 16px 10px 16px;
      h5 {
        font-size: 16px;
        font-weight: 500;
      }
      p {
        font-size: 12px;
        color: #d9e3e8;
      }
      h4 {
        font-size: 18px;
        font-weight: 600;
        margin-top: 6px;
      }
    }
    .btn-group {
      display: flex;
      justify-content: start;
      button {
        color: #ffffff;
        background-color: inherit;
        border-color: transparent;
      }
      .divider {
        display: inline-block;
        line-height: 44px;
        color: #b0bec5;
      }
    }
  }
}
</style>
