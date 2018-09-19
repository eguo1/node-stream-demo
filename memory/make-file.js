const fs = require('fs')
const file = fs.createWriteStream('./big-file.txt')

for (let i = 0; i < 3e6; i++) {
  file.write('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante ex, commodo iaculis vestibulum eget, accumsan quis nibh. Etiam eget volutpat lacus, a finibus odio. Nam in aliquet quam, ut sollicitudin orci. Proin efficitur suscipit lectus, id luctus urna. Integer at diam commodo, euismod ex eu, maximus lectus. Suspendisse ex leo, dictum euismod velit nec, bibendum vehicula ipsum. Aliquam sed ligula tellus. Suspendisse luctus, lorem a finibus lobortis, nisi urna pharetra ex, vitae blandit tellus nisi at justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut sit amet purus lobortis, imperdiet nibh quis, iaculis est. Curabitur suscipit sit amet magna eget dictum. Integer tortor est, eleifend at neque sit amet, maximus porttitor elit. Suspendisse potenti. Aenean cursus ligula mauris.\n')
}

file.end()
