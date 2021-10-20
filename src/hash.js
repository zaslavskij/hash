function createHashKey(str) {
	return [...str].reduce((acc, rec) => acc + rec.charCodeAt(0), 0);
}

module.exports = class HashTable {
	constructor(c) {
		this.hash = new Array(c);
	}

	has(s) {
		const hashKey = createHashKey(s);
		const index2check = hashKey % this.hash.length;
		return this.hash[index2check] === s;
	}

	add(n) {
		if (this.has(n)) throw new Error("Value already existing!");
		const hashKey = createHashKey(n);
		this.hash[hashKey] = n;

		return this;
	}
};

module.exports.createHashKey = createHashKey;
