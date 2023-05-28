// Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

const CompararDoisNumeros = (n1, n2) => {
	let sortNumbers = [n1, n2].sort((a, b) => a - b);
	return `${sortNumbers[1]} é ${
		sortNumbers[1] === sortNumbers[0] ? "igual à" : "maior que"
	} ${sortNumbers[0]}`;
};

console.log(CompararDoisNumeros(5, 1));
console.log(CompararDoisNumeros(5, 8));
console.log(CompararDoisNumeros(20, 101));
console.log(CompararDoisNumeros(2, 2));
console.log(CompararDoisNumeros(2, 10));
