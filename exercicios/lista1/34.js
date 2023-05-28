// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

const readStrings = (str1, str2) =>
	str1.toLocaleUpperCase().includes(str2.toLocaleUpperCase());

console.log(readStrings("kkkkkk", "blass"));
console.log(readStrings("sim", "sim"));
console.log(readStrings("nao", "sim"));
console.log(readStrings("blass", "Blass"));
console.log(readStrings("KKKkksk", "kkkks"));
