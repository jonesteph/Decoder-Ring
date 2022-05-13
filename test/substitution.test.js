// Write your tests here!
const expect = require("chai").expect
const { substitution } = require("../src/substitution")

describe("substitution (stephanie's tests)", () => {
    it("no alphabet given return false", () => {
        const inString = "string"
        const actual = substitution(inString)
        expect(actual).to.be.false
    })

    it("alphabet given isn't 26 char return false", () =>{
        const inString = "string"
        const inAlpha = "ghjkl"
        const actual = substitution(inString,inAlpha)
        expect(actual).to.be.false
    })
    it("special characters work encoding", () => {
        const inString = "astring"
        const inAlpha = "*!abcdefghijklmnopqrstuvwx"
        const actual = substitution(inString,inAlpha)
        const expected = "*qrpgle"
        expect(actual).to.equal(expected)
    })
    it("spaces work encoding", () => {
        const inString = "this is a string"
        const inAlpha = "yzabcdefghijklmnopqrstuvwx"
        const actual = substitution(inString,inAlpha)
        const expected = "rfgq gq y qrpgle"
        expect(actual).to.equal(expected)  
    })
    it("special characters work decoding", () => {
        const inString = "*qrpgle"
        const inAlpha = "*!abcdefghijklmnopqrstuvwx"
        const actual = substitution(inString,inAlpha, false)
        const expected = "astring"
        expect(actual).to.equal(expected)
    })
    it("spaces work decoding", () => {
        const inString = "rfgq gq y qrpgle"
        const inAlpha = "yzabcdefghijklmnopqrstuvwx"
        const actual = substitution(inString,inAlpha, false)
        const expected = "this is a string"
        expect(actual).to.equal(expected)
    })
})