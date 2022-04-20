let archivoTareas = require('./funcionesDeTareas');

//Si desea investigar un poco más sobre este módulo nativo de NodeJs
//https://nodejs-es.github.io/api/process.html#process_es_process 
let accion = process.argv[2];

switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        console.log('------------------');
        archivoTareas.listarTareas();
        console.log()
        break;
    case 'crear':
        console.log('Creando la tarea');
        const nombreTarea = process.argv[3]
        if(!nombreTarea) {
            console.log('no se ingreso el nombre de la tarea')
            break
        }
        const nuevaTarea = {
            titulo: nombreTarea,
            estado: 'pendiente'
        }
        archivoTareas.guardarTarea(nuevaTarea)
        console.log('tarea guardada con exito')
        break;
    
    case 'filtrar':
        const nombreEstado = process.argv[3]   
        if(!nombreEstado) {
            console.log('no se ingreso el estado de la tarea')
            break;
        }
        console.log('Filtrando tareas con el estado: ', nombreEstado); 
        let tareasFiltradas = archivoTareas.filtrarTareas(nombreEstado);
        archivoTareas.listarTareas(tareasFiltradas)
        break; 

    case undefined:
        console.log();    
        console.log('Atención - Tienes que pasarme una acción');
        console.log('Las acciones disponibles son: listar');
        console.log('----------------------------------------');
        break;

    default:
        console.log('------------------------------------');
        console.log('No entiendo qué quieres hacer');
        console.log('Las acciones disponibles son: listar');
        console.log('------------------------------------');
        break;
}
