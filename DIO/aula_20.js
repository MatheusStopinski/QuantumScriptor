const ser = {
    genero: 'Masculino'
}

const Yokan = {
    nome: 'Yokan',
    idade: 15,
    __proto__: ser // Aqui herdara um prototipo até achar um valor correspondente. (como se herdar uma herança!)
}

console.log(Yokan.genero);

// ---------------------------- Ou assim: -----------------------------

const ser = {
    genero: 'Masculino'
}

const yokan = Object.create(ser)
yokan.nome = 'Yokan';

console.log(yokan.genero);