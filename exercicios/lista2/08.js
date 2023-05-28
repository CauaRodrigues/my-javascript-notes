// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

function Multiplicar(n1, n2) {
	if (n1 >= 0 && n2 >= 0) {
		let sum = 0;
		for (let i = 0; i < n1; i++) {
			sum += n2;
		}
		return sum;
	}
	return "Apenas números positivos";
}

console.log(Multiplicar(2, 4));
console.log(Multiplicar(32, 6));
console.log(Multiplicar(19, 40));
console.log(Multiplicar(5, 5));
console.log(Multiplicar(0, 7));
console.log(Multiplicar(5, 3));
console.log(Multiplicar(-5, 3));
console.log(Multiplicar(9, -3));
console.log(Multiplicar(-9, -3));
