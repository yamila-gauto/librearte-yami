let traductorCondicional = 'Perro';

switch (traductorCondicional.toLowerCase()) {
    case 'perro':
        console.log('Perro en ingles es "Dog"');
        break;
    case 'gato':
        console.log('Gato en ingles es "Cat"');
        break;
    case 'puerta':
        console.log('Puerta en ingles es "Door"');
        break;
    case 'ventana':
        console.log('Ventana en ingles es "Window"');
        break;
    case 'mesa':
        console.log('Mesa en ingles es "Table"');
        break;
    default:
        console.log('La palabra ingresada es incorrecta')
        break;
}