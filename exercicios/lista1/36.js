// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function Func1(arr, number) {
	const newArr = arr.map((element) => element * number);
	return newArr;
}

function Func2(arr, number) {
	const newArr = arr.map((element) => (element > 5 ? element * number : 0));
	return newArr;
}

console.log(Func1([2, 5, 1, 2], 3));
console.log(Func2([2, 6, 1, 7], 3));
