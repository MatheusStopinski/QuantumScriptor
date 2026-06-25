class Ser { // class no JavaScript é um modelo (template) para criar objetos, onde constructor faz parte dele.
  nome;
  idade;
  raça;
  anoDeNascimento;

  constructor(nome, idade, raça, anoDeNascimento) {
    this.nome = nome;
    this.idade = idade;
    this.raça = raça;
    this.anoDeNascimento = new Date().getFullYear() - idade;
  }

  descrever() {
    console.log(
      `Olá me chamo ${this.nome}, sou da raça ${this.raça} e ja existo a ${this.idade} anos terrestre, sou de ${this.anoDeNascimento}.`
    )
  }
}

function compararSer(S1, S2) {
  S1.descrever()
  S2.descrever()

  if (S1.idade > S2.idade) {
    console.log(`${S1.nome} portanto tem mais idade do que ${S2.nome}`);
  } else if (S2.idade > S1.idade) {
    console.log(`${S2.nome} portanto tem mais idade do que ${S1.nome}`);
  } else {
    console.log(`${S1.nome} e ${S2.nome} tem a mesma idade`);    
  }
}

const Matheus = new Ser('Estevan Perinthesqueri', 35, 'Humano')
const Kyla = new Ser('Kyla', 990, 'Fênix Baumgartner')

compararSer(Matheus, Kyla)