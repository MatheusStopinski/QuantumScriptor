const grana = 10000
const escolha = '7'

const pagamentos = {
  '1': { nome: 'Débito', desconto: 10 },
  '2': { nome: 'Pix / Espécie', desconto: 15 },
  '3': { nome: 'Parcelado até 2x' },
  '4': { nome: 'Parcelado até 3x' },
  '5': { nome: 'Parcelado até 4x' },
  '6': { nome: 'Parcelado até 5x' },
  '7': { nome: 'Parcelado até 6x' },
  '8': { nome: 'Parcelado até 7x' },
  '9': { nome: 'Parcelado 8x ou mais', juros: 10 }
}

const aplicarDesconto = (valor, desconto) => valor - (valor * (desconto / 100))
const aplicarJuros = (valor, juros) => valor + (valor * (juros / 100))
const formatarMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const calcularTotal = (valor, metodo) => {
  const regra = pagamentos[metodo]
  if (!regra) return { total: null, forma: 'Forma de pagamento inválida' }

  const { nome, desconto, juros } = regra

  if (desconto) return { total: aplicarDesconto(valor, desconto), say: nome }
  if (juros) return { total: aplicarJuros(valor, juros), say: nome }
  return { total: valor, say: nome }
}

const { total, say } = calcularTotal(grana, escolha)

console.log(total === null ? say : `${say}: ${formatarMoeda(total)}`)
