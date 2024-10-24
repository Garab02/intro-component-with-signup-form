const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const firstnameError = document.getElementById('firstnameerror')
const lastnameError = document.getElementById('lastnameerror')
const emailError = document.getElementById('emailerror')
const passwordError = document.getElementById('passworderror')


form.addEventListener('submit', (e)=> {
    let firstnamemessages = []
    if(firstname.value == '' || firstname.value == null){
        firstnamemessages.push('First Name can not be empty')
    }
    if(firstnamemessages.length > 0){
        e.preventDefault()
        firstnameError.textContent = firstnamemessages
        
    }

    let lastnamemessages = []
    if(lastname.value == '' || lastname.value == null){
        lastnamemessages.push('Last Name can not be empty')
    }
    if(lastnamemessages.length > 0){
        e.preventDefault()
        lastnameError.textContent = lastnamemessages
    }
    let emailmessages = []
    if(email.value == '' || email.value == null){
        emailmessages.push('Looks like an invalid email')
    }
    if(emailmessages.length > 0){
        e.preventDefault()
        emailError.textContent = emailmessages
    }
    
    let passwordmessages = []
    if(password.value == '' || password.value == null){
        passwordmessages.push('password can not be empty')
    }
    // if(password.value.length <= 6){
    //     passwordmessages.push('Password must be longer')
    // }

    // if(password.value.length >= 20){
    //     passwordmessages.push('Password must be less than 20 characters')
    // }
    if(passwordmessages.length > 0){
        e.preventDefault()
        passwordError.innerText = passwordmessages
    }


})


// const myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', (event) => {
//     event.preventDefault(); 

//     const firstname = myForm.elements.firstname.value.trim();
//     const firstnameError = document.querySelector('#firstname + .errorMessage');
//     const firstnameInput = document.getElementById('firstname');
//     if (firstname === '') {
//         firstnameError.textContent = 'Name is required.';
//         firstnameInput.parentNode.classList.add('error');
//         firstnameInput.parentNode.classList.remove('success');
//         } else {
//             firstnameError.textContent = '';
//             firstnameInput.parentNode.classList.add('success');
//             firstnameInput.parentNode.classList.remove('error');
//         }

    
// });


