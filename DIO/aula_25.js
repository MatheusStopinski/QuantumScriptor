const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPares = lista.filter((element) => { //LISTA NOVA
    return (element % 2 === 0)    
})

console.log(listaDeNumerosPares);
