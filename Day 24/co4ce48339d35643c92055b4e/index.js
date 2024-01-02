/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 

const lightsRed = document.getElementsByClassName("red");
const lightsBlue = document.getElementsByClassName("blue");

function lightsSwitchRed() {
    for (let i = 0; i < lightsRed.length; i++) {
      lightsRed[i].classList.toggle('lights-on');
    }
  }
  
function lightsSwitchBlue() {
    for (let i = 0; i < lightsBlue.length; i++) {
      lightsBlue[i].classList.toggle('lights-on');
    }
  }
  
  
setInterval(lightsSwitchRed, 800);
setInterval(lightsSwitchBlue, 1000);