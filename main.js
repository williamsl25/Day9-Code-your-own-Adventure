// check to see if the user is ready to play
prompt("What is your name?");
confirm("Let's Code Your own Adventure?");

console.log("It has been a long day of coding and staring at the computer screen.  You have decided that it is time to get some exercise. You and your friend meet at the house at 6:00 dressed and ready to go!");
document.write("It has been a long day of coding and staring at the computer screen.  You have decided that it is time to get some exercise. You and your friend meet at the house at 6:00 dressed and ready to go!");

console.log("First, you must decide if you want to run, go for a bike ride, or lift weights.");
document.write("First, you must decide if you want to run, go for a bike ride, or lift weights.");

// var myBool = false;
// if("hello" === "hello") {
//   console.log("you're so true");
// } else if(myBool === false) {
//   console.log("you are not right");
// } else {
//   console.log("gave up, eh?");
// }

var userAnswer = prompt("Do you want to run, bike, or lift weights?");
var run = "run";
var bike = "bike";

if (userAnswer === "run") {
  console.log("You both start running and it feels great!");
  document.write("You both start running and it feels great!");
} else if (userAnswer === "bike") {
  console.log("Biking is great and you feel on top of the world!");
  document.write("Biking is great and you feel on top of the world!");
} else {
  console.log("Weight lifting was rough today.  I'm sore");
  document.write("Weight lifting was rough today.  I'm sore");
}


var feedback = prompt("Rate how you felt today from 1 to 10, with 10 being fantastic!");
if (feedback > 7){
  console.log("Great! You are getting to be in good shape");
  document.write("Great! You are getting to be in good shape");
}
else {
  console.log("Keep exercising each day and it will start to feel better.");
  document.write("Keep exercising each day and it will start to feel better.");
}
    
