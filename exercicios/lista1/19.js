// O cardápio de uma lanchonete é o seguinte:
//  _________________________________
// | Código |   Descrição  |  Preço  |
// |--------|--------------|---------|
// |  100   | Cachorro Q.  | R$ 3,00 |
// |  200   | Hambúrguer   | R$ 4,00 |
// |  300   | Cheeseburguer| R$ 5,50 |
// |  400   | Bauru        | R$ 7,50 |
// |  500   | Refrigerante | R$ 3,50 |
// |  600   | Suco         | R$ 2,80 |
//  ---------------------------------
// Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

function cafeteria(itemCode, amount = 1) {
	const product = {
		name: "",
		price: 0,
		value: (price) => price * amount,
	};

	switch (itemCode) {
		case 100:
			product.name = "Cachorro Quente";
			product.price = 3;
			break;

		case 200:
			product.name = "Hambúrguer Simples";
			product.price = 4;
			break;

		case 300:
			product.name = "Cheeseburguer";
			product.price = 5.5;
			break;

		case 400:
			product.name = "Bauru";
			product.price = 7.5;
			break;

		case 500:
			product.name = "Refrigerante";
			product.price = 3.5;
			break;

		case 600:
			product.name = "Suco";
			product.price = 2.8;
			break;

		default:
			console.log("==================================");
			console.log(`Código ${itemCode} inexistente`);
	}

	if (product.name) {
		console.log("==================================");
		console.log(`Produto Comprado: ${product.name}`);
		console.log(`Quantidade: ${amount}`);
		console.log(`Preço: R$ ${product.price}`);
		console.log(`Total: ${product.value(product.price)}`);
	}
}

cafeteria(100, 3);
cafeteria(200);
cafeteria(300, 2);
cafeteria(400);
cafeteria(500, 6);
cafeteria(600, 4);
cafeteria("112", 3);
