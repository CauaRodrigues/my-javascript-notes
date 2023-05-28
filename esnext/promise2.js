// setTimeout(() => {
// 	console.log("Executando 1° callback...");

// 	setTimeout(() => {
// 		console.log("Executando 2° callback...");

// 		setTimeout(() => {
// 			console.log("Executando 3° callback...");
// 		}, 2000);
// 	}, 2000);
// }, 2000);

function esperarPor(time = 2000, number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log(`Executando ${number}° promise...`);
			resolve();
		}, time);
	});
}

esperarPor(3000, 1)
	.then(() => esperarPor(3000, 2))
	.then(() => esperarPor(3000, 3));
