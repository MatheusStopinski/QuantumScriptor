const ser = {
    genero: 'Masculino',
    sabedoria: 'FODA 10/10',
}

const quem = {
    nome: 'Matheus Stopinski',
    idade: 35,
    __proto__: ser // Aqui herdara um prototipo até achar um valor correspondente. (como se herdar uma herança!)
}

console.log(quem.nome, quem.genero, quem.idade, quem.sabedoria);

/*
 Object → Objeto global do JS
 .values() → método que extrai os valores das chaves do objeto
 Yokan → o objeto alvo
 .join(' ') → método de array que junta os elementos com espaço entre eles

 esse outro é so por analise: console.log(Object.values(Yokan).join(' ')); // Aqui ele vai pegar os valores do objeto e juntar com espaço entre eles. (como se fosse um array)


// ---------------------------- Ou assim: -----------------------------


const ser = {
    genero: 'Masculino'
}

const yokan = Object.create(ser)
yokan.nome = 'Yokan';

console.log(yokan.genero);

*/