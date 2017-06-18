function getURL() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/,
        function(m,key,value) {
            vars[key] = value;
        }
    );
    return vars;
}

var movie = {
	render: function() { 
		var searchUrl = getURL();
		// var searchUrl = document.getElementById("searchmov").value;
		var url = "https://api.themoviedb.org/3/search/movie?api_key=dcb516cc83cf8b241c3a12098617ee96&query=";
		var message = document.getElementById("loading");
		var display = document.getElementById("displaymovies");

		window.onload = function() {
		var button = document.getElementById("searchmov");
		// button.addEventListener("click", function() {

		$.ajax({
        url: url+searchUrl.search,
        type: "GET",
        beforeSend: function () {
            // message.innerHTML = "Loading...";
        },
        complete: function () {
            // message.innerHTML = "Search your Movies!";
            // message.innerHTML = "Successfully Done!";
        },
        success: function (data) {
             //console.log(data)
       		 // $("#test").html(data.results[0].title+"<img src='https://image.tmdb.org/t/p/w640"+ data.results[0].poster_path+ "'/>")

            var string = "";
            string += "<div class='row'>";
            for(var i = 0; i<data.results.length;i++){

                var element = data.results[i];

                string += "<div class='col-md-3'>";
                string += "<a href='https://www.themoviedb.org/movie/" +element.id+ "' target='_blank'>";
                if ( element.poster_path == null ) {
                  string += "<a href='http://placeholder.com'> <img class='img-thumbnail' src='http://via.placeholder.com/300x450' value='NO POSTER'> </a>"
                } else {
                 string += "<img class='img-thumbnail' src='https://image.tmdb.org/t/p/w640"+ element.poster_path+ "'/>";
                }
                string += "<h4>" + element.title + "</h4>";
                string += "</a>";
                string += "</div>";

                if((i+1) % 4 == 0){
                    string += "</div>";
                    string += "<div class='row'>";
                }
            }

            display.innerHTML = string;

        },
        error: function () {
            message.innerHTML = "We are sorry";
        }
       });
	// })
	}
	}
}
movie.render();