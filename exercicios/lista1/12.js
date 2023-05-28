// Faça um algoritmo que calcule o fatorial de um número

const fatorial = (number) => {
	let result;
	if (number == 0) {
		result = 1;
	} else {
		result = number * fatorial(number - 1);
	}

	return result;
};

console.log(fatorial(0));
console.log(fatorial(5));
console.log(fatorial(6));
console.log(fatorial(13));
