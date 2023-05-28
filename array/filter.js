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

// o filter retorna os elementos do array com base em uma condição.
// Se as propriedades de um elemento passa na condição, esse mesmo elemento é retornado em um novo array.
console.log(
	// por exemplo: queremos retornar apenas os produtos não frageis
	produtos.filter(function (p) {
		return !p.fragil;
	})
);

// Produtos com o preço acima de 600 que são frágeis:
let filtro = produtos.filter((p) => p.preco > 600).filter((p) => p.fragil);
console.log("Filtro aplicado:", filtro);
