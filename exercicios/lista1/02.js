// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//  Equilátero: Os três lados são iguais.
//  Isósceles:  Dois lados iguais.
//  Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

let verifyTriangule = {
	equilatero(a, b, c) {
		if (a == b && a == c && b == c) {
			return true;
		} else {
			return false;
		}
	},

	isosceles(a, b, c) {
		if ((a == b && a != c) || (a == c && a != b) || (b == c && b != a)) {
			return true;
		} else {
			return false;
		}
	},

	escaleno(a, b, c) {
		if (a != b && a != c && b != c) {
			return true;
		} else {
			return false;
		}
	},
};

const triangule = (a, b, c) => {
	if (verifyTriangule.equilatero(a, b, c)) {
		return "Equilátero";
	} else if (verifyTriangule.isosceles(a, b, c)) {
		return "Isosceles";
	} else if (verifyTriangule.escaleno(a, b, c)) {
		return "Escaleno";
	} else {
		return "Não foi possível encontrar uma classifição de triângulo";
	}
};

console.log(triangule(8, 8, 8));
console.log(triangule(40, 45, 36));
console.log(triangule(3, 8, 8));
