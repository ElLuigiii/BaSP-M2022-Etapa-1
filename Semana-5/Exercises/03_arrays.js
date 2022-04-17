//Excercises 3 
//a) 
var month= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
console.log (month[4], month[10])
//b
var monthToOrder = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
var year=monthToOrder.sort()
console.log("Reply to excercises 3b) " + year)
//c
var addingMonth= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
addingMonth.push("finishedYear")
addingMonth.unshift("startYear")
console.log("Reply to excercises 3c) " + addingMonth)
//d
var monthPop=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
monthPop.pop()
monthPop.shift()
console.log("Reply to excercises 3d) " + monthPop)
//e
var reverseArray= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
reverseArray.reverse()
console.log( "Reply to excercises 3e) " + reverseArray)
//f
var stringInArray= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var arrayInString= stringInArray.join("-")
console.log("Reply to excercises 3f) " + arrayInString)
//g
var originArray=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var copyArray= originArray.slice(4,11)
console.log("Reply to excercises 3g) " + copyArray)
