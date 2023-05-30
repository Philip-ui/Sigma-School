const getQuote = document.querySelector('#quote')
const getAuthor = document.querySelector('#author')
const getNewQuote = document.querySelector('#newquote')

const ENDPOINT = 'https://api.quotable.io/random'

async function getQuotes() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()       
    return data  
}

    function displayData(data) {
        getQuote.textContent = data.content
        getAuthor.textContent =` - ${data.author}`        
    }

getNewQuote.addEventListener('click', async () => {
    const data = await getQuotes()
    displayData(data)
})    
    

