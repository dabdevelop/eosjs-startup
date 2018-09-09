// 产生公私钥对

const ecc = require('eosjs-ecc');

ecc.randomKey().then(privateKey => {
    console.log('Private Key:\t', privateKey);
    console.log('Public Key:\t', ecc.privateToPublic(privateKey));
    })