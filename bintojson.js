// 解析betdice被褥羊毛的第一次尝试操作

var EOS = require('./eosClient.js');
var eos = EOS();

eos.abiBinToJson({
    code: 'eosio.token',
    action: 'transfer',
    binargs: 'c096522921748e311082422e65753055102700000000000004454f53000000001035302d7068696c6f737570656f73312d'
}).then(function (value) {
    console.log(value);
}).catch(function (reason) {
    console.log(reason);
});