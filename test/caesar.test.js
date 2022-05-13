// Write your tests here!
const expect = require("chai").expect
const { caesar } = require("../src/caesar")

describe("caesar (stephanie's tests)", () => {
    it("no shift given return false", () => {
        const inString = "string"
        const actual = caesar(inString)
        expect(actual).to.be.false
    })

    it("0 shift given return false", () =>{
        const inString = "string"
        const inShift = 0
        const actual = caesar(inString,inShift)
        expect(actual).to.be.false
    })
    it("less than -25 shift given return false", () => {
        const inString = "string"
        const inShift = -300
        const actual = caesar(inString,inShift)
        expect(actual).to.be.false
    })
    it("greater than 25 shift given return false", () => {
        const inString = "string"
        const inShift = 300
        const actual = caesar(inString,inShift)
        expect(actual).to.be.false   
    })
    it("encode positive shift goes forward", () => {
        const inString = "test string"
        const inShift = 3
        const actual = caesar(inString,inShift)
        const expected = "whvw vwulqj"
        expect(actual).to.equal(expected)
    })
    it("encode negative shift goes backwards", () => {
        const inString = "test string"
        const inShift = -3
        const actual = caesar(inString,inShift)
        const expected = "qbpq pqofkd"
        expect(actual).to.equal(expected)
    })
    it("decode positive shift goes backwards", () => {
        const inString = "test string"
        const inShift = 3
        const actual = caesar(inString,inShift, false)
        const expected = "qbpq pqofkd"
        expect(actual).to.equal(expected)  
    })
    it("decode negative shift goes forward", () => {
        const inString = "test string"
        const inShift = -3
        const actual = caesar(inString,inShift,false)
        const expected = "whvw vwulqj"
        expect(actual).to.equal(expected)   
    })
})