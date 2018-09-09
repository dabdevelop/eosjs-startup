## eosjs Startup

### 简介

[eosjs Startup](https://github.com/dabdevelop/eosjs-startup) 整理了eosjs常用代码，包括创建、查询EOS账号，EOS转账，购买RAM，出售RAM，抵押资源，取消抵押资源，生成密钥对等。

### 前提

前提是安装了[eosjs](https://github.com/EOSIO/eosjs)：

在此工程目录下，安装 `eosjs`

```bash
    npm i eosjs
```

### 使用方法

首先，在 `keys.json` 中添加私钥。然后对相应程序的参数进行修改。

js代码运行方式为：

```bash
    node query_account.js
```