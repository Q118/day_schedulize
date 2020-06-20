/** @format */

//this is from offic hours video of this hw

//setting the time w moment js... parse it appropriately

$(function () {
	updateTime();
	setInterval(function () {
		// see if you can format the time as Day, Month date (e.g. Friday, June 19th)
		updateTime();
	}, 1000);
	function updateTime() {
		var timeEl = $("#time");
		var dateEl = $("#date");
		var now = moment();
		var formattedTime = now.format("h:mm");
		var formattedDate = now.format("dddd, MMMM Do");
		timeEl.text(formattedTime);
		dateEl.text(formattedDate);
		//color-coding the time blocks with the css classes based on time of day
		if (formattedTime > "9:00" && formattedTime < "10:00") {
			//add present class
			$("#hour-9").addClass("present");
			//add future class to the rest
			$(
				"#hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17"
			).addClass("future");
		} else if (formattedTime > "10:00" && formattedTime < "11:00") {
			//add present class
			$("#hour-10").addClass("present");
			//add future class to the rest
			$(
				"#hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17"
			).addClass("future");
		} else if (formattedTime > "11:00" && formattedTime < "12:00") {
			//add present class
			$("#hour-11").addClass("present");
			//add future class to the rest
			$("#hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17").addClass(
				"future"
			);
		} else if (formattedTime > "12:00" && formattedTime < "1:00") {
			//add present class
			$("#hour-12").addClass("present");
			//add future class to later ones
			$("#hour-13, #hour-14, #hour-15, #hour-16, #hour-17").addClass("future");
		} else if (formattedTime > "1:00" && formattedTime < "2:00") {
			//add present class
			$("#hour-13").addClass("present");
				//add future class to later ones
				$("#hour-14, #hour-15, #hour-16, #hour-17").addClass("future");
		} else if (formattedTime > "2:00" && formattedTime < "3:00") {
			//add present class
			$("#hour-14").addClass("present");
				//add future class to later ones
				$("#hour-15, #hour-16, #hour-17").addClass("future");
		} else if (formattedTime > "3:00" && formattedTime < "4:00") {
			//add present class
			$("#hour-15").addClass("present");
				//add future class to later ones
				$("#hour-16, #hour-17").addClass("future");
		} else if (formattedTime > "4:00" && formattedTime < "5:00") {
			//add present class
			$("#hour-16").addClass("present");
				//add future class to later ones
				$("#hour-17").addClass("future");
		} else if (formattedTime > "5:00" && formattedTime < "6:00") {
			//add present class
			$("#hour-17").addClass("present");
		}

		//use or for
	}
});
