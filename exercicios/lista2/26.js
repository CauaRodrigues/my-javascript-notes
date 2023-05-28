// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
// exemplo a seguir

const inverterObj = (obj) => {
	let objInvertido = new Map();
	for (let i = 0; i < Object.keys(obj).length; i++) {
		let key = Object.keys(obj)[i];
		let value = Object.values(obj)[i];
		objInvertido.set(value, key);
	}
	console.log(objInvertido);
};

inverterObj({ a: 1, b: 2, c: 3 });
inverterObj({ valor: "R$12,90", produto: "Garrafa de Metal", quantidade: 5 });
