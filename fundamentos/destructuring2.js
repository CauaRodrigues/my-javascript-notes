const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, nota]] = [
	[, 8, 8],
	[9, 6, 8],
];
console.log(nota);

const arr = [0, 0.5, 1, 1.5, 2, 3, 4];
const [value, valueOne, valueTwo, valueThree] = arr;
console.log(value, valueOne, valueTwo, valueThree);
