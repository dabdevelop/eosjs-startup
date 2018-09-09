var Eos = require('eosjs');

// 在 key.json 文件里替换成你的公钥和私钥
var keys = require("./keys.json");
var rpc = require("./rpc.json");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function eosClient() {
    return Eos({
        chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
        keyProvider:keys,
        httpEndpoint:rpc[getRandomInt(0, rpc.length - 1)],
        expireInSeconds: 60,
        broadcast: true,
        verbose: false,
        sign: true
    });
}

module.exports = eosClient;