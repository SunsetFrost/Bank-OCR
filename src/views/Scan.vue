<template>
    <div>
        <van-button @click="showVideo()">测试</van-button>
        <video id="video" autoplay playsinline></video>
        <canvas id="canvas" width="200" height="150"></canvas>
    </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);

const videoConstraints = {
    facingMode: 'environment'
}

const constraints = {
    video: videoConstraints,
    audio: false
};

export default {
    data() {
        return {
            ctx: null,
            currentStream: null,
            video: null,
        }
    },

    mounted() {

    },

    methods: {
        async showVideo() {
            const canvas = document.getElementById('canvas');
            this.ctx = canvas.getContext('2d');
            this.video = document.getElementById('video');
            console.log(this.video);

            try {
                if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                    const stream = await navigator.mediaDevices.getUserMedia(constraints);
                    console.log(stream);
                    this.currentStream = stream;
                    this.video.srcObject = stream;
                } else {
                    throw new Error('该设备没有摄像头');
                }
            } catch(error) {
                console.error(error);
            }
        }
    }

}
</script>

<style lang="less" scoped>

</style>