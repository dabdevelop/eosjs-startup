// 领回解除抵押的EOS
// 在 keys.json 文件里放入你的私钥

// 解除抵押三天后可以手动领回EOS，替换 xxxxxaccount 为你的账号
var account = "xxxxxaccount";

var EOS = require('./eosClient.js');
var eos = EOS();

eos.contract('eosio').then(eosio => {
    eosio.refund(account).then((result) => {
        console.log(result);
    }).catch((err) => {
      console.log(err);
    });
})