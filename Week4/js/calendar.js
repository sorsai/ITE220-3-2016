var calendar = {
			header: "<tr><th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th></tr><tr>",
			  displayCalendar: function() {
			  	var ele = document.getElementById("calendar");
			  	var calendarText = "<table class='table table-considered'>";
			  	calendarText += this.header;
				for (var i = 1; i <= 31; i++) {
					document.write("<tr>");
					//code thatt display the date..
  					 if (i % 7 == 0) { 
  						calendarText += "<td>"+i+"</td></tr><tr>";
  						// "| "+i+"|"
				}	else {
						calendarText += "<td>" + i + "</td>";
				}
			}
			  	calendarText += "</table>"
			  	ele.innerHTML = calendarText;
		}
	}
calendar.displayCalendar();