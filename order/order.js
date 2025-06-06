//validation

document.getElementById("confirm").addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  let phone = document.getElementById("num").value.trim();
  let gov = document.querySelector('input[list="governorate"]').value.trim();
  let address = document.getElementById("address").value.trim();
  let payment = document.querySelector('input[name="pay"]:checked');


  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  else if (phone === "" || phone.length != 11) {
    alert("Phone number must be 11 digits.");
    return;
  }

  else if (gov === "") {
    alert("Please select your governorate.");
    return;
  }

  else if (address === "") {
    alert("Please enter your full address.");
    return;
  }

  else if (!payment) {
    alert("Please select a payment method.");
    return;
  }

  else if (payment.value === "visa") {
    let cardNumber = document.getElementById("Card Number").value.trim();
    let expiry = document.getElementById("Expiry Date").value.trim();
    let cvv = document.getElementById("cvv").value.trim();
    let cardName = document.getElementById("card-name").value.trim();

    if (cardNumber === "" || cardNumber.length != 16) {
      alert("Card number must be 16 digits.");
      return;
    }


    else if (expiry === "") {
      alert("Please select the expiry date.");
      return;
    }


    else if (cvv === "" || (cvv.length != 3 && cvv.length != 4)) {
      alert("CVV must be 3 or 4 digits.");
      return;
    }


    else if (cardName === "") {
      alert("Please enter the card holder's name.");
      return;
    }

    else {
      document.getElementById("OrderForm").submit();
      alert("Order Confirmed.");

      return;
    }
  }

  else {
    document.getElementById("OrderForm").submit();
    alert("Order Confirmed.");
    return;
  }


});


//visa form

document.addEventListener("DOMContentLoaded", function () {
  const visaOption = document.getElementById("visa");
  const cashOption = document.getElementById("cash");
  const visaForm = document.getElementById("visaForm");

  visaOption.addEventListener("click", function () {
    visaForm.style.display = "block";
  });

  cashOption.addEventListener("click", function () {
    visaForm.style.display = "none";
  });


});




//reset


let resetBtn=document.getElementById("reset");
let resetNote=document.getElementById("reset-note")
resetBtn.onclick=function(){
    document.getElementById("OrderForm").reset();
    resetNote.value="";
}


//menu

document.addEventListener('DOMContentLoaded', function () {
  let listdiv = document.getElementById("orderlist");
  listdiv.innerHTML = '';

  let orderData = localStorage.getItem("order") || localStorage.getItem("neworder");

  if (orderData) {
    let order = JSON.parse(orderData);
    let orderitems = document.createElement("div");
    orderitems.classList.add("order-card");

    if (order && order.name && order.price && order.quantity) {
      orderitems.innerHTML = `
          <h4>:meal ${order.name}</h4>
          <p>price: ${order.price}</p>
        <p> quantity: ${order.quantity}</p>
        `;
      listdiv.appendChild(orderitems);
    } else if (order && order.m1 && order.p1 && order.q1) {
      orderitems.innerHTML = `
          <h4>Meal: ${order.m1}</h4>
          <p>price: ${order.p1}</p>
          <p>quantity: ${order.q1}</p>
        `;
      listdiv.appendChild(orderitems);

    } else {
      // listdiv.innerHTML = "<p>NO DATA</p>";
    }
  } else {
    // listdiv.innerHTML = "<p>UNAVILABLE!</p>";
  }
});

function cleanorder() {
  localStorage.removeItem("order");
  localStorage.removeItem("neworder");
  document.getElementById("orderlist").innerHTML = "";
}

//-----------offer-----------------//

window.addEventListener("DOMContentLoaded", function () {
  const querystring =
    this.window.location.search;
  const urlparams = new
    URLSearchParams(querystring);
  const data =
    urlparams.get("data");
  if (!data) {
    this.document.getElementById("orderlist").innerHTML += "<p>  </p>";

  } else {
    const orders = JSON.parse(data)
    const orderbox =
      document.getElementById("orderlist");
    orders.forEach((order, index) => {
      const itemdiv =
        document.createElement("div");
      itemdiv.innerHTML =
        `<strong> order ${index + 1}:</strong><br> 
      meal:${order.name}<br>
      price:${order.price}<br>
      quantity:${order.quantity}`;
      orderbox.appendChild(itemdiv);

    });
  }

});