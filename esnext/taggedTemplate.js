// processa o template string "${}" dentro de uma função
function tag(strings, ...values) {
	console.log(strings);
	console.log(values);
	return "";
}

let name = "Ramon";
let age = 12;

console.log(tag`${name} is ${age} years old`);
