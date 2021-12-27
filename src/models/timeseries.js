const mongoose = require('mongoose')

const timeSchema = new mongoose.Schema({
  time_window: {
    type: String,
    required: true
  },
  emit_data: [{
    user_id: String,
    data: [String]
  }]
})

timeSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next(error);
  }
})

const timeModel = mongoose.model('time', timeSchema)
module.exports = timeModel
