var _ = require('lodash');	// Getting lodash into our script
// console.log(_);

var array = [1,2,3,4,5,6,7,8];
console.log('answer:', _.without(array, 3));
// To find the array without number 3, again create the bundle.js, then restart liveserver, then see the array in the console
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);