const ser = {
    genero: 'masculino'
}

const Yokan = {
    nome: 'Yokan',
    idade: 15,
    __proto__: ser // Aqui herdara um prototipo até achar um valor correspondente. (como se herdar uma herança!)
}

console.log(Yokan.genero);