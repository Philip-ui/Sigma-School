// Select the header element
const navbar = document.querySelector(".navbar");

// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header

// Get the current scroll position
let prevScrollpos = window.pageYOffset;

// When the user scrolls
window.onscroll = function() {
// Get the new scroll position
  let currentScrollPos = window.pageYOffset;
  
// If the previous scroll position is greater than the current one, show the navbar
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
// Otherwise, hide the navbar
    navbar.style.top = "-80px";
  }
  
// Set the previous scroll position to the current one
  prevScrollpos = currentScrollPos;
}

// Event listener: Mouse move                
// When user hovers around the top area, show the header  
window.addEventListener("mousemove", function() {
  if (window.pageYOffset < 50) {
    navbar.style.top = "0";
  }
});
