// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function divisibleByThree(numberInt) {
	return numberInt % 3 === 0 ? true : false;
}

console.log(divisibleByThree(8));
console.log(divisibleByThree(12));
console.log(divisibleByThree(18));
console.log(divisibleByThree(21734));
console.log(divisibleByThree(15));
console.log(divisibleByThree(21));
console.log(divisibleByThree("147"));
console.log(divisibleByThree(321));
