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

 /* window.addEventListener("DOMContentLoaded",function(){
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

    });*/
    //----------------------------------------------------------------//

  window.addEventListener("DOMContentLoaded",function(){
    const orderbutton=
      document.querySelector(".offer_btn");
      orderbutton.addEventListener("click",function(){
        const alloffers=
        document.querySelectorAll(".offer_card");
       const orders=[];
       alloffers.forEach(offer=>{
        const name=offer.querySelector(".offer_tittle").textContent;
        const quantity=offer.querySelector(".count").textContent;
        const price=offer.querySelector(".new").textContent;
        if(parseInt(quantity)>0){

          orders.push({name ,quantity,price});

        }
      });

      const orderstring=
        encodeURIComponent(JSON.stringify(orders));
       window.location.href=`order.html?data=${orderstring}`;


      });
  });