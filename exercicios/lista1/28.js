// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const gerarNumeros = (qtd, max, min) => {
	let arr = [];
	let count = 0;

	min = Math.ceil(min);
	max = Math.floor(max);

	while (count < qtd) {
		count++;
		arr.push(Math.floor(Math.random() * (max - min) + min));
	}

	return arr;
};

function verifyNumbers(qtd, max = 300, min = 0) {
	let numbers = gerarNumeros(qtd, max, min);

	let qtdPar = 0;
	let qtdImpar = 0;

	numbers.map((number) => {
		if (!(number % 2)) {
			qtdPar++;
		} else {
			qtdImpar++;
		}
	});

	console.log(numbers);
	console.log(`Par: ${qtdPar}`);
	console.log(`Impar: ${qtdImpar}`);
}

verifyNumbers(4);
