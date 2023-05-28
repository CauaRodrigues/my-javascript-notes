// Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e
// retorne R$0,30 (observe a vírgula e o ponto).

function format(value = 0.30000000000000004) {
	let valueFormated = value.toLocaleString("pt-br", {
		style: "currency",
		currency: "BRL",
	});

	return valueFormated;
}

console.log(format(50.8499999999));
console.log(format());
