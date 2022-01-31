var currentDayEl = document.querySelector("#currentDay");

// get current date
var currentDate = moment().format("dddd, MMMM Do, YYYY");
// display current date in jumbotron
currentDayEl.append(currentDate);

// check current time against the time assigned to each row
function timeCheck() {
    var currentTime = moment().hour();
    // 9 AM
    if (currentTime < 9) {
        $("#timeBlockEntry9").addClass("bg-success");
        $("#timeBlockEntry9").removeClass("bg-danger");
        $("#timeBlockEntry9").removeClass("bg-secondary");
    } else if (currentTime === 9) {
        $("#timeBlockEntry9").removeClass("bg-success");
        $("#timeBlockEntry9").addClass("bg-danger");
        $("#timeBlockEntry9").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry9").removeClass("bg-success");
        $("#timeBlockEntry9").removeClass("bg-danger");
        $("#timeBlockEntry9").addClass("bg-secondary");
    }
    // 10 AM
    if (currentTime < 10) {
        $("#timeBlockEntry10").addClass("bg-success");
        $("#timeBlockEntry10").removeClass("bg-danger");
        $("#timeBlockEntry10").removeClass("bg-secondary");
    } else if (currentTime === 10) {
        $("#timeBlockEntry10").removeClass("bg-success");
        $("#timeBlockEntry10").addClass("bg-danger");
        $("#timeBlockEntry10").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry10").removeClass("bg-success");
        $("#timeBlockEntry10").removeClass("bg-danger");
        $("#timeBlockEntry10").addClass("bg-secondary");
    }
    // 11 AM
    if (currentTime < 11) {
        $("#timeBlockEntry11").addClass("bg-success");
        $("#timeBlockEntry11").removeClass("bg-danger");
        $("#timeBlockEntry11").removeClass("bg-secondary");
    } else if (currentTime === 11) {
        $("#timeBlockEntry11").removeClass("bg-success");
        $("#timeBlockEntry11").addClass("bg-danger");
        $("#timeBlockEntry11").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry11").removeClass("bg-success");
        $("#timeBlockEntry11").removeClass("bg-danger");
        $("#timeBlockEntry11").addClass("bg-secondary");
    }
    // 12 PM
    if (currentTime < 12) {
        $("#timeBlockEntry12").addClass("bg-success");
        $("#timeBlockEntry12").removeClass("bg-danger");
        $("#timeBlockEntry12").removeClass("bg-secondary");
    } else if (currentTime === 12) {
        $("#timeBlockEntry12").removeClass("bg-success");
        $("#timeBlockEntry12").addClass("bg-danger");
        $("#timeBlockEntry12").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry12").removeClass("bg-success");
        $("#timeBlockEntry12").removeClass("bg-danger");
        $("#timeBlockEntry12").addClass("bg-secondary");
    }
    // 1 PM
    if (currentTime < 13) {
        $("#timeBlockEntry13").addClass("bg-success");
        $("#timeBlockEntry13").removeClass("bg-danger");
        $("#timeBlockEntry13").removeClass("bg-secondary");
    } else if (currentTime === 13) {
        $("#timeBlockEntry13").removeClass("bg-success");
        $("#timeBlockEntry13").addClass("bg-danger");
        $("#timeBlockEntry13").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry13").removeClass("bg-success");
        $("#timeBlockEntry13").removeClass("bg-danger");
        $("#timeBlockEntry13").addClass("bg-secondary");
    }
    // 2 PM
    if (currentTime < 14) {
        $("#timeBlockEntry14").addClass("bg-success");
        $("#timeBlockEntry14").removeClass("bg-danger");
        $("#timeBlockEntry14").removeClass("bg-secondary");
    } else if (currentTime === 14) {
        $("#timeBlockEntry14").removeClass("bg-success");
        $("#timeBlockEntry14").addClass("bg-danger");
        $("#timeBlockEntry14").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry14").removeClass("bg-success");
        $("#timeBlockEntry14").removeClass("bg-danger");
        $("#timeBlockEntry14").addClass("bg-secondary");
    }
    // 3 PM
    if (currentTime < 15) {
        $("#timeBlockEntry15").addClass("bg-success");
        $("#timeBlockEntry15").removeClass("bg-danger");
        $("#timeBlockEntry15").removeClass("bg-secondary");
    } else if (currentTime === 15) {
        $("#timeBlockEntry15").removeClass("bg-success");
        $("#timeBlockEntry15").addClass("bg-danger");
        $("#timeBlockEntry15").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry15").removeClass("bg-success");
        $("#timeBlockEntry15").removeClass("bg-danger");
        $("#timeBlockEntry15").addClass("bg-secondary");
    }
    // 4 PM
    if (currentTime < 16) {
        $("#timeBlockEntry16").addClass("bg-success");
        $("#timeBlockEntry16").removeClass("bg-danger");
        $("#timeBlockEntry16").removeClass("bg-secondary");
    } else if (currentTime === 16) {
        $("#timeBlockEntry16").removeClass("bg-success");
        $("#timeBlockEntry16").addClass("bg-danger");
        $("#timeBlockEntry16").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry16").removeClass("bg-success");
        $("#timeBlockEntry16").removeClass("bg-danger");
        $("#timeBlockEntry16").addClass("bg-secondary");
    }
    // 5 PM
    if (currentTime < 17) {
        $("#timeBlockEntry17").addClass("bg-success");
        $("#timeBlockEntry17").removeClass("bg-danger");
        $("#timeBlockEntry17").removeClass("bg-secondary");
    } else if (currentTime === 17) {
        $("#timeBlockEntry17").removeClass("bg-success");
        $("#timeBlockEntry17").addClass("bg-danger");
        $("#timeBlockEntry17").removeClass("bg-secondary");
    } else {
        $("#timeBlockEntry17").removeClass("bg-success");
        $("#timeBlockEntry17").removeClass("bg-danger");
        $("#timeBlockEntry17").addClass("bg-secondary");
    }

}

// save the data in each row to local Storage


// load saved data from local Storage

timeCheck();