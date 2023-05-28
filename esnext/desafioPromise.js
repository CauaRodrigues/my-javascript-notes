// Desafio: Fazer uma função que leia o conteúdo de um arquivo informado como paramêtro. Utilize Promises nesta função.

const fs = require("fs");
const path = require("path");

function showFilesContent(pathToFile) {
	const file = path.join(__dirname, pathToFile);

	return new Promise((resolve) => {
		fs.readFile(file, (_, content) => resolve(content.toString()));
	});
}

showFilesContent("./dados.txt")
	.then((dados) => dados.split("\n"))
	.then((lines) => lines.map((line) => line.split(" ")))
	.then((arr) => [Object.fromEntries(arr)])
	.then(console.log);
