Number.prototype.entre = function (start, end) {
	return this >= start && this <= end;
};

const imprimirResultado = function (nota) {
	if (nota.entre(9, 10)) {
		console.log("Quadro de Honra");
	} else if (nota.entre(7, 8.99)) {
		console.log("Aprovado");
	} else if (nota.entre(4, 6.99)) {
		console.log("Recuperação");
	} else if (nota.entre(0, 3.99)) {
		console.log("Reprovado");
	} else {
		console.error("Nota Inválida");
	}
};

imprimirResultado(10);
imprimirResultado(8);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-1);
imprimirResultado(11);
