import request from './config/request';

/**
 * 用户登录
 */
export const userLogin = (username, password) => request('/login', {
  username,
  password,
}, 'POST');
