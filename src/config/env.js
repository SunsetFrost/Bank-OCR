let baseUrl = '';
const DEV_URL = 'http://10.118.133.107:9273';
const PRO_URL = 'http://10.206.192.81:9273';

if (process.env.NODE_ENV == 'development') {
  baseUrl = DEV_URL;
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = '';
}

export {
  baseUrl,
  DEV_URL,
  PRO_URL,
};
