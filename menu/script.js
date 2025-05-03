document.querySelectorAll('.btm2').forEach((button) => {
    button.addEventListener('click', () => {
      const countSpan = button.closest('.offer_card').querySelector('.count');
      let count = parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count;
    });
  });
  
  document.querySelectorAll('.btm1').forEach((button) => {
    button.addEventListener('click', () => {
      const countSpan = button.closest('.offer_card').querySelector('.count');
      let count = parseInt(countSpan.textContent);
      if (count > 0) {
        count--;
        countSpan.textContent = count;
      }
    });
  });