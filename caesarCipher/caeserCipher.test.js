const caesarCipher = require("./caeserCipher");

test("testing for hello", () => {
    expect(caesarCipher("hello", 4)).toBe("lipps");
});

test("Letter b", () => {
    expect(caesarCipher("b", 1)).toBe("c");
});

test("testing for cat", () => {
    expect(caesarCipher("cat", 1)).toBe("dbu");
});