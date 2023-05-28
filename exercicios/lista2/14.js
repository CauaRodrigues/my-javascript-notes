// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

const destructionObject = (object) => Object.entries(object);

console.log(destructionObject({ name: "Maria", age: 12 }));
console.log(
	destructionObject({
		name: "Josh",
		age: 12,
		musics: [
			{ name: "Tokyo Dream", autor: "PxycxZ", year: 2022, genre: "Phonk" },
			{
				name: "Life's Been Good",
				autor: "Joe Walsh",
				year: 1978,
				genre: "Rock",
			},
		],
	})
);
