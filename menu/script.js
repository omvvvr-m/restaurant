document.querySelectorAll('.btm2').forEach((button) => {
    button.addEventListener('click', () => {
      const countSpan =
       button.closest('.offer_card').querySelector('.count');
      let count =
       parseInt(countSpan.textContent);
      count++;
      countSpan.textContent = count;
    });
  });
  
  document.querySelectorAll('.btm1').forEach((button) => {
    button.addEventListener('click', () => {
      const countSpan =
       button.closest('.offer_card').querySelector('.count');
      let count =
       parseInt(countSpan.textContent);
      if (count > 0) {
        count--;
        countSpan.textContent = count;
      }
    });
  });


  
    //------------------order------------------//

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
       window.location.href=`../order/order.html?data=${orderstring}`;


      });
  });

  //--------------compare-------------------//

  const comparebtns=
  document.querySelectorAll('.compare-btn');
  const overlay=
  document.querySelector('.compare-overlay');
  const modal=
  document.querySelector('.compare-modal');
  
  let selectmeals=[];

  comparebtns.forEach(btn=>
  {
    btn.addEventListener('click',()=> {
      const meal={
        name:btn.dataset.name,
        price:btn.dataset.price,
        calories:btn.dataset.calories,
        rating:btn.dataset.rating
      };
      const exist=
       selectmeals.some(m=>m.name===meal.name);
      if(exist)return;

      selectmeals.push(meal);
      if(selectmeals.length===2){
        overlay.style.display='block';
        modal.style.display='block';
        filltabledata();
      }

      
    });
  });

  function filltabledata() {
    const meal1 = selectmeals[0];
    const meal2 = selectmeals[1];
  
    document.getElementById("meal1-name").innerText = meal1.name;
    document.getElementById("meal1-price").innerText = meal1.price;
    document.getElementById("meal1-calories").innerText = meal1.calories;
    document.getElementById("meal1-rating").innerText = meal1.rating;
  
    document.getElementById("meal2-name").innerText = meal2.name;
    document.getElementById("meal2-price").innerText = meal2.price;
    document.getElementById("meal2-calories").innerText = meal2.calories;
    document.getElementById("meal2-rating").innerText = meal2.rating;
  }
  /*-------close---------*/
  const closebtn=
  document.querySelector(".close-btn");
  const comparisonbox=
  document.querySelector(".compare-modal");
  const compareoverlay=
  document.querySelector(".compare-overlay");
  closebtn.addEventListener("click",()=>{
    comparisonbox.style.display = 'none';
    compareoverlay.style.display = 'none';
    selectmeals = []

  });