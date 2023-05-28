// Classes
class Person {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`My name is ${this.name}`);
	}
}
const p1 = new Person("John");
p1.speak();

// Funções
const createPerson = (name) => {
	return {
		speak: () => {
			console.log(`My name is ${name}`);
		},
	};
};
const p2 = createPerson("Akamatu");
p2.speak();
