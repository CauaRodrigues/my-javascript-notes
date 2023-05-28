// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas.

function calc(num1, operador, num2) {
	switch (operador) {
		case "+":
			console.log(num1 + num2);
			break;
		case "-":
			console.log(num1 - num2);
			break;
		case "*":
			console.log(num1 * num2);
			break;
		case "x":
			console.log(num1 * num2);
			break;
		case "/":
			console.log(num1 / num2);
			break;
		default:
			console.log("Operação inválida!");
	}
}

calc(1, "+", 1);
calc(2, "*", 2);
calc(2, "x", 2);
calc(20, "-", 10);
calc(52, "/", 2);
