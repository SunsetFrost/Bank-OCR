<template>
    <div class="container">
        <video id="video" class="video" autoplay playsinline></video>
        <canvas id="canvas" class="canvas" width="200" height="200"></canvas>
        <van-overlay show="true"/>
        <van-button class="btn" @click="onCapture()">拍摄银行卡</van-button>
        <van-dialog
          v-model="show"
          show-cancel-button
          confirmButtonText="加入卡包"
          class="modal"
          @confirm="onConfirm()"
        >
          <div v-if="isScanFinish">
            <bank-card :card='this.card' />
          </div>
          <!-- <div v-else class="" -->
          <van-loading v-else size="36px" vertical>
            分析处理中...
          </van-loading>
        </van-dialog>        
    </div>
</template>

<script>
import Vue from 'vue';
import { Button, Dialog, Overlay, Loading } from 'vant';
import { async } from 'q';
import { setInterval } from 'timers';
import BankCard from '../components/BankCard.vue';

Vue.use(Button);
Vue.use(Dialog);
Vue.use(Overlay);
Vue.use(Loading);

const videoConstraints = {
  facingMode: 'environment',
  width: 200, 
  height: 200,
};

const constraints = {
  video: videoConstraints,
  audio: false,
};

const card = {
  card_id: 234546236,
  card_number: 54232462345532526664,
  card_type: '储蓄卡',
}

export default {
  data() {
    return {
      ctx: null,
      currentStream: null,
      video: null,
      show: false,
      isScanFinish: false,
      card: card,
    };
  },

  mounted() {
    this.showVideo();
  },

  components: {
    BankCard,
  },

  methods: {
    // 调用摄像头
    async showVideo() {
      const canvas = document.getElementById('canvas');
      this.ctx = canvas.getContext('2d');
      this.video = document.getElementById('video');

      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          const stream = await navigator.mediaDevices.getUserMedia(constraints);
          this.currentStream = stream;
          this.video.srcObject = stream;
        } else {
          throw new Error('该设备没有摄像头');
        }
      } catch (error) {
        console.error(error);
      }
    },
    // 拍摄
    onCapture() {
      // 获取拍摄银行卡的base64内容
      this.ctx.drawImage(video, 0, 0, 200, 200);         
      const canvas = document.getElementById('canvas');
      const uploadContent = canvas.toDataURL('image/png');
     
      // 弹出Modal
      this.show = true;

      // 开始轮询请求分析状态
      this.rollingScanResult();
    },

    onConfirm() {
      if(this.isScanFinish) {

      } else {
        alert('尚未获取到银行卡结果')
      }
    },

    // 轮询扫描结果并更新状态
    rollingScanResult() {
      setInterval(this.getScanResult, 3000);
    },

    // 查询扫描结果
    async getScanResult() {
      this.isScanFinish = true;
    }
  },
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
      padding-top: 72px;
    }
  }
}
</style>
