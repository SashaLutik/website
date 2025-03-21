//курсы
const sliderImages = document.getElementById('sliderImages');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let position = 0;
nextBtn.addEventListener('click', () => {
  position -= 840;
  if(position < -840) {
    position = 0;
  }
  sliderImages.style.transform = `translateX(${position}px)`;
  });
prevBtn.addEventListener('click', () => {
  position += 840;
  if(position > 0) {
    position = 0;
  }
  sliderImages.style.transform = `translateX(${position}px)`;
});
const sliderImages2 = document.getElementById('sliderImages2');
const prevBtn2 = document.getElementById('prev');
const nextBtn2 = document.getElementById('next');
let position2 = 0;
nextBtn.addEventListener('click', () => {
  position2 -= 840;
  if(position2 < -840) {
    position2 = 0;
  }
  sliderImages2.style.transform = `translateX(${position2}px)`;
  });
prevBtn2.addEventListener('click', () => {
  position2 += 840;
  if(position2 > 0) {
    position2 = 0;
  }
  sliderImages2.style.transform = `translateX(${position2}px)`;
});

//кнопки
const onlinebtn = document.getElementById('onlinebtn');
const offlinebtn = document.getElementById('offlinebtn');
const slider1 = document.querySelector('.list__cards');
const slider2 = document.querySelector('.list__cards2');

onlinebtn.addEventListener('click', () => {
    slider1.style.display = "flex";
    slider2.style.display = "none";
    onlinebtn.style.backgroundColor = "#3561FF";
    onlinebtn.style.color = "#FFFFFF";
    offlinebtn.style.backgroundColor = "#FFFFFF";
    offlinebtn.style.color = "#000000";
  });
offlinebtn.addEventListener('click', () => {
    slider1.style.display = "none";
    slider2.style.display = "flex";
    offlinebtn.style.backgroundColor = "#3561FF";
    offlinebtn.style.color = "#FFFFFF";
    onlinebtn.style.backgroundColor = "#FFFFFF";
    onlinebtn.style.color = "#000000";
});


//преподаватели
const sliderTeachers = document.getElementById('sliderTeacher');
const prev = document.getElementById('prevteach');
const next = document.getElementById('nextteach');
let position3 = 0;
next.addEventListener('click', () => {
  position3 -= 335;
  if(position3 < -670) {
    position3 = 0;
  }
  sliderTeachers.style.transform = `translateX(${position3}px)`;
  });
  prev.addEventListener('click', () => {
  position3 += 335;
  if(position3 > 0) {
    position3 = 0;
  }
  sliderTeachers.style.transform = `translateX(${position3}px)`;
});