// //Excercises 6
// //a
function sum (number1, number2){
    return result= number1 + number2    
}
sum(99,1)
console.log("Reply to excercises 6a) " + "'" + result + "'")
// //b)
function validationNumbers( num1, num2){
    var ressult= num1 + num2;
    if(isNaN(num1) || isNaN(num2)){
        
        return NaN + alert("Is not a number")
         
    }else return ressult
}
console.log(validationNumbers(23,'h'))
console.log("arriba")
//c
function validateInterger(number_1){
    if(Number.isInteger(number_1)){
        return true
    }else return false
}
console.log(validateInterger(6))
//d
function validationWithInterger(num1,num2){
    var resultInterger= num1+num2
    if(isNaN(num1) || isNaN(num2)){
        return NaN
    }else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return alert("Numbers must be intergers"), Math.round(resultInterger)
    }else return (resultInterger)
}
console.log(validationWithInterger(13, 13.5))
//e
function validatingSum(num1, num2){
    var resultValidate= num1+num2
    if(isNaN(num1) || isNaN(num2)){
        return NaN + alert ("ista mal")
    }else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return  alert ("Numbers must be intergers"), Math.round(resultValidate)
    }else return (resultValidate)
}
function sumSecure(num1, num2){
    if(Number.isInteger(num1) && Number.isInteger(num2)){
        return num1+num2
    }else return validatingSum (num1,num2)
}
console.log(validatingSum(136,26))
console.log(validatingSum(136,"hola"))
console.log(validatingSum(0,26.5))
console.log()




