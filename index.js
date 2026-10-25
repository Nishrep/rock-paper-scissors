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

console.log(getComputerChoice())

function getHumanChoice() {
  return prompt('Choose your option: rock, paper, scissors!')
}

console.log(getHumanChoice())