function rev(str){
    resultStr = [];
    for(let i=str.length-1;i>=0;i--){
        resultStr.push(str[i])
    }
    return resultStr.join("")
}

module.exports = rev;