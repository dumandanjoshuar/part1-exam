const validatePassword = require('../validatePassword')

test("return false given an empty string", () => {
    expect(validatePassword("")).toBe(false)
})

test("return true given a password 8 characters or longer, a letter, and a number", () => {
    expect(validatePassword("1234567a")).toBe(true)
    expect(validatePassword("1234567A")).toBe(true)
    expect(validatePassword("123456aA")).toBe(true)
})

test("return false given a password that is 8 character long, but no letters", () => {
    expect(validatePassword("12345678")).toBe(false)
})

test("return false given a password that is 8 character long, but no number", () => {
    expect(validatePassword("ABCDEFGH")).toBe(false)
})

test("return false given a password that contains a letter and a number, but too short", () => {
    expect(validatePassword("a1")).toBe(false)
})