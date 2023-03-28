function reverse(a) {
  const str = a.split('');
  str.reverse();
  return str.join('');
}

module.exports = reverse;