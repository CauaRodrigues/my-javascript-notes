// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const annuity = (month = 1, value) => {
	if (month > 0 && month < 13) {
		let delay = month - 1;
		let total = (value * (1 + 5 / 100) ** delay).toFixed(2);
		console.log(total);
	} else {
		console.log("Més Inválido");
	}
};

annuity(5, 300);
annuity(3, 700);
annuity(10, 600);
annuity(undefined, 1370);
