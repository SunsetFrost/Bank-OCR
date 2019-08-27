import Mock from 'mockjs';
import { DEV_URL } from './env';

Mock.mock(DEV_URL + '/login', {
    'username': '@CNAME',
    'user_id': '@natural(10000, 99999)',
    'telephone': '@natural(100000000, 999999999)',
    'regis_time': "@date()",
    'role': "user",
    'img': '@image(80x80, H)'
})

Mock.mock(DEV_URL + '/cards', {
    'data|20': [
        {
            'card_id': '@natural(10000, 99999)',
            'card_number': '@natural(100000000000000000, 999999999999999999)',
            'user_id': '@natural(10000, 99999)',
            'card_type': '@cword(3)',
            'bank': '@cword(4)',
            'create_time': "@date()"
        }
    ]
})
