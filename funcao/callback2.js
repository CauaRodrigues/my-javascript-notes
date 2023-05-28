const notas = [7.7, 6.5, 5.6, 8.9, 3.6, 7.1, 9.0];

//Sem callback
let notasBaixas = [];
for (let i in notas) {
	if (notas[i] < 7) {
		notasBaixas.push(notas[i]);
	}
}

console.log(notasBaixas);

// Com callback
const notasBaixas2 = notas.filter((nota) => nota < 7);
// A função nativa filter, como o próprio nome diz filtra um elemento de um array seguindo uma condição imposta para ele por outra função callback, que neste caso é uma arrow function.

console.log(notasBaixas2);
