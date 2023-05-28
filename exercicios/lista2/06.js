// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

function inverter(value) {
	if (typeof value === "boolean") {
		return `${value} => ${!value}`;
	} else if (typeof value === "number") {
		return `${value} => ${-value}`;
	}
	return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof value}`;
}

console.log(inverter(2));
console.log(inverter(true));
console.log(inverter(false));
console.log(inverter(-12));
console.log(inverter(102));
console.log(inverter("sla"));
console.log(inverter({}));
console.log(inverter(() => {}));
console.log(inverter([]));
