const rev = require('./reverseString.js')

test('reverse normal string',()=>{
    expect(rev('abcd')).toBe('dcba')
})
test('reverse string with spaces inside it',()=>{
    expect(rev('I am groot')).toBe('toorg ma I')
})
test('string with spaces at the end',()=>{
    expect(rev('Bring me Thanos! ')).toBe(' !sonahT em gnirB')
})