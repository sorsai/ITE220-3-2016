var customerName ="Punyanuch";
var price;
var quatity;
var totalPrice;

price = 5;
quantity = 14;
total = price * quantity;

// //document.write("Total is " + total);
var totalPrice = document.getElementById("total");
totalPrice.textContent = total;

var customer = document.getElementById("name");
customer.textContent = customerName;