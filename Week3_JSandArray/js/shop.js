var customerName ="Punyanuch";
var products = ["Brooklyn T-Shirt White", "Brooklyn T-Shirt Black", "Apple Watch", "Android Phone"];
var prices = [10, 10, 199, 159];

var total = 0;
var customer = document.getElementById("name");
customer.textContent = customerName;

// document.write("Total is " + total);

var productsText="";
var productsElement = document.getElementById("product-list");

for ( var i = 0; i < products.length; i++) {
	productsText += "<li class='list-group-item'><span class='badge'>$" + prices[i] + "</span>" + products[i] + "</li>";
	total += prices[i];
}

 productsElement.innerHTML = productsText;


 var totalPriceElement = document.getElementById("total-price");
 totalPriceElement.textContent = total;

// // var totalPrice = document.getElementById("total");
// // totalPrice.textContent = total;

