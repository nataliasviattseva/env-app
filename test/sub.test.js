/**
 * Unit tests for the sub function.
 */
const sub = require('../src/sub');

test('substraction 2 - 2 to equal 0', () => {
  expect(sub(2, 2)).toBe(0);
});
