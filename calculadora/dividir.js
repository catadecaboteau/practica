function dividir (d,e) {
    if (e==0) {
        return "No se puede dividir por 0"
    }
    return (d/e)
}
module.exports = dividir

console.log(dividir(2,0))