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
		uniqueColumnsPrice,
		leftoverColumnsPrice,
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

			if (maxPossibleNumberOfUniqueColumns !== 0) {
				uniqueColumnsPrice = (maxPossibleNumberOfFullRows + 1) * 8 * maxPossibleNumberOfUniqueColumns * discounts[(maxPossibleNumberOfFullRows + 1)];
			} else {
				uniqueColumnsPrice = 0;
			}

			leftoverColumnsPrice = maxPossibleNumberOfFullRows * 8 * (maxBookNumberPerRow - maxPossibleNumberOfUniqueColumns)*discounts[(maxPossibleNumberOfFullRows)];

			totalPrice = uniqueColumnsPrice + leftoverColumnsPrice;

			return totalPrice;
		} else {
			return 0;
		}
};


export {priceCalculator};
