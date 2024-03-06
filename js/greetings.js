

var today = new Date(). //Create a new date object
var hourNow = today.getHours();  // find the current hour
var greeting;


//Display the appropriate greeting based on the current time
if (hourNow > 18) {
greeting = 'Good Evening!';
} else if (hourNow >12) {
greeting = 'Good Afternoon!';
} else if (hourNow >0) {
greeting = 'Good Morning!';
} else {
greeting ='Welcome!';
}

document.write( '<h3> ' + greeting  + '</h3>');