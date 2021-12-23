//const rand = require('./randomize')
const hash = require('object-hash')

function checksum(rand) { //Dependency Injection
  const getDs = rand.randomize()
  let checksum_ds = getDs()

  return function getCheckSumDs() {
    for(let i = 0; i< checksum_ds.length; i++) {
      checksum_ds[i].secretKey = hash(checksum_ds[i], {algorithm:'sha256'})
      //console.log(checksum_ds[i])
    }
    return checksum_ds
  }
}
// var x = checksum()
// var a =x()
// console.log(a)

module.exports = {checksum}
