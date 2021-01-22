window.onload = function () {
    colorCode();
    nineAM();
    tenAM();
    elevenAM();
    twelvePM();
    onePM();
    twoPM();
    threePM();
    fourPM();
    fivePM();
}


// WHEN I open the planner the current day is displayed at
//  the top of the calendar
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').append(currentDay);
console.log(currentDay)

// I view the time blocks for that day each time block is  
// color-coded to indicate whether it is in the past, present,
//  or future
var now = new Date().getHours();

function colorCode() {
    if (now > 9) {
        $('#comment9am').addClass('past');
    } else if (now >= 9 && now < 10) {
        $('#comment9am').addClass('present');
    }
    else if (now < 9) {
        $('#comment9am').addClass('future');
    }
    if (now > 10) {
        $('#comment10am').addClass('past');
    } else if (now >= 10 && now < 11) {
        $('#comment10am').addClass('present');
    }
    else if (now < 10) {
        $('#comment10am').addClass('future');

    }
    if (now > 11) {
        $('#comment11am').addClass('past');
    } else if (now >= 11 && now < 12) {
        $('#comment11am').addClass('present');
    }
    else if (now < 11) {
        $('#comment11am').addClass('future');
    }
    if (now > 12) {
        $('#comment12pm').addClass('past');
    } else if (now >= 12 && now < 13) {
        $('#comment12pm').addClass('present');
    }
    else if (now < 12) {
        $('#comment12pm').addClass('future');
    }
    if (now > 13) {
        $('#comment1pm').addClass('past');
    } else if (now >= 13 && now < 14) {
        $('#comment1pm').addClass('present');
    }
    else if (now < 13) {
        $('#comment1pm').addClass('future');
    }

    if (now > 14) {
        $('#comment2pm').addClass('past');
    } else if (now >= 14 && now < 15) {
        $('#comment2pm').addClass('present');
    }
    else if (now < 14) {
        $('#comment2pm').addClass('future');
    }
    if (now > 15) {
        $('#comment3pm').addClass('past');
    } else if (now >= 15 && now < 18) {
        $('#comment3pm').addClass('present');
    }
    else if (now < 15) {
        $('#comment3pm').addClass('future');
    }

    if (now > 16) {
        $('#comment4pm').addClass('past');
    } else if (now >= 16 && now < 17) {
        $('#comment4pm').addClass('present');
    }
    else if (now < 16) {
        $('#comment4pm').addClass('future');
    }

    if (now > 17) {
        $('#comment5pm').addClass('past');
    } else if (now >= 17 && now < 18) {
        $('#comment5pm').addClass('present');
    }
    else if (now < 17) {
        $('#comment5pm').addClass('future');
    }
}
// I click into a time block enter an event. I then click the save
//  button for that time block for that event to be saved in local
//   storage. WHEN I refresh the page the saved events persist.
// ```
function nineAM(event) {
var textareaInput = document.querySelector("#comment9am")
var divOutput = document.querySelector("#comment9am")
var saveButton = document.querySelector("#button9am")
saveButton.addEventListener("click", outputUpdate);
 
divOutput.textContent = localStorage.getItem("content");
textareaInput.textContent = localStorage.getItem("content");
outputUpdate()
function outputUpdate() {
    localStorage.setItem("content", textareaInput.value);

    divOutput.textContent = textareaInput.value
    
}
}


function tenAM() {
    var textareaInput2 = document.querySelector("#comment10am")
    var divOutput2 = document.querySelector("#comment10am")
    var saveButton2 = document.querySelector("#button10am")
    saveButton2.addEventListener("click", outputUpdate2);
    
divOutput2.textContent = localStorage.getItem("content2");
textareaInput2.textContent = localStorage.getItem("content2");
outputUpdate2()
function outputUpdate2() {
    localStorage.setItem("content2", textareaInput2.value);

    divOutput2.textContent = textareaInput2.value    
}
}

function elevenAM() {
    var textareaInput3 = document.querySelector("#comment11am")
    var divOutput3 = document.querySelector("#comment11am")
    var saveButton3 = document.querySelector("#button11am")
     
    saveButton3.addEventListener("click", outputUpdate3);

divOutput3.textContent = localStorage.getItem("content3");
textareaInput3.textContent = localStorage.getItem("content3");
outputUpdate3()
function outputUpdate3() {
    localStorage.setItem("content3", textareaInput3.value);

    divOutput3.textContent = textareaInput3.value    
}
}

function twelvePM() {
    
    var textareaInput4 = document.querySelector("#comment12pm")
    var divOutput4 = document.querySelector("#comment12pm")
    var saveButton4 = document.querySelector("#button12pm")
     
    saveButton4.addEventListener("click", outputUpdate4);

divOutput4.textContent = localStorage.getItem("content4");
textareaInput4.textContent = localStorage.getItem("content4");
outputUpdate4()
function outputUpdate4() {
    localStorage.setItem("content4", textareaInput4.value);

    divOutput4.textContent = textareaInput4.value    
}
}
function onePM() {
    var textareaInput5 = document.querySelector("#comment1pm")
    var divOutput5 = document.querySelector("#comment1pm")
    var saveButton5 = document.querySelector("#button1pm")
     
    saveButton5.addEventListener("click", outputUpdate5);

divOutput5.textContent = localStorage.getItem("content5");
textareaInput5.textContent = localStorage.getItem("content5");
outputUpdate5()
function outputUpdate5() {
    localStorage.setItem("content5", textareaInput5.value);

    divOutput5.textContent = textareaInput5.value    
}
}
function twoPM() {
    
    var textareaInput6 = document.querySelector("#comment2pm")
    var divOutput6 = document.querySelector("#comment2pm")
    var saveButton6 = document.querySelector("#button2pm")
     
    saveButton6.addEventListener("click", outputUpdate6);

divOutput6.textContent = localStorage.getItem("content6");
textareaInput6.textContent = localStorage.getItem("content6");
outputUpdate6()
function outputUpdate6() {
    localStorage.setItem("content6", textareaInput6.value);

    divOutput6.textContent = textareaInput6.value
    
}
}
function threePM() {
    
    var textareaInput7 = document.querySelector("#comment3pm")
    var divOutput7 = document.querySelector("#comment3pm")
    var saveButton7 = document.querySelector("#button3pm")
     
    saveButton7.addEventListener("click", outputUpdate7);

divOutput7.textContent = localStorage.getItem("content7");
textareaInput7.textContent = localStorage.getItem("content7");
outputUpdate7()
function outputUpdate7() {
    localStorage.setItem("content7", textareaInput7.value);

    divOutput7.textContent = textareaInput7.value
}
}
function fourPM() {
    var textareaInput8 = document.querySelector("#comment4pm")
    var divOutput8 = document.querySelector("#comment4pm")
    var saveButton8 = document.querySelector("#button4pm")
     
    saveButton8.addEventListener("click", outputUpdate8);

divOutput8.textContent = localStorage.getItem("content8");
textareaInput8.textContent = localStorage.getItem("content8");
outputUpdate8()
function outputUpdate8() {
    localStorage.setItem("content8", textareaInput8.value);

    divOutput8.textContent = textareaInput8.value
}
}
function fivePM() {
    var textareaInput9 = document.querySelector("#comment5pm")
    var divOutput9 = document.querySelector("#comment5pm")
    var saveButton9 = document.querySelector("#button5pm")
     
    saveButton9.addEventListener("click", outputUpdate9);

divOutput9.textContent = localStorage.getItem("content9");
textareaInput9.textContent = localStorage.getItem("content9");
outputUpdate9()
function outputUpdate9() {
    localStorage.setItem("content9", textareaInput9.value);

    divOutput9.textContent = textareaInput9.value
}
}