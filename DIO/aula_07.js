// function escrevaNome(nome){
    
//     console.log('Meu nome é ' + nome);
// }

// escrevaNome('Matheus');

// function vereficarIdade(idade) {
//     if (idade < 18) {
//         console.log('Menor de idade');
//     } else {
//         console.log('Maior de idade');
//     }
// }
//  vereficarIdade(18)

function escrevaNome(nome){
     return 'Seu nome é ' + nome;
}

function vereficarIdade(idade) {
    if (idade < 18) {
        console.log(escrevaNome('Matheus ') + 'e é menor de idade');
    } else {
        console.log(escrevaNome('Matheus ') + 'e é maior de idade');
    }
}
 vereficarIdade(18)