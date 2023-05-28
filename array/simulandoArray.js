const quaseArray = { 0: "Rafael", 1: "Ana", 2: "Bia" }; // O obj deve ter propriedades com valores numéricos, iniciando por 0
const array = ["Rafael", "Ana", "Bia"];

// define uma nova propriedade para o objeto quaseArray.
Object.defineProperty(quaseArray, "toString", {
	value: function () {
		return Object.values(this);
	},
	enumerable: false,
});

console.log("Objeto =>", quaseArray.toString());
console.log("Objeto =>", quaseArray[0]);
console.log("=====================================");
console.log("Array =>", array);
console.log("Array =>", array[0]);
