const price = 100
const pay = '4'

const pagamentos = {
  '1': { nome: 'Débito', desconto: 10 },
  '2': { nome: 'Pix / Espécie', desconto: 15 },
  '3': { nome: 'Parcelado até 2x', juros: 0 },
  '4': { nome: 'Parcelado acima de 2x', juros: 10 }
}

function aplicarDesconto(valor, desconto) {
  return valor - (valor * (desconto / 100))
}

function aplicarJuros(valor, juros) {
  return valor + (valor * (juros / 100))
}

function calcularTotal(valor, metodo) {
  const regra = pagamentos[metodo]

  if (!regra) return { total: null, forma: 'Forma de pagamento inválida' }

  let total
  if (regra.desconto !== undefined) {
    total = aplicarDesconto(valor, regra.desconto)
  } else {
    total = aplicarJuros(valor, regra.juros || 0)
  }

  return { total, forma: regra.nome }
}

function formatarMoeda(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const resultado = calcularTotal(price, pay)

if (resultado.total === null) {
  console.log(resultado.forma)
} else {
  console.log(`${resultado.forma}: ${formatarMoeda(resultado.total)}`)
}
