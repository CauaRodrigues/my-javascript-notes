const pai = { nome: "Pedro", corCabelo: "preto", pele: "branca" };

const filho1 = Object.create(pai); // outra maneira de passar protótipo
filho1.nome = "Ana";

console.log(filho1);
console.log(filho1.corCabelo);

const filha2 = Object.create(pai, {
	nome: { value: "Bia", writable: false, enumerable: true },
	corCabelo: { value: "preto", writable: true, enumerable: false },
});

const filha3 = Object.create(pai, {
	nome: { value: "Bia", writable: false, enumerable: true },
	idade: { value: 20, writable: true, enumerable: true, configurable: false },
});

console.log(filha2);
filha2.nome = "Carla";
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filho1));
console.log(Object.keys(filha2));

console.log("!! Filha 2 !!");

for (let key in filha2) {
	filha2.hasOwnProperty(key) // Verifica se o obj tem a propriedade "key"
		? console.log(key)
		: console.log(`Por herança: ${key}`);
}
console.log("!! Filha 3 !!");

for (let key in filha3) {
	filha3.hasOwnProperty(key)
		? console.log(key)
		: console.log(`Por herança: ${key}`);
}
