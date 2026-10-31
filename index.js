function getComputerChoice() {
  let resultRandom = Math.random()

  if (resultRandom < 1 / 3) {
    return 'rock'
  } else if (resultRandom < 2 / 3) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

function getHumanChoice() {
  return prompt('Choose your option: rock, paper, scissors!')
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()
  if (humanChoice === computerChoice) {
    console.log('Draw')
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log('You win! Rock beats Scissors')
    ++humanScore
    console.log(`User: ${humanScore}`)
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log('You win! Paper beats Rock')
    ++humanScore
    console.log(`User: ${humanScore}`)
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log('You win! Scissors beats Paper')
    ++humanScore
    console.log(`User: ${humanScore}`)
  } else {
    console.log('Computer win!')
    ++computerScore
    console.log(`Computer: ${computerScore}`)
  }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)
