const searchInput = document.querySelector('.search-input');
const palette = document.querySelector('.palette');

/* CTRL + k to make palette to appear */
document.addEventListener('keydown', (event) => {
   if (event.ctrlKey && event.key.toLowerCase() === 'k') {
    palette.classList.remove('fade-out');
    palette.classList.add('fade-in');
  }
});

/* Press Enter key for palette to disappear */
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    palette.classList.remove('fade-in');
    palette.classList.add('fade-out');
  }
});