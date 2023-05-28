// ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

function ExaminarNota(notas) {
	const notaFinal = (
		notas.reduce((soma, nota) => soma + nota) / notas.length
	).toFixed(2);
	let conceito;

	if (notaFinal <= 4.9) {
		conceito = "D";
	} else if (notaFinal <= 6.9) {
		conceito = "C";
	} else if (notaFinal <= 8.9) {
		conceito = "B";
	} else if (notaFinal <= 10) {
		conceito = "A";
	} else {
		return "Error... Não foi possível identicar o conceito.";
	}
	return { notaFinal, conceito };
}

console.log(ExaminarNota([1, 5, 2, 0.8, 8]));
console.log(ExaminarNota([7, 2, 1, 10, 10]));
console.log(ExaminarNota([7, 6, 10, 10, 8]));
console.log(ExaminarNota([10, 10, 10, 10, 10]));
console.log(ExaminarNota([10, 10, 10, 10, "asas"]));
