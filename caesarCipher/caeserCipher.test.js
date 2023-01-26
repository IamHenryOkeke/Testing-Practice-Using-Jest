const caesarCipher = require("./caeserCipher");

describe("Caesar Cipher", () => {
  test("Letter a", () => {
    expect(caesarCipher("hello", 4)).toBe("lipps");
  });
  test("Letter b", () => {
    expect(caesarCipher("b", 1)).toBe("c");
  });
  test("Letter c", () => {
    expect(caesarCipher("cat", 1)).toBe("dbu");
  });
  test("Letter d", () => {
    expect(caesarCipher("d", 1)).toBe("e");
  });
  test("Letter e", () => {
    expect(caesarCipher("e", 1)).toBe("f");
  });
  test("Letter f", () => {
    expect(caesarCipher("f", 1)).toBe("g");
  });
  test("Letter g", () => {
    expect(caesarCipher("g", 1)).toBe("h");
  });
});