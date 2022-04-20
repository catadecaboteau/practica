let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(alumno){
    return alumno.aprobado == true
})

let desaprobados = estudiantes.filter(function(alumno){
    return alumno.aprobado == false
})

console.log(aprobados)
console.log(desaprobados)
