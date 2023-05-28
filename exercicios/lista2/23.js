// Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas.

function countChars(chars, string) {
  let count = 0;
  for (let letter of string) {
    if (letter === chars) count++
  }
  return count;
}

console.log(countChars('a', 'hello'));
console.log(countChars('b', 'batman'));
console.log(countChars('k', 'Kakar'));
console.log(countChars('i', 'Ir e vir, tranquilinho.'));
