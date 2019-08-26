let baseUrl = '';
const DEV_URL = 'http://localhost:9273';
const PRO_URL = 'http://10.206.192.81:9273';

if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://localhost:9273';
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = '';
}

export {
  baseUrl,
  DEV_URL,
  PRO_URL,
};
