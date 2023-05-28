const seq = {
	_valor: 1, // convenção: "_" mostra que essa variável deve ser acessada apenas internamente

	get valor() {
		return this._valor++;
	},

	set valor(valor) {
		if (valor > this._valor) {
			this._valor = valor;
		}
	},
};

// console.log(seq.valor, seq.valor);

seq.valor = 1000;
console.log(seq.valor, seq.valor);

// seq.valor = 900;
// console.log(seq.valor, seq.valor);
