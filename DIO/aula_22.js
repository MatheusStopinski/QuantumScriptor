const pessoa = {
    nome: 'Matheus', 
}

function chamar(prefixo) {
    console.log(prefixo, this.nome);
}

chamar.apply(pessoa, ['Bora Dalhê'])