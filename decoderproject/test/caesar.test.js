// Write your tests here!
const { expect } = require('chai')
const { caesar }  = require('../src/caesar')
describe('caesar shift', () => {

    it('should return false if the shift is less than -25', () => {
        const actual = caesar('hello',-30, encode = true)
        expect(actual).to.be.false
    })
    it('should return false if the shift is equal to 0', () =>{
        const actual = caesar('hello', 0, encode =true)
        expect(actual).to.be.false
    })
    it('should return false if the shift is greater than 25', () => {
        const actual = caesar('hello', 30, encode = true)
        expect(actual).to.be.false
    })
    it('should not change spacing or other nonalphabetic symbols', () => {
        const expected = 'wklqnixo wklqnixo'
        const actual = caesar('thinkful thinkful', 3, encode = true)
        expect(actual).to.equal(expected)
    })
    it('should ignore capital letters',() => {
        const actual = caesar('A', 1, encode = true)
        const expected = 'b'
        expect(actual).to.equal(expected)
    })
    it('should loop back to the beginning of the alphabet if the shift takes it past the normal alphabet.',() =>{
        const actual = caesar('zzz', 2, encode = true)
        const expected = 'bbb'
        expect(actual).to.equal(expected)
    })
})