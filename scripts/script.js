//слайдер
const slides = document.querySelectorAll('.image__item');
const dots = document.querySelectorAll('.dot');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let index = 0;

function showSlide(direction) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
    
}
nextButton.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });
  
  prevButton.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
},3000); 




//ответы
const button1 = document.querySelector('.question__button1');
const text1 = document.getElementById('answer__txt1');

button1.addEventListener('click', () => {
    text1.classList.toggle('show');
});

const button2 = document.querySelector('.question__button2');
const text2 = document.getElementById('answer__txt2');
  
button2.addEventListener('click', () => {
    text2.classList.toggle('show');
});

const button3 = document.querySelector('.question__button3');
const text3 = document.getElementById('answer__txt3');
    
button3.addEventListener('click', () => {
    text3.classList.toggle('show');
});

//меню
const menuButton = document.querySelector(".menu__btn");
const dropdown = document.getElementById("dropdown");
menuButton.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
document.addEventListener('click', (event) => {
  if (!menuButton.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});