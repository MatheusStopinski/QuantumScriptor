const lista = [1, 2, 3]

console.log(lista.join('/')); // Juntar

// --------------- OUTRO EXEMPLO -----------------

const nomes = [{ nome: 'Katsute'}, { nome: 'Kyla'}, { nome: 'Balak'}]

console.log(nomes.map((n) => n.nome).join(' - '));