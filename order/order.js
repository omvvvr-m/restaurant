
//nav

fetch('../Navbar/navbar.html')
.then(res => res.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});






document.getElementById("confirm").addEventListener("click", function(event) 
{
  event.preventDefault(); // Stop form from submitting

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("num").value.trim();
let gov = document.querySelector('input[list="governorate"]').value.trim();
let address = document.getElementById("address").value.trim();
let payment = document.querySelector('input[name="pay"]:checked');


if (name === "") {
    alert("Please enter your name.");
    return  ;
}

else if (phone === "" || phone.length != 11) {
    alert("Phone number must be 11 digits.");
    return  ;
}

else if (gov === "") {
    alert("Please select your governorate.");
    return  ;
}

else if (address === "") {
    alert("Please enter your full address.");
    return  ;
}

else if (!payment) {
    alert("Please select a payment method.");
    return  ;
}

else if (payment.value === "visa") {
    let cardNumber = document.getElementById("Card Number").value.trim();
    let expiry = document.getElementById("Expiry Date").value.trim();
    let cvv = document.getElementById("cvv").value.trim();
    let cardName = document.getElementById("card-name").value.trim();
   // let isvalid=true;

    if (cardNumber === "" || cardNumber.length != 16) {
    alert("Card number must be 16 digits.");
    return  ;
}

else if (expiry === "") {
    alert("Please select the expiry date.");
    return  ;
}

else if (cvv === "" || (cvv.length != 3 && cvv.length != 4)) {
    alert("CVV must be 3 or 4 digits.");
    return  ;
}

else if (cardName === "") {
    alert("Please enter the card holder's name.");
    return;
} 
else {
    alert("order confirmed");
    return;
}
}

else{
    alert("order confirmed");
    return;
}


});













//visa form

document.addEventListener("DOMContentLoaded",function(){
    const visaOption= document.getElementById("visa");
    const cashOption= document.getElementById("cash");
    const visaForm=document.getElementById("visaForm");

    visaOption.addEventListener("click",function(){
        visaForm.style.display="block";
    });

    cashOption.addEventListener("click",function(){
        visaForm.style.display="none";
    });
});



//reset

let resetBtn=document.getElementById("reset");
let resetNote=document.getElementById("reset-note")
resetBtn.onclick=function(){
    document.getElementById("OrderForm").reset();
    resetNote.value="";
}


//local storage

let orders =JSON.parse(localStorage.getItem("order"));
console.log(JSON.parse(localStorage.getItem("order")));
// console.log(localStorage.getItem("neworder"));
    let listdiv=document.getElementById("orderlist");
    let orderitems=document.createElement("div");
    orderitems.innerHTML=` <h4>Meal : ${orders.name} </h4>
                <p>Price : ${orders.price}</p>
                <p>quantity : ${orders.quantity}</p>   `   
    listdiv.appendChild(orderitems)                                 
;

;
function cleanorder (){
    // let clearbtn=document.getElementById("clean");
    localStorage.removeItem("order");
    document.getElementById("orderlist").innerHTML=" ";
    // alert("deleted");
}