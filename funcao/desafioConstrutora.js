function Person(name = "teu pai") {
	this.name = name;

	this.speak = () => {
		console.log(`Hello, my name is ${this.name}`);
	};
}

const p1 = new Person("Alberto");
p1.speak();

console.log(p1.name);
