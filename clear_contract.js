// 清空合约
// 在 keys.json 文件里放入你的私钥

// 替换 xxxxxaccount 为你的账号
var account_name = "xxxxxaccount";

var EOS = require('./eosClient.js');
var eos = EOS();

eos.setcode(account_name, 0, 0, new Uint8Array());