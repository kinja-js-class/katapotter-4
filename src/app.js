let priceCalculator = (cart) => {
	if (cart) {
		if (cart.length == 2 && cart[0].isbn != cart[1].isbn) {
			return 16 * 0.95;
		} else {
			return 8 * cart.length;
		}
	} else {
		return 0;
	}
};

export {priceCalculator}
