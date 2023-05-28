// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas
// Formato do objeto produto:
// [ { name: string, price: number }, ...{} ]

const compras = [
	{
		name: "Pizza",
		price: 74.98,
	},
	{
		name: "Camisa",
		price: 59.99,
	},
	{
		name: "Energético",
		price: 7.5,
	},
	{
		name: "Calça",
		price: 120.3,
	},
];

const expenses = (products) =>
	products
		.map((product) => product.price)
		.reduce((prev, value) => prev + value);

console.log(expenses(compras));

console.log(
	expenses([
		{ name: "Jornal online", price: 89.99 },
		{ name: "Cinema", price: 150 },
	])
);

console.log(
	expenses([
		{ name: "Galaxy S20", price: 3599.99 },
		{ name: "Macbook Pro", price: 30999.9 },
	])
);
