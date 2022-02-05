let count = 0;

const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#value');

btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count += 1;
    } else if (styles.contains('decrease')) {
      count -= 1;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = 'orange';
    } else if (count > 0) {
      value.style.color = 'green';
    } else {
      value.style.color = 'red';
    }

    value.textContent = count;
  });
});