const cs = require('./checksum')
const CryptoJS = require("crypto-js")

function encrypt() {
  const getCheckSumDs = cs.checksum()
  let encrypted_ds = getCheckSumDs()
  return function getEncryptedDs() {
    for(let i = 0; i<encrypted_ds.length; i++) {
      encrypted_ds[i] = CryptoJS.AES.encrypt('' + encrypted_ds[i],conf.secretKey).toString()
    }
    return encrypted_ds
  }
}

module.exports = {encrypt}
