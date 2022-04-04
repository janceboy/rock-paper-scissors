let draw = 'its a draw';
let victor = 'you win';
let defeat = 'you lose';

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
        console.log('draw')
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('victory')
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('victory')
    } else if (userChoice ==='scissors' && computerChoice === 'paper') {
        console.log('victory')
    } else {
        console.log('defeat')
    }
    
}

function game(play) {
    for (let i = 0; i < 5; i++) {
        play = playGame();
        }
     }
