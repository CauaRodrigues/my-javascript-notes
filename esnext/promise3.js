function gerarNumerosEntre(min, max) {
	min > max ? ([max, min] = [min, max]) : null;
	// if (min > max) {
	// 	[max, min] = [min, max];
	// }

	return new Promise((resolve) => {
		const fator = max - min + 1;
		const aleatorio = parseInt(Math.random() * fator) + min;
		resolve(aleatorio);
	});
}

gerarNumerosEntre(10, 80)
	.then((num) => num * 100)
	.then((valor) => `O número gerado foi ${valor}`)
	.then(console.log);
