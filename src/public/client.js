const encrypt = require[('src/dataTransform/encrypt.js')]
const socket = io.connect('http://localhost:8000')
setInterval(function () {
  console.log('emitting')
  socket.emit('message', '123')
}, 5000)
