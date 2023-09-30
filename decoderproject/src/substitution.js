// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || [...new Set(alphabet)].length !== 26) return false;

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const inputLower = input.toLowerCase();
    const alphabetLower = alphabet.toLowerCase();

    function translate(char) {
      if (char === ' ') return ' ';
      const index = encode ? standardAlphabet.indexOf(char) : alphabetLower.indexOf(char);
      if (index !== -1) {
        return encode ? alphabetLower[index] : standardAlphabet[index];
      }
      return char;
    }

    return inputLower.split('').map((char) => (char !== ' ' ? translate(char) : char)).join('');

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
