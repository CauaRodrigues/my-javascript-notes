// ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá
// imprimir o resultado e o resto da divisão destes dois valores.

const dividir = function (dividendo, divisor) {
	let result = dividendo / divisor;
	let resto = dividendo % divisor;
	console.log(`Resultado: ${result} | Resto: ${resto}`);
};

dividir(6, 2);
dividir(20, 4);
dividir(2, 5);
dividir(50, 2);
