const pessoa = {
	saudacao: "Bom dia!",
	falar() {
		console.log(this.saudacao);
	},
};

pessoa.falar();

const falar = pessoa.falar;
falar(); // Conflito entre paradigmas: funcional e OO

// Para resolver este conflito, nós podemos chamar a função bind que faz a ligação da função/objeto e o this que queremos chamar
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

// test:
const person = {
	saudacao: "Olá",
	speak() {
		console.log(this.saudacao);
	},
};
const speakPerson = pessoa.falar.bind(person);
speakPerson();

// Testes:
console.log("===========================================================");
let test = "Sim";
const obj = {
	test: "nao",
	response() {
		console.log(`Dentro de obj: "${this.test}"`);
		console.log(
			`Dentro do obj, chamando de uma forma diferente: "${obj.test}"`
		);
		console.log(`Fora de obj: "${test}"`);
	},
};

obj.response();
