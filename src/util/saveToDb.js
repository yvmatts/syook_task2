const timeModel = require('../models/timeseries')

module.exports.saveToDb = async(time,data,id) => {
  let timePeriod = await timeModel.findOne({time_window:time})
  //Current timePeriod
  if(timePeriod) {
    console.log('found')
    let flag = 0
    for(p in timePeriod.emit_data) {
      if(p.user_id === id) {
        p.data.push(data)
        await timePeriod.save()
        flag = 1
        break
      }
    }
    if(!flag) {
      timePeriod.emit_data.push({user_id: id, data: data})
      timePeriod.save()
    }
  } else { //Next timePeriod
    console.log('created new')
    let timePeriod = await timeModel.create({time_window:time})
    timePeriod.emit_data.push({user_id: id, data: data})
    timePeriod.save()
  }
  console.log('saved')
}
