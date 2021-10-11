const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RealtimeSchema = new mongoose.Schema({
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },
  name: String,
  message: String,
  created_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Realtime', RealtimeSchema)