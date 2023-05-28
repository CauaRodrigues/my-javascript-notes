// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais

let [vogalA, vogalE, vogalI, vogalO, vogalU] = ['a,á,à,â,ã,ä,', 'e,é,è,ê,ẽ,ë,', 'i,í,ì,î,ĩ,ï,', 'o,ó,ò,ô,õ,ö,', 'u,ú,ù,û,ũ,ü'];
let todasVogais = vogalA + vogalE + vogalI + vogalO + vogalU

const RemoverVogais = (text) => (text.split('').filter(letter => !todasVogais.split(',').includes(letter.toLowerCase()))).join('');

console.log(RemoverVogais('Aprendendo com a Cod3r'));
console.log(RemoverVogais('Do Fundamento até o Avançado'));
console.log(RemoverVogais('Alegria'));
console.log(RemoverVogais('Muito legal'));
console.log(RemoverVogais('Olá!! Eu me chamo Cauã e sou desenvolvedor de software, amo tecnologia e samurais'))
