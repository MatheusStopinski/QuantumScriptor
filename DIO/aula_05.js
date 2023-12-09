// const price = 100
// const debito = price / 10 * 9
// const cashOUpix = 0.85 * price
// const twice = price
// const aboveTwice = price / 10 * 11
// const pay = 'debito'

// if (pay === 'debito') {
//   console.log(debito);
// } else if (pay === 'cashOUpix') {
//   console.log(cashOUpix);
// } else if (pay === 'twice') {
//   console.log(twice);
// } else if (pay === 'aboveTwice') {
//   console.log(aboveTwice);
// } else {
//   console.log('incorrect payment');
// }

const price = 100
const pay = '10'

if (pay === '1') {
    console.log(price - (price * 0.1));
  } else if (pay === '2') {
    console.log(price - (price * 0.15));
  } else if (pay === '3') {
    console.log(price);
  } else if (pay === '4') {
    console.log(price + (price * 0.1));
  } else {
    console.log('incorrect payment');
  }