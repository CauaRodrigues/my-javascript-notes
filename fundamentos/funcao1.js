// Funcao sem retorno
function imprimirSoma(a, b) {
	console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 2, 4, 5, 6, 7, 8);
imprimirSoma();

console.log();

// Funcao com retorno
function soma(a = 1, b = 1) {
	// Caso o valor de a e b não seja definido quando passado como parametro, eles receberam o valor de 1
	return a + b;
}

console.log(soma(2, 2));
console.log(soma(2));
console.log(soma());
