// class Pessoa {
//     constructor(nome){
//         this.name = nome
//     }
// }

// const lista = [new Pessoa('Balak'), new Pessoa('Kyla'), new Pessoa('Mitsugui'), new Pessoa('Katsute')]

// const listaNomes = []

// for (let i = 0; i < lista.length; i++) {
//     const element = lista[i];
//     listaNomes.push(element.name)
// }

// console.log(listaNomes);

// ------------------------- FAZENDO IGUAL SO QUE COM O MAP --------------------------------------

class Pessoa {
    constructor(nome){
        this.name = nome
    }
}

const lista = [new Pessoa('Balak'), new Pessoa('Kyla'), new Pessoa('Mitsugui'), new Pessoa('Katsute')]


const listaNomes = lista.map((element) => element.name)


console.log(listaNomes);