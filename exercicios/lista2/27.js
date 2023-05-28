// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
// num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
// com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

function melhorAluno(alunos) {
	const allAlunos = [];
	const medias = [];
	Object.entries(alunos).map(([nome, notas]) => {
		let media = notas.reduce((prev, value) => prev + value) / notas.length;
		medias.push(media);
		allAlunos.push({ nome, media });
	});
	return allAlunos.filter(({ media }) => Math.max(...medias) === media)[0];
}

console.log(
	melhorAluno({
		Joao: [8, 7.6, 8.9, 6], // média 7.625
		Mariana: [9, 6.6, 7.9, 8], // média 7.875
		Carla: [7, 7, 8, 9], // média 7.75
	})
);

console.log(
	melhorAluno({
		Henrique: [4, 7, 10, 0],
		Lourenzo: [3, 6, 7, 10],
		Ramon: [7, 1, 8, 9],
		Thiago: [10, 10, 5, 9],
		Tiago: [7, 3, 8, 6],
		Lincoln: [2, 7, 4, 7],
		Marcelo: [7, 5, 2, 9],
		Yendro: [10, 10, 0, 9],
	})
);
