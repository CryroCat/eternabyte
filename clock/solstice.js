var currentDate;
var targetDate;
var timeLeft, daysLeft, hoursLeft, minsLeft, secsLeft;
var dots = 1;
var timeZoneOffset = new Date().getTimezoneOffset(); // Returns Timezone offset in Minutes. ("How many minutes do you have to add or remove to reach UTC?")

function calculateTime(){
  currentDate = new Date();
  timeLeft = (targetDate.getTime() - currentDate.getTime()) / 1000;
  daysLeft = Math.floor(timeLeft / 86400);
  hoursLeft = Math.floor((timeLeft % 86400)/3600);
  minsLeft = Math.floor((timeLeft % 3600)/60);
  secsLeft = Math.floor(timeLeft % 60);
}

function displayTime(){
  $(".dots").children().attr("src","./NEWCLOCK/dots_on.png");
  var temp;
  //Days
  if (timeLeft <= 0) {
    $(".timepiece").children().attr("src","./NEWCLOCK/0.png");
  } else {
    if (daysLeft < 100) {
      $("#d_100").children().attr("src","./NEWCLOCK/0.png");
    } else {
      temp = Math.floor(daysLeft / 100);
      $("#d_100").children().attr("src","./NEWCLOCK/"+temp+".png");
    }
    if (daysLeft < 10) {
      $("#d_10").children().attr("src","./NEWCLOCK/0.png");
    } else {
      temp = Math.floor((daysLeft%100) / 10);
      $("#d_10").children().attr("src","./NEWCLOCK/"+temp+".png");
    }
    temp = daysLeft % 10;
    $("#d_1").children().attr("src","./NEWCLOCK/"+temp+".png");
    //Hours
    if (hoursLeft >= 10) {
      temp = Math.floor(hoursLeft / 10);
      $("#h_10").children().attr("src","./NEWCLOCK/"+temp+".png");
      temp = hoursLeft % 10;
      $("#h_1").children().attr("src","./NEWCLOCK/"+temp+".png");
    } else {
      $("#h_10").children().attr("src", "./NEWCLOCK/0.png");
      $("#h_1").children().attr("src", "./NEWCLOCK/"+hoursLeft+".png");
    }
    //Minutes
    if (minsLeft >= 10) {
      temp = Math.floor(minsLeft / 10);
      $("#m_10").children().attr("src","./NEWCLOCK/"+temp+".png");
      temp = minsLeft % 10;
      $("#m_1").children().attr("src","./NEWCLOCK/"+temp+".png");
    } else {
      $("#m_10").children().attr("src", "./NEWCLOCK/0.png");
      $("#m_1").children().attr("src", "./NEWCLOCK/"+minsLeft+".png");
    }
    //Seconds
    if (secsLeft >= 10) {
      temp = Math.floor(secsLeft / 10);
      $("#s_10").children().attr("src", "./NEWCLOCK/"+temp+".png");
      temp = secsLeft % 10;
      $("#s_1").children().attr("src", "./NEWCLOCK/"+temp+".png");
    } else {
      $("#s_10").children().attr("src", "./NEWCLOCK/0.png");
      $("#s_1").children().attr("src", "./NEWCLOCK/"+secsLeft+".png");
    }
    //Dots
    /* This does not occur in the game. You can uncomment this to add this feature.
    if (dots == 1){
      $(".dots").children().attr("src","./NEWCLOCK/dots_on.png");
    } else {
      $(".dots").children().attr("src","./NEWCLOCK/dots.png");
    }
    */
    ticktock();
  }
}

function ticktock(){
  if (dots == 1) {
    document.getElementById("tick").play();
  } else {
    document.getElementById("tock").play();
  }
}

function run(){
  calculateTime();
  displayTime();
  dots = dots*-1;
}

$(document).ready(function(){
  $("#targetdate").datepicker({dateFormat: "YYYY MM DD"});
  targetDate = new Date("2019 November 10");
  targetDate.setMinutes(targetDate.getMinutes() - timeZoneOffset); // Compensates for any time zone.
  console.log (targetDate);
  $("#button").click(function() {
    $("#explanation").toggle();
  });
  setInterval(run, 1000);
});
