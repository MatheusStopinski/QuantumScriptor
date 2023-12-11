function b(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor
    return valor + valorAcrescimo
}

console.log(b(100, 10));
console.log(b(100, 15));
console.log(b(100, 20));