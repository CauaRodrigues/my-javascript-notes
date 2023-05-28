// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
// usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

const media = (numeros) =>
	numeros.reduce((prev, value) => prev + value) / numeros.length;

console.log(media([0, 10]));
console.log(media([1, 2, 3, 4, 5]));
console.log(media([2, 5, 1, 8]));
