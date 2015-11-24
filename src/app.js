import _ from 'underscore';

let discounts = {
	1: 1,
	2: 0.95,
	3: 0.9,
	4: 0.8,
	5: 0.75
}

let priceCalculator = (cart) => {
	if (cart) {
		if (_.uniq(_.pluck(cart, 'isbn')).length === 1 ) {
			return 8 * cart.length;
		} else {
			return 8 * cart.length * discounts[cart.length]
		}
	} else {
		return 0;
	}
};

export {priceCalculator}
