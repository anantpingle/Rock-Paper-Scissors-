let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("pc-score");
const result_p = document.querySelector(".result p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const pcChoice = Math.floor(Math.random()*3);
    return choices[pcChoice];
}

function game(userChoice) {
    let pcChoice = getComputerChoice();
    switch (userChoice + pcChoice) {
        case 'PaperRock':
        case 'ScissorsPaper':
        case 'RockScissors':
            userScore++;
            userScore_span.innerHTML = userScore;
            if (userChoice ==="Scissors") {
                result_p.innerHTML = `${userChoice} beat ${pcChoice}. You win!`;
                break;
            }
            result_p.innerHTML = `${userChoice} beats ${pcChoice}. You win!`;
            break;

        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            computerScore++;
            computerScore_span.innerHTML = computerScore;
            if (pcChoice ==="Scissors") {
                result_p.innerHTML = `${pcChoice} beat ${userChoice}. You lost :(`;
                break;
            }
            result_p.innerHTML = `${pcChoice} beats ${userChoice}. You lost :(`;
            break;

        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
        result_p.innerHTML = 'Draw! Try again!';
            break;
    }
}

function main() {
    rock.addEventListener('click', function () {
        game("Rock");
    });
    
    paper.addEventListener('click', function () {
        game("Paper");
    });
    
    scissors.addEventListener('click', function () {
        game("Scissors");
    });
}

main();