function computerPlay() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        return 'Rock';
    } else if (random === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        switch (computerSelection) {
            case 'Rock': return "Draw! Computer also chose rock"; break;
            case 'Paper': return "You Lose! Paper beats Rock"; break;
            case 'Scissors': return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === 'Paper') {
        switch (computerSelection) {
            case 'Paper': return "Draw! Computer also chose Paper"; break;
            case 'Scissors': return "You Lose! Scissors beats Paper"; break;
            case 'Rock': return "You Win! Paper beats Rock";
        }
    } else {
        switch (computerSelection) {
            case 'Scissors': return "Draw! Computer also chose Scissors"; break;
            case 'Rock': return "You Lose! Rock beats Scissors"; break;
            case 'Paper': return "You Win! Scissors beats Paper";
        }
    }
}

// return 0 if draw, 1 if player wins, and -1 if computer wins
function game(playerSelection, computerSelection) {

        if (playerSelection === 'Rock') {
            switch (computerSelection) {
                case 'Rock': return 0;
                case 'Paper': return -1;
                case 'Scissors': return 1;
            }
        } else if (playerSelection === 'Paper') {
            switch (computerSelection) {
                case 'Paper': return 0;
                case 'Scissors': return -1;
                case 'Rock': return 1;
           }
        } else {
            switch (computerSelection) {
                case 'Scissors': return 0;
                case 'Rock': return -1;
                case 'Paper': return 1;
           }
        }
}

let playerWins = 0;
let computerWins = 0;

const buttons = document.querySelectorAll('button');

// self note: need to use named functions to remove event listener
buttons.forEach((button) => {
    button.addEventListener("click", function () {playGame(button.id)});
});


// function to play game
function playGame(buttonID) {
    const playerSelection = buttonID;
    const computerSelection = computerPlay();

    // update playerWins and computerWins
    if (game(playerSelection, computerSelection) === 1) {
        playerWins++;
    } else if (game(playerSelection, computerSelection) === -1) {
        computerWins++;
    } else {
        // do nothing if draw
    }

    const body = document.querySelector('body');
    const result = document.createElement('div');
    result.classList.add('result');
    result.innerHTML = playRound(playerSelection, computerSelection) +
    " -------- score: " + playerWins + "-" + computerWins + "<br><br>";
    result.setAttribute('style', 'display: flex; justify-content: center;');
    body.appendChild(result);

    if (playerWins === 5 || computerWins === 5) {
        if (playerWins === 5) {
            result.innerHTML = "Player has won! Score: " + playerWins + "-" +
            computerWins + "<br><br>Scores will be reset...<br><br>";
            result.setAttribute('style', 'display: flex; justify-content: center;');
            body.appendChild(result);
        } else {
            result.innerHTML = "Computer has won! Score: " + playerWins + "-" +
            computerWins + "<br><br>Scores will be reset...<br><br>";
            result.setAttribute('style', 'display: flex; justify-content: center;');
            body.appendChild(result);
        }

        playerWins = 0;
        computerWins = 0;
    }
}


