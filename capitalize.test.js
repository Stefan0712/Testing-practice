const cap = require('./capitalize');

test('all lower case word equals only first letter upper case word', ()=>{
    expect(cap('word')).toBe('Word');
});
test('first letter is already upper case', ()=>{
    expect(cap('First')).toBe('First')
})
test('all but first upper case', ()=>{
    expect(cap('aLLBUTFIRST')).toBe('ALLBUTFIRST')
})