const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
	console.log(`${indice + 1}. ${nome}`);
}

// A função forEach recebe como parâmetro a função callback "imprimir".

// A função forEach é executada, executando a função "imprimir". Depois de cada execução da função "imprimir" a função
// forEach volta a ser executada. Esse loop acontece para todos os elementos dentro do array fabricantes
fabricantes.forEach(imprimir);
fabricantes.forEach((a) => console.log(a));

// Callback são funções passadas como parâmetro para outra função.
