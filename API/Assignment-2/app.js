const form = document.getElementById('search-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const apiUrl = `https://api.github.com/users/${username}`;
  
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      
        const avatarURL = data.avatar_url;
        const userName = data.name;
        const bio = data.bio;
        const dateJoin = data.created_at;

        const personImg = document.querySelector('#person-image');
        const personName = document.querySelector('.username');
        const personBio = document.querySelector('.bio');
        const joinDate = document.querySelector('.date-join');        
        
        personImg.src = avatarURL;
        personName.textContent = userName;
        personBio.textContent = bio;
        
        const date = new Date(dateJoin);
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        // Get the day, month, and year from the date object
        const day = date.getUTCDate();
        const monthName = monthNames[date.getUTCMonth()]; // Add 1 to the month because it starts from 0 (January)       
        const year = date.getUTCFullYear();

        // Format the date string in DD MM YYYY format
        const formattedDate = `${day} ${monthName} ${year}`;
        joinDate.textContent = formattedDate;
    })
    .catch(error => console.error(error));
});