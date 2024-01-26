import { setCurrentUser, getCurrentUser } from './current-user.js'

const loginForm = document.querySelector(".login-form")
const username = document.querySelector('#log-username')
const password = document.querySelector('#log-pass')

loginForm.addEventListener('submit', async (event) => {
  // Prevent the page from default action, which is to refresh the page
  event.preventDefault()

  const inputUsername = username.value
  const inputPassword = password.value
  console.log('username and password', inputUsername, inputPassword)

  // console.log('result', await getUser(inputUsername))
  const userDetails = await getUser(inputUsername)
  const userPassword = userDetails[inputUsername].password
  console.log('userDetails', userPassword)

  if(inputPassword == userPassword){
    alert(`User ${inputUsername} has logged in successfully`)
  } else{
    alert(`User password is incorrect`)
  }
  // Check if the password matches
  // If it matches, alert user that they successfully logged in
  // If not, alert what's the error

  setCurrentUser(inputUsername)
})


// create a const BASE_URL to keep our codes clean
const BASE_URL = 'https://e-wallet-api-server.sigma-schoolsc1.repl.co'

async function getUser(username) {
  const response = await fetch(`${BASE_URL}/users/${username}`)
  const user = await response.json()
  console.log('user RESTULS',user)
  return user
}