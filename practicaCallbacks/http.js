function agregarHttp(url) {
    return "http://"+url;
}

function procesar(unArray,callback){
    let arrayCompleto = [];
    for (let i =0; i<unArray.length; i++) {
        arrayCompleto.push(callback(unArray[i]));
    }
        return arrayCompleto;
    };
    
    let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
    console.log(urlCompletas);