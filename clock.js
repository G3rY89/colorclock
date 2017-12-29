function colorClock(){
  
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var clockFace = hours + ':' + minutes + ':' + seconds;
  
var hexColor = '#' + hours + minutes + seconds;
  
document.body.style.background = hexColor;

if (seconds < 10) {
  seconds = '0' + seconds;
}

if (minutes < 10) {
  minutes = '0' + minutes;
}

if (hours < 10) {
  hours = '0' + hours;
}

document.getElementById('clock').innerHTML = clockFace;

setTimeout(function() {
  colorClock();
}, 1000);

}

colorClock();