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
 * 增加银行卡
 */
export const addCard = (data) => request('/card', data, 'POST');
/**
 * 获取扫描列表
 */
export const getScans = (query) => request('/scan', query);
/**
 * 增加扫描记录
 */
export const addScan = (data) => request('/scan', data, 'POST');