let baseUrl = '';

if(process.env.NODE_ENV == 'development') {
    baseUrl = 'http://localhost:2732';
} else if(process.env.NODE_ENV == 'production') {
    baseUrl = '';
}

export {
    baseUrl,
}