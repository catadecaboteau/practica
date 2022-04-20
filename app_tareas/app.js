let archivoTareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        for (let i = 0;  i < tareas.length; i++) {
            console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }
        console.log()
        break;

        case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
