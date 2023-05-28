// operator ...rest(juntar)/spread(espalhar)

// usar o rest com função
function sayMyNames(...params) {
	// Retorna um arrays com os paramêtros
	console.log("Hello", ...params);
}
sayMyNames("Jonh", "Michael", "Doug");
sayMyNames("Jonh");

// usar spread com objetos
const funcionario = { name: "Renan", salario: 12345.98 };
const clone = { ativo: true, ...funcionario };
console.log(clone, "|", funcionario);

// usar spread com array
const turma1 = ["A", "B", "C"];
const turma2 = ["D", "E", "F"];
const todasTurmas = [...turma1, ...turma2];
console.log(todasTurmas);
