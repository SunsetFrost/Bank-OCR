<template>
    <div class="container">       
        <section class="user">
            <div v-if="login" class="login-container">
                <div>
                    <van-image round width="60" height="60" src="http://dummyimage.com/70x70/64b5f6/FFF&text=T"></van-image>
                </div>
                <div class="login-info">
                    <h3 align="left">{{userInfo.username}}</h3>
                    <p>用户ID： 2314532523544643</p>
                </div>
            </div>
            <div v-else class="login-container">
                <div class="login-icon">
                    <van-icon name="user-circle-o" size="70px" color="#1989fa"></van-icon>
                </div>
                <div class="login-info">
                    <router-link to="/login">
                        <h3 align="left">立即登录</h3>
                    </router-link>
                    <p>登陆后可解锁个人卡包等更多功能</p>
                </div>
            </div>
        </section>
        <section class="main">
            <van-cell-group style="margin-bottom: 30px;">
                <van-cell title="我的银行卡" icon="credit-pay" is-link to="cardList" />
                <van-cell title="我的OCR记录" icon="scan" is-link to="scanList" />
            </van-cell-group>
            <van-cell-group>
                <van-cell title="设置" icon="setting-o" is-link clickable @click="onConfig()" />
                <van-cell title="注销" icon="stop-circle-o" is-link clickable @click="onLogout()" />
            </van-cell-group>
        </section>
        <section></section>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutatimapMutations, mapMutations } from 'vuex';
import { 
    Cell, 
    CellGroup, 
    Dialog,
    Icon, 
    Image, 
    Skeleton,
    Toast,
    } from 'vant';
import { userSignout } from '../service';

Vue.use(Cell).use(CellGroup);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Skeleton);
Vue.use(Toast);

export default {
    data() {
        return {

        }
    },

    mounted() {

    },

    computed: {
        ...mapState([
            'login', 
            'userInfo',
        ]),
    },

    methods: {
        ...mapMutations([
            'OUT_LOGIN',
        ]),

        async onLogout() {
            Dialog.confirm({
                title: '注销',
                message: '确定要退出当前账户吗？'
            }).then(async () => {
                // on confirm
                const reuslt = await userSignout();
                console.log(reuslt);
                this.OUT_LOGIN();
            }).catch(() => {
                // on cancel
            });
        },

        onConfig() {
            Toast('功能暂未开放');
        },
    }
};
</script>

<style lang="less" scoped>
.container {
    > section {
        margin-bottom: 20px;
    }
    .user {
        padding: 20px 12px;
        background: #fff;
        .login-container {
            display: flex;
            flex: 1 1 auto;
            justify-content: start;
            margin-left: 20px;
            .login-icon {
                width: 80px;
                height: 80px;
            }
            .login-info {
                margin-left: 18px;
                a {
                    color: inherit;
                }
                h3 {
                    align-content: left;
                    margin: 4px 0px 14px 0px;
                }
                p {
                    font-size: 14px;
                    color: #7d7e80;
                    margin: 2px;
                }
            }
        }
    }
}
</style>
