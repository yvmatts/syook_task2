const conf = require('../conf')
const cs = require('./checksum')
const CryptoJS = require("crypto-js")

function encrypt() {
  try {
    const getCheckSumDs = cs.checksum()
    let encrypted_ds = getCheckSumDs()
    return function getEncryptedDs() {
        encrypted_ds = CryptoJS.AES.encrypt(JSON.stringify(encrypted_ds),conf.secretKey).toString()
      return encrypted_ds
    }
  } catch (e) {
    console.log(e)
  }
}
module.exports = {encrypt}
