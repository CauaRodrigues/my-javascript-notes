// Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por
// exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.

const date = new Date();
let monthActual = date.getMonth() + 1;

function getMonth(month = monthActual) {
	if (month >= 1 && month <= 12) {
		date.setMonth(month - 1);
		return date.toLocaleString("pt-br", { month: "long" });
	}
	return "Insira um número de mês válido!";
}

console.log(getMonth("as"));
