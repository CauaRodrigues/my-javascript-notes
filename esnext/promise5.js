function funcionarOuNao(value, chanceDeErro) {
	return new Promise((resolve, reject) => {
		try {
			// fill.los(sfs);
			if (Math.random() < chanceDeErro) {
				reject("Ocorreu um erro"); // Rejeita a promessa, gerando um erro
			} else {
				resolve(value);
			}
		} catch (err) {
			// tratar erros dentro da promessa
			reject(err);
		}
	});
}

funcionarOuNao("teste", 0.5)
	.then((value) => console.log(`OK: ${value}`))
	.then(
		(valorTratado) => console.log(valorTratado)
		// (err) => console.log(`Error Esp.: ${err}`) // Tratar erros dentro de métodos .then()
	)
	.catch((err) => console.log(`Error Geral: ${err}`)); // Trata o erro gerado na promise, caso seja rejeitada.
