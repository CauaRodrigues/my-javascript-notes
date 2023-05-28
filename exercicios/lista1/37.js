// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,
// bem como a soma dos elementos.

const progAritmetica = function (n, a, r) {
	let termos = [];
	for (let i = 0; i < n; i++) {
		termos.push(a);
		a = a + r;
	}
	return termos;
};

const progGeometrica = function (n, a, r) {
	let termos = [];
	for (let i = 0; i < n; i++) {
		termos.push(a);
		a = a * r;
	}
	return termos;
};

console.log(progAritmetica(13, 7, 8));
console.log(progGeometrica(20, 5, 3));
