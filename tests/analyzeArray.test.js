/* eslint-disable */
const analyzeArray = require('../code/analyzeArray');


  test('average of array values', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({average: 3, min: 1, max: 5, length: 5});
  });
