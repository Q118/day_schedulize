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
	}
  });