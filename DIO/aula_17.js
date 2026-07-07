
const lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const N_par = [];
const N_impar = [];

for (let i = 0; i <= 10; i++) {
    const numeros = lista[i];
    
    if (numeros % 2 === 0) {
        N_par.push(numeros);
    } else {
        N_impar.push(numeros);
    }
}

console.log(N_par);
console.log(N_impar);
