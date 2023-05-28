let dobro = function (a) {
	return 2 * a;
};

dobro = (a) => {
	return 2 * a;
};

dobro = (a) => 2 * a; // Função implicita

console.log(dobro(Math.PI));

let ola = function () {
	return "Olá";
};

ola = () => "olá";
console.log(ola());
