// Elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função
// deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação:
// 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.
// Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado,
// mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne,
// ao invés do vetor, um string com a frase: “Delta é negativo”.

function delta(a, b, c) {
	let Δ = Math.pow(b, 2) - 4 * a * c;
	return Δ;
}

function x1(a, b, delta) {
	let x = -b + Math.sqrt(delta);
	return x / (2 * a);
}

function x2(a, b, delta) {
	let x = -b - Math.sqrt(delta);
	return x / (2 * a);
}

const bhaskara = (a, b, c) => {
	let Δ = delta(a, b, c);

	if (Δ < 0) {
		return "Delta é negativo";
	} else {
		let XI = x1(a, b, Δ);
		let XII = x2(a, b, Δ);

		return [Δ, XI, XII];
	}
};

console.log(bhaskara(1, 12, -13));
console.log(bhaskara(1, 3, 2));
console.log(bhaskara(3, 1, 2));
console.log(bhaskara(3, -15, 12));
console.log(bhaskara(9, -24, 16));
console.log(bhaskara(1, -2, 4));
