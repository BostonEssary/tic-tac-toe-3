const validChoices = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

gameLoop()

function gameLoop(){
    while (playerScore < 3 && computerScore < 3) {
        showScore()
        let playerChoice = getAndVerifyPlayerChoice()
        console.log(gameLogic(playerChoice))
    }
    console.log(announceWinner())
}


// main game logic function 
 function gameLogic(playerChoice) {
    let computerChoice = validChoices[getRandomInt()]

    if (playerChoice == 'paper') {
        return paperGameLogic(playerChoice, computerChoice)
    } else if (playerChoice == 'rock') {
        return rockGameLogic(playerChoice, computerChoice)
    } else {
        return scissorGameLogic(playerChoice, computerChoice)
    }

 }


 // game logic for when the player chooses Paper
 function paperGameLogic(playerChoice, computerChoice) {
    if (playerChoice != 'paper') {
        return
    }

    if (computerChoice == 'rock')
    {
        addPoint('player')
        return 'Paper beats rock! Player Wins!'
    } else if (computerChoice == 'scissors'){
        addPoint('computer')
        return 'Scissors beats paper! Computer Wins!' 
    }

    return 'Round is a tie!'
 }


// game logic for when the player chooses Rock
 function rockGameLogic(playerChoice, computerChoice) {
    if (playerChoice != 'rock') {
        return
    }

    if (computerChoice == 'scissors') {
        addPoint('player')
        return 'Rock beats scissors/ Player Wins!'
    } else if (computerChoice == 'paper') {
        addPoint('computer')
        return 'Paper beats rock! Computer Wins!'
    }

    return 'Round is a tie!'
 }


// game logic for when the player choses Scissors
 function scissorGameLogic(playerChoice, computerChoice) {
    if (playerChoice != 'scissors') {
        return
    }

    if (computerChoice == 'paper') {
        addPoint('player')
        return 'Scissors beats paper! Player wins!'
    } else if (computerChoice == 'rock') {
        addPoint('computer')
        return 'Rock beats scissors! Computer wins!'
    }

    return 'Round is a tie!'
 }

 function announceWinner() {
    if (playerScore >= 3) {
        return 'Player Wins!'
    } else {
        return 'Computer Wins!'
    }
 }

 function getAndVerifyPlayerChoice(){
    let valid = false
    let playerChoice = ''
    while (valid == false) {
        playerChoice = prompt('Rock, paper or scissors?')
        playerChoice = playerChoice.toLowerCase()
        if (validChoices.includes(playerChoice)){
            valid = true
        } else {
            alert('Try again')
        }
    }
    return playerChoice
 }

 function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

  function addPoint(winner) {
    if (winner == 'player') {
        playerScore += 1
    } else {
        computerScore += 1
    }
  }

  function showScore() {
    console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}\n`);
}
