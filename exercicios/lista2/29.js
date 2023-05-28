// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

function segundoMaiorValor(numbers) {
	let removeMaiorValor = numbers.filter(
		(number) => Math.max(...numbers) !== number
	);
	console.log(Math.max(...removeMaiorValor));
}

segundoMaiorValor([2, 1, 4, 3, 6, 5]);
segundoMaiorValor([12, 16, 1, 5]);
segundoMaiorValor([8, 4, 6, 5]);
