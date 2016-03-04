	var endTime = new Date(2016,10,8,19,0,0,0);
	var now = new Date();
	var endTimestamp = Date.parse(endTime);
	var endTimestamp = Date.now(); + 10000;
	var timer = document.getElementById("countdown-wrapper");
	// var weeks = timer.querySelector("#weeks");
	var weeks = document.getElementById("weeks");
	var days = document.getElementById('days');
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds")


function timeTillDoomsDay(){
	
	// var endTime = new Date(2016,2,4,13,0,0,0);
	var now = new Date();
	var endTimestamp = Date.parse(endTime);
	var nowTimestamp = Date.parse(now);
	var timeDifference = endTimestamp - nowTimestamp;
	
	var timeStampInSeconds = timeDifference / 1000;
	var seconds = Math.floor (timeStampInSeconds % 60);
	var minutes = Math.floor((timeStampInSeconds / 60) % 60);  // modulus gets the remainder and puts them in seconds
	var hours = Math.floor(timeStampInSeconds /(60 * 60) % 24);  // modulus gets how many gets number of minutes
	var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
	var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));
	
	 // 2153256500 seconds then use to translate into minutes, hours, days, weeks,
	 //var timeObject is a "variable of variables"
	 var timeObject = {
	 	weeks : weeks,
	 	days : days,
	 	hours : hours,
	 	minutes : minutes,
	 	seconds : seconds
	 };

	// console.log(endTime);
	// console.log(endTimestamp);
	// console.log(timeObject.weeks); //will pull from weeks inside timeObjects array 
	// console.log(timeObject.seconds);
	// console.log(weeks); //original variable

	return timeObject;
}

function inItTimer(){
	var timer = document.getElementById("countdown-wrapper");
	// var weeks = timer.querySelector("#weeks");
	var weeks = document.getElementById("weeks");
	var days = document.getElementById('days');
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds")

	var timeObjectReturned = timeTillDoomsDay();
	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML	= timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;
	console.log(timeObjectReturned); 

}
//updates timer every 1000ms. 1000ms is 1 second.
function updateTimer(){
	setInterval(inItTimer,50);
}

timeTillDoomsDay();
inItTimer();
updateTimer();
