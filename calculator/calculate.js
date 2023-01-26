const calculatorObj = {
    add: (a, b) => {
        return a + b
    },
    subtract: (a, b) => {
        return a - b
    },
    multiply: (a, b) => {
        return a * b
    },
    divide: (a, b) => {
        return b === 0 ? "Math Error" : a / b;
    }
}

module.exports = calculatorObj
