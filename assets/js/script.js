var currentDayEl = document.querySelector("#currentDay");

// get current date
var currentDate = moment().format("dddd, MMMM Do, YYYY");
// display current date in jumbotron
currentDayEl.append(currentDate);

// setting time variable for each row
var timeBlockEntry9AM = document.querySelector("#timeBlockEntry9AM");
var timeBlockEntry10AM = document.querySelector("#timeBlockEntry10AM");
var timeBlockEntry11AM = document.querySelector("#timeBlockEntry11AM");
var timeBlockEntry12PM = document.querySelector("#timeBlockEntry12PM");
var timeBlockEntry1PM = document.querySelector("#timeBlockEntry1PM");
var timeBlockEntry2PM = document.querySelector("#timeBlockEntry2PM");
var timeBlockEntry3PM = document.querySelector("#timeBlockEntry3PM");
var timeBlockEntry4PM = document.querySelector("#timeBlockEntry4PM");
var timeBlockEntry5PM = document.querySelector("#timeBlockEntry5PM");

timeBlockEntry9AM = moment().hour(9).format("hA");
timeBlockEntry10AM = moment().hour(10).format("hA");
timeBlockEntry11AM = moment().hour(11).format("hA");
timeBlockEntry12PM = moment().hour(12).format("hA");
timeBlockEntry1PM = moment().hour(13).format("hA");
timeBlockEntry2PM = moment().hour(14).format("hA");
timeBlockEntry3PM = moment().hour(15).format("hA");
timeBlockEntry4PM = moment().hour(16).format("hA");
timeBlockEntry5PM = moment().hour(17).format("hA");

var timeCheck = function() {
    if (moment().isAfter(timeBlockEntry9AM)) {
        $(timeBlockEntry).addClass("bg-success");
    }
};

timeCheck();
console.log(timeBlockEntry3PM);