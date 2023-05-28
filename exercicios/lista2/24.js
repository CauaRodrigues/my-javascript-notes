// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

function searchWords(word, listWords) {
	return listWords.filter((string) => string.includes(word) || word.includes(string));
}

console.log(searchWords('pro', ['programação', 'mobile', 'profissional']))
console.log(searchWords('python', ['javascript', 'java', 'c++']));
console.log(searchWords('horas', ['minutos', 'tempo', 'hora', 'horas', 'segundos']));
console.log(searchWords('ogro', ['quintal', 'sherek', 'burro']));
