const caesarCipher = require("./caeserCipher");

test("testing for hello", () => {
    expect(caesarCipher("hello", 4)).toBe("lipps");
});

test("Letter b", () => {
    expect(caesarCipher("b", 5)).toBe("g");
});

test("testing for cat", () => {
    expect(caesarCipher("cat", 1)).toBe("dbu");
});

test("testing for war message", () => {
    expect(caesarCipher("The Germans are coming", 3)).toBe("wkh jhupdqv duh frplqj");
});
