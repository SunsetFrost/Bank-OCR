import { async, reject } from "q";
import { baseUrl } from "./env";
import { resolve } from "url";

export default async (url = "", data = {}, type = "GET", method = "ajax") => {
  type = type.toUpperCase();
  url = baseUrl + url;

  // 拼接GET字符串
  if (type == "GET") {
    let dataStr = "";
    Object.keys(data).forEach(key => {
      dataStr += `${key}=${data[key]}&`;
    });

    if (dataStr !== "") {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
      url = `${url}?${dataStr}`;
    }
  }

  if (window.fetch && method == "fetch") {
    const requestConfig = {
      credentials: "include",
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      mode: "cors"
    };

    if (type == "POST") {
      Object.defineProperty(requestConfig, "body", {
        value: JSON.stringify(data)
      });
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject();
      }

      let sendData = "";
      if (type == "POST") {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader("Content-type", "application/json");
      requestObj.withCredentials = true;
      
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4) {
          if (requestObj.status == 200) {
            let obj = requestObj.response;
            if (typeof obj !== "object") {
              obj = JSON.parse(obj);
            }
            resolve(obj);
          } else {
            reject(requestObj);
          }
        }
      };
    });
  }
};
