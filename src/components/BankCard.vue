<template>
  <div class="card-container">
    <section class="card" v-bind:style="styleObj">
      <div class="card-main">
        <h5>{{card? card.bank: ''}}</h5>
        <p>{{card? card.type: ''}}</p>
        <h4>{{card? card.number: ''}}</h4>
      </div>
      <div class="btn-group">
        <van-button icon="info-o">详情</van-button>
        <span class="divider">|</span>
        <van-button icon="plus">编辑</van-button>
        <span class="divider">|</span>
        <van-button icon="scan">扫描记录</van-button>
      </div>
    </section>
    <!-- <van-skeleton title avatar :row="2" /> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Skeleton } from "vant";

Vue.use(Button);
Vue.use(Skeleton);

export default {
  data() {
    return {};
  },
  props: ["card"],
  computed: {
    styleObj: function() {
      const randomIndex = Math.floor(Math.random() * Math.floor(5));
      const color = [
        'linear-gradient(to right, #597b8d, #93abb8)',
        'linear-gradient(to right, #0277bd, #81d4fa)',
        'linear-gradient(to right, #2e7d32, #a5d6a7)',
        'linear-gradient(to right, #4e342e, #bcaaa4)'
      ]
      return {
        background: color[randomIndex]
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
