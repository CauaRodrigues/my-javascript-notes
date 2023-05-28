// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const aritmetica = (numbers = []) => {
	let sum = 0;
	numbers.forEach(function (number) {
		sum += number;
	});
	return sum / numbers.length;
};

console.log(aritmetica([1, 4, 5, 2, 6]));
console.log(aritmetica([2, 2, 3, 1]));
console.log(aritmetica([7, 7, 14, 8]));
