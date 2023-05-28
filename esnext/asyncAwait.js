// utilizando promise e async/await
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

// Recurso do ES8
let obterAlunos = async () => {
	const turmaA = await getTurma("A");
	const turmaB = await getTurma("B");
	const turmaC = await getTurma("C");

	return [].concat(turmaA, turmaB, turmaC);
};

obterAlunos()
	.then((alunos) => alunos.map((a) => a.nome))
	.then((nomes) => console.log(nomes));
