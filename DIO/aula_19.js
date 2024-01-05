const { gets, print } = require('./aula_18_a'); //funções auxiliares.

const quantidade = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidade; i++) {
    const Sorteado = gets();
   if (Sorteado > maiorValorEncontrado) {
            maiorValorEncontrado = Sorteado;
   }
}

print(maiorValorEncontrado);

