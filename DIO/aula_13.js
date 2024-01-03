// Exercicios

class Carro {
  marca;
  cor;
  gastoMedio;  

  constructor(marca, cor, gastoMedio){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }

  calcGasto(distancia, precoCombustivel){
    return distancia * this.gastoMedio * precoCombustivel;
  }

  descrever(distancia, precoCombustivel){
    console.log(
      `
      Marca: ${this.marca}, 
      Cor: ${this.cor}, 
      Gasto Médio por KM: ${this.gastoMedio}, 
      Dada a distancia gastou: ${this.calcGasto(distancia, precoCombustivel)}
      `
      );
  }
}

const Volvo = new Carro('Volvo', 'azulEscuro', 1/7);
const Audi = new Carro('Audi', 'branco', 1/8);
const Honda = new Carro('Honda', 'preta', 1/9);

Volvo.descrever(70, 15);
Audi.descrever(70, 11);
Honda.descrever(70, 8);
