// Fatorial Recursiva ( RECURSIVIDADE! Quando uma função chama ela mesma.)
// n! = n * (n-1)   

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(7))