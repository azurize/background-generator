// Declaring variables
var body = document.getElementById("gradient");
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// Function to set new gradient values
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = "CSS Background Value: " + body.style.background + ";";
}

// Adjusting gradient based on color1 value
color1.addEventListener("input", setGradient);

// Adjusting gradient based on color2 value
color2.addEventListener("input", setGradient);
