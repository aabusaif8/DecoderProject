// Write your tests here!

const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe('polybius', () => {
  it('should encode a message', () => {
    expect(polybius('thinkful')).to.equal('4432423352125413');
  });

  it('should decode a message', () => {
    expect(polybius('Hello world')).to.equal('3251131343 2543241341');
  });

  it('should decode a message with spaces', () => {
    expect(polybius('3251131343 2543241341', false)).to.equal('hello world');
  });

  it('should decode a message with "i/j" as 42', () => {
    expect(polybius('4432423352125413', false)).to.equal('th(i/j)nkful');
  });

  it('should return false if decoding with an odd number of characters (excluding spaces)', () => {
    expect(polybius('44324233521254134', false)).to.equal(false);
  });
});
