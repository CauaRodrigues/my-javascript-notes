const person = {
	name: "Anna",
	age: 5,
	address: {
		logarant: "Street ABC",
		number: 1000,
	},
};

const { name, age } = person;
console.log(name, age);

const { name: nome, age: idade } = person;
console.log(nome, idade);

const { sobrenome, bemHumorada = true } = person;
console.log(sobrenome, bemHumorada);

const {
	address: { logarant, number, cep },
} = person;
console.log(logarant, number, cep);
