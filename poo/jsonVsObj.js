const obj = {
	a: 1,
	b: 2,
	c: 3,
	soma() {
		return a + b + c;
	},
};

// obj em js => JSON
console.log(JSON.stringify(obj));
// O JSON é um formato textual, serve apenas para passar dados e informações. Por isso ele tira a função soma()

// JSON => obj em js
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));
console.log(
	JSON.parse(
		'{ "a": 1, "b": "string", "c": true, "d": { "d1": "z", "d2": "x" }, "e": [1.5, 2, 3, 4], "f": [ { "ff1": [ 1, 2, 3 ] }, 2 ] }'
	)
);
