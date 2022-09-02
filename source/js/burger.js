let headerContainer = document.querySelector('.main-header__wrapper');
let navigation = document.querySelector('.main-nav');
let menu = document.querySelector('.main-nav__list');
let burger = document.querySelector('.main-header__toggle');
let map = document.querySelector('.cooperation__image-wrapper');

map.classList.remove('cooperation__image-wrapper--nojs');
headerContainer.classList.remove('main-header__wrapper--nojs');
navigation.classList.remove('main-nav--nojs');
menu.classList.remove('main-nav__list--nojs');
burger.classList.add('main-header__toggle--js');

burger.onclick = function() {
  menu.classList.toggle('main-nav__list--open');
  if (burger.classList.contains('main-header__toggle--burger-button')) {
    burger.classList.remove('main-header__toggle--burger-button');
    burger.classList.add('main-header__toggle--burger-close');
  } else {
    burger.classList.remove('main-header__toggle--burger-close');
    burger.classList.add('main-header__toggle--burger-button');
  }
};
