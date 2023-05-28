// Percorre o array executando uma função callback para cada elemento do array
const aprovados = ["Agatha", "Aldo", "Dan", "Biles"];

// array.forEach(funçãoCallback)
// 3 Parâmetros da função callback:
// 1°) Retorna o valor do elemento
// 2°) Retorna o índice do elemento
// 3°) Retorna um array com todos elementos do array
// Além desses parâmetros, o retorno será undefined

aprovados.forEach(function (nome, indice, listaCompleta) {
	console.log(`${indice + 1}°) ${nome} | ${listaCompleta}`);
});

console.log("-----------------------");

// Arrow function
aprovados.forEach((nome) => console.log(nome));

console.log("-----------------------");

// Criando uma função anônima e usando a mesma como callback no forEach
const exibirAprovados = (aprovados) => console.log(aprovados);
aprovados.forEach(exibirAprovados);

console.log("-----------------------");

// Usando forEach com arrays em objetos
const obj = [
	{
		pessoas: [
			{ name: "Scooby", age: 21 },
			{ name: "Patrick", age: 32 },
			{ name: "Brice", age: 92 },
		],
		produtos: [
			{ name: "Celular", mark: "Samsung" },
			{ name: "Computador", mark: "Lenovo" },
			{ name: "Geladeira", mark: "Brastemp" },
		],
	},
];

let [novoArrayPessoas, novoArrayObjetos] = [[], []];

obj.forEach(({ pessoas, produtos }) => {
	pessoas.forEach(({ name, age }, index, arr) => {
		console.log(`${index + 1}°) ${name}, ${age} anos`);
		novoArrayPessoas = arr; // isso será executado toda vez que um elemento é percorrido
	});
	produtos.forEach(({ name, mark }, i, arr) => {
		console.log(`${i + 1} - ${name}, ${mark}`);
		novoArrayObjetos.push(arr); // terá arrays mais de um repetidos
	});
});

console.log(novoArrayPessoas);
console.log(novoArrayObjetos);
