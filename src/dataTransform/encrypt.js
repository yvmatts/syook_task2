const aes256 = require('aes256')
const conf = require('../conf')
const cs = require('./checksum')

function encrypt() {
  const getCheckSumDs = cs.checksum()
  let encrypted_ds = getCheckSumDs()
  return function getEncryptedDs() {
    for(let i = 0; i<encrypted_ds.length; i++) {
      encrypted_ds[i] = aes256.encrypt(conf.secretKey, '' + encrypted_ds[i])
    }
    return encrypted_ds
  }
}
module.exports = {encrypt}
