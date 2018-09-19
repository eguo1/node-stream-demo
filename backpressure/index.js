const fs = require('fs')
const server = require('http').createServer()
const Sequelize = require('sequelize')
const through2 = require('through2')
const csvParse = require('csv-parse')

const db = new Sequelize('postgres://localhost:5432/stream-demo', { logging: false })

const ImportData = db.define('import_data', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  birthday: Sequelize.STRING,
  pets: Sequelize.ARRAY(Sequelize.STRING)
})

const parseStream = through2.obj(function (chunk, enc, done) {
  this.push({
    firstName: chunk[0],
    lastName: chunk[1],
    birthday: chunk[2],
    pets: chunk[3].split(', ')
  })
  done()
})

server.on('request', (req, res, next) => {
  const csv = fs.createReadStream('./file.csv')
  csv
    .pipe(csvParse({ auto_parsing: true }))
    .pipe(parseStream)
    .on('data', chunk => {
      return ImportData.create(chunk)
    })
    .on('error', err => {
      console.error(err)
    })
    .on('end', () => res.end('done maybe?'))
})

const startServer = () => {
  server.listen(8000, () => console.log('server is up'))
  db.sync({ force: true })
    .then(() => console.log('and db emptied'))
}

startServer()
