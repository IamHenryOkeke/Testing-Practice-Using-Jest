const calculatorVar = require("./calculate")

test("should subtract two numbers", ()=>{
    expect(calculatorVar.subtract(2,3)).toEqual(-1)
})

test("should add two numbers", ()=>{
    expect(calculatorVar.add(2,3)).toEqual(5)
})

test("should multiply two numbers", ()=>{
    expect(calculatorVar.multiply(2,3)).toEqual(6)
})

test("should divide two numbers correctly", ()=>{
    expect(calculatorVar.divide(10,5)).toEqual(2)
})

test("should handle zero division correctly", ()=>{
    expect(calculatorVar.divide(10,0)).toEqual("Math Error")
})

