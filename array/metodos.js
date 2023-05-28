const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
console.log("original:", pilotos);

pilotos.pop(); // remove último elemento
console.log(".pop =>", pilotos);

pilotos.push("Verstappen", "Kirk"); // adiciona novos elementos à última posição
console.log(".push =>", pilotos);

pilotos.shift(); // remove o primeiro elemento
console.log(".shift =>", pilotos);

pilotos.unshift("Hamilton", "Katra"); // adiciona um elemento à primeira posição
console.log(".unshift =>", pilotos);

// splice:
pilotos.splice(2, 0, "Bottas", "Massa"); // adicionar dois elemento antes da posição 2
console.log(".splice(2,0, items...) =>", pilotos);

pilotos.splice(3, 4); // selecionar a posição 3 e remover o primeiro elemento dessa contagem,
console.log(".splice(3,4) =>", pilotos);

// slice ('pedaço'):
const algunsPilotos1 = pilotos.slice(3); // retorna um novo array a partir do índice 3, incluindo o 3
console.log(".slice(3) =>", algunsPilotos1);

const algunsPilotos2 = pilotos.slice(2, 4); // retorna um novo array com os elementos entre o índice 2 e índice 4, excluindo o 4
console.log(".slice(2,4) =>", algunsPilotos2);
