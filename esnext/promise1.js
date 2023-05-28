let promise = new Promise((cumprir) => {
	// cumprir -> resolve()
	cumprir(3); // só possível devolver um valor
}); // retorna um valor (dados) no futuro

// quando a promessa for cumprida a função dentro de .then() será executada
promise.then((valor) => console.log(valor));

/* --------------------------------------------------------- */

// Caso você precise devolver além de um valor em sua promessa, você pode passar um objeto ou array para a função resolve()
let promessaComObjeto = new Promise((resolve) => {
	resolve({ valorUm: 8, valorDois: 9 });
});

// é possível utilizar vários métodos .then() encadeados uns ao outros, dessa forma:
promessaComObjeto
	.then(({ valorUm, valorDois }) => new Array(valorUm, valorDois)) // pega os valores e transforma em um array
	.then(console.log); // Mostra os valores no console, sem precisar criar uma função e passar o valor como paramêtro
/* --------------------------------------------------------- */
