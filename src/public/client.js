// Make connection
const socket = io.connect('http://localhost:8000')
setInterval(function () {
  socket.emit('message', 'Testing')
}, 1000)
