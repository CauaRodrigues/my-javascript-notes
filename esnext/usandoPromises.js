const http = require("http");

const getTurma = (turma = "A") => {
	const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`;
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let result = "";

			res.on("data", (dados) => {
				result += dados;
			});

			res.on("end", () => {
				try {
					resolve(JSON.parse(result));
				} catch (e) {
					reject(e);
				}
			});
		});
	});
};

Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
	.then((turmas) => [].concat(...turmas))
	.then((alunos) =>
		alunos.map((aluno) => {
			console.log(`Nome: ${aluno.nome}`);
		})
	);
