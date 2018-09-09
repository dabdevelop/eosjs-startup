// 解除CPU和NET资源抵押
// 在 keys.json 文件里放入你的私钥

// 替换 xxxxxaccount 和 toaccount 为你的账号，account 是解除抵押的账号，receiver 是接收账号
// unstakeNET 是解除抵押 NET 的 FO 数量， unstakeCPU 是解除抵押 CPU 的 FO 数量
var account = "xxxxxaccount";
var receiver = "toaccount";
var unstakeCPU = 1;
var unstakeNET = 1;

var EOS = require('./eosClient.js');
var eos = EOS();

eos.contract('eosio').then(eosio => {
    eosio.undelegatebw(account, receiver, unstakeNET.toFixed(4) + ' EOS', unstakeCPU.toFixed(4) + ' EOS').then((result) => {
        console.log(result);
    }).catch((err) => {
      console.log(err);
    });
})