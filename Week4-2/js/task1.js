window.onload = function() { 
var task1 = {
	render: function(){
		document.getElementById("screenX").textContent = window.screenX;
		document.getElementById("screenY").textContent = window.screenY;
		document.getElementById("screenWidth").textContent = window.innerWidth;
		document.getElementById("screenHeight").textContent = window.innerHeight;
		document.getElementById("location").textContent = window.location.pathname;
		document.getElementById("lastModified").textContent = document.lastModified;	
	var word =" Web 2 is awesome!"
		document.getElementById("word").textContent = word;
	var ans;
		if ( word.indexOf("awesome") > -1 ) {
			ans = "YES!"
		} else {
			ans = "NO!"
		}
		document.getElementById("ans").textContent = ans;	
	},
	resize: function () {
		window.addEventListener("resize", this.render);
	},
	devInfo: function() {
		var ele = document.getElementById("dev-info");
		var info = document.getElementById("myinfo");
		// var pos = document.getElementById("position");
		// var link = document.getElementById("mylink");

		ele.addEventListener("click", function() {
			info.innerHTML = "Punyanuch Fongcharoen <br> STUDENT <br> <a href ='https://sorsai.github.io/ITE220-3-2016/Week1/index.html' target='_blank' > www.github.com/sorsai </a>";
		});
	}
};
task1.render();
task1.resize();
task1.devInfo();
}