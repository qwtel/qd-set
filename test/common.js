const assert = require('assert');

module.exports = (Set) => {
  it('should exist', () => {
    assert(Set);
  });

  describe('constructor', () => {
    it('should have a empty constructor', () => {
      assert(new Set());
    });

    it('should create a new set from an array', () => {
      const s = new Set([1, 2, 3]);
      assert.equal(s.size, 3);
    });

    it('should remove duplicate entries from the initial array', () => {
      const s = new Set([1, 2, 2, 3]);
      assert.equal(s.size, 3);
    });
  });

  describe('size', () => {
    it('should have a `size` property', () => {
      assert.equal(new Set().size, 0);
    });
  });

  describe('has', () => {
    it('should have a `has` method', () => {
      const s = new Set([1, 2, 2, 3]);
      assert(s.has(1));
      assert(s.has(2));
      assert(s.has(3));
      assert(!s.has(4));
    });
  });

  describe('add', () => {
    it('should have a `add` method', () => {
      const s = new Set();
      s.add(1);
      s.add(2);
      s.add(3);
      assert.equal(s.size, 3);
      assert(s.has(1));
      assert(s.has(2));
      assert(s.has(3));
    });

    it('should return the set', () => {
      const s = new Set();
      assert.equal(s.add(1), s);
    });

    it('should ignore adding duplicates', () => {
      const s = new Set([1]);
      s.add(1);
      assert.equal(s.size, 1);
    });
  });

  describe('delete', () => {
    it('should have a `delete` method', () => {
      const s = new Set([1, 2, 3]);
      s.delete(2);
      assert.equal(s.size, 2);
      assert(!s.has(2));
      assert(s.has(1));
      assert(s.has(3));
    });

    it('should return true when a item was deleted', () => {
      const s = new Set([1, 2, 3]);
      assert.equal(s.delete(2), true);
    });

    it('should return false when no item was deleted', () => {
      const s = new Set([1, 2, 3]);
      assert.equal(s.delete(4), false);
    });

    it('should ignore deleting non-existent entries', () => {
      const s = new Set([1, 2, 3]);
      s.delete(4);
      assert.equal(s.size, 3);
      assert(s.has(1));
      assert(s.has(2));
      assert(s.has(3));
      assert(!s.has(4));
    });
  });

  describe('forEach', () => {
    it('should have a `forEach` method', () => {
      const s = new Set([1, 2, 3]);
      assert(s.forEach)
      const res = [];
      s.forEach(x => res.push(x));
      assert.equal(res.length, 3);
      assert.equal(res[0], 1);
      assert.equal(res[1], 2);
      assert.equal(res[2], 3);
    });

    it('should not iterator over deleted items', () => {
      const s = new Set([1, 2, 3, 4, 5]);
      assert(s.forEach)
      s.delete(2);
      s.delete(3);
      const res = [];
      s.forEach(x => res.push(x));
      assert.equal(res.length, 3);
      assert.equal(res[0], 1);
      assert.equal(res[1], 4);
      assert.equal(res[2], 5);
      assert.equal(res[3], undefined);
      assert.equal(res[4], undefined);
    });
  });

  describe('clear', () => {
    it('should have a `clear` method', () => {
      const s = new Set([1, 2, 3, 4, 5]);
      s.clear();
      assert.equal(s.size, 0);
    });

    it('forEach should not iterate after a clear', () => {
      const s = new Set([1, 2, 3, 4, 5]);
      s.clear();
      const res = [];
      s.forEach(x => res.push(x));
      assert.equal(res.length, 0);
    });

    it('should be possible to add items after a clear', () => {
      const s = new Set([1, 2, 3, 4, 5]);
      s.clear();
      s.add(1);
      s.add(2);
      s.add(3);
      assert.equal(s.size, 3);
      const res = [];
      s.forEach(x => res.push(x));
      assert.equal(res.length, 3);
    });
  });
};
