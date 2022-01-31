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
// 9 AM
$("#saveBtn9").click(function() {
    var taskText9AM = $(this).siblings("textarea").val();
    localStorage.setItem("9AM task", JSON.stringify(taskText9AM));
})
// 10 AM
$("#saveBtn10").click(function() {
    var taskText10AM = $(this).siblings("textarea").val();
    localStorage.setItem("10AM task", JSON.stringify(taskText10AM));
})
// 11 AM
$("#saveBtn9").click(function() {
    var taskText11AM = $(this).siblings("textarea").val();
    localStorage.setItem("9AM task", JSON.stringify(taskText11AM));
})
// 12 PM
$("#saveBtn12").click(function() {
    var taskText12PM = $(this).siblings("textarea").val();
    localStorage.setItem("12PM task", JSON.stringify(taskText12PM));
})
// 1 PM
$("#saveBtn3").click(function() {
    var taskText1PM = $(this).siblings("textarea").val();
    localStorage.setItem("1PM task", JSON.stringify(taskText1PM));
})
// 2 PM
$("#saveBtn14").click(function() {
    var taskText2PM = $(this).siblings("textarea").val();
    localStorage.setItem("2PM task", JSON.stringify(taskText2PM));
})
// 3 PM
$("#saveBtn15").click(function() {
    var taskText3PM = $(this).siblings("textarea").val();
    localStorage.setItem("3PM task", JSON.stringify(taskText3PM));
})
// 4 PM
$("#saveBtn16").click(function() {
    var taskText4PM = $(this).siblings("textarea").val();
    localStorage.setItem("4PM task", JSON.stringify(taskText4PM));
})
// 5 PM
$("#saveBtn17").click(function() {
    var taskText5PM = $(this).siblings("textarea").val();
    localStorage.setItem("5PM task", JSON.stringify(taskText5PM));
})

// load saved data from local Storage
var loadTasks = function() {
    // 9 AM
    taskText9AM = JSON.parse(localStorage.getItem("9AM task"));
    $("#saveBtn9").siblings("textarea").val(taskText9AM);
    // 10 AM
    taskText10AM = JSON.parse(localStorage.getItem("10AM task"));
    $("#saveBtn10").siblings("textarea").val(taskText10AM);
    // 11 AM
    taskText11AM = JSON.parse(localStorage.getItem("11AM task"));
    $("#saveBtn11").siblings("textarea").val(taskText11AM);
    // 12 PM
    taskText12PM = JSON.parse(localStorage.getItem("12PM task"));
    $("#saveBtn12").siblings("textarea").val(taskText12PM);
    // 1 PM
    taskText1PM = JSON.parse(localStorage.getItem("1PM task"));
    $("#saveBtn13").siblings("textarea").val(taskText1PM);
    // 2 PM
    taskText2PM = JSON.parse(localStorage.getItem("2PM task"));
    $("#saveBtn14").siblings("textarea").val(taskText2PM);
    // 3 PM
    taskText3PM = JSON.parse(localStorage.getItem("3PM task"));
    $("#saveBtn15").siblings("textarea").val(taskText3PM);
    // 4 PM
    taskText4PM = JSON.parse(localStorage.getItem("4PM task"));
    $("#saveBtn16").siblings("textarea").val(taskText4PM);
    // 5 PM
    taskText5PM = JSON.parse(localStorage.getItem("5PM task"));
    $("#saveBtn17").siblings("textarea").val(taskText5PM);
}

timeCheck();
loadTasks();