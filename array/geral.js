// Array é um objeto
console.log(typeof Array, typeof new Array(), typeof []);

console.log("------\n");

// O Array em js tem uma estrutura heterogênea, ou seja, pode conter diversos tipos de dados. Porém isso não uma boa prática.
const arr = ["str", 2, true, false, "😭", null];
console.log(arr);

console.log("------\n");

// Criando um array apartir da função Array() | Não recomendado
let aprovados = new Array("Bia", "Carlos", "Salmono");
console.log(aprovados);

console.log("------\n");

// Criando array de forma literal
aprovados = ["Freddy", "Shazam", "Pai de Todos"];
console.log(aprovados[0], aprovados[1], aprovados[2], aprovados[3]); // Quando tentamos acessar elementos e indices não definidos ele é dado como um "undefined"

console.log("------\n");

// Formas de adicionar um elemento no array
aprovados[3] = "Muzy"; // Literal
aprovados.push("Méwua"); // método push
aprovados[120] = "Ubutarku"; // Podemos atribuir valores para posições mais a frente. Pórem as posições entre 4 e 120 irão continuar undefined.
aprovados[9] = "Abel";
console.log(aprovados);

console.log("------\n");

// Tamanho da array
console.log(aprovados.length);
console.log(arr.length);

console.log("------\n");

// .sort
aprovados.sort(); // Altera a ordem dos elementos do array. Caso haja elementos vazios no array, eles são jogados para o final do array.
console.log(aprovados);

console.log("------\n");

// Excluindo elementos
delete aprovados[3]; // Não muda a ordem do array, entretranto o valor da posição 3 é undefined, ou seja, vazia.
console.log(aprovados[3]);
console.log(aprovados);

console.log("------\n");

// splice - Remove e adiciona elementos do array
aprovados = ["Bia", "Kuru", "Kant", "Saitama"];
/*o primeiro argumento define a partir de qual índice você deseja alterar.
  o segundo argumento define quantos elementos serão excluidos.
  o terceiro ou mais argumentos define quantos elementos você deseja adicionar.
*/
// aprovados.splice(1, 2);
// aprovados.splice(2, 1, "Sortudo", "Soluço", 1, 3, undefined);
console.log(aprovados);
