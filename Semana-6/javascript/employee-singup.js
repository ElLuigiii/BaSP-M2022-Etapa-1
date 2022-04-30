function countWord (string, numbers){
    var minumLetter= false
    if(string.length>=numbers){
    minumLetter=true
    }return minumLetter
}

function validateEmail(input){
    var regExpEmail = /[a-z0-9]+@+[a-z]+.+[a-z]{2,3}/;
    return regExpEmail.test(input);
}
function validatePassword(string){
    var letters=false;
   var numbers=false;
   for (var i = 0; i < string.length; i++) {
   var element = string[i];  
    if (isNaN(element)==true) {
    letters=true;
        }
        if(isNaN(element)==false){
        numbers=true;
        }   
    }
   return letters && numbers;
}

window.onload = function (){
    var input_Name= document.getElementById('input_Name')
    var errorMsje=document.getElementById('errorMens')

    function validateName(inputName){
        var userName= ''
        if(input_Name.value.length>3 && isNaN(input_Name.value)){
            var userName= input_Name.value
            console.log(userName)
            return userName
        }if(input_Name.value.length==0){
            input_Name.classList.remove('input_red')
            errorMsje.style.visibility= "hidden"
        }else{
            errorMsje.style.visibility= "visible"
            input_Name.classList.add('input_red')
       }
    }
    function focusName(){
        errorMsje.style.visibility= "hidden"
        input_Name.classList.remove('input_red')
    }
    input_Name.addEventListener('blur', validateName)
    input_Name.addEventListener('focus', focusName)
    
    var inputLastName= document.getElementById('input_Last_Name')
    var msjError1= document.getElementById('msjError1')
    function validateLastName(){
        var userLast= ''
        if(isNaN(inputLastName.value)){
            var userLast= inputLastName.value
            console.log(userLast)
            return userLast
        }if(inputLastName.value.length==0){
            inputLastName.classList.remove('input_red')
            msjError1.style.visibility= "hidden"
        }else{
             
             msjError1.style.visibility= "visible"
             inputLastName.classList.add('input_red')
        }
    }
    function focusLastName() {
        msjError1.style.visibility="hidden"
        inputLastName.classList.remove('input_red')
    }
    inputLastName.addEventListener('blur', validateLastName)
    inputLastName.addEventListener('focus', focusLastName)
    
    var inputDni= document.getElementById('input_Dni')
    var msjError2=document.getElementById('error_2')
    document.getElementById('errorMsj2')
    function validateNumbers(){
        var userDni=''
        if (inputDni.value.length>=3  && !isNaN(inputDni.value)){
            var userDni= inputDni.value
            return userDni
        }if(inputDni.value.length==0){
            inputDni.classList.remove('input_red')
            msjError2.style.visibility= "hidden"
        }else {
            msjError2.style.visibility= "visible"
            inputDni.classList.add('input_red')
            
        }
    }
    function blurDni(){
        msjError2.style.visibility= "hidden"
        inputDni.classList.remove('input_red')
    }
    inputDni.addEventListener('blur', validateNumbers)
    inputDni.addEventListener('focus', blurDni)

    /******************
     ACA VA LA FUNCION DE FECHA
     *************************/
    var inputPhone= document.getElementById('input_Phone_Num')
    var msjError4=document.getElementById('msjError4')
    function toPhone(){
        var userPhone=''
        if (!isNaN(inputPhone.value) && inputPhone.value.length>=10){
            var userPhone= inputPhone.value
            return userPhone
        }if(inputPhone.value.length==0){
            inputPhone.classList.remove('input_red')
            msjError4.style.visibility= "hidden"
        }else{
            msjError4.style.visibility='visible'
            inputPhone.classList.add('input_red')
        }
        
    }
    function focusToPhone(){
        msjError4.style.visibility= 'hidden'
        inputPhone.classList.remove('input_red')
    }

    inputPhone.addEventListener('blur', toPhone)
    inputPhone.addEventListener('focus', focusToPhone)
    
    //ahora direccion numeros y caracteres separados por un espacio
    /*aca eld e direccion*/
    var inputLocation=document.getElementById('input_Location')
    var msjError6=document.getElementById('msjError6')
    function location(input_Location){
        var userLocation=''
        if(inputLocation.value.length>=3){
            var userLocation=inputLocation.value
            return userLocation
        }if(inputLocation.value.length==0){
            inputLocation.classList.remove('input_red')
            msjError6.style.visibility= "hidden"
        }else{
            msjError6.style.visibility= "visible"
            inputLocation.classList.add('input_red')
        }
    
    }
    function focusLocation(){
        msjError6.style.visibility= 'hidden'
        inputLocation.classList.remove('input_red')
    }

    inputLocation.addEventListener('blur', location)
    inputLocation.addEventListener('focus', focusLocation)

    var inputPostal= document.getElementById('input_Postal')
    var msjError7=document.getElementById('msjError7')
    function postalCode(){
        var userPostal=''
        if(!isNaN(inputPostal.value) && inputPostal.value.length>4 && inputPostal.value.length<6){
            var userPostal=inputPostal.value
            console.log(userPostal)   
            return userPostal
        }if(inputLocation.value.length==0){
            inputPostal.classList.remove('input_red')
            msjError7.style.visibility= "hidden"
        }else {
            msjError7.style.visibility='visible'
            inputPostal.classList.add('input_red')
        }
    }
    function focusPostal(){
        msjError7.style.visibility='hidden'
        inputPostal.classList.remove('input_red')
    }
    inputPostal.addEventListener('blur', postalCode)
    inputPostal.addEventListener('focus', focusPostal)


    var inputEmail=document.getElementById('input_Email')
    var msjError8=document.getElementById('error_Msj8')
    function confirmEmail(){
        var userEmail=''
        if(validateEmail(inputEmail.value)==true){
            console.log('emailCorrecto')
            var userEmail=inputEmail.value
            return userEmail
        }if(inputEmail.value.length==0){
            inputEmail.classList.remove('input_red')
            msjError8.style.visibility= "hidden"
        }else {
            msjError8.style.visibility= "visible"
            inputEmail.classList.add('input_red')
        }
    }
    function focusEmail(){
        msjError8.style.visibility= "hidden"
        inputEmail.classList.remove('input_red')
    }
    inputEmail.addEventListener('focus', focusEmail)
    inputEmail.addEventListener('blur',confirmEmail)

    var inputPwd=document.getElementById('input_Pwd')
    var msjError9=document.getElementById('msjError9')
    
    function confirmPwd(){
        var userPwd=''
        if(validatePassword(inputPwd.value)==true && inputPwd.value==inputPwd2.value && inputPwd.value.length>=8){
            var userPwd=inputPwd.value
            console.log('salio')
            return userPwd
        }if(inputPwd2.value.length==0){
            console.log('por aca seria')
            inputPwd2.classList.remove('input_red')
            msjError9.style.visibility= "hidden"
        }else{
            msjError9.style.visibility= "visible"
            inputPwd.classList.add('input_red')
            msjError0.style.visibility="visible"
            inputPwd2.classList.add('input_red')
        }

    }
    function securityPwd(){
        if (validatePassword(inputPwd.value)&& inputPwd.value.length>=8){
            console.log('vas bien')
        }if(inputPwd.value.length==0){
            inputPwd.classList.remove('input_red')
            msjError9.style.visibility= "hidden"
        }else {
            msjError9.style.visibility= "visible"
            inputPwd.classList.add('input_red')
        }
    }
    function focusPwd(){
        inputPwd.classList.remove('input_red')
        msjError9.style.visibility="hidden"
    }
    inputPwd.addEventListener('focus', focusPwd)
    inputPwd.addEventListener('blur', securityPwd)

    var inputPwd2=document.getElementById('input_Pswrd_2')
    var msjError0=document.getElementById('msjError0')
    function focusPwd2(){
            inputPwd2.classList.remove('input_red')
            msjError0.style.visibility="hidden"
            }   
    inputPwd2.addEventListener('blur', confirmPwd)
    inputPwd2.addEventListener('focus', focusPwd2)
    


}

