// FATORIAL n! 
// 7! = 7*6*5*4*3*2*1

function fatorial(n) {
    let fat = 1
    for (let contador = n; contador > 1; contador--) {
        fat *= contador
    }
    return fat
}

console.log(fatorial(7));