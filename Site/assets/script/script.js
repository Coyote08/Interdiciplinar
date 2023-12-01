//variables
var button_menu = document.getElementById("btn-hamburg");
var menu_mobile = document.getElementById("nav-mobile");
var button_languages = document.getElementById("btn-languages");
var menu_languages = document.getElementById("languages");

//installing listeners
button_menu.addEventListener("click",function () {
    if (menu_mobile.style.display === "none" || menu_mobile.style.display === "") {menu_mobile.style.display = "flex"} else {menu_mobile.style.display = "none"};
});
button_languages.addEventListener("click", function() {
    if (menu_languages.style.display === "none" || menu_languages.style.display === "") {menu_languages.style.display = "flex"} else {menu_languages.style.display = "none"};
});