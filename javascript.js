const result = ['it\'s a draw', 'you win', 'you lose']


//generate a random item for computer
function computerPlay () {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
    
}
game()

//compare the choices and decide a victor
function playGame (computerChoice, userChoice) {
    userChoice = prompt("Choose between Rock, Paper or scissors").toLowerCase();
    computerChoice = computerPlay().toLowerCase();

    if (computerChoice === userChoice) {
        console.log(result[0])
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log(result[1])
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log(result[1])
    } else if (userChoice ==='scissors' && computerChoice === 'paper') {
        console.log(result[1])
    } else {
        console.log(result[2])
    }
    
}

function game(play) {
    for (let i = 0; i < 5; i++) {
        play = playGame();
        }
     }
