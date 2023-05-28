function myObj() {}

const obj1 = new myObj();
const obj2 = new myObj();
console.log(obj1.__proto__ === obj2.__proto__);
console.log(myObj.prototype === obj2.__proto__);

myObj.prototype.nome = "Antônio";
myObj.prototype.falar = function () {
	console.log(`Bodia! meu nome é ${this.nome}`);
};

obj1.falar();
obj2.nome = "João";

obj2.falar();

const obj3 = {};
obj3.__proto__ = myObj.prototype;
obj3.nome = "Obj3";
obj3.falar();
