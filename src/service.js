import fetch from './config/fetch';

/**
 * 用户登录
 */
export const userLogin = (username, password) => fetch('/user/login', {
  username,
  password,
}, 'POST');
