// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "D"; // escopo 1 - mais abrangente !!Não faça isso!!

const avo = { attr1: "A" }; // escopo 2
const pai = { __proto__: avo, attr2: "B", attr3: "E" }; // escopo 3 - note que este obj, semelhante ao filho tem a propriedade attr3
const filho = { __proto__: pai, attr3: "C" }; // escopo 4 - mesmo assim o js pega a propriedade que estiver mais próxima a chamada, de preferência no mesmo escopo
console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0);

const carro = {
	velAtual: 0,
	velMax: 200,
	acelerar(delta) {
		if (this.velAtual + delta <= this.velMax) {
			this.velAtual += delta;
		} else {
			this.velAtual = this.velMax;
		}
	},

	status() {
		return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
	},
};

const ferrari = {
	modelos: "F40",
	velMax: 324, // shadowing - vai sobrescrever a velocidade max que está no escopo acima
};

const volvo = {
	modelo: "V40",
	status() {
		// shadowing
		return `${this.modelo}: ${super.status()}`; // "super" representa a seleção do prototype, ou seja, vai procurar no escopo mais abrangente definido como prototype
	},
};

Object.setPrototypeOf(ferrari, carro); // estabelece uma relação prototype entre estes dois obj. Onde o prototype da ferrari é o carro
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100);
console.log(volvo.status());

ferrari.acelerar(40);
console.log(ferrari.status());
