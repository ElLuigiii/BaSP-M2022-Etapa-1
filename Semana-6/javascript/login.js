
///[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
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
var emailMsj=''
var passwdMsj=''
window.onload = function(input){
       
var email_Login= document.getElementById('email_Login')
var firstError=document.getElementById('firstError')
function blurToEmail(){
    if(validateEmail(email_Login.value)==false){
      firstError.style.visibility= "visible";
      email_Login.classList.add('input_red')
    }else {
        emailMsj= email_Login.value
    }return emailMsj, console.log('email ',emailMsj)
}
function focusEmail(){
    firstError.style.visibility= "hidden";
    email_Login.classList.remove('input_red')
}

email_Login.addEventListener('blur', blurToEmail)
email_Login.addEventListener('focus', focusEmail)

var password_login=document.getElementById('password_login')
var secondError=document.getElementById('secondError')

function passwordBlur(){

    if (validatePassword(password_login.value)==false) {
        secondError.style.visibility= 'visible'
        password_login.classList.add('input_red')
    }else{
        passwdMsj= password_login.value
    }return passwdMsj, console.log('passwd', passwdMsj)
}


function passwordFocus(){
        secondError.style.visibility="hidden"; 
        password_login.classList.remove('input_red')
}

password_login.addEventListener("focus", passwordFocus)
password_login.addEventListener("blur", passwordBlur)

//validacion con alerta
var msjExito= 'Login Correct'
var msjError= 'Login incorrecto'
var email='Su correo es: '
var password= 'su contraseña 11'
function validateAll(){
    console.log(validateEmail(email_Login.value), validatePassword(password_login.value))
    if(validateEmail(email_Login.value) && validatePassword(password_login.value)){
       return alert (msjExito +  "\n" + email + emailMsj +  "\n" +  password + passwdMsj)
    }if (!validateEmail(email_Login.value)){
        alert(msjError + "\n" + 'Email incorrecto')
    }if (!validatePassword(password_login.value)){
        alert(msjError + "\n" + 'Password incorrecta')
    }
}
var btnFormLogin= document.getElementById('button_Form_Login')
btnFormLogin.addEventListener('click', validateAll)

}


    /**********TODO DE AQUI PARA ARIBA */
