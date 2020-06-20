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
		} else if (formattedTime > "10:00" && formattedTime < "11:00") {
			//add present class
			$("#hour-10").addClass("present");
		} else if (formattedTime > "11:00" && formattedTime < "12:00") {
			//add present class
			$("#hour-11").addClass("present");
		} else if (formattedTime > "12:00" && formattedTime < "1:00") {
			//add present class
			$("#hour-12").addClass("present");
		}  else if (formattedTime > "11:00" && formattedTime < "12:00") {
			//add present class
			$("#hour-9").addClass("present");
		}

		//use or for
	}
});
