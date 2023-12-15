const price = 100
const pay = '4'

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros/100)));
}

if (pay === '1') {
    console.log(aplicarDesconto(price, 10));
 
  } else if (pay === '2') {
    console.log(aplicarDesconto(price, 15));

  } else if (pay === '3') {
    console.log(price);

  } else if (pay === '4') {
    console.log(aplicarJuros(price, 10));

  } else {
    console.log('incorrect payment');
  }