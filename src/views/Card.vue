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
                    <van-button icon="scan" type="info" size="small" style="margin: 0 12px;">拍照</van-button>
                </div>
            </van-search>
        </section>
        <section class="btn-group">
            <van-button icon="scan" round  type="info" size="large">拍照</van-button>
            <van-button icon="add-o" round  size="large">上传图片</van-button>
        </section>
        <section class="list">
            <bank-card 
                v-for="item in cardList" 
                :key="item"
            />
        </section>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button, Search, List } from 'vant';
import BankCard from  '../components/BankCard';

Vue.use(Button);
Vue.use(Search);
Vue.use(List);

export default {
    data() {
        return {
            searchValue: '', // 银行卡搜索值
            cardList: [1, 2, 3, 4, 5, 6, 7, 8],
        }
    },

    components: {
        BankCard,
    },

    methods: {
        onSearch() {
            return null;
        }
    }
}
</script>

<style lang="less" scoped>
    .btn-group {
        height: 120px;
        display: flex;
        display: -webkit-flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        margin: 20px 16px;
    }
</style>