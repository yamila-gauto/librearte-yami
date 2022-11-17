let perfil = "Asistente";

switch (perfil) {
    case ' ':
        console.log('Debe especificar el perfil del usuario');
        break;
    case 'Administrador':
    case 'administrador':
    case 'ADMINISTRADOR':
        console.log('Usted tiene todos los privilegios de uso del sistema');
        break;
    case 'Asistente':
    case 'asistente':
    case 'ADMINISTRADOR'
        console.log('Usted solo tiene permisos de registrar, modificar y consultar datos');
        break;
    case 'Invitado':
    case 'invitado':
    case 'INVITADO':
        console.log('Usted solo tiene permisos de consultar datos');
        break;
    default:
        console.log('Debe especificar un perfil válido');
        break;

}


let perfil = "Asistente";

switch (perfil.toLowerCase()) {
    case ' ':
        console.log('Debe especificar el perfil del usuario');
        break;
    case 'Administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema');
        break;
    case 'Asistente':
        console.log('Usted solo tiene permisos de registrar, modificar y consultar datos');
        break;
    case 'Invitado':
        console.log('usted solo tiene permisos de consultar datos');
        break;
    default:
        console.log('Debe especificar un perfil válido');
        break;

}
