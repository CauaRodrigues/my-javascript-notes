function getPrice(imposto = 0, moeda = "R$") {
	return `${moeda} ${this.price * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
	name: "Notebook",
	price: 4589,
	desc: 0.15,
	getPrice,
};

// Definindo no Escopo global
global.price = 20;
global.desc = 0.1;
console.log(getPrice());

// Definindo dentro do obj: Escopo local (produto)
console.log(produto.getPrice());

// Utilizando o método call
const carro = { price: 49990, desc: 0.2 };
console.log(getPrice.call(carro));

// Utilizando o método apply
console.log(getPrice.apply(carro));

// A Diferência entre call e apply está na passagem de parâmetros

// Passando paramêtros com Call (Coloca os parâmetros diretamente na função):
console.log(getPrice.call(carro, 0.17, "$"));

// Passando paramêtros com apply (Coloca os parâmetros dentro de um array):
console.log(getPrice.apply(carro, [0.5, "R$"]));
