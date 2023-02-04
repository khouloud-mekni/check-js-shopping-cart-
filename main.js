var total = document.getElementById("total");

//adding with plus buttons quantity and the price to the total price

// pls button
var plusBtn = document.getElementsByClassName("plus");
for (const btn of plusBtn) {
  btn.addEventListener("click", function () {
    //get the value of the name attribute
    let itemName = btn.getAttribute("name");

    //get the value of the id price
    let price = document.getElementById(itemName + "_price").innerHTML;
    //get the value of the id quantity
    let quantity = document.getElementById(itemName + "_qty");
    //incrementing the quantity
    quantity.innerHTML++;
    // changing the value of the total price
    total.innerHTML = parseInt(total.innerHTML) + parseInt(price);
  });
}
//minus button
var minusBtn = document.getElementsByClassName("minus");
for (const btn of minusBtn) {
  btn.addEventListener("click", function () {
    let itemName = btn.getAttribute("name");
    let price = document.getElementById(itemName + "_price").innerHTML;
    let quantity = document.getElementById(itemName + "_qty");

    if (quantity.innerHTML > 0) {
      total.innerHTML = parseInt(total.innerHTML) - parseInt(price);
      quantity.innerHTML--;
    } else {
      alert("price cannot be negative");
    }
  });
}
// heart for like or dislike
var hearts = document.querySelectorAll(".fa");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.style.color === "grey") {
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  });
}

var btnDelete = document.getElementsByClassName("btn-danger");

for (let button of btnDelete) {
  console.log(button);
  button.addEventListener("click", function (event) {
    let itemName = button.getAttribute("name");
    let priceElement = document.getElementById(itemName + "_price");
    let quantityElement = document.getElementById(itemName + "_qty");
    if (total && priceElement && quantityElement) {
      let price = priceElement.innerHTML;
      let quantity = quantityElement.innerHTML;
      event.target.parentElement.parentElement.remove();
      total.innerHTML = parseInt(total.innerHTML) - parseInt(price * quantity);
    }
  });
}
