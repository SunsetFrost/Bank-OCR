<template>
  <div class="home">
    <section class="content">
      <h1>银行卡OCR识别</h1>
      <img alt="Vue logo" class="img" src="../assets/logo.png" width="160" />
      <van-cell-group>
        <van-field required left-icon="contact" v-model="username" placeholder="请输入用户名" />
        <van-field
          required
          left-icon="notes-o"
          type="password"
          v-model="password"
          placeholder="请输入密码"
        />
        <van-field
          required
          left-icon="notes-o"
          type="password"
          v-model="newPassword"
          placeholder="请再次输入密码"
        />
        <van-field left-icon="notes-o" type="password" v-model="email" placeholder="请输入邮箱" />
        <van-field left-icon="notes-o" type="password" v-model="mobile" placeholder="请输入手机号" />
      </van-cell-group>
      <van-button type="info" size="large" style="margin-top: 20px" @click="onRegister()">注册</van-button>
    </section>
    <home-footer></home-footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Field, CellGroup, Notify } from "vant";
import HomeFooter from "../components/Footer.vue";
import { userRegister, isUserExist } from "../service";

Vue.use(Button);
Vue.use(Field);
Vue.use(CellGroup);
Vue.use(Notify);

export default {
  data() {
    return {
      username: "",
      password: "",
      newPassword: "",
      email: "",
      mobile: ""
    };
  },

  components: {
    HomeFooter
  },

  methods: {
    async onRegister() {
      if (this.username === "" || this.password === "" || this.newPassword === "") {
        Notify("请输入必填项信息");
        return;
      } else if (this.password !== this.newPassword) {
        Notify("前后两次输入密码不一致");
        return;
      } else {
        const isExist = await isUserExist({
          username: this.username
        });
        if (!isExist.status) {
          Notify("用户已存在");
          throw new Error("用户已存在");
        }

        const result = await userRegister(this.username, this.password);
        if (result.status) {
          Notify("用户注册成功");
          this.$router.push("/login");
        } else {
          Notify("用户注册失败");
        }
      }
    }
  }
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
    p {
      margin: 12px 0px;
      color: rgba(69, 90, 100, 0.6);
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