// As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

const anosBissextos = (year) => {
	if (year >= 0) {
		return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
			? `${year} é bissexto`
			: `${year} não é bissexto`;
	}
	return `${year} não é bissexto`;
};

console.log(anosBissextos(0));
console.log(anosBissextos(4));
console.log(anosBissextos(100));
console.log(anosBissextos(400));
console.log(anosBissextos(800));
console.log(anosBissextos(1900));
console.log(anosBissextos(2020));
console.log(anosBissextos(1988));
console.log(anosBissextos(1992));
console.log(anosBissextos(1909));
console.log(anosBissextos(1996));
console.log(anosBissextos(2000));
console.log(anosBissextos(2004));
console.log(anosBissextos(2032));
console.log(anosBissextos(2021));
console.log(anosBissextos(600));
