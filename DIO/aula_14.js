// Exercicios

class Pessoa {
  nome;
  peso;
  altura;  

  constructor(nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  valorIMC(){
    return this.peso / (this.altura * this.altura);
  }

  classificarIMC(){
    const imc = this.valorIMC();

    if (imc < 18.5) {
        return('Muito magro');
    } else if (imc >= 18.5 && imc < 25){
        return('Normalzão');
    } else if (imc >= 25 && imc < 30){
        return('Gordo(a)');      
    } else if (imc >= 30 && imc < 40){      
        return('Gordãozãooo');
    } else {
        return('Obesidade Grave');
    }
  }

  descrever(){
    console.log(
      `
      Nome: ${this.nome}, 
      Peso: ${this.peso}, 
      Altura: ${this.altura},
      Seu IMC é: ${this.valorIMC()}
      ${this.classificarIMC()}
      `
      );
  }
}

const Jose = new Pessoa('Jose', '85', 1.85);
const Alice = new Pessoa('Alice', '69', 1.52);

Jose.descrever();
Alice.descrever();
