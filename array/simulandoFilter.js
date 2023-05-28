// Simulando o filter
Array.prototype.filter2 = function (callback) {
	const filtro = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			filtro.push(this[i]);
		}
	}
	return filtro;
};

const produtos = [
	{ nome: "iPad Pro", preco: 4199, fragil: false },
	{ nome: "Caderno", preco: 20, fragil: false },
	{ nome: "Conjunto de Copo", preco: 12.99, fragil: true },
	{ nome: "Garrafa de Plastico", preco: 18.99, fragil: false },
	{ nome: "TV 4K", preco: 10377.99, fragil: true },
	{ nome: "Expelho Médio", preco: 792, fragil: true },
	{ nome: "Lego Estrela da Morte", preco: 787.99, fragil: false },
	{ nome: "Katana", preco: 569.99, fragil: false },
	{ nome: "Notebook", preco: 2499, fragil: true },
];

// Produtos com o preço acima de 600 que são frágeis:
let filtro = produtos.filter2((p) => p.preco > 600).filter2((p) => p.fragil);
console.log("Filtro aplicado:", filtro);
