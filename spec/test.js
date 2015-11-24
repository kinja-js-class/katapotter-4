// priceCalculator([1,2,3,4]) => finalPrice
import {priceCalculator} from '../../dist/app';

describe('priceCalculator', () => {
	it('Buying nothing costs 0', () => {
		expect(priceCalculator()).toBe(0);
	});

	it('Buying 1 book costs 8', () => {
		let books = [
			{
			price: 8
		}
		];
		expect(priceCalculator(books)).toBe(8);
	});
})
