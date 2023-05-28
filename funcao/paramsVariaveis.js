// Mesmo que não coloquemos nenhum argumento quando iniciamos a função, podemos passar paramêtros quando a função é chamada.
// E para pegarmos o valor do paramêtro que passamos usamos a keyword do javascript "arguments".
function soma() {
	let soma = 0;
	// O arguments retorna um array com os paramêtros que foram passados para a função.
	// console.log(arguments);
	for (i in arguments) {
		soma += arguments[i];
	}

	return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2, 4.3));
console.log(soma(1.1, 2.2, "Teste"));
