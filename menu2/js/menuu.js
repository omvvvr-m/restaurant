
document.querySelectorAll('.increase-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const countSpan = button.closest('.card').querySelector('.count');
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;
    return countSpan.textContent
  
  });
});

document.querySelectorAll('.decrease-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const countSpan = button.closest('.card').querySelector('.count');
    let count = parseInt(countSpan.textContent);
    if (count > 0) {
      count--;
      countSpan.textContent = count;
      return countSpan.textContent
    }
  });
});
function order (button) {
  let c1 = button.closest(".card");
  let m1 = c1 .querySelector (".s").textContent;
  let p1 = parseInt(c1.querySelector (".flip-btn").textContent);
  let q1 = parseInt (c1.querySelector(".count").textContent);
  let ob = { m1,p1,q1 }
  let G =JSON.stringify (ob);
  localStorage.setItem ("order",JSON.stringify (ob));
  localStorage.getItem ("order",JSON.stringify (ob));
  console.log (ob) ;
  
}


