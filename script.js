// Grab value inserted by user
document.getElementById('user-choice').addEventListener('submit', e => {
    e.preventDefault()
    let displayBotChoice = document.getElementById('displayBotChoice')
    let displayResult = document.getElementById('displayResult')
    let displayUserPoints = document.getElementById('displayUserPoints')
    let displayBotPoints = document.getElementById('displayBotPoints')
    let result = document.getElementById('result')
    let select = document.getElementById('option')
    let option = select.value
    console.log(`User chose ${option}`)

    //Create a random value for the bot
    let botChoice = Math.floor(Math.random() * 3)
    console.log(botChoice)

    //Compare value of the bot with value of user
    if (botChoice === 0) {
        botChoice = 'rock'
        displayBotChoice.textContent = 'Bot chose rock'

        if (option === 'rock') {
            displayResult.textContent = "Its a tie"
        } else if (option === 'paper') {
            displayResult.textContent = 'You win'
        } else {
            displayResult.textContent = 'You lose'
        }


    } else if (botChoice === 1) {
        botChoice = 'paper'
        displayBotChoice.textContent = 'Bot chose paper'
        
        if (option === 'rock') {
            displayResult.textContent = "You lose"
        } else if (option === 'paper') {
            displayResult.textContent = 'Its a tie'
        } else {
            displayResult.textContent = 'You win'
        }

    } else if (botChoice === 2) {
        botChoice = 'scissors'
        displayBotChoice.textContent = 'Bot chose scissors'
        
        if (option === 'rock') {
            displayResult.textContent = "You win"
        } else if (option === 'paper') {
            displayResult.textContent = 'You lose'
        } else {
            displayResult.textContent = 'Its a tie'
        }

    } else {
        displayBotChoice.textContent = 'Oops... something went wrong'
    }

    //Display results
    result.classList.remove('hidden')

})