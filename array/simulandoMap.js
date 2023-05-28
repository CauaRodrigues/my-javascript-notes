// Simulando o .map()
Array.prototype.map2 = function (callback) {
	const newArr = [];
	for (let i = 0; i < this.length; i++) {
		newArr.push(callback(this[i], i, this));
	}
	return newArr;
};

const carrinho = [
	'{ "nome": "Boracha", "preco": 3.45}',
	'{ "nome": "Caderno", "preco": 13.90}',
	'{ "nome": "Kit de Lapis", "preco": 41.22}',
	'{ "nome": "Caneta", "preco": 7.50}',
];

// Retornar um array apenas com os preços
const precos = carrinho
	.map2((json) => JSON.parse(json))
	.map2(({ preco }) => preco);

console.log(precos);
