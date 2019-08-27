<template>
    <div class="container">
        <video id="video" class="video" autoplay playsinline></video>
        <canvas id="canvas" class="canvas" width="200" height="200"></canvas>
        <van-overlay show="true"/>
        <van-button class="btn" @click="onCapture()">拍摄银行卡</van-button>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button, Overlay } from 'vant';

Vue.use(Button);
Vue.use(Overlay);

const videoConstraints = {
  facingMode: 'environment',
  width: 200, 
  height: 200,
};

const constraints = {
  video: videoConstraints,
  audio: false,
};

export default {
  data() {
    return {
      ctx: null,
      currentStream: null,
      video: null,
    };
  },

  mounted() {
    this.showVideo();
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
      this.ctx.drawImage(video, 0, 0, 200, 200);   
      
      const canvas = document.getElementById('canvas');
      const uploadContent = canvas.toDataURL('image/png');
      console.log(uploadContent);
      alert(uploadContent);      
    }
    //
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
}
</style>
