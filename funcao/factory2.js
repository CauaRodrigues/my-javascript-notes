function createProduct(name, price, discount = 0.1) {
	return {
		name,
		price,
		discount,
	};
}

const prod1 = createProduct("Celular", 2.499);
const prod2 = createProduct("Boneco", 28.3, 8);
const prod3 = createProduct("Espelho Pequeno", 17.59);
const prod4 = createProduct("Planta", 55.6, 12.4);

const allProds = [prod1, prod2, prod3, prod4];
console.log(allProds);
