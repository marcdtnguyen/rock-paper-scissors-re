const opts = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    //return 'Rock' || 'Paper' || 'Scissors'
    return opts[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    //case insensitive
    //if tie call playRound()
    alert(`Player chooses: ${playerSelection}\nComputer chooses: ${computerSelection}`)


    let winner;

    if(playerSelection == computerSelection) {
        alert('It\'s a tie!');
        return;
    }

    if(playerSelection == 'rock'){
        if(computerSelection == 'paper') winner = 'cmp';
        if(computerSelection == 'scissors') winner = 'ply';
    }
    if(playerSelection == 'paper'){
        if(computerSelection == 'scissors') winner = 'cmp';
        if(computerSelection == 'rock') winner = 'ply';
    }
    if(playerSelection == 'scissors') {
        if(computerSelection == 'rock') winner = 'cmp';
        if(computerSelection == 'paper') winner = 'ply';
    }

    updateScore(winner);
    isWinner();
}

const plyScore = document.querySelector('.plyScore');
const cmpScore = document.querySelector('.cmpScore');

function updateScore(winner){
    if(winner == 'ply') {
        ++plyScore.textContent;
        alert('Player wins this round!')
    } else {
        ++cmpScore.textContent;
        alert('Computer wins this round!')
    }
}

function isWinner(){
    if (plyScore.textContent == '3') {
        alert('Player wins this game!')
        plyScore.textContent = '0';
        cmpScore.textContent = '0';
    }
    if (cmpScore.textContent == '3') {
        alert('Computer wins this game!')
        plyScore.textContent = '0';
        cmpScore.textContent = '0';
    }

}

const weapon = document.querySelector('.weapon');

weapon.addEventListener('click', (e)=>{
    let target = e.target.id;

    if(target !== ''){
        playRound(target, getComputerChoice());
    }
})