<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import './style/common';
html, body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: #f8f8f8;
  font-size: 14px;
}
  //vant样式
.van-field__left-icon {
  margin-right: 25px !important;
}
</style>
