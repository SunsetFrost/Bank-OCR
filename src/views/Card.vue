<template>
  <div>
    <section class="search">
      <!-- <van-search v-model="searchValue"  shape="round" @search="onSearch">
        <div slot="action" @click="onSearch">
          <van-button icon="scan" type="info" size="small" style="margin: 0 12px;">拍照</van-button>
        </div>
      </van-search>-->
      <van-search placeholder="请输入搜索关键词" v-model="value" />
    </section>
    <section class="btn-group">
      <van-button color="#03a9f4" icon="scan" round class="btn-primary" @click="onScan()">拍照</van-button>
      <van-uploader :after-read="onAfterRead">
        <van-button icon="add-o" round @click="onUpload()">上传图片</van-button>
      </van-uploader>
    </section>
    <section class="list">
      <div class="card-title">
        <van-icon name="debit-pay" size="20px" />
        <span>最近添加的银行卡</span>
      </div>
      <div style="margin-bottom: 60px" v-if="cardList.length">
        <van-cell v-for="item in cardList" :key="item.card_id">
          <bank-card :card="item" />
        </van-cell>
      </div>
    </section>
    <van-dialog
      v-model="isDialogShow"
      show-cancel-button
      confirmButtonText="加入卡包"
      class="modal"
      @confirm="onConfirm()"
      @cancel="onCancel()"
    >
      <div v-if="isScanFinish">
        <bank-card :card="this.card" />
      </div>
      <van-loading v-else size="36px" vertical>分析处理中...</van-loading>
    </van-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import {
  Button,
  Cell,
  Icon,
  Search,
  List,
  Panel,
  Toast,
  Uploader,
  Dialog,
  Loading,
  Notify
} from "vant";
import BankCard from "../components/BankCard.vue";
import { getCards, addScan, addCard, updateCard } from "../service";
import { encode } from "url-safe-base64";

Vue.use(Button);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List);
Vue.use(Panel);
Vue.use(Toast);
Vue.use(Uploader);
Vue.use(Dialog);
Vue.use(Loading);
Vue.use(Notify);

export default {
  data() {
    return {
      searchValue: "", // 银行卡搜索值
      cardList: [],

      isDialogShow: false,
      isScanFinish: false,

      card: null,
      img: ""
    };
  },

  mounted() {
    if (this.login) {
      this.getCardList();
    }
  },

  computed: {
    ...mapState(["login", "userInfo"])
  },

  components: {
    BankCard
  },

  methods: {
    onSearch() {
      return null;
    },

    async getCardList() {
      const result = await getCards({});
      this.cardList = result.status ? result.data : [];
    },

    onScan() {
      this.$router.push("/scan");
    },

    onAfterRead(file) {
      const imgOrigin = file.content;
      this.img = encode(imgOrigin.split(",")[1]);

      // 弹出Modal
      this.isDialogShow = true;

      // 开始请求分析状态
      this.getScanResult();
    },

    // 获取扫描结果并更新状态
    async getScanResult() {
      const result = await addScan({
        img: this.img
      });
      if (result.status) {
        this.card = {
          ...result.data
        };
        this.isScanFinish = true;
      } else {
        this.isDialogShow = false;
        Notify(`识别该银行卡失败`);
      }
    },

    async onConfirm() {
      if (this.isScanFinish) {
        const result = await updateCard({
          id: this.card.id
        });
        this.getCardList();
      } else {
        Notify("尚未获取到银行卡结果");
      }
      this.isScanFinish = false;
      this.card = null;
      this.img = "";
    },

    onCancel() {
      this.isScanFinish = false;
      this.card = null;
      this.img = "";
    }
  }
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
  .van-uploader {
    .van-uploader__wrapper {
      .van-uploader__input-wrapper {
        width: 100%;
        button {
          width: 100%;
        }
      }
    }
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
.modal {
  div {
    height: 200px;
    padding-top: 12px;
  }
}
</style>
<style lang="less">
.van-uploader {
  .van-uploader__wrapper {
    .van-uploader__input-wrapper {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
}
</style>