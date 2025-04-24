fetch('../Navbar/navbar.html')
.then(res => res.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});


//confirm

let confirmBtn=document.getElementById("confirm");


    function submitOrder()
    {
    let name =document.getElementById("name").value.trim;
    let phone =document.getElementById("num").value.trim;
    let cvv =document.getElementById("cvv").value.trim;
    let address =document.getElementById("address").value.trim;
    let paymentVisa=document.getElementById("visa").Checked;
    let paymentCash=document.getElementById("cash").Checked;

//validition

    if (name===""){
        alert("please enter your name.");
        return;
    }
    
    if(phone.length!==11||isNaN(phone)){
        alert("phone number must be exactly 11 digits.");
        return;
    }

    if(!paymentCash && !paymentVisa){
        alert("please select a payment method");
        return;
    }

    if(paymentVisa && (cvv.length!==3|| isNaN(cvv))){
        alert("CVV must be 3 digit.");
        return;
    }

    swal ("Order Confirmed!" , "your delicious meal is on its way!","sucess");
}



//reset
let resetBtn=document.getElementById("reset");
let resetNote=document.getElementById("reset-note")
resetBtn.onclick=function(){
    document.getElementById("OrderForm").reset();
    resetNote.value="";
}