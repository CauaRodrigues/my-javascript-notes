let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);

isActive = 1;
console.log(!!isActive);

console.log("Os Verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!"Texto Qualquer");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log("Os falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log("Para finalizar...");
console.log(!!("" || null || 0 || " "));

let nome = "Pedro";

console.log(nome || "Desconhecido");
