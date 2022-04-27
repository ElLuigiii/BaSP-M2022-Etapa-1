
function validateEmail(input){
    var regExEmail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    return regExEmail.test(input);
}
function validatePassword(string){
    var letters=false;
   var numbers=false;
   for (var index = 0; index < string.length; index++) {
   var element = string[index];  
    if (isNaN(element)==true) {
    letters=true;
        }
        if(isNaN(element)==false){
        numbers=true;
        }   
    }
   return letters && numbers;
}

window.onload = function(input){
       
var email_Login= document.getElementById('email_Login')
var firstError=document.getElementById('firstError')
function blurToEmail(){
    if(validateEmail(email_Login.value)==false){
      firstError.style.visibility= "visible";
      email_Login.classList.add('input_red')
      
      
    }
  }
  function focusEmail(){
          firstError.style.visibility= "hidden";
  }
email_Login.addEventListener('blur', blurToEmail)
email_Login.addEventListener('focus', focusEmail)

var password_login=document.getElementById('password_login')
var secondError=document.getElementById('secondError')
var datePassword=''
function passwordBlur(){
    if (validatePassword(password_login.value)==false) {
        secondError.style.visibility= 'visible'
        password_login.classList.add('input_red')
    }
}
console.log(datePassword)
function passwordFocus(){
        secondError.style.visibility="hidden"; 
}
password_login.addEventListener("focus", passwordFocus)
password_login.addEventListener("blur", passwordBlur)

}


    /**********TODO DE AQUI PARA ARIBA */
