let myImage = document.querySelector('img');

myImage.onclick = functin() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '../images/red-spotted-newt.jpeg') {
        myImage.setAttribute('src', '../images/fire-salamander.jpeg');
    } else {
        myImage.setAttribute('src', '../images/red-spotted-newt.jpeg');
    }
}
