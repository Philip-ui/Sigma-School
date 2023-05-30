const API_URL = 'https://jsonplaceholder.typicode.com/photos'

// your code
fetch(API_URL)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error))