<template>
    <div>
        <section class="search">
            <van-search
                v-model="searchValue"
                placeholder="搜索银行卡OCR记录"
                shape="round"
                @search="onSearch"
            >
                <div slot="action" @click="onSearch">
                    <van-button icon="scan" type="info" size="small" style="margin: 0 12px;">
                      拍照
                    </van-button>
                </div>
            </van-search>
        </section>
        <section class="btn-group">
            <van-button color="#03a9f4" icon="scan" round class="btn-primary" @click="onScan()">拍照</van-button>
            <van-button icon="add-o" round @click="onUpload()">上传图片</van-button>
        </section>
        <section class="list">
          <div class="card-title">
            <van-icon name="debit-pay" size="20px"/>
            <span>最近添加的银行卡</span>
          </div>
          <van-cell v-for="item in cardList" :key="item.card_id">
            <bank-card :card="item"/>
          </van-cell>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button, Cell, Icon, Search, List, Panel, Toast } from 'vant';
import BankCard from '../components/BankCard.vue';
import {
  getCards,
} from '../service';

Vue.use(Button);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);
Vue.use(Panel);
Vue.use(Toast);

export default {
  data() {
    return {
      searchValue: '', // 银行卡搜索值
      cardList: [],
    };
  },

  mounted() {
    this.getCardList();
  },

  components: {
    BankCard,
  },

  methods: {
    onSearch() {
      return null;
    },

    async getCardList() {
      const result = await getCards();
      this.cardList = result.data;
    },

    onScan() {
      this.$router.push('/scan');
    },

    onUpload() {
      Toast('功能暂未开放');
    },
  },
};
</script>

<style lang="less" scoped>
    .btn-group {
        height: 120px;
        display: flex;
        display: -webkit-flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        margin: 20px;
        .btn-primary {
          color: #fff;
          background-color: #03a9f4;
          border-color: #03a9f4;
        }
    }
    .list {
      .card-title {
        margin: 12px 20px;
        display: flex;
        justify-content: start;
        span {
          color: #969799;
          margin-left: 8px;
        }
      }
    }
</style>
