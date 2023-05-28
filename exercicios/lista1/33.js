// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console

let [vetorInteiro, vetorString, vetorDouble] = [
	[3, 4, 7, 23],
	["Pera", "Maçã", "Limão", "Pizza"],
	[2.2, 7.12, 45.6, 9.1],
];

class MisturarArray {
	constructor() {
		this.arrayList = arguments;
	}

	misturar() {
		let tudoJunto = [];
		for (let i = 0; i < this.arrayList.length; i++) {
			tudoJunto = tudoJunto.concat(this.arrayList[i]);
		}
		return tudoJunto.sort(() => 0.5 - Math.random());
	}
}

const sla = new MisturarArray(vetorInteiro, vetorDouble, vetorString);

console.log(sla.misturar());
