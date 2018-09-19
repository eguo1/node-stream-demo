const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res, next) => {
  fs.createReadStream('./big-file.txt')
    .pipe(res)
})

server.listen(8000, () => console.log('hey the server is up'))
