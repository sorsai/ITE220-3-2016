window.onload = function() {
	function render() {
		var bangkok = document.getElementById("bangkok");
		bangkok.addEventListener("click",
			function() {
			//alert("bangkok");
			var url = "http://api.openweathermap.org/data/2.5/weather?q=bangkok&appid=27c0b6d184efb2a1549ba3d91eb42b6d"
			$.ajax ({
				type: "GET",
				url: url,
				success: function(data) {
					var temp = data.main.temp - 273.15;
					//console.log(data);
					// console.log(temp);
					var ele = document.getElementById("temp");
					ele.textContent = temp.toFixed(2);
					// use .toFixed to mamge the decimals...
					var icon = data.weather[0].icon;

					var ele2 = document.getElementById("icon");
					ele2.innerHTML = "<img src = 'http://openweathermap.org/img/w/"+icon+".png' />"

					var humi = data.main.humidity;

					var ele3 = document.getElementById("humidity");
					ele3.textContent = humi;

				}
			});
		});
		var london = document.getElementById("london");
		london.addEventListener("click",
			function() {
			//alert("bangkok");
			var url = "http://api.openweathermap.org/data/2.5/weather?q=london&appid=27c0b6d184efb2a1549ba3d91eb42b6d"
			$.ajax ({
				type: "GET",
				url: url,
				success: function(data) {
					var temp = data.main.temp - 273.15;
					// console.log(data);
					// console.log(temp);
					var ele = document.getElementById("temp");
					ele.textContent = temp.toFixed(2);
					// use .toFixed to mamge the decimals...
					var icon = data.weather[0].icon;

					var ele2 = document.getElementById("icon");
					ele2.innerHTML = "<img src = 'http://openweathermap.org/img/w/"+icon+".png' />"

					var humi = data.main.humidity;

					var ele3 = document.getElementById("humidity");
					ele3.textContent = humi;
				}
			});
		});

		var seoul = document.getElementById("seoul");
		seoul.addEventListener("click",
			function() {
			//alert("bangkok");
			var url = "http://api.openweathermap.org/data/2.5/weather?q=seoul&appid=27c0b6d184efb2a1549ba3d91eb42b6d"
			$.ajax ({
				type: "GET",
				url: url,
				success: function(data) {
					var temp = data.main.temp - 273.15;
					// console.log(data);
					// console.log(temp);
					var ele = document.getElementById("temp");
					ele.textContent = temp.toFixed(2);
					// use .toFixed to mamge the decimals...
					var icon = data.weather[0].icon;

					var ele2 = document.getElementById("icon");
					ele2.innerHTML = "<img src = 'http://openweathermap.org/img/w/"+icon+".png' />"

					var humi = data.main.humidity;

					var ele3 = document.getElementById("humidity");
					ele3.textContent = humi;
				}
			});
		});
	}

	render();
};