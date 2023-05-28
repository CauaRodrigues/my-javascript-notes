// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
	let juros = capitalInicial * taxaJuros * tempoAplicacao;
	let montante = capitalInicial + juros;

	return montante;
};

const jurosComposto = (capitalInicial, taxaJuros, tempoAplicacao) => {
	let juros = capitalInicial * Math.pow(1 + taxaJuros, tempoAplicacao);
	return juros;
};

console.log(jurosSimples(100, 10 / 100, 2));
console.log(jurosComposto(100, 10 / 100, 2));
console.log(jurosComposto(100, 10 / 100, 2));
