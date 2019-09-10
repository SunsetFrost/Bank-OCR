<template>
  <div class="container">
    <video id="video" class="video" autoplay playsinline></video>
    <canvas id="canvas" class="canvas" width="200" height="200"></canvas>
    <van-overlay :show="isOverlayShow" />
    <van-button class="btn" @click="onCapture()">拍摄银行卡</van-button>
    <van-uploader style="z-index: 999;" :after-read="onUpload" />
    <van-dialog
      v-model="isDialogShow"
      show-cancel-button
      confirmButtonText="加入卡包"
      class="modal"
      @confirm="onConfirm()"
    >
      <div v-if="isScanFinish">
        <bank-card :card="this.card" />
      </div>
      <!-- <div v-else class="" -->
      <van-loading v-else size="36px" vertical>分析处理中...</van-loading>
    </van-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import { mapState, mapMutations } from "vuex";
import { Button, Dialog, Overlay, Loading, Notify, Uploader } from "vant";
import { setInterval, setTimeout } from "timers";
import BankCard from "../components/BankCard.vue";
import { addScan, addCard } from "../service";
import { Base64 } from "js-base64";

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Overlay);
Vue.use(Loading);
Vue.use(Uploader);

const constraints = {
  video: {
    facingMode: "environment",
    width: 250,
    height: 200
  },
  audio: false
};

export default {
  data() {
    return {
      ctx: null,
      currentStream: null,
      video: null,
      isOverlayShow: true,
      isDialogShow: false,
      isScanFinish: false,
      card: null,
      img: ""
    };
  },

  computed: {
    ...mapState(["login", "userInfo"])
  },

  mounted() {
    this.showVideo();
  },

  components: {
    BankCard
  },

  methods: {
    // 调用摄像头
    async showVideo() {
      const canvas = document.getElementById("canvas");
      this.ctx = canvas.getContext("2d");
      this.video = document.getElementById("video");

      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          this.currentStream = stream;
          this.video.srcObject = stream;
        } else {
          throw new Error("该设备没有摄像头");
        }
      } catch (error) {
        Notify("无法获取摄像设备");
      }
    },
    // 拍摄
    onCapture() {
      // if (!this.login) {
      //   Notify("匿名用户暂无权限");
      //   return;
      // }
      // 获取拍摄银行卡的base64内容
      this.ctx.drawImage(video, 0, 0, 200, 200);
      const canvas = document.getElementById("canvas");
      const imgOrigin = canvas.toDataURL("image/png");
      // this.img = encode(imgOrigin.split(",")[1]);
      this.img = Base64.encodeURI(imgOrigin.split(",")[1]);

      // 弹出Modal
      this.isDialogShow = true;

      // 开始请求分析状态
      this.getScanResult();
    },

    async onConfirm() {
      if (this.isScanFinish) {
        // 新增银行卡记录
        const result = await addCard({
          number: 54232462345532526664,
          user_id: this.userInfo.id,
          type: "储蓄卡",
          bank: "招商银行"
        });

        this.isScanFinish = false;
      } else {
        Notify("尚未获取到银行卡结果");
      }
    },

    // 获取扫描结果并更新状态
    async getScanResult() {
      const result = await addScan({
        img: this.img
      });
      console.log(result);
      return;

      // 模拟请求
      const sleep = m => new Promise(r => setTimeout(r, m));
      await sleep(2000);

      this.card = {
        card_id: 234546236,
        card_number: 54232462345532526664,
        card_type: "储蓄卡"
      };

      this.isScanFinish = true;
    },

    onUpload(file) {
      const imgOrigin = file.content;
      this.img = Base64.encodeURI(imgOrigin.split(",")[1]);

      // 弹出Modal
      this.isDialogShow = true;

      // 开始请求分析状态
      this.getScanResult();
    },
  }
};
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .video {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    z-index: 10;
    border: 1px solid #fff;
    // line-height: 200px;
  }
  .btn {
    color: #fff;
    background: transparent;
    margin-top: 100px;
    z-index: 10;
  }
  .canvas {
    display: none;
  }
  .modal {
    div {
      height: 200px;
      padding-top: 12px;
    }
  }
}
</style>
