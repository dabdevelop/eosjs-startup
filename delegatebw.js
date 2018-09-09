// 抵押CPU和NET资源
// 在 keys.json 文件里放入你的私钥

// 替换 xxxxxaccount 和 toaccount 为你的账号，account 是抵押的账号，receiver 是接收账号
// stakeNET 是抵押 NET 的 FO 数量，stakeCPU 是抵押 CPU 的 FO 数量
var account = "xxxxxaccount";
var receiver = "toaccount";
var stakeNET = 0.1;
var stakeCPU = 0.1;

var EOS = require('./eosClient.js');
var eos = EOS();

eos.transaction(tr => {
    tr.delegatebw({
      from: account,
      receiver: receiver,
      stake_net_quantity: stakeNET.toFixed(4) + ' EOS',
      stake_cpu_quantity: stakeCPU.toFixed(4) + ' EOS',
      transfer: 0
    })
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
    console.log(err);
  });