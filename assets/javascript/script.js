function inputValidate(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let emailRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let inputValue= document.getElementById('email').value;

    if (firstName === ""){
        document.getElementById('fname-error').innerHTML = 'First Name cannot be empty';
        document.getElementById('firstName').placeholder = '';
        document.getElementById('input-box-fname').style.border = '1px solid #ff0000';
        document.getElementById('error-icon-fname').style.display = 'block';
    }else{
        document.getElementById('fname-error').innerHTML = '';
        document.getElementById('input-box-fname').style.border = '1px solid hsl(246, 25%, 77%)';
        document.getElementById('error-icon-fname').style.display = 'none';
    }

    if (lastName === ""){
        document.getElementById('lname-error').innerHTML = 'Last Name cannot be empty';
        document.getElementById('lastName').placeholder = '';
        document.getElementById('input-box-lname').style.border = '1px solid #ff0000';
        document.getElementById('error-icon-lname').style.display = 'block';
    }else{
        document.getElementById('lname-error').innerHTML = '';
        document.getElementById('input-box-lname').style.border = '1px solid hsl(246, 25%, 77%)';
        document.getElementById('error-icon-lname').style.display = 'none';
    }

    if(inputValue.match(emailRegex)){
        document.getElementById('email-error').innerHTML = '';
        document.getElementById('input-box-email').style.border = '1px solid hsl(246, 25%, 77%)';
        document.getElementById('error-icon-email').style.display = 'none';
    }else if(email === ""){
        document.getElementById('email').style.display = 'none';
        document.getElementById('email2').style.display = 'block';
        document.getElementById('email-error').innerHTML = 'Email cannot be empty';
        document.getElementById('input-box-email').style.border = '1px solid #ff0000';
        document.getElementById('error-icon-email').style.display = 'block';
    }else{
        document.getElementById('email').style.display = 'block';
        document.getElementById('email2').style.display = 'none';
        document.getElementById('email-error').innerHTML = 'Looks like this is not an email';
        document.getElementById('input-box-email').style.border = '1px solid #ff0000';
        document.getElementById('error-icon-email').style.display = 'block';
    }

    if (password === ""){
        document.getElementById('psw-error').innerHTML = 'Password cannot be empty';
        document.getElementById('password').placeholder = '';
        document.getElementById('input-box-psw').style.border = '1px solid #ff0000';
        document.getElementById('error-icon-psw').style.display = 'block';
        document.getElementById('icon-btn').style.display = 'none'
    }else{
        document.getElementById('psw-error').innerHTML = '';
        document.getElementById('input-box-psw').style.border = '1px solid hsl(246, 25%, 77%)';
        document.getElementById('error-icon-psw').style.display = 'none';
        document.getElementById('icon-btn').style.display = 'block'
    }

}

function switchIcon(){
    if(document.getElementById('psw-error').innerHTML === 'Password cannot be empty'){
        document.getElementById('error-icon-psw').style.display = 'none';
        document.getElementById('icon-btn').style.display = 'block';
    }else{
        document.getElementById('error-icon-psw').style.display = 'none';
        document.getElementById('icon-btn').style.display = 'block';
    }
   
}

function reverseIcon(){
    if(document.getElementById('psw-error').innerHTML === 'Password cannot be empty'){
        document.getElementById('error-icon-psw').style.display = 'block';
        document.getElementById('icon-btn').style.display = 'none';
    }else{
        document.getElementById('error-icon-psw').style.display = 'none';
        document.getElementById('icon-btn').style.display = 'block';
    }
}

function toggleIcon(){
    let icon1= document.getElementById('icon1');
    let icon2= document.getElementById('icon2');
    let password = document.getElementById('password')

    if(icon1.style.display === 'block'){
        icon1.style.display = 'none';
        icon2.style.display = 'block';   
    }else{
        icon1.style.display = 'block';
        icon2.style.display = 'none';
    }

    if(password.type === "password"){
        password.type = "text";
    }else{
        password.type = "password";
    }
}


