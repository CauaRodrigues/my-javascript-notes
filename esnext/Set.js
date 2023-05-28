// estrutura de conjunto de valores igual ao array, porém não indexado e sem repetição
const times = new Set();
times.add("Vasco");
times.add("São Paulo").add("Palmeiras").add("Corinthians");
times.add("Flamengo");
times.add("Vasco"); // será ignorado

console.log(times);
console.log(times.size);
console.log(times.has("Vasco"));
times.delete("Vasco");
console.log(times.has("Vasco"));

// Criar um Set a partir de um array
const names = ["Raquel", "Hugo", "Boris", "Lucas", "Hugo"];
const setNames = new Set(names);
console.log(setNames); // os valores repetidos foram reduzidos/removidos
