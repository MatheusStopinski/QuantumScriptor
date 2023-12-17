const palavra = {
    nome: 'Matheus',
    idade: 32,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade`);
    }
};

palavra.descrever();
