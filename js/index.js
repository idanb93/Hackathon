
// class Database {
//     constructor() {
//         this.userDetails = {};
//     }
// }

// let database = new Database();

// let usersDetails = {};

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

    // database.userDetails[username] = password;
    // console.log(database.userDetails);

    // window.location.href="..\\html\\index.html";

}
function authenticate(event){

    console.log(numOfUsers);

    event.preventDefault();
    
    let username = document.querySelector('.username-input').value;
    let password = document.querySelector('.password-input').value;

    let numOfUsers = localStorage.getItem(`numOfUsers`);

    for (let i = 1; i <= numOfUsers; i++){

        let usernameFromLocalStorage = localStorage.getItem(`username${i}`);
        let passwordFromLocalStorage = localStorage.getItem(`password${i}`);

        alert(usernameFromLocalStorage);
        alert(passwordFromLocalStorage);
    
        if (usernameFromLocalStorage === username && passwordFromLocalStorage === password){
            window.location.href="..\\html\\main-page.html";
        } else {
            alert('You entered incorrect username or password');
        }
    }

    // console.log(database.userDetails);

    // let usersDetailsKeys = Object.keys(usersDetails);

    // usersDetailsKeys.forEach( (key)=>{

    //     console.log(key);

    //     if ( (key === username) && (usersDetails[key] === password) ){
    //         window.open('..\\html\\main-page.html');
    //     } else {
    //         alert('You entered incorrect username or password');
    //     }
    // });

    // alert('No such username or password');

}