<template>
  <div class="home">
    <section class="content">
      <h1>银行卡OCR识别</h1>
      <img alt="Vue logo" class="img" src="../assets/logo.png" width="160">
      <van-cell-group>
        <van-field
          left-icon="contact"
          v-model="username"
          placeholder="请输入用户名"
          class="test"
        />
        <van-field
          left-icon="notes-o"
          type="password"
          v-model="pwd"
          placeholder="请输入密码"
        />
      </van-cell-group>
      <van-button type="info" size="large" style="margin-top: 20px" @click="onLogin()">登录</van-button>
    </section>
    <home-footer></home-footer>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState, mapMutations } from 'vuex';
import {
  Button, Field, CellGroup, Notify,
} from 'vant';
import HomeFooter from '../components/Footer.vue';
import {
  userLogin,
} from '../service';

Vue.use(Button);
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(Notify);

export default {
  name: 'login',

  data() {
    return {
      username: '',
      pwd: '',
    };
  },

  computed: {
      ...mapState([
          'login', 
          'userInfo',
      ]),
  },

  components: {
    HomeFooter,
  },

  methods: {
    ...mapMutations([
      'RECORD_USERINFO',
    ]),

    async onLogin() {
      try {
        const result = await userLogin(this.username, this.pwd);
        this.RECORD_USERINFO(result);
        this.$router.push('/user');
      } catch (error) {
        Notify('用户名或密码不正确');
      }
    },
  },
};
</script>

<style lang="less" scoped>
  .home {
    padding: 40px 40px;
    .content {
      text-align: center;
      h1 {
        font-size: 24px;
        font-weight: 600;
      }
    }
  }
  .img {
    margin: 24px 0px 36px 0px;
  }
  .test {
    margin-right: 15px;
  }
</style>
