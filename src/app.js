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
		// step 1: calculate number of different books
		let differentBooks = _.countBy(cart, (book) => book.isbn )
		let numberOfDifferentBooks= Object.keys(differentBooks).length;
		let discountedPrice = 8 * discounts[numberOfDifferentBooks] * numberOfDifferentBooks;
		// step 2: price the rest at 8 each
		let finalPrice = discountedPrice + (cart.length - numberOfDifferentBooks) * 8;

		return finalPrice;
	} else {
		return 0;
	}
};


export {priceCalculator}
