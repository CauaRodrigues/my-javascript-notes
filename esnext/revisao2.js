// Recursos criados a partir versão do ES2015

// Arrow functions
const somar = (a = 1, b = 1) => a + b; // não é necessário implicitar o return
console.log(somar(undefined, 2)); // se passar como argumento "undefined", o valor padrão será pego
console.log(somar()); // será usado valores padrão

// Arrow Function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Operador ...rest
function total(...numeros) {
	// Pega todos os argumentos e tranforma-os em um array
	return numeros.reduce((a, b) => a + b);
}
console.log(total(1, 3, 5, 2));
console.log(total(1, 1));
