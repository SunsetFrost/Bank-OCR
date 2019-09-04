import Mock from 'mockjs';
import { DEV_URL } from './env';

// Mock.mock(DEV_URL + '/login', {
//     'username': '@CNAME',
//     'user_id': '@natural(10000, 99999)',
//     'telephone': '@natural(100000000, 999999999)',
//     'regis_time': "@date()",
//     'role': "user",
//     'img': '@image(80x80, H)'
// })

// Mock.mock(DEV_URL + '/cards', {
//     'data|20': [
//         {
//             'card_id': '@natural(10000, 99999)',
//             'card_number': '@natural(100000000000000000, 999999999999999999)',
//             'user_id': '@natural(10000, 99999)',
//             'card_type': '@cword(3)',
//             'bank': '@cword(4)',
//             'create_time': "@date()"
//         }
//     ]
// })

// Mock.mock(DEV_URL + '/scan', {
//     'data|20': [
//         {
//            'log_id': '@natural(10000000000000, 99999999999999)',
//            'card': {
//                'id': '@natural(10000, 99999)',
//                'coordinate': {
//                    'x1': '@natural(100, 999)',
//                    'y1': '@natural(100, 999)',
//                    'x2': '@natural(100, 999)',
//                    'y2': '@natural(100, 999)',
//                    'x3': '@natural(100, 999)',
//                    'y3': '@natural(100, 999)',
//                    'x4': '@natural(100, 999)',
//                    'y4': '@natural(100, 999)',
//                }
//            },
//            'user_id': '@natural(10000, 99999)',
//            'start_scan_time': "@date()",
//            'time_consuming': "@date()",
//            'scan_result': '@boolean',
//            'scan_errmsg': '@cword(2)'
//         }
//     ]
// })