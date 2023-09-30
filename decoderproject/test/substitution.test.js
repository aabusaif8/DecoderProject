// Write your tests here!
const { substitution } = require('../src/substitution');
const { expect } = require('chai');

describe('substitution', () => {
  it('should encode a message', () => {
    expect(substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('jrufscpw');
  });

  it('should encode a message with spaces', () => {
    expect(substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('elp xhm xf mbymwwmfj dne');
  });

  it('should decode a message', () => {
    expect(substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false)).to.equal('thinkful');
  });

  it('should decode a message with special characters', () => {
    expect(substitution('message', '$wae&zrdxtfcygvuhbijnokmpl')).to.equal('y&ii$r&');
  });

  it('should decode a message with special characters and spaces', () => {
    expect(substitution('y&ii$r&', '$wae&zrdxtfcygvuhbijnokmpl', false)).to.equal('message');
  });

  it('should return false if the alphabet is not exactly 26 characters long', () => {
    expect(substitution('thinkful', 'short')).to.equal(false);
  });

  it('should return false if the alphabet contains duplicate characters', () => {
    expect(substitution('thinkful', 'abcabcabcabcabcabcabcabcyz')).to.equal(false);
  });
});

