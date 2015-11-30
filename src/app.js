'use strict';

import _ from 'underscore';

let discounts = {
	1: 1,
	2: 0.95,
	3: 0.9,
	4: 0.8,
	5: 0.75
};


let priceCalculator = (cart) => {
	let groupedByIsbn,
		totalNumberOfIsbn,
		totalNumberOfBooks = 0,
		maxBookNumberPerRow,
		maxPossibleNumberOfFullRows,
		numberOfBooksInFullRows,
		maxPossibleNumberOfUniqueColumns,
		totalPrice;

		if (cart) {
			groupedByIsbn = _.sortBy(_.toArray(_.groupBy(cart, 'isbn'), 'length'));
			totalNumberOfIsbn = groupedByIsbn.length;
			maxBookNumberPerRow = _.last(groupedByIsbn).length;

			_.each(groupedByIsbn, (book) => {
				totalNumberOfBooks += book.length; 
			});

			maxPossibleNumberOfFullRows = Math.floor(totalNumberOfBooks / maxBookNumberPerRow);

			numberOfBooksInFullRows = maxPossibleNumberOfFullRows * maxBookNumberPerRow;

			maxPossibleNumberOfUniqueColumns = totalNumberOfBooks - numberOfBooksInFullRows;

			totalPrice = ((maxPossibleNumberOfFullRows + 1) * 8 * maxPossibleNumberOfUniqueColumns * discounts[(maxPossibleNumberOfFullRows + 1)]) +
				(maxPossibleNumberOfFullRows * 8 * (maxBookNumberPerRow - maxPossibleNumberOfUniqueColumns)*discounts[(maxPossibleNumberOfFullRows)]);

			console.log(totalPrice);

			return totalPrice;
		} else {
			return 0;
		}
};


export {priceCalculator}
