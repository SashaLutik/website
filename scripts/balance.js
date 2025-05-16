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

//кнопки
let buttons = document.querySelectorAll('.num_1');
let buttons2 = document.querySelectorAll('.num_2');
let buttons3 = document.querySelectorAll('.num_3');
let buttons4 = document.querySelectorAll('.num_4');
const input = document.getElementById('output');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    input.value = number;
  });
});

buttons2.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    input.value = number;
  });
});

buttons3.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    input.value = number;
  });
});

buttons4.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    input.value = number;
  });
});

document.querySelector('.balance__btn').addEventListener('click', () =>{
  alert("Отдай маме карту");
});