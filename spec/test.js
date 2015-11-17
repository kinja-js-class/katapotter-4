//this is a check that tests that one book costs €8
import book from '../../dist/app';

// given _ when _ then
describe("A books", () => {
	it("when i buy 1 book, then i pay €8", () => {
		expect(book.price).toBe(8);
	})
})
