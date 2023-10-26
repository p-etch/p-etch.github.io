// Set the date
var countDownDate =  new Date("November 28, 2023 12:00:00").getTime();

// Update the count down
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="cd-timer"
    document.getElementById("cd-timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write congrats
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cd-timer").innerHTML = "Congrats!";
    }
  
}, 10);

var countDownDate2 =  new Date("November 23, 2023 12:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate2 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cd-timer2").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cd-timer2").innerHTML = "Congrats!";
    }
}, 10);


var countDownDate3 =  new Date("October 28, 2022 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate3 - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("cd-timer3").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("cd-timer3").innerHTML = "Congrats!";
    }
  
}, 10);

// set date and time update every second
var y = setInterval(function() {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    
    document.getElementById("date").innerHTML = "<strong>" + month + " - " + day
                                               + " - " + year + "</strong>";
    document.getElementById("time").innerHTML = "<strong>" + ((d.getHours() + 11) % 12 + 1) + ":" 
                                                + (d.getMinutes() < 10 ? "0":"") + d.getMinutes()
                                                + (d.getHours() >= 12 ? "PM":"AM") + "</strong>";

    document.getElementById("time").innerHTML = "<strong>" + ((d.getHours() + 11) % 12 + 1) + ":" 
                                            + (d.getMinutes() < 10 ? "0":"") + d.getMinutes()
                                            + (d.getHours() >= 12 ? "PM":"AM") + "</strong>";
}, 1000);