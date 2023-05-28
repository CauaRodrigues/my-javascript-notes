let num1 = 1;
let num2 = 2;

num1++; // Operador unário de forma pós-fixada. Ele acrescenta uma unidade para a variável
console.log(num1);

--num1; // Operador unário de forma pré-fixada, nesta forma ele faz a operação primerio. Ele tira uma unidade para a variável
console.log(num2);

console.log(++num1 === num2--);
console.log(num1 === num2);
console.log(++num1, "and", num1++);
