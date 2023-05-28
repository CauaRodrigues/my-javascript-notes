// o tipo BigInt é usado para represetar valores inteiros maiores que 2^53

// números com mais de 15 digitos o js não consegue interpretar
const a = 99999999999999999;
const b = 11111111111111111111111;
console.log(a, String(a).length);
console.log(b, String(b).length);

// Para tornar um número inteiro em BigInt, você pode:
// <> adicionar um 'n' no final do número inteiro
// <> utilizar a função BigInt (serve tanto para números literais quanto para strings)

const utilizandoN = 90071992547409912n;
console.log(utilizandoN);

const comBigInt = BigInt(90071992547409911);
console.log(comBigInt);
