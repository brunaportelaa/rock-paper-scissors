// Grab value inserted by user
document.getElementById('user-choice').addEventListener('submit', e => {
    e.preventDefault()
    let select = document.getElementById('option')
    let option = select.value
    console.log(`User chose ${option}`)

    //Create a random value for the bot
    let botChoice = Math.floor(Math.random() * 3)
    console.log(botChoice)

    //Compare value of the bot with value of user
    if (botChoice === 0) {
        botChoice = 'rock'
        console.log('Bot chose rock')
    } else if (botChoice === 1) {
        botChoice = 'paper'
        console.log('Bot chose paper')
    } else if (botChoice === 2) {
        botChoice = 'scissors'
        console.log('Bot chose scissors')
    } else {
        console.log ('Oops... something went wrong')
    }

})



//Display results