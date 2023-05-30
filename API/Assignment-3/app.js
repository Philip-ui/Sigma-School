const nameText = document.querySelector('#name')
const ageText = document.querySelector('#age')
const hobbiesList = document.querySelector('#hobbies')
const fetchMe = document.querySelector('#fetchme')

const ENDPOINT = 'https://api.github.com/gists/2265195ddc41926566513cdb6eb8ee4c'

async function getData() {
    const response = await fetch(ENDPOINT)
    const data = await response.json() 
    return JSON.parse(data.files['me.json'].content)
}

function displayData({ name, age, hobbies }) {
    nameText.textContent = `Name: ${name}`
    ageText.textContent = `Age: ${age}`
    hobbies.forEach((hobby) => {
        hobbiesList.innerHTML += `
            <li>${hobby}</li>
       ` 
    });
}

fetchMe.addEventListener('click', async () => {
    const data = await getData()
    displayData(data)
})