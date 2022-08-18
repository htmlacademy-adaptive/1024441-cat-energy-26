let header = document.querySelector('.main-header');
let navigation = document.querySelector('.main-nav');
let menu = document.querySelector('.main-nav__list');
let burger = document.querySelector('.main-header__toggle');
let width=document.body.clientWidth;

header.classList.remove('main-header--nojs');
navigation.classList.remove('main-nav--nojs');
menu.classList.remove('main-nav__list--nojs');

burger.onclick = function() {
  menu.classList.toggle('main-nav__list--open');
};
