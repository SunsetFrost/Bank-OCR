import { baseUrl } from './env';
import { async } from 'q';

export default async (url = '', data = {}, type = 'GET', method = 'fetch') => {
    url = baseUrl + url;

    if (type == 'GET') {
		let dataStr = ''; //数据拼接字符串
		Object.keys(data).forEach(key => {
			dataStr += key + '=' + data[key] + '&';
		})

		if (dataStr !== '') {
			dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url = url + '?' + dataStr;
		}
    }

    
    let requestConfig = {
        credentials: 'include',
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: "cors",
    }
    
    if (type == 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }

    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw new Error(error);
    }
}