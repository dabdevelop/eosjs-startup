// 给BP节点投票
// 在 keys.json 文件里放入你的私钥

var EOS = require('./eosClient.js');
var eos = EOS();

// 替换 xxxxxaccount 为你的账号名
// 第三个参数是您投票的节点，如果是多个节点，需要按照字母排序，如果字母一样，比较后一位，以此类推
eos.contract("eosio").then((eosio) => {
    eosio.voteproducer("xxxxxaccount", "", ["zbeosbp11111", "eoslaomaocom"].sort()).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
});
