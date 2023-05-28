// Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
// possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
// comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
// que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
// “Não trabalhamos com este tipo de automóvel aqui”.

const revenda = (vehicles) => {
	let response;

	switch (vehicles.toLowerCase()) {
		case "hatch":
			response = "Compra efetuada com sucesso";
			break;
		case "sedans":
			response = "Tem certeza que prefere este modelo?";
			break;
		case "motocicletas":
			response = "Tem certeza que prefere este modelo?";
			break;
		case "caminhonetes":
			response = "Tem certeza que prefere este modelo?";
			break;
		default:
			response = "Não trabalhamos com este tipo de automóvel aqui";
	}

	return response;
};

console.log(revenda("hatch"));
console.log(revenda("sedans"));
console.log(revenda("motocicletas"));
console.log(revenda("caminhonetes"));
console.log(revenda("sla"));
