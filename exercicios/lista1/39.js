// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar

const TrocarElementos = (vetorA, vetorB) => {
	[vetorA, vetorB] = [vetorB, vetorA];
	return { vetorA, vetorB };
};

const vetorA = ["a, b, c"];
const vetorB = ["d, e, f"];

const trocarVetores = TrocarElementos(vetorA, vetorB);
console.log(trocarVetores);
