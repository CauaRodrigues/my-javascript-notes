// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const notaFinal = (code, nota1, nota2, nota3) => {
	let notas = [nota1, nota2, nota3];
	notas.sort((a, b) => (a < b ? 1 : -1));

	let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10;
	let situacao = media < 5 ? "Reprovado" : "Aprovado";
	console.log(
		`Código do Aluno: ${code}\nNotas: ${nota1}, ${nota2}, ${nota3}\nMédia: ${media}\nSituação: ${situacao}`
	);
	console.log(notas);
};

notaFinal(456, 3, 1, 2);
notaFinal("o98", 4, 3, 4);
notaFinal(123, 2.8, 6, 3.5);
