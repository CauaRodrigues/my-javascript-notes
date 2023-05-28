// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function verifyDay(day) {
	let typeDay;
	switch (day) {
		case 1 && "Domingo":
			typeDay = "Não útil";
			break;
		case 2 && "Segunda":
			typeDay = "Útil";
			break;
		case 3 && "Terça":
			typeDay = "Útil";
			break;
		case 4 && "Quarta":
			typeDay = "Útil";
			break;
		case 5 && "Quinta":
			typeDay = "Útil";
			break;
		case 6 && "Sexta":
			typeDay = "Útil";
			break;
		case 7 && "Sábado":
			typeDay = "Fim de semana";
			break;
		default:
			typeDay = "Dia informado inválido";
	}

	return typeDay;
}

console.log(verifyDay(12));
console.log(verifyDay(2));
console.log(verifyDay(1));
console.log(verifyDay(7));
console.log(verifyDay(6));
console.log(verifyDay(4));
console.log();
console.log(verifyDay("Domingo"));
console.log(verifyDay("Terça"));
console.log(verifyDay("Sexta"));
console.log(verifyDay("Sábado"));
console.log(verifyDay("Quinta"));
console.log(verifyDay());
