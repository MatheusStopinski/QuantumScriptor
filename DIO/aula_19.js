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

// entendi a logica, mas quero aprender mais sobre require e module.exports,
//  como funciona, e como posso usar em outros arquivos.Claro!
// Vamos falar sobre `require` e `module.exports` no Node.js.
// saber também o principio de gets, e print, e como eles funcionam no contexto do código que você forneceu.
