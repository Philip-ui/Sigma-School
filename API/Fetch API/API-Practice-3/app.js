const emojiForm = document.querySelector('#emoji-form')
const emojiImage = document.querySelector('#emoji-image')
const errorText = document.querySelector('#error-text')

const ENDPOINT = 'https://api.github.com/emojis'

async function getEmojis() {
    const response = await fetch(ENDPOINT)
    const data = await response.json()
    return data
    }

async function getEmoji(name) {
    const emojis = await getEmojis()
    const emoji = emojis?.[name]

    if (emoji) {
        errorText.textContent = ''
        emojiImage.src = emoji
    } else {
        errorText.textContent = 'No emoji found'
        emojiImage.src = ''
    }
}

/*window.addEventListener('load', async () => {
    await getEmojis()
}) */

emojiForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const emojiSearchInput = emojiForm.querySelector('input').value
    await getEmoji(emojiSearchInput)
})
