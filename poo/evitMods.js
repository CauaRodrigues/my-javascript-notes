// Object: Objeto normal. Permite tudo.
const animal = new Object({
	nome: "Pereira",
	preco: 80.0,
	idade: 27,
});

// Object.preventsExtensions: permite apenas edição e a exclusão de propriedades e valores.
const produto = Object.preventExtensions({
	nome: "Qualquer",
	preco: 1.99,
	tag: "promoção",
});
console.log(`Extensível: ${Object.isExtensible(produto)}`);
console.log(`Extensível: ${Object.isExtensible(animal)}`);

produto.nome = "Borracha";
produto.descricao = "Borracha Escolar Preta";
delete produto.tag;
console.log(produto);

console.log("");

// Object.seal: permite apenas a edição dos valores das propriedades
const person = { name: "Paulo", age: 42 };
Object.seal(person);
console.log(`Selado: ${Object.isSealed(person)}`);
console.log(`Selado: ${Object.isSealed(animal)}`);
console.log(person);

person.sobrenome = "Silva";
delete person.name;
person.age = 29;
console.log(person);
