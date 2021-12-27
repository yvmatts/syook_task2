const enc = require('../dataTransform/encrypt')
const socket = io.connect('http://localhost:8000')
socket.on('message', (data) => {
  document.querySelector('h2').innerHTML = socket.id
  document.querySelector('p').innerHTML = data
})
setInterval(function () {
  let getEncryptedDs = enc.encrypt()
  socket.emit('message', getEncryptedDs())
}, 5000)
