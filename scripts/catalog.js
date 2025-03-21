const buttons = document.querySelectorAll('.butt__view');
const yellowitems = document.querySelectorAll('.yellow__butt');
const reditems = document.querySelectorAll('.red__butt');
const greenitems = document.querySelectorAll('.green__butt');
const blueitems = document.querySelectorAll('.blue__butt');
const orangeitems = document.querySelectorAll('.orange__butt');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    yellowitems.forEach(item => {
        if (filter === 'все') {
            item.style.display = 'block';
        } else {
            if (item.classList.contains(filter)) {
            item.style.display = 'block';
            } else {
            item.style.display = 'none';
            }
        }
    });
    reditems.forEach(item => {
        if (filter === 'все') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
    });
    greenitems.forEach(item => {
        if (filter === 'все') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
    });
    blueitems.forEach(item => {
        if (filter === 'все') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
    });
    orangeitems.forEach(item => {
        if (filter === 'все') {
          item.style.display = 'block';
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
    });
  });
});
