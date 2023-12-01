//variables
var button_menu = document.getElementById("btn-hamburg");
var menu_mobile = document.getElementById("nav-mobile");

//installing listeners
button_menu.addEventListener("click",function () {
    if (menu_mobile.style.display === "none" || menu_mobile.style.display === "") {menu_mobile.style.display = "flex"} else {menu_mobile.style.display = "none"};
});