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

		let finalPrice = 0;
		let groupedByIsbn = _.toArray(_.groupBy(cart, 'isbn'));
		let numberOfIsbns = groupedByIsbn.length;
		let uniqueSets = [];
		let interatee = [];

		for (var i = 0; i < numberOfIsbns; i++) {
			for (var j = 0; j < numberOfIsbns; j++) {
				if (groupedByIsbn[j][i]) {
					interatee.push(groupedByIsbn[j][i]);
				}
			}
			uniqueSets.push(interatee);
			interatee = [];
		}

		console.log(uniqueSets);

		_.each(uniqueSets, (set) => {
			finalPrice += set.length * 8 * discounts[set.length];
			console.log(set);
		});

		return finalPrice;

	} else {
		return 0;
	}
};


export {priceCalculator}
