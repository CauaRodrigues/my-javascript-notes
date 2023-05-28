const alunos = [
	{ nome: "João", nota: 10, bolsista: true },
	{ nome: "Maria", nota: 8.5, bolsista: false },
	{ nome: "Sergio", nota: 9.2, bolsista: true },
	{ nome: "Luana", nota: 4.2, bolsista: true },
];

const notas = alunos.map((a) => a.nota);
console.log(notas);

// O reduce ser para transformar um array em apenas um elemento ou em qualquer outra coisa
// O primeiro parametro passamos um valor anterior e o segundo como o valor atual.
// Depois de passarmos a callback, podemos colocar um valor inicial que seria a 'notaAnterior'.
// Se não passarmos esse valor inicial, por padrão ele pega o primeiro elemento do array como valor inicial
//  e o segundo elemento como o atual.
const somaNotas = notas.reduce((notaAnterior, notaAtual) => {
	console.log(`Valor acumulado: ${notaAnterior} \ Valor atual: ${notaAtual}`);
	return notaAnterior + notaAtual;
}, 0); // valor inicial
console.log("Resultado:", somaNotas);
