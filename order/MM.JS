document.getElementById("OrderForm").addEventListener("submit", function(event) 
{
  event.preventDefault(); // Stop form from submitting

let name = document.getElementById("name").value.trim();
let phone = document.getElementById("num").value.trim();
let gov = document.querySelector('input[list="governorate"]').value.trim();
let address = document.getElementById("address").value.trim();
let payment = document.querySelector('input[name="pay"]:checked');

if (name === "") {
    alert("Please enter your name.");
    return;
}

if (phone === "" || phone.length != 11) {
    alert("Phone number must be 11 digits.");
    return;
}

if (gov === "") {
    alert("Please select your governorate.");
    return;
}

if (address === "") {
    alert("Please enter your full address.");
    return;
}

if (!payment) {
    alert("Please select a payment method.");
    return;
}

if (payment.value === "visa") {
    let cardNumber = document.getElementById("Card Number").value.trim();
    let expiry = document.getElementById("Expiry Date").value.trim();
    let cvv = document.getElementById("cvv").value.trim();
    let cardName = document.getElementById("card-name").value.trim();

    if (cardNumber === "" || cardNumber.length != 16) {
        alert("Card number must be 16 digits.");
        return;
    }

    if (expiry === "") {
        alert("Please select the expiry date.");
        return;
    }

    if (cvv === "" || (cvv.length != 3 && cvv.length != 4)) {
        alert("CVV must be 3 or 4 digits.");
        return;
    }

    if (cardName === "") {
        alert("Please enter the card holder's name.");
        return;
    }
}
});


// script<>
// document.getElementById("confirm").addEventListener("submit", function(event ) 
// {
// event.preventDefault(); // Stop form from submitting

// let name = document.getElementById("name").value.trim();
// let phone = document.getElementById("num").value.trim();
// let gov = document.querySelector('input[list="governorate"]').value.trim();
// let address = document.getElementById("address").value.trim();
// let payment = document.querySelector('input[name="pay"]:checked');


// if (name === "") {
// alert("Please enter your name.");
// return  ;
// }

// else if (phone === "" || phone.length != 11) {
// alert("Phone number must be 11 digits.");
// return  ;
// }

// else if (gov === "") {
// alert("Please select your governorate.");
// return  ;
// }

// else if (address === "") {
// alert("Please enter your full address.");
// return  ;
// }

// else if (!payment) {
// alert("Please select a payment method.");
// return  ;
// }

// else if (payment.value === "visa") {
// let cardNumber = document.getElementById("Card Number").value.trim();
// let expiry = document.getElementById("Expiry Date").value.trim();
// let cvv = document.getElementById("cvv").value.trim();
// let cardName = document.getElementById("card-name").value.trim();
// // let isvalid=true;

// else if (cardNumber === "" || cardNumber.length != 16) {
// alert("Card number must be 16 digits.");
// return  ;
// }

// else if (expiry === "") {
// alert("Please select the expiry date.");
// return  ;
// }

// else if (cvv === "" || (cvv.length != 3 && cvv.length != 4)) {
// alert("CVV must be 3 or 4 digits.");
// return  ;
// }

// else if (cardName === "") {
// alert("Please enter the card holder's name.");

// }
// // let isvalid= true;
// // return isvalid;
// else{
// alert("order confirmed");
// }
// }
// });
// </script>