const aes256 = require('aes256')
const conf = require('./conf')

function encrypt(checksum) { //Dependency Injection
  let encrypted_ds = checksum.getCheckSumDs()

  return function getEncryptedDs() {
    for(let i = 0; i<encrypted_ds.length; i++) {
      encrypted_ds[i] = hash(encrypted_ds[i], 'sha256')
    }
    return encrypted_ds
  }
}

module.export = {encrypt}
