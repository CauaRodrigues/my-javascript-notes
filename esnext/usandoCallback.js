// Fazendo requisições sem Promises
const http = require("http");

const getTurma = (turma, callback) => {
	const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;
	http.get(url, (res) => {
		let resultado = "";

		res.on("data", (dados) => {
			resultado += dados;
		});

		res.on("end", () => {
			callback(JSON.parse(resultado));
		});
	});
};

let nomes = [];

getTurma("A", (alunos) => {
	nomes = nomes.concat(alunos.map((aluno) => `Turma A: ${aluno.nome}`));
	console.log(nomes);
});

getTurma("B", (alunos) => {
	nomes = nomes.concat(alunos.map((aluno) => `Turma B: ${aluno.nome}`));
	console.log(nomes);
});
