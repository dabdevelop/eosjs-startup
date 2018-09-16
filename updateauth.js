// 更改账号权限
// 在 keys.json 文件里放入你的私钥

var EOS = require('./eosClient.js');
var eos = EOS();

// 替换 xxxxxaccount yyyyyaccount 为你的账号
const user = {
  'account': 'xxxxxaccount'
};

async function getNewPermissions(accountName) {
  const account = await eos.getAccount(accountName);
  const perms = JSON.parse(JSON.stringify(account.permissions));
  return perms;
}

// 复制 源 账号的所有权限
const perms = await getNewPermissions('yyyyyaccount');

const updateAuthResult = await eos.transaction(tr => {
  for (const perm of perms) {
    tr.updateauth({
      account: user.account,
      permission: perm.perm_name,
      parent: perm.parent,
      auth: perm.required_auth
    }, {
      authorization: `${user.account}@owner`
    });
  }
});

console.log('Success =>', JSON.stringify(updateAuthResult));