// Percorre um array, iteragindo com cada elemento e gera um novo array, mas com os dados transformados
const nums = [1, 2, 3, 4, 5];

// For com propósito: ínves do map apenas percorer o array e fazer mudanças no próprio array, ele gera um novo array
let resultado = nums.map(function (e) {
	return e * 2; // é necessário um retorno
});

console.log(nums);
console.log(resultado);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const dinheiro = (e) => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nums.map(soma10).map(triplo).map(dinheiro); // Fazendo várias alterações em um array
console.log(resultado);
