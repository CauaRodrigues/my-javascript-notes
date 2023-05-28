// Formas de criar Funções

// forma literal
function func1() {
	// Pode receber valores atráves de paramêtros
	// Caso você não retorne um valor de forma explicita (utilizando o return). Por padrão ela irá retornar o valor "undefined"
}

// armazenando em uma variável
const func2 = function () {}; //função anônima

// armazenando em um array
// Em JavaScript, as funções são consideradas como um tipo de dado. Com isso, é possível criar funções dentro de arrays e adiciona-lás como elementos também
const array = [
	function (a, b) {
		return a + b;
	},
	func1,
	func2,
];
// Executando a função
console.log(array[0](2, 2));

// armazenando em um atributo de objeto
const obj = {};
obj.speak = function () {
	return "Hello There";
};
console.log(obj.speak());

// Passando uma função como paramêtro
function run(fun) {
	fun();
}

run(function () {
	console.log("Executando...");
});

// Uma função pode retornar/conter uma outra função
function sum(a, b) {
	return function (c) {
		console.log(a + b + c);
	};
}
// Para executar e passar paramêtros na função acima, existe dois modos:
// 1º Modo: Passando o parâmetro da função interna logo depois dos parâmetros da função "principal", abrindo e fechando os parênteses.
sum(2, 3)(1);

// 2º Modo: Armazenando em uma variável a função "principal" e passando o parâmetro da função interna na variável criada.
const moreOne = sum(2, 3);
moreOne(1);
