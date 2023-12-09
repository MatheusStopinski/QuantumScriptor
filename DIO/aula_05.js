const price = 100
const debito = price / 10 * 9
const cashOUpix = 0.85 * price
const twice = price
const aboveTwice = price / 10 * 11
const pay = 'debito'

if (pay === 'debito') {
  console.log(debito);
} else if (pay === 'cashOUpix') {
  console.log(cashOUpix);
} else if (pay === 'twice') {
  console.log(twice);
} else if (pay === 'aboveTwice') {
  console.log(aboveTwice);
} else {
  console.log('incorrect payment');
}
