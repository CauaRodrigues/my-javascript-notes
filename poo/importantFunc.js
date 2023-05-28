const pessoa = {
	nome: "Rebeca",
	idade: 2,
	peso: 13,
};

// Pega apenas as chaves e coloca em um array
console.log("keys:", Object.keys(pessoa));

// Pega apenas os valores e coloca em um array
console.log("values:", Object.values(pessoa));

// Pega todos (chave e valor) os valores e coloca em um array cada chave com o seu valor
console.log("entries:", Object.entries(pessoa));

// Interando com o forEach
Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave}: ${valor}`);
});

// Permite o controle das caracteristicas das propriedades do obj
Object.defineProperty(pessoa, "dataNascimento", {
	enumerable: false,
	// Permite ou não a visibilidade da propriedade ao obj ser chamado.
	// Será visível apenas se ele for chamado individualmente. ex: obj.propriedade

	writable: false,
	// Permite ou não a alteração da propriedade, semelhamente ao Object.freeze()

	// Valor da chave/propriedade
	value: "01/02/2003",
});
pessoa.dataNascimento = "05/03/2013";
console.log(pessoa);
console.log(Object.keys(pessoa));
console.log(pessoa.dataNascimento);

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 }; // como a propriedade "a" já foi declarada, esse último valor irá sobrescrever o anterior.
const obj = Object.assign(dest, o1, o2); // concatena todos os objetos passados na função
console.log(obj);

// Freeze. Torna o obj imultável
Object.freeze(obj);
obj.c = 1234;
console.log(obj.c);
