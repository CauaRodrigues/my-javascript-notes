// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.
// Dados: (base * altura) / 2

const areaTriangulo = (base, altura) => ((base * altura) / 2).toFixed(2);

console.log(areaTriangulo(10, 15)); // 75.00
console.log(areaTriangulo(7, 9)); // 31.50
console.log(areaTriangulo(9.25, 13.1)); // 60.59
console.log(areaTriangulo(50, 231));
