const opts = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    //return 'Rock' || 'Paper' || 'Scissors'
    return opts[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
    //case insensitive
    //if tie call playRound()
    h1.textContent = `Player chooses: ${playerSelection}\nComputer chooses: ${computerSelection}`


    let winner;

    if(playerSelection == computerSelection) {
        h1.textContent = 'It\'s a tie!';
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

const h1 = document.querySelector('h1')
const plyScore = document.querySelector('.plyScore');
const cmpScore = document.querySelector('.cmpScore');

function updateScore(winner){
    if(winner == 'ply') {
        ++plyScore.textContent;
        h1.textContent += '\nPlayer wins this round!'
    } else {
        ++cmpScore.textContent;
        h1.textContent += '\nComputer wins this round!'
    }
}

function isWinner(){
    if (plyScore.textContent == '3') {
        h1.textContent += '\nPlayer wins this game!'
        togReset();
    }
    if (cmpScore.textContent == '3') {
        h1.textContent += '\nPlayer wins this game!'
        togReset();
    }


}

const weapon = document.querySelector('.weapon');

weapon.addEventListener('click', (e)=>{
    let target = e.target.id;

    if(target !== ''){
        playRound(target, getComputerChoice());
    }
})

const btns = document.querySelectorAll('button');

function togBtns(){
    btns.forEach(b=>b.disabled = b.disabled ? false : true)
}

const reset = document.createElement('button');
reset.textContent = 'RESET';

reset.addEventListener('click', ()=>{
    h1.textContent = 'ROCK PAPER SCISSORS'
    plyScore.textContent = '0';
    cmpScore.textContent = '0';
    togReset()
})

function togReset(){
    togBtns()
    if(document.body.contains(reset)){
        document.body.removeChild(reset)
    } else {
        document.body.appendChild(reset);
    }
}