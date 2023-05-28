function esperarPor(tempo = 2000, numero) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(`${numero}° Promise Resolvida`);
			resolve();
		}, tempo);
	});
}

const pegarValor = () =>
	new Promise((resolve) => setTimeout(() => resolve(10), 5000));

/* Utilizando o método .then() */
// Executa uma por vez
// esperarPor()
// 	.then(() => console.log("Esperar promise 1..."))
// 	.then(esperarPor)
// 	.then(() => console.log("Esperar promise 2..."))
// 	.then(esperarPor)
// 	.then(() => console.log("Esperar promise 3..."));

/* Função sincrona */
// Executa tudo de uma vez e deixa as promises para o final
// function executar() {
// 	esperarPor(1000, 1);
// 	console.log("1° Await...");

// 	esperarPor(2000, 2);
// 	console.log("2° Await...");

// 	esperarPor(3000, 3);
// 	console.log("3° Await...");
// }

/* Função Assincrona com Async/Await  */
// Executa uma linha por vez.
async function executar() {
	let valor = await pegarValor();
	console.log("Valor Resolvido\n");

	await esperarPor(1500, 1);
	console.log(`1° Await...(${valor})\n`);

	await esperarPor(2500, 2);
	console.log(`2° Await...(${valor + 1})\n`);

	await esperarPor(3500, 3);
	console.log(`3° Await...(${valor + 2})`);

	return valor + 3;
}

/* Para pegar o valor retornado na função executar(), podemos utilizar o método .then() */
// executar().then((response) => console.log(`Valor Final: ${response}`));

// Ou podemos criar uma outra função Async:
async function executarDeVerdade() {
	const response = await executar();
	console.log(`Valor Final: ${response}`);
}

executarDeVerdade();
