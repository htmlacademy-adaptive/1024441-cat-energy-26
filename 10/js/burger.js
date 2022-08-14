let menu = document.querySelector('.main-nav__list');
let burger = document.querySelector('.main-nav__toggle');

burger.onclick = function() {
  menu.classList.toggle('main-nav__list--open');
};
