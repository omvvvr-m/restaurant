// عااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااا

















fetch('../Navbar/navbar.html')
.then(res => res.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
});


// //confirm

// function  submitOrder()
//     {
//     let name =document.getElementById("name").value.trim;
//     let phone =document.getElementById("num").value.trim;
//     let cvv =document.getElementById("cvv").value.trim;
//     let address =document.getElementById("address").value.trim;
//     let paymentVisa=document.getElementById("visa").Checked;
//     let paymentCash=document.getElementById("cash").Checked;

// //validition

//     if (name===""){
//         alert("please enter your name.");
//         return;
//     }
    
//     if(phone.length!==11||isNaN(phone)){
//         alert("phone number must be exactly 11 digits.");
//         return;
//     }

//     if(!paymentCash && !paymentVisa){
//         alert("please select a payment method");
//         return;
//     }

//     if(paymentVisa && (cvv.length!==3|| isNaN(cvv))){
//         alert("CVV must be 3 digit.");
//         return;
//     }

//     swal ("Order Confirmed!" , "your delicious meal is on its way!","sucess");
// }


// document.getElementById("confirm").onclick=function(this)
// {
//     document.getElementById("confirmmodal").style.display="flex";
// };

// document.getElementsByClassName("close")[0].onclick=function(this)
// {
//     document.getElementById("confirmmodal").style.display="none";
// };





// document.addEventListener("DOMContentLoaded", function() {
//     const confirmBtn = document.getElementById("confirmBtn");
//     const modal = document.getElementById("confirmationModal");
//     const closeBtn = document.getElementsByClassName("close")[0];

//     // لما المستخدم يضغط على Confirm
//     confirmBtn.addEventListener("click", function() {
//       modal.style.display = "block"; // إظهار الـ Modal
//     });

//     // لما المستخدم يضغط على زر الإغلاق (x) في الـ Modal
//     closeBtn.addEventListener("click", function() {
//       modal.style.display = "none"; // إخفاء الـ Modal
//     });

//     // إذا ضغط المستخدم في أي مكان خارج الـ Modal
//     window.addEventListener("click", function(event) {
//         if (event.target == modal) {
//         modal.style.display = "none"; // إخفاء الـ Modal
//     }
//     });
// });





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