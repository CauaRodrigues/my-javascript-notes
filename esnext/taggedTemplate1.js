function real(strings, ...values) {
	const result = [];
	values.forEach((value, index) => {
		value = isNaN(value) ? value : `R$${value.toFixed(2)}`;
		result.push(strings[index], value);
	});
	return result.join("");
}

const preco = 29.9;
const precoParcela = 11;
const algumaString = "de";
console.log(real`1x de ${preco} ou 3x ${algumaString} ${precoParcela}`);
