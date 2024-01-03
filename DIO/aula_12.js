class Ser {
  nome;
  idade;
  raça;
  anoDeNascimento;

  constructor(nome, idade, raça, anoDeNascimento) {
    this.nome = nome;
    this.idade = idade;
    this.raça = raça;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(
      `Olá me chamo ${this.nome}, sou da raça ${this.raça} e ja existo a ${this.idade} anos terrestre, sou de ${anoDeNascimento}`
    )
  }
}

function compararSer(S1, S2) {
  if (S1.idade > S2.idade) {
    console.log(`${S1.nome} é mais velho(a) do que ${S2.nome}`);
  } else if (S2.idade > S1.idade) {
    console.log(`${S2.nome} é mais velho(a) do que ${S1.nome}`);
  } else {
    console.log(`${S1.nome} e ${S2.nome} tem a mesma idade`);    
  }
}

const Matheus = new Ser('Matheus', 32)
const Kyla = new Ser('Kyla', 25)

compararSer(Matheus, Kyla)