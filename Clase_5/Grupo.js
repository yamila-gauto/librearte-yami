let electrodomesticos = ['Cocina', 'Heladera', 'Tostadora', 'Lavarropa', 'Microondas', 'Cafetera' ]
function obtenerNumeroRandom(max) {
    return Math.floor(Math.random() * max);
  }
console.log(electrodomesticos[obtenerNumeroRandom(electrodomesticos.length)])
