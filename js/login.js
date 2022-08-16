// step 1 : add click event handler with the submit button
document.getElementById('btn-sumbit').addEventListener('click', function(){
    // step 2 : get the email address inside the inside the email input field
    // always remember to use. value to get the next from and input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 : get password
    // 3.a : set id on the HTML element
    // 3.b : get the element
    // 3.c : get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(email,password);

    // DANGER : DO NOT VERIFY email password on the client side
    // step-4 : verify email and password
    if(email === 'sontan@bap.com' && password === 'secret'){
        console.log('valid user')
    }
    else{
       alert('tui password vule gasos !! tui murii khaa')
    }
})