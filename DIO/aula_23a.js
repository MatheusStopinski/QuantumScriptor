function somar (x, y) {
    return x + y
}

function multiplicar (x, y) {
    return x * y
}

function calcular (x, operacao, y) {
    console.log(operacao (x, y));
}

calcular(7, somar, 3);
calcular(5, multiplicar, 2);