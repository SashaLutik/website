//слайдер
const widthEl = document.getElementById('slider-width');
let dots = document.querySelectorAll('.dot');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.image__item');
let nextBtn = document.querySelector('.nextButton');
let prevBtn = document.querySelector('.prevButton');
let index = 0;
let img = 1;

function dotsActive(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}
function nextSlide() {
  index = (index + 1) % slides.length;
  dotsActive(index);
  updateSliderPosition();
}
function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  dotsActive(index);
  updateSliderPosition();
}

let intervalSlide = setInterval(nextSlide, 3000);

function updateSliderPosition() {
  slider.style.transform = 'translatex(' + (-index * widthEl.clientWidth) + "px" + ')';
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

nextBtn.addEventListener('mouseover', () => {
  clearInterval(intervalSlide);
});
nextBtn.addEventListener('mouseout', () => {
  intervalSlide = setInterval(nextSlide, 3000);
});

prevBtn.addEventListener('mouseover', () => {
  clearInterval(intervalSlide);
});
prevBtn.addEventListener('mouseout', () => {
  intervalSlide = setInterval(nextSlide, 3000);
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