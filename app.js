const menu= document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


document.getElementById("main__btn").addEventListener("click", myFunction1);
document.getElementById("main__btn2").addEventListener("click", myFunction2);

function myFunction1(){
    window.location="#info-sect";
}

function myFunction2(){
    window.location= "about.html";
}