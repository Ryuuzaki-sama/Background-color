var css = document.querySelector("h3");
var cL =  document.querySelector(".colorL");
var cR = document.querySelector(".colorR");
var body = document.getElementById("Gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ cL.value 
	+ ", " 
	+ cR.value +
	")";

	css.textContent = body.style.background +";";
	// body...
}

cL.addEventListener("input",setGradient);	

cR.addEventListener("input", setGradient);

