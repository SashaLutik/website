const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');


document.getElementById('buttregistr').addEventListener('click', () => {
    section1.style.display = 'none';
    section2.style.display = 'block';
});
document.getElementById('buttregistr2').addEventListener('click', () => {
    section1.style.display = 'block';
    section2.style.display = 'none';
});
