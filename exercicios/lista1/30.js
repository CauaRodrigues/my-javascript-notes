// ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

const { min, max } = Math;
const MaiorMenorValor = (arrInt) => {
	return {
		menor: min(...arrInt),
		maior: max(...arrInt),
	};
};
console.log(MaiorMenorValor([6, 2, 3, 4, 1, 10, 32]));
