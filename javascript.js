    //generate a random hand for computer
    function computerPlay () {
        let choices = ['rock', 'paper', 'scissors'];
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        return computerChoice;
        
    }
    const btns = document.querySelectorAll("div.myBtn > button"); // gets all the buttons in the mybtn div
    let userHand;
    

    function userChoice () {

        for (let i = 0; i < btns.length; i++) { //sets the player hand to clicked button
            btns[i].addEventListener("click", function () {
                userHand = btns[i].value
            });
        }
        return userHand
    }
    let userScore = 0;
    let compScore = 0;
    //compare the choices and decide a victor
    function playRound (computerChoice, userHand) {
        userHand = userChoice()
        computerChoice = computerPlay().toLowerCase();
        const result = document.createElement('p')
        const playerScore = document.querySelector('#playerScore')
        const computerScore = document.querySelector('#computerScore')

        if (computerChoice === userHand) {
            result.textContent = 'it\`s a draw'
            document.body.appendChild(result)
        } else if (userHand === 'paper' && computerChoice === 'rock') {
            result.textContent = 'you win'
            document.body.appendChild(result)
            userScore += 1
            playerScore.textContent = userScore;
        } else if (userHand === 'rock' && computerChoice === 'scissors') {
            result.textContent = 'you win'
            document.body.appendChild(result)
            userScore += 1
            playerScore.textContent = userScore;
        } else if (userHand ==='scissors' && computerChoice === 'paper') {
            result.textContent = 'you win'
            document.body.appendChild(result)
            userScore += 1
            playerScore.textContent = userScore;
        } else {
            result.textContent = 'you lost'
            document.body.appendChild(result)
            compScore += 1
            computerScore.textContent = compScore;
        }
        
    }
    
    function game() {
        if(compScore < 5 && userScore < 5) { //only runs playround function as long as compscore and userscore are less than 5
            playRound()
        } else {
            gameResult()
        }
    }

    for (let i = 0; i < btns.length; i++) { //triggers game function on button press
        btns[i].addEventListener('click', game)
    }

    function gameResult() {
        const displayResult = document.createElement('h1')

        if (userScore === 5) {
            displayResult.textContent = 'You won the game, Refresh the page to play again'
            displayResult.style.color = 'green'
        } else if (compScore == 5) {
            displayResult.textContent = 'You lost the game, Refresh the page to play again'
            displayResult.style.color = 'red'
        }
        document.body.appendChild(displayResult)
    }