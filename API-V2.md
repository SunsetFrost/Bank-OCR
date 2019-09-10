# 银行卡OCR 接口文档

## 目录：

[1.注册](#1注册)  
[2.登录](#2登录) 分为 User 和 Admin  
[3.退出](#3退出)  
[4.获取银行卡列表](#4获取银行卡列表)  
[5.删除银行卡](#5删除银行卡)  
[6.扫描](#6扫描)  
[7.添加银行卡和扫描记录](#添加银行卡和扫描记录)  
[8.获取扫描记录列表](#7获取扫描列表) 分为 User 和 Admin  
[9.删除扫描记录](#9删除扫描记录)  


项目根目录:   
http://100.118.116.196:8080/   

### 1.注册
#### 请求URL: 
```
http://100.118.116.196:8080/user/register
```
请求方式：POST
参数类型
|参数|是否必选|类型|说明|
User
|username      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |
|telephone      |N      |string     |电话号 |

返回示例：
{
    status: 1,
    msg: '注册成功'
}
```

2.登录
请求URL:
http://100.118.116.196:8080/user/login
请求方式：
POST 

参数类型

|参数|是否必选|类型|说明|
|username      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |

返回示例：

{
“user”:{
username: "1",
    userId: 2,
    telephone: "11111111",
    regis_time: "2017-03-31T15:10:25+0800",
    role: "user"/"admin"
}
}
或错误日志
{
“error”: "账号或密码错误"
}
3.退出
请求URL:
http://100.118.116.196:8080/user/signout

#### 请求方式：
GET

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|

#### 返回示例：
{
  status: 1,
  message: '退出成功'
}

```

4.获取银行卡列表

#### 请求URL:
http://100.118.116.196:8080/card/queryAllCard

#### 请求示例
http://100.118.116.196:8080/card/queryAllCard?userId=2

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|user_id   |N       |int   | 用户ID |

#### 返回示例：

{
"cardDetailList":
[
	{"cardId":2,"userId":1,"cardNumber":"6227263602055332274","cardType":"信用卡","bank":"建设银行","validation":0,"cardCoordinate":"90,100,120,100,120,130,100,100","img":"E:\\QJMN\\images\\","createTime":"2019-08-27 15:37:57.0","status":1}
,
{"cardId":1,"userId":1,"cardNumber":"6212263602055332274","cardType":"储蓄卡","bank":"工商银行","validation":0,"cardCoordinate":"100,100,120,100,120,140,100,140","img":"E:\\QJMN\\images\\","createTime":"2019-08-27 15:29:14.0","status":1}
]
}

```
5.删除银行卡

#### 请求URL:

http://100.118.116.196:8080/card/del

#### 请求示例:
```
http://100.118.116.196:8080/card/del?cardId=1           

```

#### 请求方式：
```
GET
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|cardId           |N       |int   | 银行卡ID |

#### 返回示例：
{
    status: 1,
    msg: '删除银行卡成功'
}


```

6.添加扫描

#### 请求URL:
```
http://100.118.116.196:8080/card/scan
```

#### 请求方式：
```
POST
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|image           |Y       |string   | 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式） |

#### 返回示例：
{
    "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABuCAYAAADRebYyAAAMSmlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnltSSWiBCEgJvYlSpEsJoUUQkCrYCEkgocSYEETsyLIKrl1EQF3RVRFF1wLIWlHXuij2/lBEZWVdLNhQeZMCuvq99753vm/u/XPmnP UzL13BgCd",
"scanResult": 
"{  \"ret\": 0,  \"errmsg\": \"输入的参数不是合法的base64编码\",  \"base64Len\": 15,  \"data\": {    \"cardNum\": \"1234 5678 9012 3456\",    \"bank\": \"招商银行\",    \"cardType\": \"储蓄卡\",    \"validation\": \"True\",    \"coord\": []  }}"
}

```


1. 添加银行卡和扫描记录
http://100.118.116.196:8080/card/addCardAndLog

POST
|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|cardNumber |N       |String|  |
|cardCoordinate | N       |String|  |
|cardType | N      |String|  |
|bank| N       |String|  |
|validation | N       |int|  |(0或1)
|startScanTime| N     |String|  |
|timeConsuming | N       |double|  |
|scanResult | N       |int|  |(0或1)
|scanErrmsg| N       | String |  |
| image | N      |String|  |

#### 返回示例：
{"cardMsg":"成功添加该银行卡","logStatus":1,"logMsg":"扫描结束，日志添加成功","cardStatus":1}
或
{"cardMsg":"该卡已存在于您的卡包，无需重复添加","logStatus":1,"logMsg":"扫描结束，日志添加成功","cardStatus":0}

8. 获取扫描记录列表

#### 请求URL:
```
http://100.118.116.196:8080/log/queryLogsByUserId

```

#### 请求示例
http://100.118.116.196:8080/log/queryLogsByUserId

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|

#### 返回示例：
{
"ocrScanLogList":
[
{"logId":2,"userId":1,"cardNumber":"6212263602055332274","cardCoordinate":"100,100,120,100,120,140,100,140","cardType":"储蓄卡","bank":"工商银行","validation":1,"startScanTime":"2019-08-27 15:29:14.0","timeConsuming":0.0067,"scanResult":0,"scanErrmsg":"","status":1}
,{"logId":4,"userId":1,"cardNumber":"6227263602055332274","cardCoordinate":"90,100,120,100,120,130,100,100","cardType":"信用卡","bank":"建设银行","validation":0,"startScanTime":"2019-08-27 15:42:32.0","timeConsuming":0.0055,"scanResult":1,"scanErrmsg":"图片太模糊","status":1}
]
}


9.删除扫描记录

#### 请求URL:
```
http://100.118.116.196:8080/log/del
```

#### 请求方式： http://100.118.116.196:8080/log/del?logId=1

```
GET
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
logId          |N       |int   | 扫描记录ID |

#### 返回示例：
{
"msg":"删除成功",
"status":1
}


二、	版本变更记录
版本号	变更描述
V1.0	后端与前端的接口描述
V1.1	
V1.2	修改了接口URL，仅作第一阶段测试
V1.3	修改了接口URL，供测试及连调



