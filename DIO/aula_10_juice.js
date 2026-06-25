class Ser {
  #nome
  #raca
  #idade

  constructor(nome, raca, idade) {
    this.#nome = nome
    this.#raca = raca
    this.#idade = idade
  }

  get nome() {
    return this.#nome
  }

  get descricao() {
    return `Olá me chamo ${this.#nome}, sou da raça ${this.#raca} e já existo a ${this.#idade} anos terrestres!`
  }

  static criar(nome, raca, idade) {
    return new Ser(nome, raca, idade)
  }

  static listar(...seres) {
    console.table(seres.map(s => ({
      nome: s.#nome,
      raça: s.#raca,
      idade: s.#idade
    })))
  }
}

const Matheus = Ser.criar('Matheus', 'Humano', 32)
const Katsute = Ser.criar('Katsute', 'Fênix Baumgartner', 10015)
const Kyla = Ser.criar('Kyla', 'Fênix Baumgartner', 990)

console.log(Matheus.descricao)
console.log(Katsute.descricao)
console.log(Kyla.descricao)

Ser.listar(Matheus, Katsute, Kyla)
