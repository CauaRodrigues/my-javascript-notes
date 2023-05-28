//  ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function negativos(numbersInt = []) {
	let countNegative = 0;
	numbersInt.forEach((number) => (number < 0 ? countNegative++ : null));
	return countNegative ? countNegative : `Não há números negativos neste array`;
}

console.log(negativos());
console.log(negativos([12, 4, 6, 32]));
console.log(negativos([-21, -1, -4, 1000]));
console.log(negativos([0, 4, -1, -32, -0, "-10"]));
console.log(negativos([-21, -1, -4, 1000, "sksk", true]));
