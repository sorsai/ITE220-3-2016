var shop = {
	customerName: "SorSai",
	total: 0,
	products: [
		"Brooklyn T-Shirt White", 
		"Brooklyn T-Shirt Black", 
		"Apple Watch", 
		"Android Phone"
	],
	prices: [10,10,199,159],
	displayCustomerName: function() {
		var el = document.getElementById("name");
		el.textContent = this.customerName;
	},

	displayProducts: function() {
		var productsText = "";
		var productsElement = document.getElementById("product-list");
		 for(var i = 0; i<this.products.length;i++) {

            productsText += "<li class='list-group-item'><span class='badge'>$" + this.prices[i] + "</span>" + this.products[i] + "</li>";
            this.total += this.prices[i];
        }

        productsElement.innerHTML = productsText;


         var totalPriceElement = document.getElementById("total-price");
		 totalPriceElement.textContent = this.total-(this.total * 0.25);

		var date = new Date();
		var hours = date.getHours();
		var say;
		if (hours < 12 ){
			say = "Good Morning";
		}else if (hours < 18){
			say = "Good Afternoon";
		}else{
			say = "Good Evening";
		}
		document.getElementById("time").innerHTML = say;

		// var calendar = {
		// 	header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
		// 	  displayCalendar: function() {
		// 	  	var ele = document.getElementById("calendar");
		// 	  	var calendarText = "<table class='table table-considered'>";
		// 	  	calendarText += this.header;
		// 		for (var i = 1; i <= 31; i++) {
		// 			document.write("<tr>");
		// 			//code thatt display the date..
  // 					 if (i % 7 == 0) { 
  // 						calendarText += "<td>" + i + "</td></tr><tr>";
  // 						// "| "+i+"|"
		// 		}	else {
		// 				calendarText += "<td>" + i + "</td>"
		// 		}	
		// 	  	calendarText += "</table>"
		// 	  	ele.innerHTML = calendarText;
		// 	  }
		//  calendar.displayCalendar();
	}
}

shop.displayCustomerName();
shop.displayProducts();

// var customerName ="Punyanuch";
// var products = ["Brooklyn T-Shirt White", "Brooklyn T-Shirt Black", "Apple Watch", "Android Phone"];
// var prices = [10, 10, 199, 159];

// var total = 0;
// var customer = document.getElementById("name");
// customer.textContent = customerName;

// // document.write("Total is " + total);

// var productsText="";
// var productsElement = document.getElementById("product-list");

// for ( var i = 0; i < products.length; i++) {
// 	productsText += "<li class='list-group-item'><span class='badge'>$" + prices[i] + "</span>" + products[i] + "</li>";
// 	total += prices[i];
// }

//  productsElement.innerHTML = productsText;


//  var totalPriceElement = document.getElementById("total-price");
//  totalPriceElement.textContent = total;

 // var date = new Date();
 // 	if (date.getHours() < 12) {
 // 		document.getElementById('time').innerHTML = " Good Morning";
 // 	} else if (date.getHours() > 12) {
 // 		document.getElementById('time').innerHTML = " Good afternoon";
 // 	} else {
 // 		document.getElementById('time').innerHTML = "Good Evening";
 // 	}

//  var dateElement = document.getElementById("date");
//  dateElement.textContent = date;

// // // var totalPrice = document.getElementById("total");
// // // totalPrice.textContent = total;

