function increase(btn){
    let qs= btn.parentElement.querySelector(".q");
    let a= parseInt(qs.textContent);
    a++;
    qs.textContent=a;
    return qs.textContent;
}
function decrease(btn){
    let qs= btn.parentElement.querySelector(".q");
    let a= parseInt(qs.textContent);
    if(a>0)
    a--;
    qs.textContent=a;
    return qs.textContent;
}
function save (btn){
    let card=btn.closest(".ph1");
    let name=card.querySelector(".n1").textContent;
    let price=parseFloat(card.querySelector(".p1").textContent);
    let quantity=parseInt(card.querySelector(".q").textContent);
    let neworder={
        name,price,quantity
    }
    let jsonorder=JSON.stringify(neworder);
    localStorage.setItem("order",JSON.stringify(neworder));
    // localStorage.getItem("order",JSON.stringify(neworder));
     window.location.href= "../order/order.html";
    // console.log(neworder);
}







