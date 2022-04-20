console.log('Probando Node JS!');

let datos = fs.readFileSync(__dirname + "/prueba.txt", "utf-8")
console.log(datos);

let moment =require("moment");
console.log(moment().format("MM DD YYYY"));