import request from './config/request';

/**
 * 用户登录
 */
export const userLogin = (username, password) => request('/user/login', {
  username,
  password,
}, 'POST');
/**
 * 获取银行卡列表
 */
export const getCards = (query) => request('/cards', query);
/**
 * 获取扫描列表
 */
export const getScans = (query) => request('/scan', query);