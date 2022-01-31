var currentDayEl = document.querySelector("#currentDay");

// get current date
var currentDate = moment().format("dddd, MMMM Do, YYYY");
// display current date in jumbotron
currentDayEl.append(currentDate);

// check current time against the time assigned to each row
function timeCheck() {
    var currentTime = moment().hour();
    var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    console.log(currentTime);
    $(".time-block").each(function() {
        for (var i = 0; i < timeArray.length; i++) {
            if (currentTime < timeArray[i]) {
                console.log(timeArray[i]);
                $(".time-block-entry").addClass(".bg-success");
                $(".time-block-entry").removeClass(".bg-danger");
                $(".time-block-entry").removeClass(".bg-secondary");
            } else if (currentTime === timeArray[i]) {
                $(".time-block-entry").removeClass(".bg-success");
                $(".time-block-entry").addClass(".bg-danger");
                $(".time-block-entry").removeClass(".bg-secondary");
            } else {
                $(".time-block-entry").removeClass(".bg-success");
                $(".time-block-entry").removeClass(".bg-danger");
                $(".time-block-entry").addClass(".bg-secondary");
            }
        }


    });
}

// save the data in each row to local Storage


// load saved data from local Storage

timeCheck();