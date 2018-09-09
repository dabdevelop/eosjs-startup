// 创建新账号，购买抵押资源
// 在 keys.json 文件里放入你的私钥

// 替换 xxxxxaccount 为你的账号，替换 newaccount 为你准备创建的账号
// ** 替换 owner 和 active 两个地方的公钥为 newaccount 的公钥
// bytes 为购买内存的字节数量
// stakeNET 是抵押 NET 的 FO 数量，stakeCPU 是抵押 CPU 的 FO 数量
var creator = "xxxxxaccount";
var name = "newaccount";
var owner = "EOS8YBjMEoD5vcqz8pmqTzvDtWKQCjcDzJB1ac3TTJSvZ8SCQfur6";
var active = "EOS8YBjMEoD5vcqz8pmqTzvDtWKQCjcDzJB1ac3TTJSvZ8SCQfur6";
var bytes = 4 * 1024;
var stakeNET = 0.1;
var stakeCPU = 1;

var EOS = require('./eosClient.js');
var eos = EOS();

eos.transaction(tr => {
    tr.newaccount({
        creator: creator,
        name: name,
        owner: owner,
        active: active
      })

    tr.buyrambytes({
      payer: creator,
      receiver: name,
      bytes: bytes
    })
    
    tr.delegatebw({
      from: creator,
      receiver: name,
      stake_net_quantity: stakeNET.toFixed(4) + ' EOS',
      stake_cpu_quantity: stakeCPU.toFixed(4) + ' EOS',
      transfer: 0
    })
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
    console.log(err);
  });