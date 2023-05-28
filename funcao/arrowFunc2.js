function Pessoa() {
	this.idade = 0;

	// Usando o this em uma arrow function, o this não varia.
	setInterval(() => {
		this.idade++;
		console.log(this.idade);
	}, 1000);
}

new Pessoa();
