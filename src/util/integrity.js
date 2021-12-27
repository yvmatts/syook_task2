const aes256 = require('aes256')
const hash = require('object-hash')
const conf = require('../conf')

function check(enc_obj) {
  let dec_obj = aes256.decrypt(conf.secretKey,enc_obj)
    if(hash('' + dec_obj.name + dec_obj.origin + dec_obj.destination, {algorithm:'sha256'}) === dec_obj.secretKey ) {
      return true
    }
}

function validateIntegrity(data) {
  let result = data.filter(check)
  return result
}
module.exports = validateIntegrity
