const analyze = require('./analyzeArray.js')

test('Single digit',()=>{
    expect(analyze([3])).toStrictEqual({average: 3, min: 3, max: 3, length: 1});
})
test('Multiple digit',()=>{
    expect(analyze([3,4,5,6,7])).toStrictEqual({average: 5, min: 3, max: 7, length: 5});
})
test('Multiple digit and negative number',()=>{
    expect(analyze([-3,4,5,6,7])).toStrictEqual({average: 3.8, min: -3, max: 7, length: 5});
})
test('random digit order',()=>{
    expect(analyze([4,7,6,5,3])).toStrictEqual({average: 5, min: 3, max: 7, length: 5});
})