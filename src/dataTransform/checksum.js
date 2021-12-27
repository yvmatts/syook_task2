const rand = require('./randomize')
const hash = require('object-hash')

function checksum() {
  const getDs = rand.randomize()
  let checksum_ds = getDs()

  return function getCheckSumDs() {
    for(let i = 0; i< checksum_ds.length; i++) {
      checksum_ds[i].secretKey = hash('' + checksum_ds[i].name + checksum_ds[i].origin + checksum_ds[i].destination, {algorithm:'sha256'})
    }
    return checksum_ds
  }
}

module.exports = {checksum}
