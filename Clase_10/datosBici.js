let fs = require('fs')
const bicicletasFila = fs.readFileSync(_dirname + '/bicicletas.json', 'utf-8')
const bicicletas = JSON.parse(bicicletasFila)

module.exports = bicicletas