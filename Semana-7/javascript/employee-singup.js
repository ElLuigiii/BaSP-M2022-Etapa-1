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
        }if(isNaN(element)==false){
        numbers=true;
        }   
    }return letters && numbers;
}
function validateBirth(string) {
    var validateDate = false;
    if (string.length == 10) {
        if (string[2] == '/' && string[5] == '/') {
            var todayDate = new Date();
            var birthDate = new Date(string.substring(6), string.substring(3, 5) - 1, string.substring(0, 2));
            validateDate = todayDate > birthDate;
        } 
    }
    return validateDate
}
window.onload = function (){
    var input_Name= document.getElementById('input_Name')
    var errorMsje=document.getElementById('errorMens')
    var userName= ''
    var userLastName= ''
    var userDni=''  
    var userDateBirth=''
    var userPhone=''
    var userPwd= ''
    var userEmail=''
    var userPostal=''
    var userLocation=''
    //aca va el user location
    var userAdress=''

    function validateName(){
        
        if(input_Name.value.length>3 && isNaN(input_Name.value) && !validatePassword(input_Name.value)){
            return userName=input_Name.value
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
        if(isNaN(inputLastName.value) && !validatePassword(inputLastName.value) && inputLastName.value.length>3){
            return userLastName= inputLastName.value
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
        if (inputDni.value.length>=3  && !isNaN(inputDni.value)){
            return userDni= inputDni.value
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
    var inputDate= document.getElementById('input_Date')
    var msjError3= document.getElementById('msjError3')
    function blurToDate(){
        
    if(validateBirth(inputDate.value) && inputDate.value.length==10 ){
        return userDateBirth = inputDate.value
    }if(inputDate.value== 0 ){ 
        msjError3.style.visibility= 'hidden'
        inputDate.classList.remove('input_red')
    }else {
        inputDate.classList.add('input_red')
        msjError3.style.visibility= 'visible'
    }
    }
    function focusDate(){
        msjError3.style.visibility= "hidden"
        inputDate.classList.remove('input_red')
    }
    inputDate.addEventListener('blur', blurToDate)
    inputDate.addEventListener('focus', focusDate)
    /* (validateEmail(inputEmail.value)==true){
            console.log('emailCorrecto')
            var userEmail=inputEmail.value
            return userEmail*/ 


    var inputPhone= document.getElementById('input_Phone_Num')
    var msjError4=document.getElementById('msjError4')
    
    function toPhone(){
        
        if (!isNaN(inputPhone.value) && inputPhone.value.length>=10){
            return userPhone= inputPhone.value
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
    /*aca el de direccion*/
    var inputAdress= document.getElementById('input_Adress')
    var msjError5= document.getElementById('msjError5')
    
    function blurToAdress(){
        if (inputAdress.value.length>5 && validatePassword(inputAdress.value)){
            return userAdress= inputAdress.value
        }if (inputAdress.value.length==0){
            inputAdress.classList.remove('input_red')
            msjError5.style.visibility= "hidden"
        }else { 
            inputAdress.classList.add('input_red')
            msjError5.style.visibility="visible"
        }
    }
    function focusToAdress(){
        inputAdress.classList.remove('input_red')
        msjError5.style.visibility="hidden"
    }
    inputAdress.addEventListener('blur', blurToAdress)
    inputAdress.addEventListener('focus', focusToAdress)
//29031122
    var inputLocation=document.getElementById('input_Location')
    var msjError6=document.getElementById('msjError6')
    
    function location(){
        if(inputLocation.value.length>=3){
            return userLocation=inputLocation.value
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
        if(!isNaN(inputPostal.value) && inputPostal.value.length>4 && inputPostal.value.length<6){
            return userPostal=inputPostal.value
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
        if(validateEmail(inputEmail.value)==true){
            return userEmail=inputEmail.value
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
        if(validatePassword(inputPwd.value)==true && inputPwd.value==inputPwd2.value && inputPwd.value.length>=8){
            return userPwd=inputPwd.value
        }if(inputPwd2.value.length==0){
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
            return  userPwd=inputPwd.value
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
    
    function validationToInputs(event){
        event.preventDefault()
        if(validateName(userName.value) && validateLastName(userLastName.value) 
        && validateNumbers(userDni.value) && validateBirth(inputDate.value)
        && toPhone(userPhone.value) && blurToAdress(userAdress.value) && location(inputLocation.value) 
        && postalCode(inputPostal.value) && confirmEmail(inputEmail.value) && confirmPwd(inputPwd.value)){
            return true, console.log('salio bien'), console.log(userDateBirth)
        }else console.log('esta que sale'), alert('terminalo papa')
    }
console.log(userName)
var boton=document.getElementById('btn_form')
boton.addEventListener('click', validationToInputs)

}

