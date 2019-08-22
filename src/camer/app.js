const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const video = document.getElementById('video');
const btn_open = document.getElementById('btn_open');
const btn_cls = document.getElementById('btn_cls');
const btn_capture = document.getElementById('btn_capture');
const btn_upload = document.getElementById('btn_upload');
let currentStream;

// 停止媒体流
function stopMediaTracks(stream) {
  stream.getTracks().forEach((track) => {
    track.stop();
  });
}

// 添加按钮事件
btn_open.addEventListener('click', async (event) => {
  const videoConstraints = {
    facingMode: 'environment',
  };

  const constraints = {
    video: videoConstraints,
    audio: false,
  };

  try {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      currentStream = stream;
      video.srcObject = stream;
    } else {
      throw new Error('该设备没有摄像头');
    }
  } catch (error) {
    console.error(error);
  }
});

btn_cls.addEventListener('click', async (event) => {
  if (typeof currentStream !== 'undefined') {
    stopMediaTracks(currentStream);
  }
});

btn_capture.addEventListener('click', async (event) => {
  ctx.drawImage(video, 0, 0, 200, 150);
});

btn_upload.addEventListener('click', (event) => {
  const uploadContent = canvas.toDataURL('image/png');
  console.log(uploadContent);
  alert(uploadContent);
});
