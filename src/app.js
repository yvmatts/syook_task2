const express = require('express')
const socket = require('socket.io')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const conf = require('./conf')
const cors = require('cors')
const integrity = require('./util/integrity')
const port = process.env.PORT || 8000
const db = require('./util/saveToDb')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(cors())
app.use(cookieParser())
app.use(express.json())

mongoose.connect(conf.dbURI)
  .then((result) => {
    console.log('Listening', __dirname)
    const server = app.listen(port)
    //Connect to socket
    const io = socket(server)
    io.on('connection', async(socket) =>{
        console.log('made socket connection', socket.id)
        //Create socket events
        socket.on('message',async(data) => {
        try {
          let d  = new Date()
          let minutes = d.getMinutes()
          let hours = d.getHours()
          //validate integrity
          let val_res = await integrity.validateIntegrity(data)
          //save to db
          await db.saveToDb('' + hours + ':' + minutes, val_res, socket.id)
          socket.broadcast.emit('message', val_res)
        } catch (e) {
          console.log(e)
        }
        })
    })
  })
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.render('index')
})
