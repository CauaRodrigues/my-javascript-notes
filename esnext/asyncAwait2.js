function gerarNumerosEntre(min, max, numerosProibidos) {
	min > max ? ([max, min] = [min, max]) : null;

	return new Promise((resolve, reject) => {
		const fator = max - min + 1;
		const aleatorio = parseInt(Math.random() * fator) + min;

		if (numerosProibidos.includes(aleatorio)) {
			reject(`Já existe o número ${aleatorio} dentro da lista!`);
		} else {
			resolve(aleatorio);
		}
	});
}

async function gerarMegaSena(qtdNumeros) {
	try {
		const numeros = [];
		for (let _ of Array(qtdNumeros).fill()) {
			numeros.push(await gerarNumerosEntre(1, 80, numeros));
		}

		return numeros;
	} catch (e) {
		throw { msg: "Fuck You!!!", error: e };
	}
}

gerarMegaSena(10).then(console.log).catch(console.log);
