const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    listarTareas: function(listaDeTareas){
        let tareas = listaDeTareas
        if(!listaDeTareas){
            tareas = this.leerArchivo()
        }
        tareas.forEach((tarea,indice) => {
            console.log((indice + 1) +'. ' + tarea.titulo + ' - ' + tarea.estado);
        })
    },
    escribirJSON: function (listaTareas) {
        const tareasJSON = JSON.stringify(listaTareas)
        fs.writeFileSync(this.archivo, tareasJSON);
    },
    guardarTarea: function(tarea) {
        const listaTareas = this.leerArchivo();
        listaTareas.push(tarea)
        this.escribirJSON(listaTareas)
    },
    filtrarTareas: function(estado){
        const listaTareas = this.leerArchivo();
        const tareasFiltradas = listaTareas.filter(tarea => tarea.Estado === estado)
        return tareasFiltradas
    }
}

module.exports = archivoTareas;