// Não possivel criar um novo objeto a partir de um outro objeto que seja constante
// porém, é possivel alterar as suas propriedades:

// endereço de mémoria
// pessoa -> 123 -> {...}
const person = { name: "João" };
person.name = "Pedro";
console.log(person);

// novo objeto
// pessoa -> 456 -> {...}
// person = { name: "Ana" };
// console.log(person);

// isso acontece pq basicamente o endereço de mémoria de uma constante não muda
// e quando tentamos reatribuir um novo objeto gera um erro

// A propriedade Object.freeze() "congela" o obj, não deixando que suas propriedades
// sejam alteradas
Object.freeze(person);
person.name = "Maria"; // Não gera erro, apenas é ignorado
person.address = "rvd";
delete person.name;
console.log(person);
