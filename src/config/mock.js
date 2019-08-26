import Mock from 'mockjs';
import { DEV_URL } from './env';

Mock.mock( DEV_URL + '/login', {
    'username': '@CNAME',
    'user_id': '@natural(10000, 99999)',
    'telephone': '@natural(100000000, 999999999)',
    'regis_time': "@date()",
    'role': "user",
})
