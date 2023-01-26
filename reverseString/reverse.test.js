const reserveString = require("./reverse")

test("reverse normal string", ()=> {
    expect(reserveString("hello")).toBe("olleh")
})