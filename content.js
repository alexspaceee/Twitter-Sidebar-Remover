// Create a new div element
var newDiv = document.createElement("div");
newDiv.setAttribute("id", "customSquare");

// Apply styles to the new div
newDiv.style.position = "fixed";
newDiv.style.zIndex = "9999";
newDiv.style.width = "651px";
newDiv.style.height = "1000px";
newDiv.style.background = "white";
newDiv.style.border = "0px solid black"; //change to 1px to see the square covering the right collumn
newDiv.style.borderRadius = "0%";
newDiv.style.top = "5.35%";
newDiv.style.left = "65.7%";

// Append the new div to the body
document.body.appendChild(newDiv);

// Listen for the click event on the div
newDiv.addEventListener('click', function(event) {
  // Hide the div when it's clicked
  newDiv.style.display = "none";
});

// Listen for the click event on the document
document.addEventListener('click', function(event) {
  // Show the div when the rightmost 15% of the window is clicked and window's width is more than 95% of the screen width
  if (event.clientX > window.innerWidth * 0.85 && window.innerWidth > window.screen.width * 0.95) {
    newDiv.style.display = "block";
  }
});
 