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
        calories:btn.dataset.calories
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


  /*-------close---------*/
  const closebtn=
  document.querySelector(".close-btn");
  const comparisonbox=
  document.querySelector(".compare-modal");
  const compareoverlay=
  document.querySelector(".compare-overlay");
  closebtn.addEventListener("click",()=>{
    comparisonbox.classList.add("hidden");
    compareoverlay.classList.add("hidden");

  });