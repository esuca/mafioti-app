import {shuffle} from "./shuffle";

test('shuffle array', () => {
	const arr = [ { foo: "one" }, { foo: "two" } ]

	const result = shuffle(arr)

	expect(result).not.toBe(arr)
})