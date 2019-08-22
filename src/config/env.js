let baseUrl = '';

if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://localhost:9273';
} else if (process.env.NODE_ENV == 'production') {
  baseUrl = '';
}

export {
  baseUrl,
};
