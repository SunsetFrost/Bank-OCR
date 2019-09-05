<template>
    <div>
        <van-nav-bar
            title="我的银行卡"
            left-text="返回"
            left-arrow
            @click-left="onReturn"
        />
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
        <section class="list">
          <van-cell v-for="item in cardList" :key="item.card_id">
            <bank-card :card="item"/>
          </van-cell>
        </section>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import { Cell, DropdownMenu, DropdownItem, NavBar } from 'vant';
import BankCard from '../components/BankCard.vue';
import {
  getCards,
} from '../service';

Vue.use(Cell);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(NavBar);

export default {
    data() {
        return {
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全部卡片', value: 0 },
                { text: '工商银行', value: 1 },
                { text: '招商银行', value: 2 },
                { text: '浦发银行', value: 3 },
            ],
            option2: [
                { text: '默认排序', value: 'a' },
                { text: '按加入时间排序', value: 'b' },
                { text: '按卡号排序', value: 'c' },
            ],
            cardList: [],
        }
    },

    mounted() {
        this.getCardList({
            user_id: this.userInfo.id
        });
    },  
    
    computed: {
        ...mapState([
            'login', 
            'userInfo',
        ]),
    },    

    components: {
        BankCard,
    },

    methods: {
        onReturn() {
            this.$router.go(-1);
        },

        async getCardList() {
            const result = await getCards({
                user_id: this.userInfo.id,
            });
            this.cardList = result.data;
        }
    }
}
</script>

<style lang="less" scoped>

</style>