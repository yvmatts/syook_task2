const data = require('../content/data')

function randomize() {
    const ds_size = Math.floor(Math.random() * 500) + 50 //Generate no of objects in stream
    let name_index = 0
    let origin_city_index = 0
    let destination_city_index = 0
    let org_message = {
      name: '',
      origin: '',
      destination: ''
    }
    let ds = [];
    return function getDs() {
      for(let i = 0; i< ds_size; i++) {
        name_index = Math.floor(Math.random() * data.names.length)
        origin_city_index = Math.floor(Math.random() * data.cities.length)
        destination_city_index = Math.floor(Math.random() * data.cities.length)
        org_message.name = data.names[name_index]
        org_message.origin = data.cities[origin_city_index]
        org_message.destination = data.cities[destination_city_index]
        ds.push(org_message)
      }
      return ds
    }
}

module.exports = {randomize}
