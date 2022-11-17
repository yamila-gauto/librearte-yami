const peliculas = require('./peliculas');

for (let index = 0; index < peliculas.length; index++) {
    const movie = peliculas[index]
    const message = movie.id + '. Genero: ' + peliculas[index].genre + ', Rating: ' + peliculas[index].rating + ', Premios: ' + peliculas[index].awards + ', Duracion: ' + peliculas[index].length + 'min, Precio: ' + peliculas[index].price;
    console.log(message)
    
}
//2da version 

const peliculas = require('./peliculas');

for (let index = 0; index < peliculas.length; index++) {
    const movie = peliculas[index];
    const message = `${movie.id}. Genero: ${movie.genre}, rating: ${movie.rating}, premios: ${movie.awards}, duracion: ${movie.length}min, precio: u$${movie.price}`;
    console.log(message);
}
