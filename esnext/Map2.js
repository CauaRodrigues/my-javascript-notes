// Lendo um valor dentro de uma estrutura Map() com uma chave de função criada fora da estrutura
const Countries = new Map();
function City() {
	return "New York";
}

Countries.set(City(), "Los Angeles");
console.log(Countries.get(City()));

// Lendo um valor dentro de uma estrutura Map() com uma chave de função criada dentro da estrutura
const mapa = new Map([
	[
		function minhaFuncao() {
			return "chave da função";
		},
		"valor da função",
	],
]);

const valor = mapa.get(mapa.keys().next().value());
console.log(valor); // output: "valor da função"
