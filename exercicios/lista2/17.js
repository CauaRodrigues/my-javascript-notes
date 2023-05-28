// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

const getSum = (numbers) => numbers.reduce((prev, value) => prev + value);

console.log(getSum([1, 2, 3, 5, 2]));
console.log(getSum([10, 10, 10]));
console.log(getSum([4, 5]));
console.log(getSum([15, 15, 15, 15]));
