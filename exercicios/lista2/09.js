// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

function elementoRepetido(element, number) {
	const arr = [];
	for (let i = 0; i < number; i++) {
		arr.push(element);
	}
	return arr;
}

console.log(elementoRepetido("slas", 7));
console.log(elementoRepetido(4, 10));
console.log(elementoRepetido(true, 7));
