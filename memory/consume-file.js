const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res, next) => {
  fs.readFile('./big-file.txt', (err, data) => {
    if (err) console.error(err)
    res.end(data)
  })
})

server.listen(8000, () => console.log('hey the server is up'))
