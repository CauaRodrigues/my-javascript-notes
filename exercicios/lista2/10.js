// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+"  na
// quantidade especificada no parâmetro.

function plus(number) {
	let acumula = "";
	for (let i = 0; i < number; i++) {
		acumula += "+";
	}
	return acumula;
}

console.log(plus(4));
console.log(plus(100));
console.log(plus(999999));
