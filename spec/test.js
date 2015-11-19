//this is a check that tests that one book costs €8
import {priceCalculator, books} from '../../dist/app';

console.log(priceCalculator, books);

// given _ when _ then
describe("A books", () => {
	it("when i buy 1 book, then i pay €8", () => {
		let booksToBuy = [books[0]];
		expect(priceCalculator(booksToBuy)).toBe(8);
	})
	it("when i buy 2 different books, then i pay (2 * €8) * 0.95 = €15.2", () => {
		let booksToBuy = [books[0], books[1]];
		expect(priceCalculator(booksToBuy)).toBe(15.2);
	})
	it("when i buy 3 different books, then i pay (3 * €8) * 0.90 = €21.6", () => {
		let booksToBuy = [books[0], books[1], books[2]];
		expect(priceCalculator(booksToBuy)).toBe(21.6);
	})
	it("when i buy 4 different books, then i pay (4 * €8) * 0.80 = €25.6", () => {
		let booksToBuy = [books[0], books[1], books[2], books[3]];
		expect(priceCalculator(booksToBuy)).toBe(25.6);
	})
	it("when i buy 5 different books, then i pay (5 * €8) * 0.75 = €30", () => {
		let booksToBuy =  [books[0], books[1], books[2], books[3], books[4]];
		expect(priceCalculator(booksToBuy)).toBe(30);
	})
})
