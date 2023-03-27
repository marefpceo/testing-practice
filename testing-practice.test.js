/* eslint-disable */
const capitalize = require('./main');

test('first letter of string capitalized', () => {
  expect(capitalize('first')).toMatch(new RegExp('First'));
});



const reverse = require('./main');

test('reverse string', () => {
  expect(reverse('string')).toMatch(new RegExp('gnirts'));
});



const calculator = require('./main');

describe('calculator', () => {
  describe('add', () => {
    test('add numbers', () => {
      expect(calculator.add(1,2).toBe(3));
    });
  });

  describe('subtract', () => {
    test('subtract numbers', () => {
      expect(calculator.subtract(3, 2).toBe(1));
    });
  });

  describe('divide', () => {
    test('divide numbers', () => {
      expect(calculator.divide(10, 5).toBe(2));
    });
  });

  describe('multiply', () => {
    test('multiply numbers', () => {
      expect(calculator.multiply(2, 3).toBe(6));
    });
  });
});



const caesarCipher = require('./main');

describe('caesar cipher', () => {
  
    test('z to a wrapping', () => {

    });

    test('all lowercase', () => {

    });

    test('punctuation', () => {

    });
});



const analyzeArray = require('./main');

describe('analyze array', () => {
  describe(average)
})