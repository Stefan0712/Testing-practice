function calculate(n1, n2){
    let sum = n1+n2;
    let substract = n1-n2;
    let divide;
    if(n1===0||n2===0){
        divide = "Can't divide by 0"
    } else {
        divide = n1 / n2;
    }
    let multiply = n1*n2;
    return `Add = ${sum}, Substract = ${substract}, Divide = ${divide}, Multiply = ${multiply}`
}

module.exports = calculate;