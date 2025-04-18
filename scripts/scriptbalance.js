const buttons = document.querySelectorAll('.balancebutt1');
const input = document.getElementById('output');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    input.value = number;
  });
});

const buttons2 = document.querySelectorAll('.balancebutt2');
const input2 = document.getElementById('output');

buttons2.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    input2.value = number;
  });
});

const buttons3 = document.querySelectorAll('.balancebutt3');
const input3 = document.getElementById('output');

buttons3.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    input3.value = number;
  });
});

const buttons4 = document.querySelectorAll('.balancebutt4');
const input4 = document.getElementById('output');

buttons4.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    input4.value = number;
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

let a = document.querySelector('.refillbutt');
a.addEventListener('click', () =>{
  alert("Отдай маме карту");
});