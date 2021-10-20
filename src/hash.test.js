const Hashtable = require("./hash");

const hash = new Hashtable(5);

// test("chech if hash contains value", () => {
// 	expect(hash.has("112112")).toBe(false);
// });

test("adding new value to hash", () => {
	expect(hash.add("12121212").has("12121212")).toBe(true);
});

test("check hashkey", () => {
	expect(Hashtable.createHashKey("abc")).toBe(97 + 98 + 99);
});
