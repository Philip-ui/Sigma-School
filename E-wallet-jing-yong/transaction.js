const usernames = ['user1', 'user2', 'user3', 'user4', 'user5'];

// Find the select element in your HTML
const selectElement = document.getElementById('user-select');

// // Create options dynamically based on the array of usernames
// usernames.forEach(username => {
//   const optionElement = document.createElement('option');
//   optionElement.value = username;
//   optionElement.textContent = username;
//   selectElement.appendChild(optionElement);
// });


async function fetchData(route,optionType) {
  // First we fetch the data (it'll take some time, hence we need await)
  // let response = await fetch(`${BASE_URL}/createUser`, options)
  let response = await fetch(`${BASE_URL}/${route}`, optionType)
  // Then we convert the response to json format (also need some time, hence the await is needed)
  let data = await response.json()
  // return the data we get from the server
  console.log('FETCHED DATA', data)
  return data
}

// fetchData()

async function getUserList(){
  // Enter your needed code
  const userList = await fetchData("userList",getOptions)
  console.log('USER LIST',userList)
  return userList
}

async function displayUsers(){
  const userList = await getUserList()
  console.log('userList',userList)
  userList.users.forEach(username => {
  const optionElement = document.createElement('option');
  optionElement.value = username;
  optionElement.textContent = username;
  selectElement.appendChild(optionElement);
});
}

displayUsers()