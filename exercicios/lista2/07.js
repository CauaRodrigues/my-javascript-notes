// Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
// o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
// "entre" como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
// inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
// considerando se numero é igual a minimo ou a maximo.

const estaEntre = (numero, min, max, inclusivo) => {
	if (inclusivo) {
		if (numero >= min && numero <= max) {
			return true;
		}
	} else if (numero > min && numero < max) {
		return true;
	}
	return false;
};

console.log(estaEntre(12, 4, 56, true)); // true
console.log(estaEntre(33, 33, 78)); // false
console.log(estaEntre(413, 10, 15, true)); // false
console.log(estaEntre(11.2, 2, 19.5)); // true
console.log(estaEntre(3, 3, 6, true)); // true
console.log(estaEntre(65, 43, 190)); // true
console.log(estaEntre(44, 44, 126, false)); // false
