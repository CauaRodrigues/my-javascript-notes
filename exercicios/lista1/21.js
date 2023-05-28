// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
// 1) crianças com menos de 10 anos pagam R$80;
// 2) conveniados com idade entre 10 e 30 anos pagam R$50;
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
// 4) conveniados acima de 60 anos pagam R$130

((age = 70) => {
	let defaultValue = 100;
	let additional;

	if (age < 10) {
		additional = 80;
	} else if (age >= 10 && age <= 30) {
		additional = 50;
	} else if (age > 30 && age <= 60) {
		additional = 95;
	} else if (age > 60) {
		additional = 130;
	}

	console.log(defaultValue + additional);
})();
