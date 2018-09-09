// 部署合约
// 在 keys.json 文件里放入你的私钥

// 替换 xxxxxaccount 为合约账号
var account = "xxxxxaccount";

var EOS = require('./eosClient.js');
var eos = EOS();

wasm = fs.readFileSync('docker/contracts/eosio.token/eosio.token.wasm');
abi = fs.readFileSync('docker/contracts/eosio.token/eosio.token.abi');

// Publish contract to the blockchain
eos.setcode(account, 0, 0, wasm); // @returns {Promise}
eos.setabi(account, JSON.parse(abi)); // @returns {Promise}