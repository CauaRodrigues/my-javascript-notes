// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
// casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
// escassez de kiwis”. Caso melancia, retorne: “Aqui tem, são 3 reais o quilo”. Teste com estas três opções .Crie
// também um default, que retornará uma mensagem de erro no console.

function TuttiFrutti(fruit) {
	var response;
	switch (fruit.toLowerCase()) {
		case "maçã":
			response = "Não vendemos esta fruta aqui";
			break;
		case "kiwi":
			response = "Estamos com escassez de kiwis";
			break;
		case "melancia":
			response = "Aqui tem, são 3 reais o quilo";
			break;
		default:
			response = "Fruta não encontrada";
	}

	return response;
}

console.log(TuttiFrutti("maçã"));
console.log(TuttiFrutti("Kiwi"));
console.log(TuttiFrutti("Melancia"));
console.log(TuttiFrutti("asas"));
