let perfil = 'administrador'

if (perfil === ' ') {
    console.log ('Debe especificar el perfil del usuario');
} else if (perfil === 'Administrador' || perfil === 'administrador' || perfil === 'ADMINISTRADOR'){
    console.log ('Usted tiene todos los privilegios de uso del sistema');
} else if (perfil === 'Asistente'){
    console.log ('Usted solo tiene permisos de registrar, modificar y consultar datos');
} else if (perfil === 'Invitado'){
    console.log ('usted solo tiene permisos de consultar dato');
} else {
    console.log ('Debe especificar un perfil válido');
}