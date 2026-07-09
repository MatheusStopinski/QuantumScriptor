const ser = {
    genero: 'Masculino'
}

const Yokan = {
    nome: 'Yokan',
    idade: 15,
    __proto__: ser // Aqui herdara um prototipo até achar um valor correspondente. (como se herdar uma herança!)
}

console.log(Yokan.nome, Yokan.idade, Yokan.genero);

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