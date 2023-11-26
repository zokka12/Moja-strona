// deklarację zmiennych

const menuBurger = document.querySelector(".burger-menu");

const closeMenu = document.querySelector(".close-menu");

const menuList = document.querySelector(".menu-list");

//  funkcja dodania classy opened

function changeClass() {
  closeMenu.classList.toggle("opened");
  menuList.classList.toggle("opened");
  menuBurger.classList.toggle("hidden");
}

//  nasłuchiwanie elementów menu burger i menu close
menuBurger.addEventListener("click", changeClass);
closeMenu.addEventListener("click", changeClass);