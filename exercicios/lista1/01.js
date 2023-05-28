// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

const calc = (num1 = 2, num2 = 4) => {
	console.log(`soma: ${num1 + num2}`);
	console.log(`sub: ${num1 - num2}`);
	console.log(`mult: ${num1 * num2}`);
	console.log(`div: ${num1 / num2}`);
	console.log("-------------------------");
};

calc();
calc(4, 12);
calc(7, 36);
