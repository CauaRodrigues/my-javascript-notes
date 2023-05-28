// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
//  ________________
// |Plano | Aumento |
// |----------------|
// |  A   |   10%   |
// |  B   |   15%   |
// |  C   |   20%   |
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const aumentoSalarial = (plano, salarioAtual) => {
	let percentual = 0;

	switch (plano.toUpperCase()) {
		case "A":
			percentual = 10;
			break;

		case "B":
			percentual = 15;
			break;

		case "C":
			percentual = 20;
			break;

		default:
			console.log(`Plano ${plano} inválido`);
	}

	if (percentual > 0) {
		let novoSalario = salarioAtual * (percentual / 100) + salarioAtual;
		console.log(`Novo Salário: ${novoSalario}`);
	}
};

aumentoSalarial("a", 1200);
aumentoSalarial("A", 1240);
aumentoSalarial("b", 1200);
aumentoSalarial("B", 3475);
aumentoSalarial("c", 1200);
aumentoSalarial("C", 2400);
aumentoSalarial("d", 3000);
