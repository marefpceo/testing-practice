function caesarCipher(string, key) {
  const plaintext = string.toLowerCase();
  const keyShift = key;
  const re = /[a-z]/;
  let ciphertext;

  for (let i = 0; i < plaintext.length; i++) {
    if (re.test(plaintext.charAt(i))) {
      ciphertext += String.fromCharCode(((plaintext.charCodeAt(i) - 97) + keyShift)%26 + 97);
    } else {
      ciphertext += String.fromCharCode(plaintext.charCodeAt(i) + keyShift);
    }
  }
  return ciphertext;
};


module.exports = { caesarCipher };