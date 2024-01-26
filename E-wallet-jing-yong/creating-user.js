const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: '{"guest":{"balance":5000,"email":"guest@gmail.com","password":"12345"}}'
};

const getOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
};

// fetch('https://e-wallet-api-server.sigma-schoolsc1.repl.co/createUser', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

// Task: Recreate the fetch function into an async function

// create a const BASE_URL to keep our codes clean
const BASE_URL = 'https://e-wallet-api-server.sigma-schoolsc1.repl.co'

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

getUserList()

async function getAllUsers(){
  const allUsers = await fetchData('allUsers',getOptions)
  console.log('ALL USERS',allUsers)
  return allUsers
}

getAllUsers()

async function createUser(userName,userBalance,userEmail,userPassword){
  let userDetails = {}
    // userName: {
    //   balance: userBalance,
    //   email:userEmail,
    //   password:userPassword
    // }
  // }
  // Initializing the username to be an empty object, so that we can set the properties afterwards
  userDetails[userName] = {}

  // Setting the properties for the new user ( in thi case it's JY2)
  userDetails[userName].balance = userBalance
  userDetails[userName].email = userEmail
  userDetails[userName].password = userPassword
  
  const createUserOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userDetails)
};

  const userResults = await fetchData('createUser',createUserOptions)
  console.log('userResults',userResults)
  return userResults
}

createUser("JY2",50000,"jy2@gmail.com","ez12345")