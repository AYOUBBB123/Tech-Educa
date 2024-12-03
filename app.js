
const ul = document.getElementById("menu-list");

const menuu = document.getElementById("menu-btn");
menuu.addEventListener("click", function(){
    ul.classList.add('active');
});

const menu = document.getElementById("menu-close");
menu.addEventListener("click", function(){
    ul.classList.remove('active');
});


