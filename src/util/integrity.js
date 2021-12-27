const aes256 = require('aes256')
const hash = require('object-hash')
const conf = require('../conf')
const CryptoJS = require("crypto-js")
const SHA256 = require("crypto-js/sha256")

function check(dec_obj) {
  if(SHA256('' + dec_obj.name + dec_obj.origin + dec_obj.destination) === dec_obj.secretKey ) {
    return true
  }
}

function validateIntegrity(data) {
  let dec_data = CryptoJS.AES.decrypt(data, conf.secretKey)
  dec_data = JSON.parse(dec_data.toString(CryptoJS.enc.Utf8))
  let result = dec_data.filter(check)
  return dec_data
}
module.exports = {validateIntegrity}
