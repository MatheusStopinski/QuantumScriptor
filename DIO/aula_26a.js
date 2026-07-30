class pessoas {
    constructor(nome) {
        this.nome = nome;
    }
}

const lista = 
[
    new pessoas('Soufoda'), 
    new pessoas('VençoTodos'), 
    new pessoas('Absoluto')
];

const listaNomes = lista.map((element) => element.nome)


console.log(listaNomes);