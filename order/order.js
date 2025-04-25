// ععععععععععااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااا


// document.getElementById("OrderForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     // clear previous errors
//     document.querySelectorAll('.error').forEach(el => el.textContent = "");

//     let name = document.getElementById("name").value.trim();
//     let phone = document.getElementById("num").value.trim();
//     let cvv = document.getElementById("cvv").value.trim();
//     let visa = document.getElementById("visa").checked;
//     let cash = document.getElementById("cash").checked;

//     let hasError = false;

//     if (name === "") {
//         document.getElementById("error-name").textContent = "Please enter your name.";
//         hasError = true;
//     }

//     if (phone.length !== 11 || isNaN(phone)) {
//         document.getElementById("error-phone").textContent = "Phone number must be exactly 11 digits.";
//         hasError = true;
//     }

//     if (!visa && !cash) {
//         document.getElementById("error-payment").textContent = "Please select a payment method.";
//         hasError = true;
//     }
//     if (visa && (cvv.length !== 3 || isNaN(cvv))) {
//         document.getElementById("error-cvv").textContent = "CVV must be 3 digits.";
//         hasError = true;
//     }

//     if (!hasError) {
//         document.getElementById("successmessage").style.display = "block";
//         setTimeout(() => {
//             document.getElementById("successmessage").style.display = "none";
//         }, 4000);

//         document.getElementById("OrderForm").reset();
//         }
//     });



// const form = document.getElementById('orderForm');
// const phoneInput = document.getElementById('phone');
// const paymentSelect = document.getElementById('payment');
// const cvvInput = document.getElementById('cvv');
// const visaDetails = document.getElementById('visaDetails');
// const successMessage = document.getElementById('successMessage');

// paymentSelect.addEventListener('change', () => {
//     if (paymentSelect.value === 'visa') {
//     visaDetails.classList.remove('hidden');
//     } else {
//     visaDetails.classList.add('hidden');
// }
// });

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const phone = phoneInput.value.trim();
//     const payment = paymentSelect.value;
//     const cvv = cvvInput.value.trim();

//     if (phone.length !== 11 || isNaN(phone)) {
//     alert("Phone number must be exactly 11 digits.");
//     return;
// }

//     if (payment === "") {
//     alert("Please select a payment method.");
//     return;
// }

//     if (payment === "visa") {
//     if (cvv.length !== 3 || isNaN(cvv)) {
//         alert("CVV must be exactly 3 digits.");
//         return;
//     }
// }

//   // إذا كل حاجة تمام، نعرض الرسالة الشيك
//     successMessage.classList.remove('hidden');
// });



 //confirm

// function  submitOrder(e)
//     {
//         e.preventDefault();
//     let name =document.getElementById("name").value.trim;
//     let phone =document.getElementById("num").value.trim;
//     let cvv =document.getElementById("cvv").value.trim;
//     let address =document.getElementById("address").value.trim;
//     let paymentVisa=document.getElementById("visa").Checked;
//     let paymentCash=document.getElementById("cash").Checked;
//     let isvalid =true;

// //validition

//     if (name===""){
//         alert("please enter your name.");
//         isvalid=false;
//     }

//     if(phone.length!==11||isNaN(phone)){
//         alert("phone number must be exactly 11 digits.");
//         isvalid=false;
//     }

//     if(!paymentCash && !paymentVisa){
//         alert("please select a payment method");
//         isvalid=false;
//     }

//     if(paymentVisa && (cvv.length!==3|| isNaN(cvv))){
//         alert("CVV must be 3 digit.");
//         isvalid=false;
//     }

//     if(isvalid)
//     {
//         let confirmBtn=document.getElementById("confirm");
//         document.addEventListener("DOMContentLoaded",function(e){
//             e.preventDefault();
//                 alert ("order");
//         });

//     }}

// document.getElementById("confirmmessage").style.display="block";
//         setTimeout(() =>
//         {
//             document.getElementById("confirmmessage").style.display="none";
//         }
//         ,4000);





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


//     confirmBtn.addEventListener("click", function() {
//       modal.style.display = "block"; // إظهار الـ Modal
//     });

//     // لما المستخدم يضغط على زر الإغلاق (x) في الـ Modal
//     closeBtn.addEventListener("click", function() {
//       modal.style.display = "none"; // إخفاء الـ Modal
//     });


//     window.addEventListener("click", function(event) {
//         if (event.target == modal) {
//         modal.style.display = "none"; // إخفاء الـ Modal
//     }
//     });
// });








//nav

fetch('../Navbar/navbar.html')
.then(res => res.text())
.then(data => {
    document.getElementById('navbar').innerHTML = data;
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