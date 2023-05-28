function gerarNumerosEntre(min, max, tempo) {
	min > max ? ([max, min] = [min, max]) : null;

	return new Promise((resolve) => {
		setTimeout(() => {
			const fator = max - min + 1;
			const aleatorio = parseInt(Math.random() * fator) + min;
			resolve(aleatorio);
		}, tempo);
	});
}

// Fazer diversas promessas usando Promise.all()
function gerarVariosNumeros() {
	return Promise.all([
		gerarNumerosEntre(2, 100, 5000),
		gerarNumerosEntre(1, 5, 2000),
		gerarNumerosEntre(3, 10, 1000),
		gerarNumerosEntre(9, 5, 100000),
		gerarNumerosEntre(5400, 2000, 7000),
		gerarNumerosEntre(81, 83, 1000),
		gerarNumerosEntre(9320, 1207120352, 4000),
	]);
}

gerarVariosNumeros().then(console.log);
