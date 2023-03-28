/* eslint-disable */
const calculator = require('../code/calculator');

describe('calculator', () => {
    test('add 1 + 2 should return 3', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });

    test('subtract 3 - 2 should return 1', () => {
      expect(calculator.subtract(3, 2)).toBe(1);
    });

    test('dividing 10 / 5 should return 2', () => {
      expect(calculator.divide(10, 5)).toBe(2);
    });

    test('multiply 2 x 3 should return 6', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });
  });
