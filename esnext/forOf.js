// o for...of percorre os próprios valores sem precisar de índices

for (let letter of "Speed") {
	console.log(letter);
}

console.log("-------------------------------------");

const churras = ["Pão", "Cebola", "Carne"];
for (let i in churras) {
	// o 'i' será a posição de cada valor do array
	console.log(i);
}

console.log("-------------------------------------");
for (let v of churras) {
	// o 'v' será os valores do array
	console.log(v);
}

console.log("-------------------------------------");
console.log("=== Utilizando Map() ===\n");

const churrasMap = new Map([
	["Pão", { comprado: true, prioridade: true }],
	["Cebola", { comprado: true, prioridade: false }],
	["Carne", { comprado: true, prioridade: true }],
	["Asinha", { comprado: false, prioridade: false }],
	["Carvão", { comprado: false, prioridade: true }],
]);

for (let compra of churrasMap) {
	console.log(compra);
}

// com .keys() | acessa as chaves
for (let key of churrasMap.keys()) {
	console.log(key);
}

// com .values() | acessa os valores
for (let value of churrasMap.values()) {
	console.log(value);
}

// com o .entries() | utiliza destruturação para acessar a chave e valor
for (let [key, value] of churrasMap.entries()) {
	console.log(key, value);
}

console.log("-------------------------------------");
console.log("=== Utilizando Set() ===\n");

const turmas = new Set(["A", "G", "F"]);
for (let turma of turmas) {
	console.log(turma);
}
