// Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

const getImpar = (start = 0, end = 100) => {
	let numbers = [];
	if (start > end) [start, end] = [end, start];
	for (let i = 0; i < end; i++) i % 2 === 1 ? numbers.push(i) : null;
	return numbers;
};

console.log(getImpar());
console.log(getImpar(1, 35));
console.log(getImpar(35, 1));
