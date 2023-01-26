function analyze(array) {
    const lengthVar = array.length;
    const averageVar = (array.reduce((
        (accumulator, currentValue) => accumulator + currentValue
    ), 0)) / lengthVar;
    const minVar = Math.min(...array);
    const maxVar = Math.max(...array);
    return {
        average: averageVar,
        min: minVar,
        max: maxVar,
        length: lengthVar
    }
}
module.exports = analyze;