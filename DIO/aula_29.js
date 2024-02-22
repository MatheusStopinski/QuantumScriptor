
// Identifique se o numero é par ou impar!

// Qual é o maior par!
// Qual é o menor impar!

const lista = [1, 2, 10, 5, 8, 4, 3];
let maiorPar = null;
let menorImpar = null;

function print(texto) {
  console.log(texto);
}

function gets(i) {
  const valor = lista[i];
  return valor;
}

for (let i = 0; i < lista.length; i++) {
  const numero = gets(i);
  
  if (numero % 2 === 0) {
    if (maiorPar === null || numero > maiorPar) {
      maiorPar = numero;
    }    

  } else {
    if (menorImpar === null || numero < menorImpar) {
      menorImpar = numero;
    } 
  }
}

if (maiorPar !== null || menorImpar !== null) {
  print(`Maior par é ${maiorPar} já o menor ímpar é ${menorImpar}`);
} else {
  print("Não foram encontrados números pares ou ímpares na lista.");
}