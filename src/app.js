const express = require('express')
const socket = require('socket.io')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const conf = require('./conf')
const cors = require('cors')

const port = process.env.PORT || 8000
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
    io.on('connection', (socket) =>{
        console.log('made socket connection', socket.id)
        //Create socket events
        socket.on('message',(data) => {
          //save data here
          //broadcast data
          socket.broadcast.emit('message', data)
          console.log(data)
        })
    })
  })
  .catch((err) => console.log(err))

app.get('/', (req, res) => {
  res.render('index')
})
