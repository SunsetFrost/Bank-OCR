# 银行卡OCR 接口文档

## 目录：

[1.注册](#1注册)<br/>
[2.登录](#2登录)<br/>
[3.退出](#3退出)<br/>
[4.获取银行卡列表](#4获取银行卡列表)<br/>
[5.更新银行卡](#5更新银行卡)<br/>
[6.删除银行卡](#6删除银行卡)<br/>
[7.获取扫描列表](#7获取扫描列表)<br/>
[8.添加扫描](#8添加扫描)<br/>
[9.删除扫描记录](#9删除扫描记录)<br/>

### 1.注册

#### 请求URL:
```
http:10.206.192.81:9090/register
```

#### 请求方式：
```
POST
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|username      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |
|telephone      |N      |string     |电话号 |
|address        |N      |string     |地址   |
|captcha_code      |N       |string   | 验证码 |

#### 返回示例：
```javascript
{
    status: 1,
    msg: '注册成功'
}
```

### 2.登录

#### 请求URL:
```
http:10.206.192.81:9090/login
```

#### 请求方式：
```
POST
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|username      |Y       |string   | 用户名 |
|password      |Y       |string  | 密码 |
|captcha_code      |N       |string   | 验证码 |

#### 返回示例：
```javascript
{
    username: "1",
    user_id: 2,
    telephone: "11111111",
    regis_time: "2017-03-31T15:10:25+0800",
    role: "user"
}
```

### 3.退出

#### 请求URL:
```
http:10.206.192.81:9090/signout
```

#### 请求方式：
```
GET
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|

#### 返回示例：
```javascript
{
  status: 1,
  message: '退出成功'
}

```

### 4.获取银行卡列表

#### 请求URL:
```
http:10.206.192.81:9090/cards
```

#### 请求示例
[http:10.206.192.81:9090/cards?type=储蓄卡&bank=工商银行](http:10.206.192.81:9090/cards?type=储蓄卡&bank=工商银行)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|card_id    |N       |int   | 银行卡号 |
|user_id   |N       |int   | 用户ID |
|type      |N       |string   | 银行卡类型 |
|bank      |N       |string   | 所属银行 |
|order_by  |N       |int      | 排序方式id: 1:银行卡号 2：创建时间

#### 返回示例：
```javascript
[
    {
        card_id: 242235252,
        card_number: '242432523',
        user_id: 234235,
        card_type: '储蓄卡',
        bank: '工商银行',
        validation: '',
        img: 'asfdffafefaw',
        create_time: '2017-03-31T15:10:25+0800',
    },
    {
        ....
    }
]
```

### 5.更新银行卡

#### 请求URL:
```
http:10.206.192.81:9090/cards
```

#### 请求方式：
```
POST
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|card_id           |Y       |int   | 银行卡ID |
|user_id           |Y       |int   | 用户ID   |

#### 返回示例：
```javascript
{
    status: 1,
    msg: '修改银行卡信息成功'
}
```

### 6.删除银行卡

#### 请求URL:
```
http:10.206.192.81:9090/cards
```

#### 请求方式：
```
DELETE
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|card_id           |Y       |int   | 银行卡ID |

#### 返回示例：
```javascript
{
    status: 1,
    msg: '删除银行卡成功'
}
```

### 7.获取扫描列表

#### 请求URL:
```
http:10.206.192.81:9090/scan
```

#### 请求示例
[http:10.206.192.81:9090/scan?type=储蓄卡&bank=工商银行](http:10.206.192.81:9090/cards?type=储蓄卡&bank=工商银行)

#### 请求方式：
```
GET
```

#### 参数类型：query

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|log_id    |N       |int        | 扫描记录ID |
|card_id   |N       |int        | 银行卡ID |
|user_id   |N       |int        | 用户ID |
|scan_result      |N       |int   | 扫描结果： 0：成功  1： 出错 |
|order_by  |N       |int      | 排序方式id: 1:扫描ID 2：记录创建时间 3：扫描消耗时间

#### 返回示例：
```javascript
[
    {
        log_id: 51252553,
        card: {
            id: 242235252,
            coordinate: {
                x1:100
                y1:100
                x2:120
                y2:100
                x3:120
                y3:140
                x4:100
                y4:140
            }
        }
        user_id: 564454,
        start_scan_time: '2017-03-31T15:10:25+0800',
        time_consuming: '',
        scan_result: 0,
        scan_errmsg: ''
    },
    {
        ....
    }
]
```

### 8.添加扫描

#### 请求URL:
```
http:10.206.192.81:9090/scan
```

#### 请求方式：
```
POST
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|image           |Y       |string   | 原始图片的base64编码数据（原图大小上限1MB，支持JPG、PNG、BMP格式） |

#### 返回示例：
```javascript
{
    log_id: 51252553,
    card: {
        id: 242235252,
        coordinate: {
            x1:100
            y1:100
            x2:120
            y2:100
            x3:120
            y3:140
            x4:100
            y4:140
        }
    }
    start_scan_time: '2017-03-31T15:10:25+0800',
    time_consuming: '',
    scan_result: 0,
    scan_errmsg: ''
}
```

### 9.删除扫描记录

#### 请求URL:
```
http:10.206.192.81:9090/scan
```

#### 请求方式：
```
DELETE
```

#### 参数类型

|参数|是否必选|类型|说明|
|:-----|:-------:|:-----|:-----|
|scan_id           |Y       |int   | 银行卡ID |

#### 返回示例：
```javascript
{
    status: 1,
    msg: '删除扫描记录成功'
}
```