/* eslint-disable */
const reverse = require('../code/reverse');

test('reverse string', () => {
  expect(reverse('string')).toMatch(new RegExp('gnirts'));
});