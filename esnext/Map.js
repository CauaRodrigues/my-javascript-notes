// Estrutura chave e valor, parecido com o object. Porém o Map() permite chaves com qualquer valor

const tecnologias = new Map();
tecnologias.set("react", { framework: false, language: "JavaScript" });
tecnologias.set("angular", { framework: true, language: "JavaScript" });
tecnologias.set("laravel", { framework: true, language: "PHP" });

console.log(tecnologias.react); // não funciona
console.log(tecnologias.get("react")); // para chamar
console.log(tecnologias.get("react").framework); // para chamar o valor diretamente
console.log(tecnologias.get("laravel")); // para chamar o valor diretamente

const chavesVariadas = new Map([
	[
		function hello() {
			return "hello";
		},
		"função",
	],
	[{}, "objeto"],
	[123, "número"],
	["text", "string"],
]);

console.log("oi", chavesVariadas.get(hello()));

chavesVariadas.forEach(function (key, value) {
	console.log(key, value);
});

// verificar se existe um elemento dentro do Map()
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.has("text"));

// Deletar um elemento
chavesVariadas.delete(123);
console.log(chavesVariadas.size);

// Não aceita repetições de chaves
chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b"); // substituirá o valor setado anteriormente
chavesVariadas.set(321, "b"); // aceita valores repetidos
console.log(chavesVariadas);

console.log(chavesVariadas.values()); // retorna apenas os valores
console.log(chavesVariadas.keys()); // retorna apenas as chaves
console.log(chavesVariadas.entries()); // retorna chave e valor dentro de um array
chavesVariadas.clear(); // excluir tudo dentro do Map() / Limpa o Map()
console.log(chavesVariadas);
