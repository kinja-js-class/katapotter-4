let books = [ 
	{price: 8}, 
	{price: 8}, 
	{price: 8}, 
	{price: 8}, 
	{price: 8}
];

let discounts = {
        1: 1,
        2: 0.95,
        3: 0.90,
        4: 0.80,
        5: 0.75
    }

let priceCalculator = (books) => {
	return books.reduce((previous, current) => previous + current.price, 0) * discounts[books.length];
};

export { books, discounts, priceCalculator };
