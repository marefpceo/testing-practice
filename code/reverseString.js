function reverseString(a) {
  const str = a.split('');
  str.reverse();
  return str.join('');
}

module.exports = reverseString;