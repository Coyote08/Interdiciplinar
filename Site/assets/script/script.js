//variables
var button_menu = document.getElementById("btn-hamburg");
var menu_mobile = document.getElementById("nav-mobile");

//installing listeners
button_menu.addEventListener("click",function () {
    button_menu.classList.toggle('animarBTN');
    menu_mobile.classList.toggle('mobile-desable');
    setTimeout(function() {menu_mobile.classList.toggle('open-menu');},100);
});