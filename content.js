// Create a first div element
var firstDiv = document.createElement("div");
firstDiv.setAttribute("id", "customSquare");

// Create a second div element
var secondDiv = document.createElement("div");
secondDiv.setAttribute("id", "customSquare2");

// Create a third div element
var thirdDiv = document.createElement("div");
thirdDiv.setAttribute("id", "customSquare3");

// Create a fourth div element
var fourthDiv = document.createElement("div");
fourthDiv.setAttribute("id", "customSquare4");

// Apply styles to the first div
firstDiv.style.position = "fixed";
firstDiv.style.zIndex = "9999";
firstDiv.style.width = "28.2px";
firstDiv.style.height = "1000px";
firstDiv.style.background = "white"; // rgba(255,255,255,0.5)
firstDiv.style.border = "0px solid black";
firstDiv.style.borderRadius = "0%";
firstDiv.style.top = "5.35%";
firstDiv.style.left = "64.1%";

// Apply styles to the second div
secondDiv.style.position = "fixed";
secondDiv.style.zIndex = "9999";
secondDiv.style.width = "651px";
secondDiv.style.height = "1000px";
secondDiv.style.background = "white";
secondDiv.style.border = "0px solid black";
secondDiv.style.borderRadius = "0%";
secondDiv.style.top = "5.35%";
secondDiv.style.left = "65.75%";

// Apply styles to the third div
thirdDiv.style.position = "fixed";
thirdDiv.style.zIndex = "9999";
thirdDiv.style.width = "27px";
thirdDiv.style.height = "1000px";
thirdDiv.style.background = "white";
thirdDiv.style.border = "0px solid black";
thirdDiv.style.borderRadius = "0%";
thirdDiv.style.top = "5.35%";
thirdDiv.style.left = "64.1%";
thirdDiv.style.display = "none";  // Initially, it should not be displayed

// Apply styles to the fourth div
fourthDiv.style.position = "fixed";
fourthDiv.style.zIndex = "9999";
fourthDiv.style.width = "651px";
fourthDiv.style.height = "924px";
fourthDiv.style.background = "white";
fourthDiv.style.border = "0px solid black";
fourthDiv.style.borderRadius = "0%";
fourthDiv.style.top = "0%";
fourthDiv.style.left = "86.1%";
fourthDiv.style.display = "none";  // Initially, it should not be displayed

// Append the divs to the body
document.body.appendChild(firstDiv);
document.body.appendChild(secondDiv);
document.body.appendChild(thirdDiv);
document.body.appendChild(fourthDiv);

// Function to check if the URL contains a certain word
function urlContainsWord(word) {
  var url = window.location.href;
  return url.indexOf(word) > -1;
}

// Specify words you want to check
var words = ["explore", "messages", "articles", "verified-orgs-signup", "drafts", "compose/tweet", "photo", "likes", "i/foundmedia/search", "spaces"];  // Replace these with your words

var magic_width = 1077; // width at which the divs is being hidden because reasons

// Function to check the URL and hide or show divs based on whether it contains any of the specified words
function checkUrlAndHideDivs() {
  var foundWord = false;
  for (var i = 0; i < words.length; i++) {
    if (urlContainsWord(words[i])) {
      foundWord = true;
      break;  // If we found a word, no need to check the others
    }
  }

  if (foundWord || window.innerWidth <= magic_width) {
    // If any of the words were found in the URL or window width is less than or equal to magic_width variable (for example 987), hide all divs
    firstDiv.style.display = "none";
    secondDiv.style.display = "none";
    thirdDiv.style.display = "none";
    fourthDiv.style.display = "none";
  } else {
    // If none of the words were found in the URL and window width is more than magic_width variable (for example 987), show the first div and second div and hide the others
    firstDiv.style.display = "block";
    secondDiv.style.display = "block";
    thirdDiv.style.display = "none";
    fourthDiv.style.display = "none";
  }
}

// Check for URL changes
var currentUrl = window.location.href;
setInterval(function() {
  if (currentUrl !== window.location.href) {
    currentUrl = window.location.href;
    checkUrlAndHideDivs(); // Calls the function when URL changes
  }
}, 1);

window.onpopstate = function(event) {
  checkUrlAndHideDivs();  // Calls the function when user clicks browser back/forward buttons
};

// Listen for the click event on the first div
firstDiv.addEventListener('click', function(event) {
  // Hide the first and second div and show the third and fourth one when the first div is clicked
  firstDiv.style.display = "none";
  secondDiv.style.display = "none";
  thirdDiv.style.display = "block";
  fourthDiv.style.display = "block";
});

// Listen for the click event on the third div
secondDiv.addEventListener('click', function(event) {
  // Hide the second and third div and show the first and second one, when the third div is clicked
  firstDiv.style.display = "block";
  secondDiv.style.display = "block";
  thirdDiv.style.display = "none";
  fourthDiv.style.display = "none";
});

// Listen for the click event on the fourth div
thirdDiv.addEventListener('click', function(event) {
  // Hide the second and third div and show the first and second one, when the fourth div is clicked
  firstDiv.style.display = "block";
  secondDiv.style.display = "block";
  thirdDiv.style.display = "none";
  fourthDiv.style.display = "none";
});

function logWindowWidth() {
  var windowWidth = window.innerWidth;
  console.log('Window width is now: ' + windowWidth + ' pixels');
  if (windowWidth <= magic_width) {
    firstDiv.style.display = "none";
    secondDiv.style.display = "none";
    thirdDiv.style.display = "none";
    fourthDiv.style.display = "none";
  }
  else {
    firstDiv.style.display = "block";
    secondDiv.style.display = "block";
    thirdDiv.style.display = "none";
    fourthDiv.style.display = "none";
  }
}

// Call it immediately to log the width on load
logWindowWidth();

// And also call it in the 'resize' event listener
window.addEventListener('resize', logWindowWidth);
