const calculate = require('./calculator.js')

test('Positive numbers, first bigger than the second one',()=>{
    expect(calculate(2,1)).toBe("Add = 3, Substract = 1, Divide = 2, Multiply = 2")
})
test('Positive numbers, first smaller than the second one',()=>{
    expect(calculate(2,4)).toBe("Add = 6, Substract = -2, Divide = 0.5, Multiply = 8")
})
test('Negative numbers, first smaller than the second one',()=>{
    expect(calculate(-2,4)).toBe("Add = 2, Substract = -6, Divide = -0.5, Multiply = -8")
})
test('Negative numbers, first bigger than the second one',()=>{
    expect(calculate(2,-4)).toBe("Add = -2, Substract = 6, Divide = -0.5, Multiply = -8")
})
test('One of the number is 0',()=>{
    expect(calculate(2,0)).toBe("Add = 2, Substract = 2, Divide = Can't divide by 0, Multiply = 0")
})