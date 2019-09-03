import { 
    RECORD_USERINFO,
    OUT_LOGIN,
   } from './mutation-types';
  
  export default {
      // 记录用户信息
      [RECORD_USERINFO](state, info) {
          state.userInfo = info;
          state.login = true;
      },
      // 退出用户
      [OUT_LOGIN](state) {
        state.userInfo = {};
        state.login = false;
      }
  }