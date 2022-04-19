//Exercises 2
//a)
var dat1= "Los ojos hacen más ejercicio que las piernas"
var dat2= dat1.substring(0,5)
console.log("Reply to excercises 2a)" + "'" + dat2 + "'")
//b)
var strring1= "Nada es tan inútil como parece"
var strring2=strring1.substring(0,5)
console.log("Reply to excercises 2b) " + "'" + strring2 + "'")
//c)
var string_c1= "Los gatos duermen más del 70% de sus vidas"
var string_c2=string_c1.substring(39,42)
console.log("Reply to excercises 2c) " + "'" + string_c2 +"'")
//d)
var dateD="para hacer un kilogramo de miel, una abeja debe recorrer 4 millones de flores"
var dated= dateD.substring(0,1).toUpperCase()
var date2d= dateD.substring(1, dateD.length).toLowerCase()
var dateReply= dated + date2d
console.log("Reply to excercises 2d) " + "'" + dateReply + "'")
//e
var largeWorld= "Supercalifagilisticoexpialidoso y más"
var newDate= largeWorld.indexOf(" ")
console.log('Reply to excercises 2e) '+ "'" + newDate + "'")
//f
var wordLarge= "supercalifagilisticoexpialidoso y hakunamatata ♫♬♪♩"
var firstVar= wordLarge.substring(0,1).toUpperCase()
var secondVar= wordLarge.substring(33,34).toUpperCase()
uppercase2=wordLarge.substring(34,35).toUpperCase()
var secondSection= wordLarge.substring(1,34)
var threeSection= wordLarge.substring(36, wordLarge.length)
var completa= firstVar + secondSection + uppercase2 + threeSection
console.log(completa)
/////////////////Excercises 2 finished
