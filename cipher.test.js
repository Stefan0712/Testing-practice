const cipher = require('./cipher.js')

test('single word',()=>{
    expect((cipher('word',5))).toBe('btwi')
})
test('Sentence',()=>{
    expect((cipher('sentence with spaces',5))).toBe('xjsyjshj bnym xufhjx')
})
test('word',()=>{
    expect((cipher('abcd',5))).toBe('fghi')
})

test('Sentence with punctuation',()=>{
    expect((cipher('I am groot!',5))).toBe('n fr lwtty!')
})
