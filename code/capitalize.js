function capitalize(a) {
  const str = a.split('');
  const firstLetter = str[0].toUpperCase();

  str[0] = firstLetter;
  const newStr = str.join('');
  
  return newStr;
}

module.exports = capitalize;