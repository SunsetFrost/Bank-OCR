let baseUrl = '';
const DEV_URL = 'http://100.118.116.234:9273';
// const DEV_URL = 'http://100.118.116.196:8080';
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
