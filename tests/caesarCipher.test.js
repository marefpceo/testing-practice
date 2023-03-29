/* eslint-disable */
const caesarCipher = require('../code/caesarCipher');

test('caesarCipher', () => {
  expect(caesarCipher.caesarCipher('Name', 4)).toMatch(new RegExp('reqi'));
});

test('caesarCipher with punctuation', () => {
  expect(caesarCipher.caesarCipher('Name!@', 4)).toMatch(new RegExp('reqi%D'));
});