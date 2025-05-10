function increase(btn){
    let qs= btn.parentElement.querySelector(".q");
    let a= parseInt(qs.textContent);
    a++;
    qs.textContent=a;
    return qs.textContent;
    // let quantity=qs.textContent;
    // let value=a;
    // localStorage.setItem(quantity,a);
    // alert("added");
    // localStorage.getItem(quantity,a);
    // console.log(localStorage.getItem(quantity,a));
}
function decrease(btn){
    let qs= btn.parentElement.querySelector(".q");
    let a= parseInt(qs.textContent);
    if(a>0)
    a--;
    qs.textContent=a;
    return qs.textContent;
    // let quantity=qs.textContent;
    // let value=a;
    // localStorage.removeItem(quantity,a);
    //  alert("deleted");
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
    // let c=JSON.parse(localStorage.getItem("orders"));
    // let cindex=c.findIndex(order=>order.name===name);
    // if(cindex!==-1){
        // c[cindex]=neworder;
    // }
    // else{
        // c.push(neworder);
    // }
    localStorage.setItem("order",JSON.stringify(neworder));
    // localStorage.getItem("order",JSON.stringify(neworder));
     window.location.href= "../order/order.html";
    console.log(neworder);
}

// function Go (){
//     window.location.href= "../order/order.html"
// function Go (){
//     window.location.href= "../order/order.html"}






