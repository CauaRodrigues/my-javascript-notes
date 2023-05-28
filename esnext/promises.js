// Processamento de dados assincrono

function falarDepoisDe(secounds, text) {
	// resolve => quando a promise foi resolvida (sucess). Aceita apenas um parâmetro
	// reject => quando a promise foi rejeitada (error)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (text.length < 10) {
				resolve(text);
			} else {
				reject("O texto é longo");
			}
		}, secounds * 1000);
	});
}

// Executará após 3 segundos
falarDepoisDe(3, "It's cool")
	.then((text) => text.concat("!!!"))
	.then((otherText) => console.log(otherText))
	.catch((e) => console.log(`[Error]: ${e}`));

// Executará após 2 segundos, porém enquanto a primeira promise estiver sendo feita
// ou seja, essa promise vai ser executada primeiro enquanto a promise acima vai ser
// executada depois. Por isso,
falarDepoisDe(2, "Something text...")
	.then((text) => text.concat("!!!"))
	.then((otherText) => console.log(otherText))
	.catch((e) => console.log(`[Error]: ${e}`));

// Executará uma promise por vez, não terá o mesmo problema que as duas promises acima:
const executePromises = async () => {
	await falarDepoisDe(3, "bla bla")
		.then((text) => text.concat("!!!"))
		.then((otherText) => console.log(otherText))
		.catch((e) => console.log(`[Error]: ${e}`));

	await falarDepoisDe(2, "bla bla bla bla...")
		.then((text) => text.concat("!!!"))
		.then((otherText) => console.log(otherText))
		.catch((e) => console.log(`[Error]: ${e}`));
};

executePromises();
