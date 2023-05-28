// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.

const getNumbers = (array) =>
	array.filter((e) => (typeof e === "number" ? e : null));

console.log(getNumbers([1, 4, "y", 3, "i"]));
console.log(getNumbers(["safe", 3, 10, 6, 2]));
console.log(getNumbers([1, 2, 4, 56]));
console.log(getNumbers(["cat", "dog", true, false, "kirk", 1]));
