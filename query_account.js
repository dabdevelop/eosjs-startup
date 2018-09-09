// 在 keys.json 文件里放入你的私钥

// 替换 xxxxxaccount 为你的账号
var account = "xxxxxaccount";

var EOS = require('./eosClient.js');
var eos = EOS();

// 查询账号权限、资源等信息
eos.getAccount(account).then((result) => {
    console.log(result);    
}).catch((err) => {
    console.log(err);
});

