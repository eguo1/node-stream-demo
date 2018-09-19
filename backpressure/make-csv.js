const fs = require('fs')
const csv = fs.createWriteStream('./file.csv')

for (let i = 0; i < 1e4; i++) {
  csv.write('Eric,Guo,02/26/1990,"Oro the Snake, Tyr the Cat"\n')
}

csv.end()