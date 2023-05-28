// Notação Literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//Funções construtoras
function Product(name, price, disc) {
	this.name = name;
	this.getPriceWithDiscount = () => {
		return Math.floor(price * (1 - disc));
	};
}

const p1 = new Product("Camera", 7.99, 0.15);
const p2 = new Product("Notebook", 2998.99, 0.25);
console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount());

// Transformando em Classe
class ProductClass {
	constructor(name, price, disc) {
		this.name = name;
		this.price = price;
		this.disc = disc;
	}

	get priceWithDiscount() {
		return Math.floor(this.calcPrice());
	}
	calcPrice() {
		return this.price * (1 - this.disc);
	}
}
const cp1 = new ProductClass("Limão", 6, 0.14);
const cp2 = new ProductClass("Skol", 7.99, 0.75);
console.log(cp1.priceWithDiscount, cp2.priceWithDiscount);

// Função Factory
function createFunc(nome, salarioBase, faltas) {
	return {
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return (salarioBase / 30) * (30 - faltas);
		},
	};
}

const f1 = createFunc("João", 7980, 4);
const f2 = createFunc("Maria", 11400, 1);
console.log(f1.nome, f2.nome);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON);
