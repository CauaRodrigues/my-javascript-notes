//  Fazer um programa para encontrar todos os pares entre 1 e 100.

let number = 1;
let maxNumber = 100;

while (number <= maxNumber) {
	number++;
	number % 2 == 0 ? console.log(number) : null;
}
