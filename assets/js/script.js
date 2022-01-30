var currentDayEl = document.querySelector("#currentDay");

// get current date
var currentDate = moment().format("dddd, MMMM Do, YYYY");
// display current date in jumbotron
currentDayEl.append(currentDate);
