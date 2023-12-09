// Write a program to calculate the cost of a trip.

// You will have 5 variables:

//  1 - Price of ethanol;
//  2 - Gasoline price;
//  3 - Type of fuel in your car;
//  4 - Average fuel consumption per km;
//  5 - Distance in km;

// Print on the console the amount that will be spent on the trip!

const priceEthanol = 5.79;
const priceGasoline = 6.66;
const dist = 100;
const gastokm = 10;
const spendOfFuel = dist / gastokm;
const kindFuel = 'Gasoline';

if (kindFuel === 'Ethanol') {
  const result = spendOfFuel * priceEthanol;
  console.log(result.toFixed(2));
} else {
  const result = spendOfFuel * priceGasoline;
  console.log(result.toFixed(2));
}
