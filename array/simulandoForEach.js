// Criando um forEach
Array.prototype.forEach2 = function (callback) {
	for (let i = 0; i < this.length; i++) {
		callback(this[i], i, this);
	}
};

const aprovados = ["Agatha", "Aldo", "Dan", "Biles"];

// forEach criado
aprovados.forEach2((nome, indice) => {
	console.log(`${indice + 1}°) ${nome}`);
});

// forEach original
aprovados.forEach((nome, indice) => {
	console.log(`${indice + 1}°) ${nome}`);
});
