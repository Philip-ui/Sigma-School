// Access the button and the notification card
const addButton = document.querySelector(".add__button");
const notification = document.querySelector(".notification");

// click to add class .show - to slide in the add notification
addButton.addEventListener("click", () => {
  notification.classList.add("show");
});

// Access close icon button
const closeButton = document.querySelector(".cta__button");

// click to remove .show - to slide out the notification (close)
closeButton.addEventListener("click", () => {
  notification.classList.remove("show");
});
