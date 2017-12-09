export const Set = global.Set && new global.Set([1]).size === 1 ?
  global.Set :
  require('./src/qd-set-with-iter.js');

export default Set;
