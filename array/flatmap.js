const escola = [
	{
		nome: "Turma M1",
		alunos: [
			{
				nome: "Gustavo",
				nota: 8.1,
			},
			{
				nome: "Ana",
				nota: 9.3,
			},
		],
	},
	{
		nome: "Turma M2",
		alunos: [
			{
				nome: "Rebeca",
				nota: 8.9,
			},
			{
				nome: "Roberto",
				nota: 7.3,
			},
		],
	},
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);

// o flatmap transforma um array
const notasEscola = escola.flatMap(getNotasDaTurma);
console.log(notasEscola);
