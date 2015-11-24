import _ from 'underscore';

let priceCalculator = (cart) => {
	if (cart) {
		if (_.uniq(_.pluck(cart, 'isbn')).length === 1 ) {
			return 8 * cart.length;
		} else if (cart.length == 2) {
			return 16 * 0.95;
		} else if (cart.length === 3) {
			return 8 * 3 * 0.9;
		} else {
			return 8 * cart.length;
		}
	} else {
		return 0;
	}
};

export {priceCalculator}
