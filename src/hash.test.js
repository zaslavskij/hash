const Hashtable = require("./hash");

const hash = new Hashtable(5);

// test("adding new value to hash", () => {
// 	expect(hash.add("abc").has("abc")).toBe(true);
// });

// test("check hashkey", () => {
// 	expect(Hashtable.createHashKey("abc")).toBe(97 + 98 + 99);
// });

test("delete value from hash", () => {
	expect(() => hash.delete("zzzz")).toThrow("Unknown value!");
	expect(hash.add("abc").delete("abc").has("abc")).toBe(false);
});
