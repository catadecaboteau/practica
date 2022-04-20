let a = [1,2,3]
let b = a
a[0] = 3
console.log(b)
// con array pisa el let porque a guarda un punto en la memoria
//si esto fuera const, sigue siendo igual

let c = 100
let d = c
c = 90
console.log(d)
//aca no porque el valor de c pasa a ser 100 en la linea 9

const f = [1,2,3]
let g = [...a]
f[0] = 3
console.log(f)