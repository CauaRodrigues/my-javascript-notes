// IIFE -> Immediately Invoked Function Expression
console.log("....");

(function () {
	console.log("Será executado na hora!");
	console.log("Foge do escopo mais abrangente!");
})();

console.log("....");

(() => {
	console.log("Será executado na hora (com arrow function)!");
})();
