import request from './config/request';

/**
 * 用户登录
 */
export const userLogin = (username, password) => request('/login', {
  username,
  password,
}, 'POST');
/**
 * 获取银行卡
 */
export const getCards = (query) => request('/cards', query);
