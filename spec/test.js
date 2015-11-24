import {priceCalculator} from '../../dist/app';

describe('priceCalculator', () => {
	it('Buying nothing costs 0', () => {
		expect(priceCalculator()).toBe(0);
	});

	it('Buying 1 book costs 8', () => {
		let cart = [
			{
			price: 8
		}
		];
		expect(priceCalculator(cart)).toBe(8);
	});
	it('Buying 2 of the same book costs 16', () => {
		let cart = [
			{isbn: '1', price: 8},
			{isbn: '1', price: 8}
		];
		expect(priceCalculator(cart)).toBe(16);
	});
	it('Buying 2 different costs 16 * 0.95', () => {
		let cart = [
			{isbn: '1', price: 8},
			{isbn: '2', price: 8}
		];
		expect(priceCalculator(cart)).toBe(16 * 0.95);
	});
})


