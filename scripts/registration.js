//меню
const btnOpen = document.querySelector('.menu__btn');
const mobileMenu = document.querySelector('.menu__inner');
const btnClose = document.querySelector('.closeMobile-btn');
btnOpen.addEventListener('click', () =>{
  mobileMenu.classList.toggle('menu--open');
})
btnClose.addEventListener('click', () =>{
  mobileMenu.classList.toggle('menu--open');
})