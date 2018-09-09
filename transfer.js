// 转账
// 在 keys.json 文件里放入你的私钥

var EOS = require('./eosClient.js');
var eos = EOS();

function transfer(from, to, amount, memo){
    var value = amount.toFixed(4) + " EOS";
    eos.contract("eosio.token").then((token) => {
        token.transfer(from, to, value, memo).then((result) => {
            console.log(result);     
        }).catch((err) => {
            console.log(err);
        });
    });
}

transfer("fromaccount", "toaccount", 1, "this is memo");