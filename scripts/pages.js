//картинки
const smallimgs = document.querySelectorAll('.product__list-img img');
const largeImageList = document.querySelector('.product__item-img');
const largeImage = document.querySelector('.large__img');

smallimgs.forEach(smallimg => {
    smallimg.addEventListener('mouseover', () => {
    largeImage.src = smallimg.src;
    largeImageList.style.display = 'flex';
  });
});

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

//оплата
const button1 = document.getElementById('card-btn');
const button2 = document.getElementById('gem-btn')
const show1 = document.getElementById('open-1');
const show2 = document.getElementById('open-2');

button1.addEventListener('click', () => {
  show2.classList.add('show-gem');
  show1.classList.add('price__card');

  show2.classList.remove('price__gem');

  button1.style.backgroundColor = "#332c33"
  button2.style.backgroundColor = "inherit"

})
button2.addEventListener('click', () => {
  show1.classList.add('show-card');
  show2.classList.add('price__gem');

  show1.classList.remove('price__card');

  button1.style.backgroundColor = "inherit"
  button2.style.backgroundColor = "#332c33"
})




