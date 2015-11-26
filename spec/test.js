import {priceCalculator} from '../../dist/app';

describe('priceCalculator', () => {
	it('Buying nothing costs 0', () => {
		expect(priceCalculator()).toBe(0);
	});

	it('Buying 1 book costs 8', () => {
		let cart = [{
			isbn: '1'
		}];
		expect(priceCalculator(cart)).toBe(8);
	});
	it('Buying 2 of the same book costs 16', () => {
		let cart = [
			{isbn: '1'},
			{isbn: '1'}
		];
		expect(priceCalculator(cart)).toBe(16);
	});
	it('Buying 2 different costs 16 * 0.95', () => {
		let cart = [
			{isbn: '1'},
			{isbn: '2'}
		];
		expect(priceCalculator(cart)).toBe(16 * 0.95);
	});
	it('Buying 3 different costs 24 * 0.9', () => {
		let cart = [
			{isbn: '1'},
			{isbn: '2'},
			{isbn: '3'},
		];
		expect(priceCalculator(cart)).toBe(24 * 0.9);
	});
	it('Buying 3 of the same books costs 24', () => {
		let cart = [
			{isbn: '1'},
			{isbn: '1'},
			{isbn: '1'}
		];
		expect(priceCalculator(cart)).toBe(24);
	});
	it('Buying 4 different costs 4 * 8 * 0.80', () => {
		let cart = [
			{isbn: '1'},
			{isbn: '2'},
			{isbn: '3'},
			{isbn: '4'}
		];
		expect(priceCalculator(cart)).toBe(4 * 8 * 0.80);
	});
	it('Buying 5 different costs 5 * 8 * 0.75', () => {
		let cart = [
			{isbn: '1'},
			{isbn: '2'},
			{isbn: '3'},
			{isbn: '4'},
			{isbn: '5'}
		];
		expect(priceCalculator(cart)).toBe(5 * 8 * 0.75);
	});
	it('should give the highest discount', () => {
		let cart = [
			{isbn: '1'},
			{isbn: '1'},
			{isbn: '2'},
		];
		expect(priceCalculator(cart)).toBe(8 * 0.95 * 2 + 8);
	});
	xit('should give the highest discount', () => {
		let cart = [
			{isbn: '1'},
			{isbn: '1'},
			{isbn: '2'},
			{isbn: '2'},
			{isbn: '3'},
		];
		expect(priceCalculator(cart)).toBe(8 + 16 * 0.90 + 16 * 0.9);
	})
})


