// # Declarando várias variáveis do mesmo tipo
// const a = 1
// const b = 2
// const c = 3
const [a, b, c] = [1, 2, 3];

// # Atribuindo propriedades com mesmo valor
// const obj = { a: a, b: b, c: c }
const obj = { a, b, c };

// # Atribuindo o nome e o valor de uma propriedade a partir de variáveis
const [nameAttr, valorAttr] = ["nota", 7.87];
// const obj2 = {};
// obj2[nameAttr] = valorAttr;
const obj2 = { [nameAttr]: valorAttr };
console.log(obj2);

// # Funções em objetos
const obj3 = {
	funcao1: function () {
		// Modo tradicional. Mais antigo
	},
	funcao2() {
		// Nova forma.
	},
};
