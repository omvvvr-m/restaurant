
function order(button) {
    let c1 = button.closest(".card");
    let name = c1.querySelector("h2").textContent;
    let price = c1.querySelector(".price").textContent;
    let quantity = parseInt(c1.querySelector(".count").textContent);
  
    let obj = { name, price, quantity };
    localStorage.setItem("order", JSON.stringify(obj));
    window.location.href = "../order/order.html";
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card").forEach(card => {
      let countSpan = card.querySelector(".count");
      let increaseBtn = card.querySelector(".increase-btn");
      let decreaseBtn = card.querySelector(".decrease-btn");
  
      increaseBtn.addEventListener("click", () => {
        let current = parseInt(countSpan.textContent);
        countSpan.textContent = current + 1;
      });
  
      decreaseBtn.addEventListener("click", () => {
        let current = parseInt(countSpan.textContent);
        if (current > 0) {
          countSpan.textContent = current - 1;
        }
      });
    });
  });