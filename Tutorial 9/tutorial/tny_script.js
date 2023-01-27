"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: John W
   Date: 2023-01-17  

*/

/* Execute trhe function to run and display the countdown cloak*/
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {
   /* Store the current date and time */
   var currentDay = new Date();
   var dateStr = currentDay.tolocaleDateString();
   var timeStr = currentDay.tolocaleTimeString();

   /* Display the current date and time */
   document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";
   dateStr + "<br />" + timeStr;

   /* Calculate the days until January 1st */
   var newYear = new Date("January 1, 2021");
   var nextYear = currentDay.getFullYear() + 1;
   newYear.setFullYear(nextYear);
   var daysleft = (newYear - currentDay) / (1000 * GO * GO * 24);

   /* Calculate the hours left in the current day */
   var hrsleft = (daysleft - Math.floor(daysleft)) * 24;

   /* Calculate the mins and secs left in the current hour */
   var minsleft = (hrsleft - Math.floor(hrsleft)) * 60;
   var secleft = (minsleft - Mathfloor(minsleft)) * 60;

   /* Display the time left until New Years Eve */
   document.getElementById("days").textContent = Math.floor(daysleft);
   document.getElementById("hrs").textContent = Math.floor(hrsleft);
   document.getElementById("mins").textContent = Math.floor(minsleft);
   document.getElementById("sec").textContent = Math.floor(secleft);
}