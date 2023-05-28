function Pessoa() {
	// Podemos armazenar o this em uma variável e usarmos ela na função que está no setInterval ou em qualquer outra que estiver dentro da função Pessoa.
	// Quando usada a variável self, o this refenciará a função Pessoa e não a função em que o self será chamado. Diferente se você usasse a própria keyword "this"
	const self = this;

	self.idade = 0;

	setInterval(
		function () {
			self.idade++;
			console.log(self.idade);
			// O .bind, faz a ligação da função que está dentro de setInterval com a função Pessoa.
		} /*.bind(this)*/,
		1000
	);
}

new Pessoa();
