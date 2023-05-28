const escola = "Cod3r";
const school = ["senai", "cod3r", "tdi", "ass"];

console.log(escola.charAt(4));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf("r")); // Percore String
console.log(escola.substring(2));
console.log(escola.substring(0, 4));
console.log("Escola ".concat(escola).concat("!"));
console.log(escola.replace(3, "e"));
console.log(escola.replace(/\w/g, "e")); // regex
console.log("Anna, Maria, Pedro, João".split(/,/)); // regex
console.log("Anna, Maria, Pedro, João".split(","));

console.log(school.indexOf("tdi")); // Percore Array
