import request from './config/request';

/**
 * 用户登录
 */
export const userLogin = (username, password) => request(
  '/api/user/login',
  {
    username,
    password,
  },
  'POST',
);
/**
 * 用户注册
 */
export const userRegister = (username, password) => request(
  '/api/user/register',
  {
    username,
    password,
  },
  'POST',
);
/**
 * 退出登录
 */
export const userSignout = () => request('/api/user/signout');
/**
 * 获取登录态
 */
export const checkLogin = () => request('/api/user/checkLogin');
/**
 * 用户名是否存在
 */
export const isUserExist = data => request('/api/user/isExist', data, 'POST');
/**
 * 获取银行卡列表
 */
export const getCards = query => request('/api/card', query);
/**
 * 通过卡号获取银行卡列表
 */
export const getCardsByNumber = query => request('/api/card/queryByNumber', query);
/**
 * 增加银行卡
 */
export const addCard = data => request('/api/card', data, 'POST');
/**
 * 更新银行卡
 */
export const updateCard = data => request('/api/card/:id', data, 'POST');
/**
 * 获取扫描列表
 */
export const getScans = query => request('/api/scan', query);
/**
 * 增加扫描记录
 */
export const addScan = data => request('/api/scan', data, 'POST');
/**
 * 删除扫描记录
 */
export const deleteScan = data => request('/api/scan/delete', data, 'POST');
