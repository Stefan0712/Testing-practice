function capitalize(str){
    let newWord = [...str];
    let firstLetter = newWord[0];
    newWord[0] = firstLetter.toUpperCase();
    return newWord.join("");
}

module.exports = capitalize;