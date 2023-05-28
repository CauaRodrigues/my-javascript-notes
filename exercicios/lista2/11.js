// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
// array:

const firstAndLast = (arr) => [arr.shift(), arr.pop()];

const test = firstAndLast(["A", "B", "C", "D"]);
console.log(test);
console.log(firstAndLast(["sla", 2, true, false, "oi"]));
console.log(firstAndLast([5, 2, true, false]));
