// Recursos criados a partir versão do ES2015

// let e const
{
	var a = 2; // evitar usar var
	let b = 3;
	console.log(b); // funciona apenas dentro deste escopo
}
console.log(a);

// Template String
const produto = "iPad";
console.log(`Produto:
${produto}`);

// Destructuring
const [l, e, ...tras] = "Cod3r"; // Pode-se usar destructuring em strings
console.log(l, e, tras);

const [x, , y] = [1, 3, 4]; // Selecionar elementos com base na posição em um Array
console.log(x, y);

const { idade: age, nome } = { nome: "sir", idade: 18 }; // renomear objetos e poder pegar sem precisar seguir a ordem do obj
console.log(age, nome);
