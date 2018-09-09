// 在 keys.json 文件里放入你的私钥

// 替换 xxxxxaccount 为你的账号
var account = "xxxxxaccount";

var EOS = require('./eosClient.js');
var eos = EOS();

// 查询账号余额
eos.getTableRows(true, "eosio.token", account, "accounts").then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});