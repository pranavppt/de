function onClick(){
    document.getElementById("nav__menu").classList.toggle("list");
    document.getElementById("menuIcon").classList.toggle("list");
    document.getElementById("close").classList.toggle("list");
}
function signupToggle(){
    var container = document.querySelector('.header');
    container.classList.toggle('active');
    var popUp = document.querySelector('.signup-form');
    popUp.classList.toggle('active')
}
function loginToggle(){
    var container = document.querySelector('.header');
    container.classList.toggle('active');
    var popUp = document.querySelector('.login-form');
    popUp.classList.toggle('active')
}