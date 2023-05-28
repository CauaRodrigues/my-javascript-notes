// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

const season = {
	gamesNumbers: 5,
	scores: [],
	counterBrokenRecord: 0,
	RandomScoreGenerator(max = 101) {
		for (let i = 0; i < this.gamesNumbers; i++) {
			let randomPoint = Math.round(Math.random() * max);
			this.scores.push(randomPoint);
		}
	},
	NewScore(score = Math.round(Math.random() * 201)) {
		let rating = "";
		if (score > getBestAndWorstScore(true)) {
			rating = "Novo recorde.";
			this.counterBrokenRecord += 1;
		} else if (score < getBestAndWorstScore(false)) {
			rating = "Pior pontuação.";
		}
		this.gamesNumbers += 1;
		this.scores.push(score);
		return `Nova pontuação adicionada: ${score}. ${rating}`;
	},
};

season.RandomScoreGenerator(200);

const getBestAndWorstScore = (best) => {
	if (best) {
		return Math.max(...season.scores);
	} else {
		let minPosition = 0;
		for (let i = 0; i < season.scores.length; i++) {
			let currentScore = season.scores[i];
			if (currentScore < season.scores[minPosition]) {
				minPosition = i;
			}
		}
		return { min: Math.min(...season.scores), minPosition: minPosition + 1 };
	}
};

// Testes
console.log(season.scores);
console.log(season.NewScore());
console.log(season.NewScore());
console.log(season.NewScore(23));
console.log(season.NewScore(190));
console.log(season.NewScore(194));
console.log(season.NewScore(200));
console.log(season.NewScore(206));
console.log(season.NewScore(50));
console.log(`Vezes que o recorde foi batido: ${season.counterBrokenRecord}`);
console.log(`Melhor pontuação: ${getBestAndWorstScore(true)}`);
console.log(
	`Pior pontuação: ${getBestAndWorstScore(false).min}. Feita no ${
		getBestAndWorstScore(false).minPosition
	}º jogo da temp.`
);
console.log(`Número de jogos: ${season.gamesNumbers}`);
console.log(season.scores);
