
let numOfUsers = 1;

function registrationSuccessful(event) {

    event.preventDefault();

    console.log(numOfUsers);

    alert('You have successfully registered');

    let username = document.querySelector('.username-input').value;
    let password = document.querySelector('.password-input').value;

    localStorage.setItem(`username${numOfUsers}`, username);
    localStorage.setItem(`password${numOfUsers}`, password);
    localStorage.setItem(`numOfUsers`, numOfUsers);
    numOfUsers++;
    
    document.querySelector('.email-input').value = '';
    document.querySelector('.confirm-email-input').value = '';
    document.querySelector('.username-input').value = '';
    document.querySelector('.password-input').value = '';

}
function authenticate(event){

    event.preventDefault();
    let successfullySignIn = false;
    
    let username = document.querySelector('.username-input').value;
    let password = document.querySelector('.password-input').value;

    let numOfUsers = localStorage.getItem(`numOfUsers`);

    for (let i = 1; i <= numOfUsers; i++){

        let usernameFromLocalStorage = localStorage.getItem(`username${i}`);
        let passwordFromLocalStorage = localStorage.getItem(`password${i}`);
    
        if (usernameFromLocalStorage === username && passwordFromLocalStorage === password){
            successfullySignIn = true;
            window.location.href="..\\html\\main-page.html";
        }
    }

    document.querySelector('.username-input').value = '';
    document.querySelector('.password-input').value = '';

    if (!successfullySignIn){
        alert('No such username or password');
    }

}