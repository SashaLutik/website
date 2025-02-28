//картинки
const smallimgs = document.querySelectorAll('.img__list__small img');
const largeImageList = document.querySelector('.img__list__large');
const largeImage = document.querySelector('.large__img');

smallimgs.forEach(smallimg => {
    smallimg.addEventListener('mouseover', () => {
    largeImage.src = smallimg.src;
    largeImageList.style.display = 'flex';
  });
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

//кнопки
  document.getElementById('button1').addEventListener('click', () => {
  document.getElementById('hidden__text').classList.remove('hidden');
  document.getElementById('hidden__text2').classList.add('hidden');
});

  document.getElementById('button2').addEventListener('click', () => {
  document.getElementById('hidden__text2').classList.remove('hidden');
  document.getElementById('hidden__text').classList.add('hidden');
});