// const notas = [];

// notas.push(10);
// notas.push(9);
// notas.push(10);
// notas.push(7);
// notas.push(8);
// notas.push(10);
// notas.push(10);

// console.log(notas.length);

// --------------------------------------------------------------------------------------------------

// const letra = 'Estou criando um livro foda!'


// for (let i = 0; i < letra.length; i++) {
    
//     console.log(letra[i]);
// }

//---------------------------------------------------------------------------------------------- AQUI APRENDI A DEPURAR ( RUN AND DEBUG )-----------------

const notas = [];

notas.push(10);
notas.push(9);
notas.push(10);
notas.push(7);
notas.push(8);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);