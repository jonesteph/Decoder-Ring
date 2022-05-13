// Write your tests here!
const expect = require("chai").expect
const { polybius } = require("../src/polybius")

describe(" polybius (stephanie's tests)", () => {
    it("odd characters returns false", () => {
        const inString = "22 45341"
        const actual = polybius(inString, false)
        expect(actual).to.be.false
    })
    it("spaces work encoding", () =>{
        const inString = "hello world"
        const actual = polybius(inString)
        const expected = "3251131343 2543241341"
        expect(actual).to.equal(expected)
    })
    it("spaces work decoding", () => {
        const inString = "3251131343 2543241341"
        const actual = polybius(inString,false)
        const expected = "hello world"
        expect(actual).to.equal(expected)
    })
    it("i/j works encoding", () => {
        const inString = "jingling"
        const actual = polybius(inString)
        const expected = "4242332213423322"
        expect(actual).to.equal(expected)   
    })
    it("i/j works decoding", () => {
        const inString = "4242332213423322"
        const actual = polybius(inString,false)
        const expected = "i/ji/jngli/jng"
        expect(actual).to.equal(expected)
    })
})