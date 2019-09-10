import request from './config/request';

/**
 * 用户登录
 */
export const userLogin = (username, password) => request('/api/user/login', {
  username,
  password,
}, 'POST');
/** 
 * 退出登录
*/
export const userSignout = () => request('/api/user/signout');
/**
 * 获取银行卡列表
 */
export const getCards = (query) => request('/api/card', query);
/**
 * 增加银行卡
 */
export const addCard = (data) => request('/api/card', data, 'POST');
/**
 * 获取扫描列表
 */
export const getScans = (query) => request('/api/scan', query);
/**
 * 增加扫描记录
 */
export const addScan = (data) => request('/api/scan', data, 'POST');