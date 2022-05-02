
///[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
function validateEmail(input){
    var regExpEmail = /[a-z0-9]+@+[a-z]+.+[a-z]{2,3}/;
    return regExpEmail.test(input);
}
function validatePassword(string){
    var letters=false;
    var numbers=false;
    var large= false
    for (var i = 0; i < string.length; i++) {
    var element = string[i];  
    if (isNaN(element)==true) {
        letters=true;
    }if(isNaN(element)==false){
        numbers=true;
    }if (string.length >7){
        large= true
    }   
    }return letters && numbers && large;
}
var emailMsj=''
var passwdMsj=''
window.onload = function(){

//Email && errorEmail
var email_Login= document.getElementById('email_Login')
var firstError=document.getElementById('firstError')
//Password && errorPassword
var password_login=document.getElementById('password_login')
var secondError=document.getElementById('secondError')

function blurToEmail(){
    if(validateEmail(email_Login.value)==false){
      firstError.style.visibility= "visible";
      email_Login.classList.add('input_red')
    }if(email_Login.value.length==0){
        email_Login.classList.remove('input_red')
        firstError.style.visibility= "hidden"
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


function passwordBlur(){

    if (validatePassword(password_login.value)==false) {
        secondError.style.visibility= 'visible'
        password_login.classList.add('input_red')
    }if(password_login.value.length==0){
        password_login.classList.remove('input_red')
        secondError.style.visibility= "hidden"
    }else{
        passwdMsj= password_login.value
    }return passwdMsj, console.log('Password ', passwdMsj)
}

function passwordFocus(){
        secondError.style.visibility="hidden"; 
        password_login.classList.remove('input_red')
}

password_login.addEventListener("focus", passwordFocus)
password_login.addEventListener("blur", passwordBlur)

//validacion con alerta
var msjExito= 'Login Correct'
var email='Email: '
var password= 'Password: '
function validateAll(){
    if(validateEmail(email_Login.value) && validatePassword(password_login.value)){
       return alert (msjExito +  "\n" + email + emailMsj +  "\n" +  password + passwdMsj)
    }if (!validateEmail(email_Login.value)){
        alert(msjError + "\n" + 'Email incorrecto')
    }if (!validatePassword(password_login.value)){
        alert(msjError + "\n" + 'Password incorrecta')
    }
}

var btnFormLogin= document.getElementById('button_Form_Login')
btnFormLogin.addEventListener('click', submitClick)

function validateInputs(){
    return validateEmail(email_Login.value) && validatePassword(password_login.value)
    }

function submitClick(){
    if(validateInputs()){
    fetch("https://basp-m2022-api-rest-server.herokuapp.com/login?email="  
    + email_Login.value + "&password=" + password_login.value)
    .then (function (response){
    return response.json()
    })
    .then((data)=> {
        alert(data.msg+ "\n" + email + emailMsj +  "\n" +  password + passwdMsj)
    return data
    })
    .catch (function(error){
        alert("Error with api rest")
    }
    )}
    else alert ("Error in to validation")
}


    /**********TODO DE AQUI PARA ARIBA */
}

