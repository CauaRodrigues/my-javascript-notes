// Gerando valores padrões em funções

// Método 1
function soma1(a, b, c) {
	// Se estes paramêtros não foram referenciados ou não tiverem nenhum valor, o valor que será atribuido para eles será 1
	a = a || 1;
	b = b || 1;
	c = c || 1;

	return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3));

// Pelo fato de 0 ser um valor considerado nulo em JS, ele retorna com null, ou seja, falso.
// Por causa disso, quando passamos o 0 como parâmetro na chamada da função, ele pegará o valor padrão.
console.log(soma1(0, 0, 0));

function soma2(a, b, c) {
	// Método 2
	a = a != undefined ? a : 1;
	// Método 3
	b = 1 in arguments ? b : 1;
	// Método 4
	c = isNaN(c) ? 1 : c;

	return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// Método novo, recomendado e uma boa prática do es2015
function soma3(a = 1, b = 1, c = 1) {
	return a + b + c;
}

console.log(
	soma3(),
	soma3(3),
	soma3(4, 2, 6),
	soma3(0, 0, 0),
	soma3("ola", 2, "teste")
);
