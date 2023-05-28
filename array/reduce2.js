const alunos = [
	{ nome: "João", nota: 10, bolsista: false },
	{ nome: "Maria", nota: 8.5, bolsista: false },
	{ nome: "Sergio", nota: 9.2, bolsista: true },
	{ nome: "Luana", nota: 4.2, bolsista: false },
];

const bolsistas = alunos.map((a) => a.bolsista);

// Desafio 1: Todos os alunos são bolsistas?
console.log(bolsistas.reduce((result, bolsista) => result && bolsista));

// Desaafio 2: Algum aluno é bolsista?
console.log(bolsistas.reduce((result, bolsista) => result || bolsista));
