let foo = {
	[Symbol.iterator]: () => ({
		items: ["f", "o", "o"],
		next: function next() {
			return {
				done: this.items.length === 0,
				value: this.items.shift(),
			};
		},
	}),
};

for (let item of foo) {
	console.log(item);
}
