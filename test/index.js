global.Set = undefined;

const { Set } = require('../es5/index.js');
const common = require('./common.js');

describe('Quick and Dirty Set', () => {
  common(Set);
});
