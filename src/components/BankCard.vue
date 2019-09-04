<template>
    <div class="card-container">
        <section class="card">
          <div class="card-main">
            <p>{{card.card_type? card.card_type: ''}}</p>
            <h4>{{card.card_number? card.card_number: ''}}</h4>
          </div>
          <div class="btn-group">
            <van-button icon="info">详情</van-button>
            <span class="divider">|</span>
            <van-button icon="scan">扫描记录</van-button>
            <span class="divider">|</span>
            <van-button icon="add">添加账单</van-button>
          </div>
        </section>
        <!-- <van-skeleton title avatar :row="2" /> -->
    </div>
</template>

<script>
import Vue from 'vue';
import { Button, Skeleton } from 'vant';

Vue.use(Button);
Vue.use(Skeleton);

export default {
  data() {
    return {};
  },
  props: ['card'],
};
</script>

<style lang="less" scoped>
    .card-container {
      padding: 10px 20px;
        .card {
          height: 150px;
          padding: 20px 12px 4px 20px;
          border-radius: 6px;
          color: #fff;
          background: linear-gradient(to right, #597b8d, #93abb8);
          // background: linear-gradient(to right, #757575, #a4a4a4);
          text-align: left;
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-between;
          .card-main {
            margin: 0px 16px;
            p {
              font-size: 14px;
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
