let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/red-spotted-newt.jpeg') {
        myImage.setAttribute('src', '../images/fire-salamander.jpeg');
    } else {
        myImage.setAttribute('src', '../images/red-spotted-newt.jpeg');
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
    /* prompt() is like alert() but it accepts user input and stores it as a variable*/
    let myName = prompt('Please enter your name.');
    /* localStorage is an API that stores data in the browser.*/
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The newt welcomes you, ' + myName;
}

/* use ! to check if 'name' exists in localStorage.*/
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'The salamander welcomes you, ' + storedName;
}

myButton.onclick = function() {
    setUserName()
}
