const prompt = require('prompt-sync')()

class GuessingGame {
    constructor() {
        this.randomNumber = Math.floor(Math.random() * 101)        
        this.numberGuessed = false
        this.guessLeft = 5
    }

    guessNumber() {
        while (!this.numberGuessed) {
            if(this.guessLeft === 0) {
                console.log('You have no guess left! You lost the game!')
                this.guessLeft = 5
                break
            }

            console.log('')
            console.log(`You have ${this.guessLeft} guess left.`)

            const userGuess = Number(prompt('Guess a number from 1 - 100: '))

            if (userGuess === this.randomNumber) {
                console.log(`You guessed correct!. The number is ${this.randomNumber}`)
                this.numberGuessed = true
                break
            } else if (userGuess < this.randomNumber) {
                console.log('Please guess higher!')
                this.guessLeft -= 1
                continue
            }  else if (userGuess > this.randomNumber) {
                console.log('Please guess lower!')
                this.guessLeft -= 1
                continue
            }
        }
    }

    start() {
        console.log(this.randomNumber)
        //1. Check if user guessed the number.
        while (!this.numberGuessed) {
            console.log('')
            console.log('---------------- NUMBER GUESSING GAME-----------------')
            console.log('What would you like to do?')
            console.log('1. Guess a number')
            console.log('2  Quit app')
            console.log('')

            //2. Ask user for the input (guess a number?, Quit the game?)
            const option = prompt('Enter your option (1/2): ')

            //3. Run the task
            if (option === '1') this.guessNumber()
            if (option === '2') break
            
        }
    }
}

const game = new GuessingGame()
game.start()
