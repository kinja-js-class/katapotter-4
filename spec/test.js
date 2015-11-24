// priceCalculator([1,2,3,4]) => finalPrice
import {priceCalculator} from '../../dist/app';

describe('priceCalculator', () => {
	it('called with no arguments', () => {
		expect(priceCalculator()).toBe(0)
	})
})
