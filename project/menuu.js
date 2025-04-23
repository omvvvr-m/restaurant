
document.querySelectorAll('.increase-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const countSpan = button.closest('.card').querySelector('.count');
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
  });
});

document.querySelectorAll('.decrease-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const countSpan = button.closest('.card').querySelector('.count');
    let count = parseInt(countSpan.textContent);
    if (count > 0) {
      count--;
      countSpan.textContent = count;
    }
  });
});



