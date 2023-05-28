// Criar uma função que receba um array de números e retorne o menor número desse array.

const menorNumero = (arr) => {
	console.log(Math.min(...arr));
};

menorNumero([10, 5, 35, 65]); // 5
menorNumero([5, -15, 50, 3]); // -15
