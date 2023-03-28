/* eslint-disable */
const reverseString = require('../code/reverseString');

test('reverse string', () => {
  expect(reverseString('string')).toMatch(new RegExp('gnirts'));
});