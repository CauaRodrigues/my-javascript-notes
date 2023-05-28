// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

class VerificarNumeros {
	constructor(listaNumeros, min, max, intervaloFechado = true) {
		this.listaNumeros = listaNumeros;
		this.min = min;
		this.max = max;
		this.intervaloFechado = intervaloFechado;
	}

	tipoIntervalo(numero) {
		if (this.intervaloFechado) {
			return numero >= this.min && numero <= this.max;
		} else {
			return numero > this.min && numero < this.max;
		}
	}

	get verificar() {
		const numeros = this.listaNumeros;

		let qtdNumerosDentro = 0;
		let listaNumerosDentro = [];
		let posicaoNumerosDentro = [];

		let qtdNumerosFora = 0;
		let listaNumerosFora = [];
		let posicaoNumerosFora = [];

		for (let i = 0; i < numeros.length; i++) {
			if (this.tipoIntervalo(numeros[i])) {
				qtdNumerosDentro++;
				listaNumerosDentro.push(numeros[i]);
				posicaoNumerosDentro.push(i);
			} else {
				qtdNumerosFora++;
				listaNumerosFora.push(numeros[i]);
				posicaoNumerosFora.push(i);
			}
		}

		return {
			dentro: {
				quantidade: qtdNumerosDentro,
				numeros: listaNumerosDentro,
				posicoes: posicaoNumerosDentro,
			},
			fora: {
				quantidade: qtdNumerosFora,
				numeros: listaNumerosFora,
				posicoes: posicaoNumerosFora,
			},
			todosNumeros: this.listaNumeros,
			qtdTotal: qtdNumerosDentro + qtdNumerosFora,
		};
	}
}

const gerarNumeros = (qtd = 1, max = 100) => {
	if (qtd > 1) {
		let listaAleatoria = [];
		for (let i = 0; i < qtd; i++) {
			listaAleatoria.push(Math.floor(Math.random() * max));
		}
		return listaAleatoria;
	} else if (qtd === 1) {
		return Math.floor(Math.random() * max);
	} else {
		return 0;
	}
};

let arrNumeros = gerarNumeros(100, 999);

const relatorio = new VerificarNumeros(arrNumeros, 1, 150, true);
console.log(relatorio.verificar);
