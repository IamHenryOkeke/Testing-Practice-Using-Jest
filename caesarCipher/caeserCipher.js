function caeserCipher(str, key) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const convertedStr = str.toLowerCase()
    let encryptedString = "";
    for (let i = 0; i < convertedStr.length; i++) {
        convertedStr[i] === " " ?
            encryptedString += " " :
            encryptedString += alphabet[((alphabet.indexOf(convertedStr[i])) + key) % 26]
    }
    return encryptedString;
}

console.log(caeserCipher("cat iz here", 1))


module.exports = caeserCipher;