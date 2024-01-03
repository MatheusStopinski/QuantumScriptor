class Ser {
  nome;
  raça;
  idade;

  constructor(nome, raça, idade) {
    this.nome = nome;
    this.raça = raça;
    this.idade = idade;
  }

  descrever() {
    console.log(
      `Olá me chamo ${this.nome}, sou da raça ${this.raça} e ja existo a ${this.idade} anos terrestres!`
    )
  }
}

// Aqui eu vou instanciar novos seres.

const Matheus = new Ser('Matheus', 'Humano', 32);
const Katsute = new Ser('Katsute', 'Fenix', 15);
const Kyla = new Ser('Kyla', 'Fenix', 14);

Matheus.descrever();
Katsute.descrever();
Kyla.descrever();

// Um exemplo que sempre que for intanciado passa pelo constructor.