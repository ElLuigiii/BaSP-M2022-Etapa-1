//Exercises 5
//a)
 var firstFor= ["Green", "Yellow", "Skyblue", "Grey", "Blue"]
 alert("Excercises 5a")
 for (i = 0; i < firstFor.length; i++) {
    alert(firstFor[i])
}
//b
alert("Excercises 5b")
for (i = 0; i <firstFor.length; i++) {
    alert(firstFor[i].substring(0,1).toUpperCase() + firstFor[i].substring(1,10))
}
//c
alert("Ejercicio 5c")
var sentences=""
for (let i= 0; i< firstFor.length; i++) {
    sentences= sentences + firstFor[i]
}
console.log(sentences) 
//
alert("ejercicio")
var noth=[]
for (i = 0; i < 10; i++) {
 noth.push(i)   
}
console.log(noth)
 