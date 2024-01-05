//  EXPORTAR

const entradas = [3, 100, 9, 99, 25, 8, 11, 55, 62, 12, 7]
let i = 0;
 
function gets() {
    const valor = entradas[i];
    i++
    return valor;

}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };