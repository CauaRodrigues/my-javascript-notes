// coleção dinâmica de pares chave/valor
const product = new Object();
product.name = "cadeira";
product["marca do produto"] = "generica";
product.price = 220;

console.log(product);
delete product.price;
delete product["marca do produto"];
console.log(product);

const car = {
	model: "A4",
	value: 89000,
	owner: {
		name: "Luchaos",
		age: 32,
		address: {
			publicPlace: "Rua Chinatown",
			number: 666,
		},
	},

	conductors: [
		{
			name: "Lester",
			age: 21,
		},
		{
			name: "Raffaela",
			age: 25,
		},
	],

	calcSecurityValue() {
		//...
	},
};

console.log(car);
car.owner.address.number = 453;
console.log(car.owner);

delete car.conductors;
console.log(car.conductors);
