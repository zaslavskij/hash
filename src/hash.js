function createHashKey(str) {
	return [...str].reduce((acc, rec) => {
		// eslint-disable-next-line
		acc += rec.charCodeAt(0);
		return acc;
	}, 0);
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
		const index2save = hashKey % this.hash.length;

		this.hash[index2save] = n;
		return this;
	}
};

module.exports.createHashKey = createHashKey;
