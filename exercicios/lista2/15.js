// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

const getPairs = (numbers) => {
	let pairs = [];
	numbers.forEach((number, indice) => {
		if (number % 2 === 0) {
			pairs.push(number);
		}

		if (indice % 2 === 0) {
			pairs.push(number);
		}
	});
	return pairs;
};

const arr = [1, 3, 2, 4, 6];
let numbersPairs = getPairs(arr);

console.log(numbersPairs);
console.log(getPairs([1, 1, 3, 3, 1, 1, 7]));
