// 出售RAM
// 在 keys.json 文件里放入你的私钥

// 替换 xxxxxaccount 为你的账号，bytes 为出售内存的字节数量
var account = "xxxxxaccount";
var bytes = 4 * 1024;

var EOS = require('./eosClient.js');
var eos = EOS();

eos.contract('eosio').then(eosio => {
    eosio.sellram(account, bytes).then((result) => {
        console.log(result);
    }).catch((err) => {
      console.log(err);
    });
})