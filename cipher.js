function cipher(str, num){
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let codedStr = [];
    str = str.toLowerCase();
    for(let i=0;i<str.length;i++){
        if((/[a-z]/).test(str[i])){
            let shift = letters.indexOf(str[i])+num;
            codedStr.push(letters[(shift%26)])
        } else {
            codedStr.push(str[i])
        }
    }
    return codedStr.join("")


    
}
module.exports = cipher;