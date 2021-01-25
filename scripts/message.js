//credit.html
/* typing effect : thank you message for the photographers */
function changeText(message1, message2, speed) {

    var message1 = message1.text();
    var messageSplit = message1.split("");

    var i = 0;
    function show() {
        if (i < messageSplit.length) {
            message2.append(messageSplit[i]);
            i = i + 1;
        };
    };
    var outputMessage = setInterval(show, speed);
};

/* document is loaded : call changeText() */
$(document).ready(function () {
    //call function
    changeText($(".before-message"), $(".after-message"), 150);
    //clears a timer set with the setInterval() 
    clearInterval(outputMessage);
});





