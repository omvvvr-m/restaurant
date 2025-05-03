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


  //----------------order----------------//

  window.addEventListener("DOMContentLoaded",function(){
    let cards=
    document.querySelectorAll(".offer_card");
    cards.forEach(function(card){
      let tittle=
      card.querySelector(".offer_tittle");
      let count =
      card.querySelector(".count");
      console.log("Meal:",tittle.innerText)
      console.log("quantity:",count.value);

        });

      let orderbtn=
      document.querySelector(".offer_btn");
      orderbtn.addEventListener("click",function() {
        let selectmeals =[];
        cards.forEach(function(card){
          let tittle=
          card.querySelector(".offer_tittle");
          let count =
          card.querySelector(".count");
          
          let qty=
          parseInt(count.value);   
          if(qty>0){
            selectmeals.push({
              name:tittle.innerText,
              quantity:qty
            });
          }


        });
        localStorage.setItem("meals",JSON.stringify(selectmeals));
        
            JSON.parse(localStorage.getItem("meals"))
        window.location.href="../order/order.html";


      });

    });
 
 
  
  