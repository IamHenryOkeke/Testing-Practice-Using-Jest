const capitalize = require("./capitalize");

test("", () => {
    expect(capitalize("hello")).toBe("Hello")
});

test("", () => {
    expect(capitalize("fish")).toBe("Fish")
});