function somar(x, y) {
    return x + y
}
function multiplicar(x, y) {
    return x * y
}
function calcular(x, operacao, y) {
    console.log(operacao(x, y));
}

calcular(7, somar, 3);
calcular(7, multiplicar, 4);