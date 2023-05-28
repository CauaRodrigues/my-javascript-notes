// Recursos:

// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // Retorna um array dos valores
console.log(Object.entries(obj)); // Retorna um array com outros arrays dentro com suas chaves e valores

// Melhorias na Notação Literal
const nome = "kirk";
const pessoa = {
	nome, // antes: nome: nome
	ola() {
		// antes: ola: function () {}
		return "Oi";
	},
};

console.log(pessoa.ola(), pessoa.nome);

// Classes
class Animal {
	constructor(name) {
		this.name = name;
	}
	andar() {
		return `${this.name} andando`;
	}
}
// Definir o prototype (Herança)
class Cachorro extends Animal {
	falar() {
		return "Au Au";
	}
}
console.log(new Cachorro().falar());
console.log(new Cachorro("dog").andar());
