const conf = require('../conf')
const cs = require('./checksum')
const CryptoJS = require("crypto-js")

function encrypt() {
  const getCheckSumDs = cs.checksum()
  let encrypted_ds = getCheckSumDs()
  return function getEncryptedDs() {
      encrypted_ds = CryptoJS.AES.encrypt(JSON.stringify(encrypted_ds),conf.secretKey).toString()
      console.log(encrypted_ds)
    return encrypted_ds
  }
}
var x = encrypt()
x()
module.exports = {encrypt}
