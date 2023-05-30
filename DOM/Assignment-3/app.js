/* Accessing various classes */
const background = document.querySelector(".bg-backdrop");
const panelContainer = document.querySelector(".panel-container");
const addButton = document.querySelector(".addButton");
const closeButton = document.querySelector('.close-button');

/* Create function for changing background to white color */
function changeBackground() {
    return background.classList.add("white");
}

/* When document load slide out the Panel Container */
window.addEventListener('load', (event) => {   
   panelContainer.classList.add('slide-out');
   changeBackground();       
});

/* When click the Register button slide in the Panel Container */
addButton.addEventListener('click', () =>{
  panelContainer.classList.remove('slide-out'); 
  panelContainer.classList.add("slide-in");
  background.classList.remove("white");
});

/* Click Close Button to slide out the Panel Container */
closeButton.addEventListener('click', () => {
  panelContainer.classList.remove('slide-in'); 
  panelContainer.classList.add("slide-out");
  changeBackground(); 
});
