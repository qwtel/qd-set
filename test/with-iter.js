global.Set = undefined;

const { Set } = require('../es5/with-iter.js');
const common = require('./common.js');

const assert = require('assert');

describe('Quick and Dirty Set with Iteration', () => {
  common(Set);

  describe('keys', () => {
    it('should have a `keys` method', () => {
      assert(new Set().keys);
    });

    it('should return an iterator', () => {
      assert(new Set().keys().next);
    });

    it('should iterator over keys', () => {
      const s = new Set([1, 2, 3]);
      const it = s.keys();
      const i1 = it.next();
      assert.equal(i1.value, 1);
      assert.equal(i1.done, false);
      const i2 = it.next();
      assert.equal(i2.value, 2);
      assert.equal(i2.done, false);
      const i3 = it.next();
      assert.equal(i3.value, 3);
      assert.equal(i3.done, false);
      const i4 = it.next();
      assert.equal(i4.value, undefined);
      assert.equal(i4.done, true);
    });

    it('should keep returning done:true', () => {
      const s = new Set([1]);
      const it = s.keys();
      assert.equal(it.next().value, 1);
      assert.equal(it.next().done, true);
      assert.equal(it.next().done, true);
      assert.equal(it.next().done, true);
    });
  });

  describe('values', () => {
    it('should have a `values` method', () => {
      assert(new Set().values);
    });

    it('should return an iterator', () => {
      assert(new Set().values().next);
    });

    it('should iterator over values', () => {
      const s = new Set([1, 2, 3]);
      const it = s.values();
      const i1 = it.next();
      assert.equal(i1.value, 1);
      assert.equal(i1.done, false);
      const i2 = it.next();
      assert.equal(i2.value, 2);
      assert.equal(i2.done, false);
      const i3 = it.next();
      assert.equal(i3.value, 3);
      assert.equal(i3.done, false);
      const i4 = it.next();
      assert.equal(i4.value, undefined);
      assert.equal(i4.done, true);
    });

    it('should keep returning done:true', () => {
      const s = new Set([1]);
      const it = s.values();
      assert.equal(it.next().value, 1);
      assert.equal(it.next().done, true);
      assert.equal(it.next().done, true);
      assert.equal(it.next().done, true);
    });
  });

  describe('entries', () => {
    it('should have a `entries` method', () => {
      assert(new Set().entries);
    });

    it('should return an iterator', () => {
      assert(new Set().entries().next);
    });

    it('should iterator over entries', () => {
      const s = new Set([1, 2, 3]);
      const it = s.entries();
      const i1 = it.next();
      assert.deepEqual(i1.value, [1, 1]);
      assert.deepEqual(i1.done, false);
      const i2 = it.next();
      assert.deepEqual(i2.value, [2, 2]);
      assert.deepEqual(i2.done, false);
      const i3 = it.next();
      assert.deepEqual(i3.value, [3, 3]);
      assert.deepEqual(i3.done, false);
      const i4 = it.next();
      assert.deepEqual(i4.value, undefined);
      assert.deepEqual(i4.done, true);
    });

    it('should keep returning done:true', () => {
      const s = new Set([1]);
      const it = s.entries();
      assert.deepEqual(it.next().value, [1, 1]);
      assert.equal(it.next().done, true);
      assert.equal(it.next().done, true);
      assert.equal(it.next().done, true);
    });
  });
});
