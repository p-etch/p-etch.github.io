// Set the date we're counting down to
var countDownDate =  new Date("January 1, 2023 18:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="cd-timer"
    document.getElementById("cd-timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cd-timer").innerHTML = "Congrats!";
    }
  
}, 10);

// Set the date we're counting down to
var countDownDate2 =  new Date("December 13, 2022 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate2 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="cd-timer"
    document.getElementById("cd-timer2").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cd-timer2").innerHTML = "Congrats!";
    }
  
}, 10);

// Set the date we're counting down to
var countDownDate3 =  new Date("December 25, 2022 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate3 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="cd-timer"
    document.getElementById("cd-timer3").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cd-timer3").innerHTML = "Congrats!";
    }
  
}, 10);

var d =  new Date();
var year = d.getFullYear();
var month = d.getMonth() + 1;
var day = d.getDate();
document.getElementById("date").innerHTML += "<strong>" + month + " - " + day
                                           + " - " + year + "</strong>";
document.getElementById("time").innerHTML = "<strong>" + ((d.getHours() + 11) % 12 + 1) + ":" 
                                            + (d.getMinutes() < 10 ? "0":"") + d.getMinutes()
                                            + (d.getHours() >= 12 ? "PM":"AM") + "</strong>";

// check if time changed
var z = setInterval(function() {
    document.getElementById("time").innerHTML = "<strong>" + ((d.getHours() + 11) % 12 + 1) + ":" 
                                            + (d.getMinutes() < 10 ? "0":"") + d.getMinutes()
                                            + (d.getHours() >= 12 ? "PM":"AM") + "</strong>";
}, 30 * 100);