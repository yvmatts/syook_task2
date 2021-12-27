const rand = require('./randomize')
const hash = require('object-hash')
const SHA256 = require("crypto-js/sha256")
function checksum() {
  const getDs = rand.randomize()
  let checksum_ds = getDs()

  return function getCheckSumDs() {
    for(let i = 0; i< checksum_ds.length; i++) {
      checksum_ds[i].secretKey = SHA256('' + checksum_ds[i].name + checksum_ds[i].origin + checksum_ds[i].destination).toString()
    }
    return checksum_ds
  }
}

module.exports = {checksum}
