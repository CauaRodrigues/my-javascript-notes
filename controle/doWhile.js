function getIntRandom(min, max) {
	value = Math.random() * (max - min) + min;
	return Math.floor(value);
}

let option;

do {
	option = getIntRandom(-1, 10);
	console.log(option);
} while (option != -1);
