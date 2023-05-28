const human = {
	name: "human",
	age: null,
	speak() {
		return `Hi! My name is ${this.name} and i'm ${this.age} years old.`;
	},
	actualDate: new Date().getFullYear(),
	yearBirth(actualYear = this.actualDate) {
		return actualYear >= this.age
			? actualYear - this.age
			: "Year of birth greater than age.";
	},
	allInfos() {
		return { name: this.name, age: this.age, year: this.yearBirth() };
	},
};

const person = {
	name: "Thiago",
	age: 23,
	speak() {
		return super.speak();
	},
};

const person1 = {
	age: 60,
};

const person2 = {
	name: "Miguel",
	age: 32,
	yearBirth() {
		return `i was born in ${super.yearBirth()}`;
	},
};

Object.setPrototypeOf(person, human);
Object.setPrototypeOf(person1, human);
Object.setPrototypeOf(person2, human);

console.log(person.speak());
console.log(person1.speak());
console.log(person2.yearBirth());

console.log(person.allInfos());
console.log(person1.allInfos());
console.log(person2.allInfos());
